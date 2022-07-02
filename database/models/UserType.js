import { Model } from '@vuex-orm/core'
import Section from '~/database/models/Section'
import UserTypeRelevantSectionRef from '~/database/models/UserTypeRelevantSectionRef'

class UserType extends Model {
  static fields() {
    return {
      id: this.string(''),
      sections: this.belongsToMany(
        Section,
        UserTypeRelevantSectionRef,
        'userTypeId',
        'sectionId'
      ).as('userTypeRelevance'),
    }
  }
}
UserType.entity = 'user-types'

export default UserType
