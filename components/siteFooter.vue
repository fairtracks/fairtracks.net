<template>
  <v-card height="100px">
    <v-footer padless>
      <v-card
        flat
        tile
        width="100%"
        class="secondary text-center grey--text text--lighten-1"
      >
        <v-card-text>
          <v-btn
            v-for="(socialm, i) in social"
            :key="`social-${i}`"
            icon
            small
            color="info"
            :href="socialm.link"
            target="_blank"
          >
            <v-icon size="24px">{{ socialm.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider />

        <v-card-text class="secondary info--text">
          {{ new Date().getFullYear() }} ©
          <nuxt-link class="primary--text" to="/">FAIRtracks</nuxt-link>
          (based on the
          <a href="https://github.com/staticdesigner/modevue">ModeVue</a>
          template, available under the MIT license)
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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
        //   icon: 'mdi-facebook',
        // },
        {
          platform: 'Twitter',
          link: 'https://twitter.com/fairtracks',
          icon: 'mdi-twitter',
        },
        // {
        //   platform: 'Instagram',
        //   link: 'https://www.instagram.com/',
        //   icon: 'mdi-instagram',
        // },
        // {
        //   platform: 'Linkedin',
        //   link: 'https://www.linkedin.com/',
        //   icon: 'mdi-linkedin',
        // },
        {
          platform: 'Github',
          link: 'https://github.com/fairtracks',
          icon: 'mdi-github',
        },
      ],
    }
  },
}
</script>
