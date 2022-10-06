<template>
  <v-row :class="$vuetify.breakpoint.xs ? 'flex-column-reverse' : ''">
    <v-col v-if="$vuetify.breakpoint.sm" sm="1" />
    <v-col cols="12" sm="6" md="8" :lg="$vuetify.breakpoint.width >= 1640 ? 10 : 9" xl="10">
      <v-row>
        <v-col
          v-for="(post, postIndex) in posts"
          v-show="filteredPostsIndexes.has(postIndex)"
          id="posts"
          :key="postIndex"
          style="min-width: 300px"
          cols="12"
          sm="12"
          md="6"
          :lg="$vuetify.breakpoint.width >= 1640 ? 3 : 4"
          xl="3"
        >
          <UiMaterialsCard :post="post" />
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
        <div class="subtitle font-weight-black text-uppercase text-center mt-4">Categories</div>
        <v-list dense class="simplebutton">
          <v-list-item-group mandatory>
            <v-list-item
              v-for="(category, catIndex) in categories"
              :key="catIndex"
              active-class="cat-highlight"
              :style="cssVars"
            >
              <v-list-item-content @click="setActiveCategory(category)">
                <v-list-item-title
                  style="text-transform: capitalize; text-align: center"
                  v-text="category"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card outlined class="mb-6">
        <div class="subtitle font-weight-black text-uppercase text-center mt-4">Tags</div>
        <v-card-text>
          <v-chip-group multiple column>
            <v-chip v-for="tag in tagsList" :key="tag" @click="addRemoveTagToList(tag)">
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

export default {
  mixins: [MarkdownSupport, createRgbVarsForThemes],
  props: {
    markdownFilesDir: {
      type: String,
      default: () => null,
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
    posts() {
      const fixTags = (tags) => {
        const fixedTags = []
        if (tags !== undefined) {
          tags.split(',').forEach((tag) => fixedTags.push(tag.trim()))
        }
        return fixedTags
      }
      const mdFiles = this.markdownFiles
      const posts = []
      mdFiles.forEach((obj) => {
        posts.push({
          category: obj.category,
          tags: fixTags(obj.tags),
          previewImg: obj.previewImg,
          title: obj.title,
          date: Date.parse(obj.date),
          link: obj.link,
          external: obj.external,
        })
      })
      posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      posts.forEach((post, postIndex) => {
        post.index = postIndex
      })
      return posts
    },
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
      this.filteredPosts.forEach((post) => {
        indexes.add(post.index)
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
      this.posts.forEach((post) => {
        if (post.category === this.activeCategory) {
          postsToShow.push(post)
        }
      })
      return postsToShow
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
      return postsToShow
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
