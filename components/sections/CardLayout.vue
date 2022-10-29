<template>
  <v-row class="xs-only-flex-column-reverse">
    <v-col class="sm-only" sm="1" />
    <v-col class="vl-and-up-redefine-col-lg" cols="12" sm="6" md="8" lg="9" xl="10">
      <v-row>
        <v-col
          v-for="{ post, showPost } in allPostsWithDisplayStatus(posts, filteredPostIndexes)"
          v-show="showPost"
          :key="post.index"
          class="vl-and-up-redefine-col-lg"
          style="min-width: 300px"
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
        >
          <slot :post="post" />
        </v-col>
      </v-row>
    </v-col>
    <v-col
      id="post-categories"
      class="vl-and-up-redefine-col-lg"
      cols="12"
      sm="4"
      md="4"
      lg="3"
      xl="2"
    >
      <v-card outlined class="mb-6">
        <div
          class="subtitle font-weight-black text-uppercase text-center mt-4"
          v-text="categoryTitle"
        />
        <v-list
          dense
          class="simplebutton"
          :class="$vuetify.theme.dark ? null : 'highlight-background'"
        >
          <v-list-item-group v-model="selectedCategory" mandatory>
            <v-list-item
              v-for="category in allCategories"
              :key="category"
              :value="category"
              :style="cssVars"
            >
              <v-list-item-content>
                <v-list-item-title v-text="category"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card outlined class="mb-6">
        <div class="subtitle font-weight-black text-uppercase text-center mt-4">Tags</div>
        <v-card-text>
          <v-chip-group
            v-model="selectedTags"
            class="simplebutton"
            :class="$vuetify.theme.dark ? null : 'highlight-background'"
            multiple
            column
          >
            <v-chip
              v-for="tag in allTags"
              :key="tag"
              :value="tag"
              :ripple="false"
              @keyup.enter="toggleTag(tag)"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="sm-only" sm="1" />
  </v-row>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'

const ALL_CATEGORIES_TITLE = 'All'

const USER_TYPES = [
  'FAIR community',
  'Developers',
  'Data providers/stewards',
  'Analytical end users',
]

