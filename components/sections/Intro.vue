<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="600">
        <v-avatar color="primary" size="70" class="mb-8">
          <v-icon x-large dark>mdi-web</v-icon>
        </v-avatar>
        <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-7">
          The FAIRtracks ecosystem
        </h2>
        <h3 class="text-h5 text-md-h4 text-center font-weight-bold mb-7">
          – Hoards of genomic track data at your fingertips
        </h3>
        <p class="title font-weight-light">
          In the spirit of Open Science, the FAIRtracks ecosystem provides
          technical solutions for the abundance of genome browser track files
          ("genomic tracks") to become "Findable, Accessible, Interoperable, and
          Reusable"
          <a href="https://www.go-fair.org/fair-principles/"> (FAIR) </a>
          in new research contexts.
        </p>

        <p></p>
      </v-responsive>

      <v-row class="pt-12">
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
          class="pa-6"
        >
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle"></div>
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                ></h4>
                <p v-html="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 grey--text font-weight-bold pr-8"
                style="opacity: 0.1"
                >{{ card.callout }}</span
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
            'Together we can mobilise the power of genomic track data and metadata at the fingertips of ' +
            'the researchers / bioinformaticians that are the target end users.',
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
          subtitle: 'Organisational backing',
          text:
            '<p>The FAIRtracks ecosystem has been developed and is being provided as part of the national ' +
            'Service Delivery Plans by <a href="https://elixir.no/">ELIXIR Norway</a> and ' +
            '<a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>, ' +
            ' and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry group</a> ' +
            'at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p>' +
            '<p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a ' +
            '<a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended ' +
            'Interoperability Resource (RIR)</a>.</p>',
          callout: '03',
        },
      ],
    }
  },
}
</script>
