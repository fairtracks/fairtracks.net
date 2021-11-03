<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsCarousel :carousels-data="carouselsData" />
        <SectionsIntro />
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
          src: require('@/assets/illustrations/new-rirs-2021.jpeg'),
          heading: 'FAIRtracks: Recommended by ELIXIR',
          subHeading:
            'The FAIRtracks ecosystem has been selected as one of ' +
            'four new "Recommended Interoperability Resources" in 2021 by ELIXIR Europe!',
          href: 'https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources',
          topToBottomImg: true,
          leftToRightImg: true,
        },
        {
          src: require('@/assets/illustrations/FAIRtracks-survey-ad-webpage.png'),
          heading: 'Help us shape the first community workshop!',
          subHeading:
            'October 2021: We plan to host an online workshop in collaboration with the ELIXIR Interoperability ' +
            'Platform in late autumn 2021. We are very interested in getting in touch with ' +
            'potential participants to receive ideas on its contents. ' +
            'Please fill out our "Survey of community interest"!',
          href: 'https://fairtracks.net/survey',
          topToBottomImg: false,
          leftToRightImg: true,
        },
        {
          src: require('@/assets/illustrations/f1000-manuscript-2021.png'),
          heading: 'The initial FAIRtracks paper has been published!',
          subHeading:
            'Apr. 1, 2021: The initial paper on FAIRtracks has been published by F1000Research. ' +
            'The paper describes the challenges met when trying to FAIRify metadata of genome browser datasets ' +
            '(genomic tracks) and discuss how the FAIRtracks ecosystem aim to overcome these challenges. ' +
            'Also an interesting read in light of general FAIR issues.',
          href: 'https://f1000research.com/articles/10-268',
          topToBottomImg: true,
          leftToRightImg: false,
        },
      ],
    }
  },
}
</script>
