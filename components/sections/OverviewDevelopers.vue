<template>
  <SectionsOverview
    :overview-header="overviewHeader"
    :overview-intro-text="overviewIntroText"
    :cards="cards"
    :background-color-state="true"
  />
</template>

<script>
export default {
  data() {
    return {
      overviewHeader: 'Developers',
      overviewIntroText:
        'Aliqua eu officia laboris minim ipsum aliquip cillum dolor aliqua minim Lorem. Sunt commodo duis Lorem do id. Fugiat et est sunt incididunt cupidatat consectetur amet reprehenderit consectetur. Eu commodo ea velit cupidatat est et aliqua minim ex velit nisi fugiat velit. Id qui do et cupidatat. Nisi duis qui duis ipsum.',
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
              itemTitle: 'Example1',
              itemDescription:
                'Velit culpa laborum nostrud incididunt cupidatat proident Lorem ut do eu est.',
            },
            {
              itemTitle: 'Example2',
              itemDescription:
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
