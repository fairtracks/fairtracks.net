<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsCarousel :carousels-data="carouselsData" />
        <SectionsIntro />
        <SectionsCalloutBlock />
        <SectionsFeatures />
        <SectionsBrands />
        <SectionsTestimonials />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: require('@/assets/illustrations/new_rirs_2021.jpeg'),
          heading: 'FAIRtracks: Recommended by ELIXIR',
          subHeading:
            'Feb. 15, 2021: The FAIRtracks ecosystem is selected as one of ' +
            'four new "Recommended Interoperability Resources by ELIXIR Europe!"',
          href: 'https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources',
          sideBySide: false,
          cropImgBottom: false,
        },
      ],
    }
  },
}
</script>
