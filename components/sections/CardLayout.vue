<template>
  <v-row :class="$vuetify.breakpoint.xs ? 'flex-column-reverse' : ''">
    <v-col v-if="$vuetify.breakpoint.sm" sm="1" />
    <v-col cols="12" sm="6" md="8" :lg="$vuetify.breakpoint.width >= 1640 ? 10 : 9" xl="10">
      <v-row>
        <v-col
          v-for="post in posts"
          v-show="filteredPostsIndexes.has(post.index)"
          id="posts"
          :key="post.index"
          style="min-width: 300px"
          cols="12"
          sm="12"
          md="6"
          :lg="$vuetify.breakpoint.width >= 1640 ? 3 : 4"
          xl="3"
        >
          <slot :post="post" />
        </v-col>
      </v-row>
    </v-col>
    <v-col
      id="post-categories"
      cols="12"
      sm="4"
      md="4"
      :lg="$vuetify.breakpoint.width >= 1640 ? 2 : 3"
      xl="2"
    >
      <v-card outlined class="mb-6">
        <div
          class="subtitle font-weight-black text-uppercase text-center mt-4"
          v-text="categoryTitle"
        />
        <v-list dense class="simplebutton">
          <v-list-item-group v-model="activeCategory" mandatory>
            <v-list-item
              v-for="(category, catIndex) in categories"
              :key="catIndex"
              active-class="cat-highlight"
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
          <v-chip-group v-model="selectedTags" multiple column>
            <v-chip v-for="tag in tagsList" :key="tag" :value="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.sm" sm="1" />
  </v-row>
</template>

<script>
import MarkdownSupport from '~/mixins/markdown-support'
import createRgbVarsForThemes from '~/mixins/create-rgb-vars-for-themes'

const ALL_CATEGORIES_TITLE = 'All'

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
      componentId: 'sections-materials-layout',
    }
  },

  computed: {
    posts() {
      // console.log('posts')
      const fixTags = (tags) => {
        // console.log(tags)
        const fixedTags = []
        if (tags) {
          tags.forEach((tag) => fixedTags.push(tag.trim()))
        }
        return this.sortTags(fixedTags)
      }
      const mdFiles = this.markdownFiles
      const posts = mdFiles.map((obj) => {
        const { tags, ...rest } = obj
        return { tags: fixTags(tags), ...rest }
      })
      // console.log(posts[0].tags)
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
      // console.log(posts[0].tags)
      return posts
    },

    tagsList() {
      const allTags = this.posts
        .reduce((acc, post) => {
          return acc.concat(post.tags)
        }, [])
        .filter((tag, index, self) => self.indexOf(tag) === index)
      return this.sortTags(allTags)
    },

    categories() {
      // console.log('categories')
      let selections = this.posts.map((post) => post.category)
      if (this.sortCategories) {
        selections = selections.sort()
      }
      selections.unshift(ALL_CATEGORIES_TITLE)
      return [...new Set(selections)]
    },

    filteredPosts() {
      // console.log('filteredPosts')
      return this.filteredPostsByCategory().filter((post) =>
        this.filteredPostsByTag().includes(post)
      )
    },

    filteredPostsIndexes() {
      // console.log('filteredPostsIndexes')
      const indexes = new Set()
      this.filteredPosts.forEach((post) => {
        indexes.add(post.index)
      })
      return indexes
    },

    activeCategory: {
      get: function () {
        const query = this.$route.query
        if (query.category) {
          return query.category
        } else {
          return ALL_CATEGORIES_TITLE
        }
      },
      set: function (category) {
        this.$router.push({ query: Object.assign({}, this.$route.query, { category }) })
      },
    },

    selectedTags: {
      get: function () {
        const query = this.$route.query
        if (query.tags) {
          return JSON.parse(query.tags)
        } else {
          return []
        }
      },
      set: function (tags) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, { tags: JSON.stringify(tags) }),
        })
      },
    },
  },

  methods: {
    filteredPostsByCategory() {
      // console.log('filteredPostsByCategory')
      if (this.activeCategory === ALL_CATEGORIES_TITLE) {
        return this.posts
      }
      const postsToShow = []
      this.posts.forEach((post) => {
        if (post.category === this.activeCategory) {
          postsToShow.push(post)
        }
      })
      return postsToShow
    },
    filteredPostsByTag() {
      // console.log('filteredPostsByTag')
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
      return postsToShow
    },
    sortTags(tags) {
      function caseInsensitiveSort(a, b) {
        a = a.toLowerCase()
        b = b.toLowerCase()
        return a > b ? 1 : a < b ? -1 : 0
      }

      tags = tags.sort(caseInsensitiveSort)
      for (const frontTag of [
        'FAIR community',
        'Developers',
        'Data providers/stewards',
        'Analytical end users',
      ]) {
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

<style>
.v-slide-group__content {
  justify-content: center;
}

.cat-highlight {
  background-color: rgba(var(--v-accent-rgb), 0.2);
}
.v-chip::before {
  color: var(--v-accent-base);
}
.v-chip--active::before {
  opacity: 0.2 !important;
}
.v-chip--clickable:active {
  box-shadow: none;
}
</style>
