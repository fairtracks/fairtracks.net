<template>
  <section id="intro">
    <v-row no-gutters align="center">
      <v-col cols="12" lg="6" class="pt-8 pa-0">
        <v-responsive class="mx-auto text-center" max-width="600">
          <v-avatar color="primary" size="70" class="mb-8">
            <v-icon x-large dark>{{ mdiWeb }}</v-icon>
          </v-avatar>
          <UiMainTitle :title="title" :subtitle="subtitle" :ingress="ingress" scale-down-at-sm />
        </v-responsive>
      </v-col>
      <v-col cols="12" lg="6" class="pt-8 pb-0">
        <div
          class="thin-border"
          :style="`border-color: ${
            $vuetify.theme.dark ? 'var(--v-primary-lighten1)' : 'var(--secondary)'
          }`"
        >
          <v-responsive
            height="40"
            width="100%"
            class="ma-0 px-0"
            :class="$vuetify.theme.dark ? 'primary lighten-1' : 'secondary'"
          >
            <v-overlay absolute opacity="0" z-index="3">
              <h5 class="text-h5 font-weight-black text-center">News</h5>
            </v-overlay>
          </v-responsive>
          <SectionsCarouselLayout :slides-data="newsSlides" carousel-id="news" height="500px" />
        </div>
      </v-col>
    </v-row>

    <v-row class="py-8" justify="space-around">
      <v-col v-for="card in cards" :key="card.title" cols="12" lg="4" md="6" class="pa-4">
        <v-responsive max-width="500px" class="mx-auto">
          <v-row no-gutters justify="space-between" class="px-4 px-lg-8">
            <v-col :cols="card.callout ? 10 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle" />
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                />
                <p v-html="card.text" />
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <v-row no-gutters justify="end">
                <span
                  class="text-h3 text-right font-weight-bold grey--text"
                  :style="`opacity: ${$vuetify.theme.dark ? '0.5' : '0.2'}`"
                  >{{ card.callout }}
                </span></v-row
              >
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiWeb } from '@mdi/js'

export default {
  data() {
    return {
      mdiWeb,
      title: 'The FAIRtracks ecosystem',
      subtitle: '– Hoards of genomic track data at your fingertips',
      ingress:
        'In the spirit of Open Science, the FAIRtracks ecosystem provides ' +
        'technical solutions for the abundance of genome browser track ' +
        'files ("genomic tracks") to become "Findable, Accessible, ' +
        'Interoperable, and Reusable ([FAIR](https://www.go-fair.org/fair-principles/)) ' +
        'in new research contexts.',
      cards: [
        {
          title: 'Bridging the data gaps',
          subtitle: 'Community building',
          text:
            'We aim to connect: ' +
            '<p><ul>' +
            '<li>data producers</li>' +
            '<li>biocurators</li>' +
            '<li>tool developers</li>' +
            '<li>the FAIR community</li>' +
            '<li>researchers/data analysts</li>' +
            '<li>...and other interested parties</li></ul></p>' +
            'Together we can mobilize the power of genomic track data and metadata at the ' +
            'fingertips of the researchers / bioinformaticians that are the target end users.',
          callout: '01',
        },
        {
          title: 'Quality metadata and services',
          subtitle: 'Technology',
          text:
            'Working in concert with the ' +
            '<a href="https://github.com/fairtracks/fairtracks_standard#readme">FAIRtracks ' +
            'draft standard</a> for metadata of genomic tracks, we have built an ' +
            '<nuxt-link to="/services"> ecosystem of services</nuxt-link> to interface with ' +
            'track metadata: ' +
            '<p><ul>' +
            '<li><a href="https://github.com/fairtracks/fairtracks_augment#readme">Metadata augmentation</li>' +
            '<li><a href="https://github.com/fairtracks/fairtracks_validator#readme">Metadata validation</li>' +
            '<li><a href="https://trackfind.elixir.no">Precision search</li>' +
            '<li><a href="/services">...and more</li>' +
            '</ul></p>',
          callout: '02',
        },
        {
          title: 'Endorsed by ELIXIR',
          subtitle: 'Organizational backing',
          text:
            '<p>The FAIRtracks ecosystem has been developed and is being provided as p' +
            'of the national Service Delivery Plans by ' +
            '<a href="https://elixir.no/">ELIXIR Norway</a> and' +
            '<a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>' +
            ', and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry ' +
            'group</a> at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p>' +
            '<p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a ' +
            '<a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended ' +
            'Interoperability Resource (RIR)</a>.</p>',
          callout: '03',
        },
      ],
      newsSlides: [
        {
          img: this.$getImageAssetObject('images', 'media', 'new-rirs-2021.jpeg'),
          heading: 'FAIRtracks: Recommended by ELIXIR',
          subHeading:
            'The FAIRtracks ecosystem has been selected as one of ' +
            'four new "Recommended Interoperability Resources" in 2021 by ELIXIR Europe!',
          href: 'https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources',
          topToBottomImg: true,
          leftToRightImg: true,
        },
        {
          img: this.$getImageAssetObject('images', 'media', 'f1000-blog-post-ad.png'),
          heading: 'FAIRtracks featured in the F1000Research blog',
          subHeading:
            'December 2021: FAIRtracks has been featured in a blog post on the F100Research' +
            'journal web site! The blog post lays out the vision of the FAIRtracks ' +
            'project and makes an appeal to the community for involvement.',
          href: 'https://blog.f1000.com/2021/12/07/fairtracks/',
          topToBottomImg: true,
          leftToRightImg: false,
        },
        {
          img: this.$getImageAssetObject('images', 'media', 'FAIRtracks-survey-ad-webpage.png'),
          heading: 'Help us shape the first community workshop',
          subHeading:
            'October 2021: We plan to host an online workshop together with the ELIXIR ' +
            'Interoperability Platform soon. We want to get in touch with ' +
            'potential participants to receive ideas on its contents. ' +
            'Please fill out our "Survey of community interest"!',
          href: 'https://fairtracks.net/survey',
          topToBottomImg: false,
          leftToRightImg: true,
        },
        {
          img: this.$getImageAssetObject('materials', 'previews', 'f1000-manuscript-2021.png'),
          heading: 'The FAIRtracks paper has been published!',
          subHeading:
            'April, 2021: The FAIRtracks paper has been published by F1000Research. ' +
            'The paper describes particular and general challenges when trying to FAIRify ' +
            'metadata of genomic tracks and discuss how the FAIRtracks ecosystem can help. ',
          href: 'https://f1000research.com/articles/10-268',
          topToBottomImg: true,
          leftToRightImg: false,
        },
      ],
    }
  },
}
</script>
