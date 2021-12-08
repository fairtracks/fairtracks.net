import Vue from 'vue'

Vue.mixin({
  methods: {
    createAssetPath(type, page, img) {
      return require(`@/assets/${type}/${page}/${img}`)
    },
  },
})
