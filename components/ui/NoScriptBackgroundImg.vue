<template>
  <noscript inline-template>
    <div
      class="fill-height attach-classes"
      :style="`background-image: url(&quot;${imageAsset.optimizedImagePath}&quot;  ); ${styleText}`"
    />
  </noscript>
</template>

<script>
export default {
  props: {
    imageAsset: { type: Object, required: true },
    altText: { type: String, default: '' },
    styleText: { type: String, default: '' },
  },
  data() {
    return {
      componentId: 'ui-no-script-background-img',
    }
  },
}
</script>
