<template>
  <v-footer padless>
    <v-card
      flat
      tile
      height="140px"
      width="100%"
      class="secondary text-center grey--text text--lighten-1"
    >
      <v-card-text>
        <v-btn
          v-for="(socialm, i) in social"
          :key="`social-${i}`"
          icon
          small
          color="white"
          :href="socialm.link"
          target="_blank"
        >
          <UiSmartIcon :name="socialm.icon" size="24px" />
        </v-btn>
      </v-card-text>

      <v-divider />

      <v-card-text class="secondary white--text">
        <a href="https://elixir-oslo.github.io/gdpr/"> Privacy Policy and Terms of Service </a
        ><br />
        {{ new Date().getFullYear() }} ©
        <nuxt-link class="primary--text" to="/">FAIRtracks</nuxt-link>
        (based on the
        <a href="https://github.com/staticdesigner/modevue">ModeVue</a>
        template, available under the MIT license)
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      componentId: 'singletons-the-site-footer',
      menu: [
        { text: 'Support', link: '#' },
        { text: 'Contact Us', link: '#' },
        { text: 'Disclaimer', link: '#' },
        { text: 'Covid-19 Operation', link: '#' },
      ],
      social: [
        // {
        //   platform: 'Facebook',
        //   link: 'https://www.facebook.com/',
        //   icon: mdiFacebook,
        // },
        {
          platform: 'Twitter',
          link: 'https://twitter.com/fairtracks',
          icon: 'twitter',
        },
        // {
        //   platform: 'Instagram',
        //   link: 'https://www.instagram.com/',
        //   icon: mdiInstagram,
        // },
        // {
        //   platform: 'Linkedin',
        //   link: 'https://www.linkedin.com/',
        //   icon: mdiLinkedin,
        // },
        {
          platform: 'Github',
          link: 'https://github.com/fairtracks',
          icon: 'github',
        },
      ],
    }
  },
}
</script>
