import { Model } from '@vuex-orm/core'

class Section extends Model {
  static fields() {
    return {
      unorderedId: this.string(''),
      orderedId: this.string(''),
      page: this.string(''),
      title: this.string(''),
      generalDescription: this.string(''),
    }
  }
}
Section.entity = 'sections'
Section.primaryKey = 'unorderedId'

export default Section
