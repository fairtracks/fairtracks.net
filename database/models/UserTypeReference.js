import { Model } from '@vuex-orm/core'
import GeneralDescription from '~/database/models/GeneralDescription'

class UserTypeReference extends Model {
  static fields() {
    return {
      id: this.string(''),
      userTypeId: this.string(''),
      customDescription: this.string(''),
      generalDescription: this.belongsTo(GeneralDescription, 'id'),
    }
  }
}

UserTypeReference.entity = 'user-type-reference'
UserTypeReference.primaryKey = ['userTypeId', 'id']

export default UserTypeReference
