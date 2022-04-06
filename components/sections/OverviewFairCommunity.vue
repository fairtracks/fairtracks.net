<template>
  <SectionsOverviewLayout
    :header="header"
    :intro-text="introText"
    :cards="cards"
    :background-color-state="false"
  />
</template>

<script>
export default {
  data() {
    return {
      header: 'Overview for the FAIR community',
      introText:
        'Aliqua eu officia laboris minim ipsum aliquip cillum dolor aliqua minim Lorem. Sunt ' +
        'commodo duis Lorem do id. Fugiat et est sunt incididunt cupidatat consectetur amet ' +
        'reprehenderit consectetur. Eu commodo ea velit cupidatat est et aliqua minim ex velit ' +
        'nisi fugiat velit. Id qui do et cupidatat. Nisi duis qui duis ipsum.',
      cards: [
        {
          title: 'Standards',
          items: [
            {
              title: 'Standard A',
              description:
                'Velit culpa laborum nostrud incididunt cupidatat proident Lorem ut do eu est.',
            },
            {
              title: 'Standard B',
              description:
                'Velit culpa laborum nostrud incididunt cupidatat proident Lorem ut do eu est.',
            },
          ],
        },
        {
          title: 'Services',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
