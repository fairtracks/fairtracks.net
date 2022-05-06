<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" lg="9" xl="10">
      <v-row>
        <v-col
          v-for="(post, index) in filteredPosts"
          id="posts"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <UiMaterialsCard :post="post" />
        </v-col>
      </v-row>
    </v-col>
    <v-col id="post-categories" cols="12" xl="2" lg="3" md="4" sm="4">
      <v-card elevation="1" class="mb-4">
        <v-card-title class="justify-center">Categories</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item-group mandatory>
            <v-list-item v-for="(category, index) in categories" :key="index">
              <v-list-item-content @click="setActiveCategory(category)">
                <v-list-item-title
                  style="text-transform: capitalize"
                  v-text="category"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card elevation="1">
        <v-card-title class="justify-center">Tags</v-card-title>
        <v-divider></v-divider>
        <div class="mx-3 d-flex justify-space-around">
          <v-chip-group multiple column>
            <v-chip v-for="tag in tagsList" :key="tag" @click="addRemoveTagToList(tag)">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable vue/max-len */
export default {
  data() {
    return {
      activeCategory: 'all',
      selectedTags: [],
      posts: [
        {
          category: 'publication',
          tags: ['Elixir', 'Norway'],
          previewImg: 'f1000-manuscript-2021.png',
          title: 'Recommendations for the FAIRification of genomic track metadata',
          date: '2021-04-21',
          link: 'https://f1000research.com/articles/10-268/v1',
          external: true,
          description:
            'The FAIRtracks paper has been published by F1000Research. The paper describes ' +
            'particular and general challenges when trying to FAIRify metadata of genomic ' +
            'tracks and discuss how the FAIRtracks ecosystem can help. Read our article to ' +
            'learn about how FAIRness of metadata used for genomic tracks. The article ' +
            'was published on 1 April 2021',
        },
        {
          category: 'publication',
          tags: ['UK', 'FAIR'],
          previewImg: 'kanduri_colocalisation_2019.png',
          title:
            'Colocalization analyses of genomic elements: approaches, recommendations and ' +
            'challenges',
          date: '2018-10-11',
          link: 'https://academic.oup.com/bioinformatics/article/35/9/1615/5126923',
          external: true,
          description:
            'The paper discusses different approaches and provide recommendations for ' +
            'performing genomic colocalization analysis, and address the challenges to ' +
            'obtain a robust and biologically meaningful interpretation of genomic region ' +
            'set data.',
        },
        {
          category: 'publication',
          previewImg: 'simovski_coloc-stats_2018.png',
          tags: ['Genetics', 'FAIR'],
          title:
            'Coloc-stats: a unified web interface to perform colocalization analysis of ' +
            'genomic features',
          date: '2018-06-05',
          link: 'https://academic.oup.com/nar/article/46/W1/W186/5033159',
          external: true,
          description:
            'Coloc-stats provides a unified interface to perform colocalization analysis across ' +
            'various analytical methods and method-specific options (e.g. colocalization' +
            'measures, resolution, null models). Coloc-stats is freely available ' +
            'at https://hyperbrowser.uio.no/coloc-stats/.',
        },
        {
          category: 'publication',
          previewImg: 'simovski_gsuite-hyperbrowser_2017.png',
          title:
            'GSuite HyperBrowser: integrative analysis of dataset collections across the ' +
            'genome and epigenome',
          tags: ['Genomics', 'Tracks'],
          date: '2017-04-27',
          link: 'https://academic.oup.com/gigascience/article/6/7/gix032/3777985',
          external: true,
          description:
            'GSuite HyperBrowser is an open-source software system that represents a first comprehensive solution for integrative analysis of track collections across the genome and epigenome. The software is available at: https://hyperbrowser.uio.no',
        },
        {
          category: 'publication',
          previewImg: 'sandve_genomic-hyperBrowser_2013.png',
          title: 'The Genomic HyperBrowser: an analysis web server for genome-scale data',
          date: '2013-04-30',
          link: 'https://academic.oup.com/nar/article/41/W1/W133/1095828',
          external: true,
          description:
            'The Genomic HyperBrowser (http://hyperbrowser.uio.no) is an open-ended web server for the analysis of genomic track data. Through the provision of several highly customizable components for processing and statistical analysis of genomic tracks, the HyperBrowser opens for a range of genomic investigations, related to, e.g., gene regulation, disease association or epigenetic modifications of the genome.',
        },
        {
          category: 'publication',
          previewImg: 'gundersen_track-types_2011.png',
          title: 'Identifying elemental genomic track types and representing them uniformly',
          date: '2011-12-30',
          link: 'https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-12-494',
          external: true,
          description: 'Add description.',
        },
        {
          category: 'publication',
          previewImg: 'sandve_genomic-hyperBrowser_2010.png',
          title: 'The Genomic HyperBrowser: inferential genomics at the sequence level',

          date: '2010-12-23',
          link: 'https://genomebiology.biomedcentral.com/articles/10.1186/gb-2010-11-12-r121',
          external: true,
          description:
            'Seminal study about the Genomic HyperBrowser; the paper provides a ' +
            'collection of generic biological investigations that query pairwise ' +
            'relations between tracks, represented as mathematical objects, ' +
            'along the genome.',
        },
        {
          category: 'publication',
          previewImg: 'BLUEPRINT_Cell_2016.png',
          title: 'The BLUEPRINT Data Analysis Portal',
          date: '2016-11-15',
          link: 'https://doi.org/10.1016/j.cels.2016.10.021',
          external: true,
          description: 'Add description.',
        },
        {
          category: 'blog',
          previewImg: 'f1000-fairtracks-blog-full.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-1',
          link: 'https://blog.f1000.com/2021/12/07/fairtracks/',
          external: true,
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web ' +
            'site! The blog post lays out the vision of the FAIRtracks project and makes ' +
            'an appeal to the community for involvement.',
        },
        {
          category: 'poster',
          previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
          title: 'FAIRtracks presented at ELIXIR All-Hands 2019',
          link: this.$getNonImageAssetPath(
            'materials',
            'posters',
            'Gundersen_Elixir_all_hands_2019_FAIRification.pdf'
          ),
          external: false,
        },
        {
          category: 'poster',
          previewImg: 'Kompova_GCC2019_TrackFind.png',
          title: 'TrackFind poster, Galaxy Community Conference 2019',
          link: this.$getNonImageAssetPath('materials', 'posters', 'Kompova_GCC2019_TrackFind.pdf'),
          external: false,
        },
        {
          category: 'poster',
          previewImg: 'Gundersen_Elixir_all_hands_2018_HyperBrowser.png',
          title: 'The Genomic HyperBrowser, ELIXIR All-Hands 2018',
          link: this.$getNonImageAssetPath(
            'materials',
            'posters',
            'Gundersen_Elixir_all_hands_2018_HyperBrowser.pdf'
          ),
          external: false,
        },
        {
          category: 'poster',
          previewImg: 'Gundersen_GCCBOSC_2018_Coloc_stats.png',
          title: 'Coloc-stats poster, Galaxy Community Conference 2018',
          link: this.$getNonImageAssetPath(
            'materials',
            'posters',
            'Gundersen_GCCBOSC_2018_Coloc_stats.pdf'
          ),
          external: false,
        },
        {
          category: 'poster',
          previewImg: 'Gundersen_Elixir_all_hands_2017_GTrack.png',
          title: 'The GTrack ecosystem poster, ELIXIR All-Hands 2017',
          link: 'https://doi.org/10.7490/f1000research.1115292.1',
          external: true,
        },
        {
          category: 'presentation',
          previewImg: 'Gundersen_Elixir_all_hands_2019_FAIRification.png',
          title: 'ELIXIR Webinar on FAIRification of Genomic Tracks',
          link: 'https://elixir-europe.org/events/elixir-webinar-fairification-genomic-tracks',
          external: true,
        },
      ],
    }
  },
  computed: {
    tagsList() {
      return this.posts
        .reduce((acc, post) => {
          return acc.concat(post.tags)
        }, [])
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .slice(0, -1)
    },
    categories() {
      const selections = this.posts.map((post) => post.category).sort()
      selections.unshift('all')
      return [...new Set(selections)]
    },
    filteredPosts() {
      return this.filteredPostsByCategory().filter((post) =>
        this.filteredPostsByTag().includes(post)
      )
    },
  },
  methods: {
    filteredPostsByCategory() {
      if (this.activeCategory === 'all') {
        return this.posts
      }
      const postsToShow = []
      this.posts.forEach((post) => {
        if (post.category === this.activeCategory) {
          postsToShow.push(post)
        }
      })
      return postsToShow.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    filteredPostsByTag() {
      if (this.selectedTags.length === 0) {
        return this.posts
      }
      const postsToShow = []
      this.posts.forEach((post) => {
        if ('tags' in post) {
          if (this.selectedTags.every((tag) => post.tags.includes(tag))) {
            postsToShow.push(post)
          }
        }
      })
      return postsToShow.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
    setActiveCategory(category) {
      this.activeCategory = category
    },
    addRemoveTagToList(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }
    },
  },
}
</script>
