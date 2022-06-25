<template>
  <h3 class="text-h4 font-weight-bold mb-5">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      componentId: 'ui-minor-title',
    }
  },
}
</script>
