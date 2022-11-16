import { marked } from 'marked'

export default {
  computed: {
    markdownFiles() {
      if (this.markdownFilesDir) {
        return this.$loadMarkdownFilesInDir(this.markdownFilesDir)
      } else {
        return []
      }
    },
  },
  methods: {
    compileMarkdown(contents) {
      if (contents && typeof contents === 'string') {
        return marked.parseInline(contents, { breaks: true })
      } else {
        return contents
      }
    },
  },
}
