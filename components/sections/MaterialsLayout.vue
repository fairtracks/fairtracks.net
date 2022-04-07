<template>
  <v-container id="materials-page" fill-height>
    <v-row class="d-flex flex-row ma-3">
      <v-col cols="12" sm="12" md="9" lg="10">
        <v-row>
          <v-col v-for="(post, index) in filteredPosts" id="posts" :key="index" md="4">
            <UiMaterialsCard :post="post" />
          </v-col>
        </v-row>
      </v-col>
      <v-col id="post-categories" cols="12" sm="12" md="3" lg="2">
        <v-card elevation="1" max-width="420px">
          <v-card-title class="justify-center">Categories</v-card-title>
          <v-card-text v-for="(category, index) in categories" :key="index">
            <v-checkbox
              v-model="checkedCategories"
              :label="category"
              :value="category"
              hide-details
              class="checkbox shrink mr-0 mt-0 mb-0"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable vue/max-len */
export default {
  data() {
    return {
      checkedCategories: [
        'blog post',
        'publication',
        'poster',
        'presentation',
        'Workshop',
        'media',
      ],
      posts: [
        {
          category: 'blog post',
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-05',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'publication',
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-03',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'poster',
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-02',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'presentation',
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-01',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'blog post',
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-04',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
      ],
    }
  },
  computed: {
    categories() {
      const selections = this.posts.map((post) => post.category)
      return [...new Set(selections)]
    },
    filteredPosts() {
      const postsToShow = []
      this.posts.forEach((post) => {
        for (const category of this.checkedCategories) {
          if (post.category === category) {
            postsToShow.push(post)
          }
        }
      })
      return postsToShow.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    },
  },
}
</script>

<style scoped>
#materials-page {
  display: flex;
  justify-content: center;
}
</style>
