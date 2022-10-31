import { marked } from 'marked'

export default {
  data() {
    return { markdownFiles: [] }
  },
  created() {
    if (this.markdownFilesDir) {
      this.markdownFiles = this.$loadMarkdownFilesInDir(this.markdownFilesDir)
    }
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