export default {
  mixins: [MarkdownSupport, createRgbVarsForThemes],

  props: {
    markdownFilesDir: {
      type: String,
      required: true,
    },
    categoryTitle: {
      type: String,
      default: 'Categories',
    },
    sortCategories: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      path: this.$route.path,
      componentId: 'sections-card-layout',
      selectedCategory: ALL_CATEGORIES_TITLE,
      selectedTags: [],
      posts: [],
      allTags: [],
      allCategories: [],
    }
  },

  computed: {
    filteredPostIndexes() {
      return this.extractPostIndexes(
        this.filterPostsByCategoryAndTags(this.filteredPostsByCategory, this.filteredPostsByTags)
      )
    },

    filteredPostsByCategory() {
      return this.filterPostsByCategory(this.posts, this.selectedCategory)
    },

    filteredPostsByTags() {
      return this.filterPostsByTags(this.posts, this.selectedTags)
    },
  },

  watch: {
    selectedCategory() {
      this.syncQueryIfNeeded(this.path, this.selectedCategory, this.selectedTags)
    },

    selectedTags() {
      this.syncQueryIfNeeded(this.path, this.selectedCategory, this.selectedTags)
    },
  },

  created() {
    this.posts = this.extractPosts(this.markdownFiles)
    this.allCategories = this.extractCategories(this.posts)
    this.allTags = this.extractTagsList(this.posts)

    this.$nuxt.$on('queryChanged', () => {
      if (this.queryAndSelectedOutOfSync(this.path, this.selectedCategory, this.selectedTags)) {
        const { category, tags } = this.query2selectedVals()
        this.selectedCategory = category
        this.selectedTags = tags
      }
    })
    this.$nuxt.$emit('queryChanged')
  },

  activated() {
    this.$nuxt.$emit('queryChanged')
  },

  beforeDestroy() {
    // removes event listener
    this.$nuxt.$off('queryChanged')
  },

  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        const setOfSelectedTags = new Set(this.selectedTags)
        setOfSelectedTags.delete(tag)
        this.selectedTags = [...setOfSelectedTags]
      } else {
        this.selectedTags.push(tag)
      }
    },
    extractPosts(mdFiles) {
      const fixTags = (tags) => {
        const fixedTags = []
        if (tags) {
          tags.forEach((tag) => fixedTags.push(tag.trim()))
        }
        return this.sortTags(fixedTags)
      }
      const posts = mdFiles.map((obj) => {
        const { tags, ...rest } = obj
        return { tags: fixTags(tags), ...rest }
      })
      posts.sort((a, b) => {
        if ('date' in a && 'date' in b) {
          return new Date(b.date) - new Date(a.date)
        } else {
          return 0
        }
      })
      posts.forEach((post, postIndex) => {
        post.index = postIndex
      })
      return posts
    },

    extractCategories(posts) {
      let selections = posts.map((post) => post.category)
      if (this.sortCategories) {
        selections = selections.sort()
      }
      selections.unshift(ALL_CATEGORIES_TITLE)
      return [...new Set(selections)]
    },

    extractTagsList(posts) {
      const allTags = posts
        .reduce((acc, post) => {
          return acc.concat(post.tags)
        }, [])
        .filter((tag, index, self) => self.indexOf(tag) === index)
      return this.sortTags(allTags)
    },

    allPostsWithDisplayStatus(posts, filteredPostIndexes) {
      return posts.map((post) => {
        return {
          post,
          showPost: filteredPostIndexes.has(post.index),
        }
      })
    },

    extractPostIndexes(posts) {
      const indexes = new Set()
      posts.forEach((post) => {
        indexes.add(post.index)
      })
      return indexes
    },

    filterPostsByCategoryAndTags(filteredPostsByCategory, filteredPostsByTags) {
      return filteredPostsByCategory.filter((post) =>
        filteredPostsByTags.map((post) => post.slug).includes(post.slug)
      )
    },

    filterPostsByCategory(posts, selectedCategory) {
      if (selectedCategory === ALL_CATEGORIES_TITLE) {
        return posts
      }
      const postsToShow = []
      this.posts.forEach((post) => {
        if (post.category === selectedCategory) {
          postsToShow.push(post)
        }
      })
      return postsToShow
    },

    filterPostsByTags(posts, selectedTags) {
      if (selectedTags.length === 0) {
        return posts
      }
      const postsToShow = []
      posts.forEach((post) => {
        if ('tags' in post) {
          if (selectedTags.every((tag) => post.tags.includes(tag))) {
            postsToShow.push(post)
          }
        }
      })
      return postsToShow
    },

    query2selectedVals() {
      const query = this.$route.query
      return {
        category: query.category ? query.category : ALL_CATEGORIES_TITLE,
        tags: query.tags && query.tags.length > 0 ? JSON.parse(JSON.stringify(query.tags)) : [],
      }
    },

    selected2QueryVals(selectedCategory, selectedTags) {
      return {
        category: selectedCategory !== ALL_CATEGORIES_TITLE ? selectedCategory : undefined,
        tags: selectedTags.length > 0 ? JSON.parse(JSON.stringify(selectedTags)) : undefined,
      }
    },

    syncQueryIfNeeded(curPath, selectedCategory, selectedTags) {
      if (this.queryAndSelectedOutOfSync(curPath, selectedCategory, selectedTags)) {
        this.syncQueryWithSelected(selectedCategory, selectedTags)
      }
    },

    queryAndSelectedOutOfSync(curPath, selectedCategory, selectedTags) {
      const query = this.$route.query
      const { category: selCategory, tags: selTags } = this.selected2QueryVals(
        selectedCategory,
        selectedTags
      )
      return (
        this.$route.path === curPath && (query.category !== selCategory || query.tags !== selTags)
      )
    },

    syncQueryWithSelected(selectedCategory, selectedTags) {
      this.$router.push({ query: this.selected2QueryVals(selectedCategory, selectedTags) })
    },

    sortTags(tags) {
      function caseInsensitiveSort(a, b) {
        a = a.toLowerCase()
        b = b.toLowerCase()
        return a > b ? 1 : a < b ? -1 : 0
      }

      tags = tags.sort(caseInsensitiveSort)
      for (const frontTag of USER_TYPES) {
        const index = tags.indexOf(frontTag)
        if (index >= 0) {
          tags.unshift(tags.splice(index, 1)[0])
        }
      }
      return tags
    },
  },
}
</script>

<style scoped>
/* Custom styling for custom breakpoint vl ("very large") == 1640px*/
@media (min-width: 1640px) {
  .vl-and-up-redefine-col-lg.col-lg-3 {
    /* Acting as col-lg-2 */
    flex: 0 0 16.6666666667% !important;
    max-width: 16.6666666667% !important;
  }
  .vl-and-up-redefine-col-lg.col-lg-4 {
    /* Acting as col-lg-3 */
    flex: 0 0 25% !important;
    max-width: 25% !important;
  }
  .vl-and-up-redefine-col-lg.col-lg-9 {
    /* Acting as col-lg-10 */
    flex: 0 0 83.3333333333% !important;
    max-width: 83.3333333333% !important;
  }
}

@media (max-width: 599px) {
  .xs-only-flex-column-reverse {
    flex-direction: column-reverse !important;
  }
}
</style>
