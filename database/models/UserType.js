import { Model } from '@vuex-orm/core'
import UserTypeReference from '~/database/models/UserTypeReference'

class UserType extends Model {
  static fields() {
    return {
      id: this.string(''),
      references: this.hasMany(UserTypeReference, 'userTypeId'),
    }
  }
}
UserType.entity = 'user-type'

export default UserType
