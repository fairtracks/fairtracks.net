<template>
  <SectionsPageContainer
    :page-header="pageHeader"
    :page-header-images="pageHeaderImages"
  >
    <v-row v-show="!shown">
      <v-col class="pa-8">
        <v-btn
          color="primary"
          absolute
          class="pa-20"
          :style="{ left: '50%', transform: 'translateX(-50%)' }"
          @click="
            shown = !shown
            playmusic()
          "
        >
          Click me for a surprise
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-show="shown" no-gutters>
      <v-col cols="12" md="6" align-self="center">
        <UiSmartImg
          max-height="512"
          max-width="512"
          :image-asset="
            $getImageAssetObject('images', 'team', 'sveinung-gundersen-big.png')
          "
        >
        </UiSmartImg>
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <div class="pa-lg-16 pa-md-10 px-4 py-16">
          <h2 class="text-h3 text-center font-weight-black">S. Gundersen</h2>
        </div>
      </v-col>
    </v-row>
    <v-row v-show="shown" no-gutters class="flex-row-reverse">
      <v-col cols="12" md="6" align-self="center">
        <UiSmartImg
          max-height="405"
          max-width="612"
          :image-asset="
            $getImageAssetObject('images', 'team', 'fairtracks-team.png')
          "
        ></UiSmartImg>
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <div class="pa-lg-16 pa-md-10 px-4 py-16">
          <h2 class="text-h3 text-center font-weight-black">
            ...and the FAIRtracks team
          </h2>
        </div>
      </v-col>
    </v-row>
  </SectionsPageContainer>
</template>

<script>
export default {
  data() {
    return {
      shown: false,
      playmusic() {
        const audio = new Audio(
          'https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream'
        )
        audio.play()
      },
      pageHeader: 'Presenting',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'S.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LVS.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Presenting',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>
