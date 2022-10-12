<template>
  <section id="error">
    <v-container class="py-16">
      <v-row no-gutter>
        <v-col v-if="error.statusCode === 404" cols="12" light>
          <p class="text-h5 text-sm-h4 text-center">
            {{ pageNotFound }}
          </p>
          <UiSmartImg
            :image-asset="$getImageAssetObject('images', 'other', '404.jpg')"
            class="mx-auto mt-8"
            max-width="480px"
            contain
          />
          <p class="mt-4 text-center">
            <small>
              Free photo
              <a
                href="https://www.dreamstime.com/404-error-code-blocks-free-stock-photos-image-free-90660528"
              >
                90660528
              </a>
              ©
              <a
                href="https://www.dreamstime.com/creativecommonsstockphotos_info"
                itemprop="author"
              >
                creativecommonsstockphotos
              </a>
              -
              <a href="https://www.dreamstime.com/"> Dreamstime.com </a>
            </small>
          </p>
        </v-col>
        <v-col v-else cols="12" light>
          <p class="text-h5 text-sm-h4 text-center">
            {{ otherError }}
          </p>
          <p class="pt-16 text-uppercase text-center">
            Go to
            <NuxtLink class="text-decoration-none" to="/"> Home page </NuxtLink>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'The page you are looking for could not be found.',
      otherError: 'An error occurred',
      title404: '404 error',
    }
  },
  head() {
    const title = this.error.statusCode === 404 ? this.title404 : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
