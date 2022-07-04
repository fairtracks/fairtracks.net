import { Database } from '@vuex-orm/core'
import UserType from '~/database/models/UserType'
import UserTypeRelevantSectionRef from '~/database/models/UserTypeRelevantSectionRef'
import Section from '~/database/models/Section'
import { DATA_G_GET_CONTENTS_BODY } from '~/store/data/constants'
import { MD_REG_G_GET_ALL_MARKDOWN_FILES } from '~/store/mdRegister'

export default {
  instance: () => {
    const database = new Database()

    database.register(UserType)
    database.register(UserTypeRelevantSectionRef)
    database.register(Section)

    return database
  },
  async init(store) {
    const sections = await store.getters[DATA_G_GET_CONTENTS_BODY](
      '/data/sections/sections-general-descriptions'
    )

    console.log('Building database...')

    const removeIndex = (orderedId) => {
      return `${orderedId.split('-')[0]}-${orderedId.split('-').slice(2).join('-')}`
    }

    const allPagesFiles = store.getters[MD_REG_G_GET_ALL_MARKDOWN_FILES]

    sections.map((section) =>
      Object.assign(section, {
        unorderedId: section.unorderedId,
        orderedId: allPagesFiles.filter(
          (mdFile) => removeIndex(mdFile.slug) === section.unorderedId
        )?.[0]?.slug,
        page: section.unorderedId.split('-')[0],
        title: allPagesFiles.filter(
          (mdFile) => removeIndex(mdFile.slug) === section.unorderedId
        )?.[0]?.title,
      })
    )
    Section.create({ data: sections })

    for (const userTypeId of ['end-users', 'data-providers', 'developers', 'fair-community']) {
      const relatedSectionsForUserType = await store.getters[DATA_G_GET_CONTENTS_BODY](
        `/data/sections/relevant-sections-for-usertypes/relevant-sections-for-${userTypeId}`
      )
      relatedSectionsForUserType.map((relatedSection) =>
        Object.assign(relatedSection, {
          userTypeId,
          sectionId: relatedSection.unorderedId,
          customDescription: relatedSection.customDescription,
        })
      )

      UserTypeRelevantSectionRef.insert({ data: relatedSectionsForUserType })
      UserType.insert({ data: { id: userTypeId } })
    }
  },
}
