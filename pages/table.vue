<template>
  <UiDataTable
    :table-title="tableTitle"
    :table-headers="tableHeaders"
    :table-data="tableData"
  ></UiDataTable>
</template>

<script>
export default {
  data() {
    return {
      tableTitle: 'Test Table',
      tableHeaders: [
        {
          text: 'Database',
          align: 'start',
          sortable: true,
          value: 'database',
        },
        { text: 'Domain', value: 'domains' },
        { text: 'Organism(s)', value: 'organisms' },
        { text: 'Assay(s)', value: 'assays' },
        { text: 'organisation', value: 'organisation' },
        { text: 'notes', value: 'notes' },
        { text: '', value: 'data-table-expand' },
      ],
      tableData: [
        {
          database: 'Roadmap Epigenomics',
          domains: ['Epigenomics', 'Stem cells', 'primary ex vivo tissues'],
          organisms: ['H. sapiens'],
          assays: [
            'DNA methylation',
            'histone modifications',
            'chromatin accessibility',
            'small RNA transcripts',
          ],
          organisation: 'Roadmap Epigenomics Mapping Consortium (NIH)',
          notes: '',
        },
        {
          database: 'UniBind',
          domains: ['Epigenomics'],
          organisms: [
            'A. thaliana',
            'C. elegans',
            'D. rerio',
            'D. melanogaster',
            'H. sapiens',
            'M. musculus',
            'R. novergicus',
            'S. cerevisiae',
            'S. pombe',
          ],
          assays: ['transcription factor binding'],
          organisation: 'Unibind group',
          notes: '',
        },
      ],
    }
  },
}
</script>

