import { Model } from '@vuex-orm/core'

class GeneralDescription extends Model {
  static fields() {
    return {
      id: this.uid(),
      page: this.string(''),
      slug: this.string(''),
      title: this.string(''),
      generalDescription: this.string(''),
    }
  }
}
GeneralDescription.entity = 'general-description'

export default GeneralDescription
