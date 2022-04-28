<template>
  <v-container id="materials-page" fill-height>
    <v-row class="d-flex flex-row">
      <v-col cols="12" sm="12" md="9">
        <v-row>
          <v-col v-for="(post, index) in filteredPosts" id="posts" :key="index" md="6" lg="4">
            <UiMaterialsCard :post="post" />
          </v-col>
        </v-row>
      </v-col>
      <v-col id="post-categories" cols="12" sm="12" md="3">
        <v-row>
          <v-container fluid>
            <v-card elevation="1">
              <v-card-title class="justify-center">Categories</v-card-title>
              <v-divider></v-divider>
              <v-container class="category-container">
                <button
                  class="category-btn"
                  :class="{ active: isActiveCategory('all') }"
                  @click="setActiveCategory('all')"
                >
                  All
                </button>
                <button
                  v-for="(category, index) in categories"
                  :key="index"
                  class="category-btn"
                  :class="{ active: isActiveCategory(category) }"
                  @click="setActiveCategory(category)"
                >
                  {{ category }}
                </button>
              </v-container>
            </v-card>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-card elevation="1">
              <v-card-title class="justify-center">Tags</v-card-title>
              <v-divider></v-divider>
              <v-container class="tag-container">
                <button
                  v-for="(tag, index) in tagsList"
                  :key="index"
                  class="tag-btn"
                  :class="{ active: isActiveTag(tag) }"
                  @click="addRemoveTagToList(tag)"
                >
                  {{ tag }}
                </button>
              </v-container>
            </v-card>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
          category: 'blog',
          tags: ['software', 'fairtracks'],
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-05',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'publication',
          tags: ['exilir', 'research', 'bioinformatics'],
          previewImg: 'f1000-blog-post-ad.png',
          title: 'FAIRtracks featured in F1000 Article',
          date: '2021-12-03',
          description:
            'FAIRtracks has been featured in a blog post on the F100Researchjournal web site! The blog post lays out the vision of the FAIRtracks project and makes an appeal to the community for involvement.\n',
        },
        {
          category: 'poster',
          tags: ['norway', 'bioinformatics'],
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
          category: 'blog',
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
    tagsList() {
      return this.posts
        .reduce((acc, post) => {
          return acc.concat(post.tags)
        }, [])
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .slice(0, -1)
    },
    categories() {
      const selections = this.posts.map((post) => post.category)
      return [...new Set(selections)]
    },
    filteredPosts() {
      // return intersection of filteredPostsByCategory and filteredPostsByTag
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
        for (const tag of this.selectedTags) {
          if ('tags' in post && post.tags.includes(tag)) {
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
      // add tag to list if it doesn't exist and remove if it does
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }
    },
    isActiveCategory(category) {
      return this.activeCategory === category
    },
    isActiveTag(tag) {
      return this.selectedTags.includes(tag)
    },
  },
}
</script>

<style scoped lang="scss">
#materials-page {
  display: flex;
  justify-content: center;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2px;
  padding: 2px;

  .tag-btn {
    border-radius: 10%;
    padding: 10px;
    margin: 1px;
    font-size: 14px;
    text-transform: capitalize;

    &:hover {
      background-color: #d7e8d1;
      color: black;
    }
  }
}
.active {
  background-color: #dec349;
  color: black;
}

.category-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  .category-btn {
    padding: 10px;
    margin: 1px;
    font-size: 14px;
    text-transform: capitalize;

    &:hover {
      background-color: #d7e8d1;
      color: black;
    }
  }
}
</style>
