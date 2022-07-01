<template>
  <section id="error">
    <v-container class="py-16 text-center">
      <v-row no-gutter>
        <v-col cols="12" light>
          <div v-if="error.statusCode === 404">
            <span class="text-h5 text-sm-h4">
              {{ pageNotFound }}
            </span>
            <v-row class="pt-16" justify="center">
              <v-col>
                <UiSmartImg
                  :image-asset="$getImageAssetObject('images', 'other', '404.jpg')"
                  class="mx-auto"
                  max-width="480"
                  contain
                />
                <div class="mt-4">
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
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else class="text-h5 text-sm-h4">
            {{ otherError }}
          </div>
          <p class="pt-16 text-uppercase">
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
