<template>
  <div :class="`${spaceOutsideAbove ? 'pt-6' : 'pt-2'} ${spaceOutsideBelow ? 'pb-8' : 'pb-4'}`">
    <div
      class="fairtracks-content"
      :class="`${logo === 'fairtracks' ? 'fairtracks content' : 'omnipy content'} ${
        $vuetify.theme.dark ? 'dark' : 'light'
      } ${spaceInsideAbove ? 'pt-6' : 'pt-2'} ${spaceInsideBelow ? 'pb-6' : 'pb-2'}`"
      :style="cssVars"
    >
      <v-responsive v-if="logo === 'fairtracks'" max-width="180" min-width="180" class="ma-4 mt-2">
        <UiSmartImg
          :image-asset="logoAssetObjectFairtracks"
          img-height="57"
          img-width="180"
          not-responsive
        />
      </v-responsive>
      <v-responsive v-if="logo === 'omnipy'" max-width="150" min-width="150" class="ma-4 mb-6">
        <UiSmartImg
          :image-asset="logoAssetObjectOmnipy"
          img-height="54"
          img-width="180"
          not-responsive
        />
      </v-responsive>
      <slot />
    </div>
  </div>
</template>

<script>
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'
import LateRenderer from '~/mixins/late-renderer'

export default {
  mixins: [createRgbVarsForThemes, LateRenderer],
  props: {
    logo: {
      type: String,
      default: 'fairtracks',
    },
    spaceOutsideAbove: {
      type: Boolean,
      default: false,
    },
    spaceOutsideBelow: {
      type: Boolean,
      default: false,
    },
    spaceInsideAbove: {
      type: Boolean,
      default: false,
    },
    spaceInsideBelow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      componentId: 'ui-fairtracks-content',
    }
  },
  computed: {
    logoAssetObjectFairtracks() {
      if (this.logo === 'fairtracks') {
        if (this.$vuetify.theme.dark) {
          return this.$getImageAssetObject(
            'images',
            'logos',
            'FAIRtracks-logo-light-white-180-[fixed].png'
          )
        } else {
          return this.$getImageAssetObject(
            'images',
            'logos',
            'FAIRtracks-logo-transparent-180-[fixed].png'
          )
        }
      } else {
        return undefined
      }
    },
    logoAssetObjectOmnipy() {
      if (this.logo === 'omnipy') {
        if (this.$vuetify.theme.dark) {
          return this.$getImageAssetObject('images', 'logos', 'omnipy-logo-white-180-[fixed].png')
        } else {
          return this.$getImageAssetObject('images', 'logos', 'omnipy-logo-180-[fixed].png')
        }
      } else {
        return undefined
      }
    },
  },
}
</script>

<style>
.nuxt-content .fairtracks.light {
  background-color: rgba(var(--v-primary-rgb), 0.1);
}

.nuxt-content .fairtracks.dark {
  background-color: var(--v-primary-base);
}

.nuxt-content .omnipy.light {
  background-color: rgba(var(--v-secondary-rgb), 0.05);
}

.nuxt-content .omnipy.dark {
  background-color: var(--v-secondary-lighten1);
}

.nuxt-content .content {
  padding: 16px;
}

.nuxt-content .content > p {
  margin: 16px;
}

/*.nuxt-content .content > p:last-child {*/
/*  margin-bottom: 0px;*/
/*}*/
</style>
