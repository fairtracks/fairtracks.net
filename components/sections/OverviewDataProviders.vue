<template>
  <SectionsOverviewLayout
    :section-id="sectionId"
    :section-title="sectionTitle"
    :intro-text="introText"
    :reference-lists="referenceLists"
    :reference-store="referenceStore"
  />
</template>

<script>
export default {
  data() {
    return {
      sectionId: 'data-providers',
      sectionTitle: 'Overview for Data Providers/Stewards',
      introText: 'Some text. **Markdown** is supported.',
      referenceLists: [
        {
          header: 'Relevant topics',
          references: [
            {
              id: 's07-fairification',
              description: 'Some text',
            },
          ],
        },
        {
          header: 'Relevant services',
          references: [
            {
              id: 's07-fairification',
              description: 'Some text',
            },
          ],
        },
        {
          header: 'Relevant standards',
          references: [
            {
              id: 's07-fairification',
              description: 'Some text',
            },
          ],
        },
        {
          header: 'Relevant material',
          references: [
            {
              id: 's07-fairification',
              description: 'Some text',
            },
          ],
        },
      ],
      referenceStore: {
        's07-fairification': {
          title: 'Standards for Track Metadata',
          to: '/topics#s07-fairification',
        },
      },
    }
  },
}
</script>
