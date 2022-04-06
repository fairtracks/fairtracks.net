<template>
  <SectionsOverviewLayout
    :header="header"
    :intro-text="introText"
    :cards="cards"
    :dark-background="darkBackground"
  />
</template>

<script>
export default {
  props: {
    darkBackground: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      header: 'Overview for Developers',
      introText:
        'Aliqua eu officia laboris minim ipsum aliquip cillum dolor aliqua minim Lorem. Sunt ' +
        'commodo duis Lorem do id. Fugiat et est sunt incididunt cupidatat consectetur amet ' +
        'reprehenderit consectetur. Eu commodo ea velit cupidatat est et aliqua minim ex velit ' +
        'nisi fugiat velit. Id qui do et cupidatat. Nisi duis qui duis ipsum.',
      cards: [
        {
          title: 'Topics',
        },
        {
          title: 'Standards',
        },
        {
          title: 'Code',
          items: [
            {
              title: 'Example1',
              description:
                'Velit culpa laborum nostrud incididunt cupidatat proident Lorem ut do eu est.',
            },
            {
              title: 'Example2',
              description:
                'Velit culpa laborum nostrud incididunt cupidatat proident Lorem ut do eu est.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
