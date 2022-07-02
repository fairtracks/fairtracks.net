import { Model } from '@vuex-orm/core'

class UserTypeRelevantSectionRef extends Model {
  static fields() {
    return {
      userTypeId: this.string(''),
      sectionId: this.string(''),
      customDescription: this.string(''),
    }
  }
}

UserTypeRelevantSectionRef.entity = 'user-type-relevant-section-refs'
UserTypeRelevantSectionRef.primaryKey = ['userTypeId', 'sectionId']

export default UserTypeRelevantSectionRef
