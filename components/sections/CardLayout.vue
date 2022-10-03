<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" lg="9" xl="10">
      <v-row>
        <v-col
          v-for="(post, index) in posts"
          v-show="filteredPostsIndexes.has(index)"
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
          <v-chip-group multiple column active-class="error--text">
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
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentId: 'sections-materials-layout',
      activeCategory: 'all',
      selectedTags: [],
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
    filteredPostsIndexes() {
      const indexes = new Set()
      this.filteredPosts.forEach((post, index) => {
        if (post.index !== undefined) {
          indexes.add(post.index)
        } else {
          indexes.add(index)
        }
      })
      return indexes
    },
  },
  methods: {
    filteredPostsByCategory() {
      if (this.activeCategory === 'all') {
        return this.posts
      }
      const postsToShow = []
      this.posts.forEach((post, index) => {
        post.index = index
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
