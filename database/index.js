import { Database } from '@vuex-orm/core'
import UserType from '~/database/models/UserType'
import UserTypeReference from '~/database/models/UserTypeReference'
import GeneralDescription from '~/database/models/GeneralDescription'
import { DATA_G_GET_CONTENTS_BODY } from '~/store/data/constants'

export default {
  instance: () => {
    const database = new Database()

    database.register(UserType)
    database.register(UserTypeReference)
    database.register(GeneralDescription)

    return database
  },
  async init(store, { $loadMarkdownFiles, $content }) {
    // async init(store) {
    const generalDescriptions = await store.getters[DATA_G_GET_CONTENTS_BODY](
      'general-descriptions'
    )

    const removeNumbers = (id) => {
      return `${id.split('-')[0]}-${id.split('-').slice(2).join('-')}`
    }
    const allPagesFiles = await $loadMarkdownFiles('pages', $content, { deep: true })
    // console.log(
    //   allPagesFiles.markdownFiles.filter(
    //     (p) => removeNumbers(p.slug) === 'code-fairtracks-net'
    //   )[0].title
    // )
    // console.log(allPagesFiles.markdownFiles)

    generalDescriptions.map((o) =>
      Object.assign(o, {
        id: o.id,
        page: o.id.split('-')[0],
        slug: allPagesFiles.markdownFiles.filter((p) => removeNumbers(p.slug) === o.id)?.[0]?.slug,
        title: allPagesFiles.markdownFiles.filter((p) => removeNumbers(p.slug) === o.id)?.[0]
          ?.title,
      })
    )
    // console.log(generalDescriptions)
    GeneralDescription.create({ data: generalDescriptions })

    for (const userType of ['end-users', 'data-providers', 'developers', 'fair-community']) {
      const references = await store.getters[DATA_G_GET_CONTENTS_BODY](`references-${userType}`)
      references.map((o) =>
        Object.assign(o, {
          userTypeId: userType,
          generalDescriptionId: o.id,
        })
      )

      UserTypeReference.insert({ data: references })
      UserType.insert({ data: { id: userType, references } })
    }

    // console.log(Description.all())
    // const ret = UserType.query().with('references.generalDescription').all()
    // console.log(GeneralDescription.all())
    // console.log(ret[0].references[0])
  },
}
