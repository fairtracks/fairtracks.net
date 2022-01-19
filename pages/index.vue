<template>
  <section id="home">
    <SectionsCarouselLayout :carousels-data="carouselsData" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          img: this.$getImageAssetObject(
            'images',
            'media',
            'new-rirs-2021.jpeg'
          ),
          heading: 'FAIRtracks: Recommended by ELIXIR',
          subHeading:
            'The FAIRtracks ecosystem has been selected as one of ' +
            'four new "Recommended Interoperability Resources" in 2021 by ELIXIR Europe!',
          href: 'https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources',
          topToBottomImg: true,
          leftToRightImg: true,
        },
        {
          img: this.$getImageAssetObject(
            'images',
            'media',
            'f1000-blog-post-ad.png'
          ),
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
          img: this.$getImageAssetObject(
            'images',
            'media',
            'FAIRtracks-survey-ad-webpage.png'
          ),
          heading: 'Help us shape the first community workshop!',
          subHeading:
            'October 2021: We plan to host an online workshop together with the ELIXIR Interoperability ' +
            'Platform soon. We want to get in touch with ' +
            'potential participants to receive ideas on its contents. ' +
            'Please fill out our "Survey of community interest"!',
          href: 'https://fairtracks.net/survey',
          topToBottomImg: false,
          leftToRightImg: true,
        },
        {
          img: this.$getImageAssetObject(
            'images',
            'materials',
            'f1000-manuscript-2021.png'
          ),
          heading: 'The FAIRtracks paper has been published!',
          subHeading:
            'April, 2021: The FAIRtracks paper has been published by F1000Research. ' +
            'The paper describes particular and general challenges when trying to FAIRify metadata of genomic tracks ' +
            'and discuss how the FAIRtracks ecosystem can help. ',
          href: 'https://f1000research.com/articles/10-268',
          topToBottomImg: true,
          leftToRightImg: false,
        },
      ],
    }
  },
}
</script>
