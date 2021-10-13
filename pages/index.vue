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
          src: require('@/assets/illustrations/f1000-manuscript-2021.png'),
          heading: 'The initial FAIRtracks paper has been published!',
          subHeading:
            'Apr. 1, 2021: The initial paper on FAIRtracks has been published by F1000Research. ' +
            'The paper describes the challenges met when trying to FAIRify metadata of genome browser datasets ' +
            '(genomic tracks) and discuss how the FAIRtracks ecosystem aim to overcome these challenges. ' +
            'Also an interesting read in light of general FAIR issues.',
          href: 'https://f1000research.com/articles/10-268',
          sideBySide: true,
          cropImgBottom: true,
        },
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
