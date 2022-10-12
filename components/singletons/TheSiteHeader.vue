<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary class="secondary" width="430px">
      <v-list dense class="secondary simplebutton">
        <v-list-item-group v-for="(item, i) in items" :key="i">
          <v-list-item v-if="!item.submenu" :to="item.to" nuxt>
            <!--            <v-list-item-action>-->
            <!--              <v-icon>{{ item.icon }}</v-icon>-->
            <!--            </v-list-item-action>-->
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
          <!--          <v-list-group v-else :prepend-icon="item.icon" no-action>-->
          <v-list-group v-else no-action>
            <template #activator>
              <v-list-item
                :key="item.title"
                class="pl-0"
                :to="item.to"
                active-class="menu-item-active"
                nuxt
                @click.stop="$router.push({ path: item.to })"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title.toUpperCase()"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, index) in item.submenu"
              :key="`li_${index}`"
              :href="child.href"
              :to="getRouteFromItem(item, child)"
              exact-path-active-class="menu-item-active"
              :class="isActiveItem(item, child) ? 'menu-item-active' : ''"
              :nuxt="child.href ? null : true"
            >
              <v-list-item-title v-text="child.title"></v-list-item-title>
              <v-list-item-action v-if="child.href">
                <UiSmartIcon name="launch" small />
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="secondary simplebutton" fixed app height="64">
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = true" />
      <UiLogoLink />
      <v-spacer />

      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu :key="menuitem" open-on-hover offset-y bottom style="display: block">
            <template #activator="{ on, attrs }">
              <v-btn plain class="py-8 hidden-md-and-down" v-bind="attrs" :to="name.to" v-on="on">
                {{ name.title }}
                <UiSmartIcon name="chevron-down" right small class="mx-0" />
              </v-btn>
            </template>
            <v-list dense class="secondary simplebutton">
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="`mli_${index}`"
                :href="item.href"
                :to="getRouteFromItem(name, item)"
                exact-path-active-class="menu-item-active"
                :class="isActiveItem(name, item) ? 'menu-item-active' : ''"
                :nuxt="item.href ? null : true"
              >
                <v-list-item-title> {{ item.title }}</v-list-item-title
                ><v-list-item-icon v-if="item.href">
                  <UiSmartIcon name="launch" small />
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn
          v-else
          :key="menuitem"
          depressed
          tile
          plain
          class="py-8 hidden-md-and-down"
          :to="name.to"
          nuxt
          >{{ name.title }}
        </v-btn>
      </template>
      <!--      <v-spacer />-->

      <v-btn icon :ripple="false" @click="changeThemeColor">
        <UiSmartIcon :name="$vuetify.theme.dark ? 'white-balance-sunny' : 'weather-night'" />
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentId: 'singletons-the-site-header',
      clipped: false,
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/',
          // submenu: [
          //   {
          //     title: 'The FAIRtracks ecosystem',
          //     anchor: '#index-01-intro',
          //   },
          //   {
          //     title: 'Overview for Analytical End-Users',
          //     anchor: '#index-02-end-users',
          //   },
          //   {
          //     title: 'Overview for Data Providers/Stewards',
          //     anchor: '#index-03-data-providers',
          //   },
          //   {
          //     title: 'Overview for Developers of Tools/Services',
          //     anchor: '#index-04-developers',
          //   },
          //   {
          //     title: 'Overview for the FAIR community',
          //     anchor: '#index-05-fair-community',
          //   },
          // ],
        },
        {
          title: 'tracks',
          to: '/tracks/',
          submenu: [
            {
              title: 'Genomic Tracks',
              anchor: '#tracks-01-genomic-tracks',
            },
            {
              title: 'Genome Browsers',
              anchor: '#tracks-02-genome-browsers',
            },
            {
              title: 'Track Collections',
              anchor: '#tracks-03-track-collections',
            },
            {
              title: 'Finding Tracks',
              anchor: '#tracks-04-finding-tracks',
            },
            // {
            //   title: 'Analyzing Tracks',
            //   anchor: '#tracks-05-analyzing-tracks',
            // },
            {
              title: 'Track Types',
              anchor: '#tracks-06-track-types',
            },
            {
              title: 'File formats',
              anchor: '#tracks-07-file-formats',
            },
          ],
        },
        {
          title: 'FAIR',
          to: '/fair/',
          submenu: [
            {
              title: 'FAIR data and FAIRtracks',
              anchor: '#fair-01-metadata-models',
            },
            {
              title: 'Track Metadata Models',
              anchor: '#fair-02-metadata-models',
            },
            {
              title: 'Identifiers',
              anchor: '#fair-03-identifiers',
            },
            {
              title: 'Ontologies',
              anchor: '#fair-04-ontologies',
            },
            {
              title: 'Validation',
              anchor: '#fair-05-validation',
            },
          ],
        },
        {
          title: 'Standards',
          to: '/standards/',
          submenu: [
            {
              title: 'FAIRtracks metadata standard',
              anchor: '#standards-01-fairtracks',
            },
            {
              title: 'The GTrack ecosystem',
              anchor: '#standards-02-gtrack-ecosystem',
            },
            {
              title: 'GTrack and BTrack file formats',
              anchor: '#standards-03-gtrack',
            },
            {
              title: 'GSuite file format',
              anchor: '#standards-04-gsuite',
            },
            {
              title: 'BioXSD/BioJSON/BioYAML (retired)',
              anchor: '#standards-05-bioxsd',
            },
          ],
        },
        {
          title: 'Services',
          to: '/services/',
          submenu: [
            {
              title: 'FAIRtracks ecosystem - Core services',
              query: { category: 'Core services' },
            },
            {
              title: '— TrackFind',
              query: { category: 'Core services', tags: ['TrackFind'] },
            },
            {
              title: '— FAIRification services',
              query: { category: 'Core services', tags: ['FAIRification'] },
            },
            {
              title: 'FAIRtracks ecosystem - Connected services',
              query: { category: 'Connected services' },
            },
            {
              title: '— Track Hub Registry',
              query: { category: 'Connected services', tags: ['Track Hub Registry'] },
            },
            {
              title: '— GSuite HyperBrowser',
              query: { category: 'Connected services', tags: ['HyperBrowser'] },
            },
            {
              title: '— BLUEPRINT / EPICO Data Analysis Portal',
              query: { category: 'Connected services', tags: ['EPICO'] },
            },
          ],
        },
        // {
        //   title: 'Code',
        //   to: '/code/',
        //   submenu: [
        //     {
        //       title: ' FAIRtracks code repos (overview)',
        //       anchor: '#fairtracks',
        //     },
        //     {
        //       title: 'The FAIRtracks.net web site',
        //       href: 'https://github.com/fairtracks/fairtracks.net#readme',
        //     },
        //     {
        //       title: 'TrackFind',
        //       href: 'https://github.com/elixir-oslo/trackfind#readme',
        //     },
        //     {
        //       title: 'The Genomic HyperBrowser (TrackFind API Client)',
        //       href: 'https://github.com/hyperbrowser/genomic-hyperbrowser/blob/38a3e27561dd148299d4cd7e594abec1d5cd57a2/lib/hb/quick/trackfind/TrackFindModule.py',
        //     },
        //     {
        //       title: 'EPICO (TrackFind API changes)',
        //       href: 'http://fairtracks.bsc.es/',
        //     },
        //     {
        //       title: 'Track Hub Registry (FAIRtracks branch)',
        //       href: 'https://github.com/Ensembl/trackhub-registry/tree/feature/fairtracks#readme',
        //     },
        //     {
        //       title: 'FAIRtracks validator',
        //       href: 'https://github.com/fairtracks/fairtracks_validator#readme',
        //     },
        //     {
        //       title: 'FAIRtracks augmentation service',
        //       href: 'https://github.com/fairtracks/fairtracks_augment#readme',
        //     },
        //     {
        //       title: 'FAIRtracks JSON-to-GSuite converter',
        //       href: 'https://github.com/fairtracks/fairtracks_json_to_gsuite#readme',
        //     },
        //     {
        //       title: 'uniFAIR (under development)',
        //       href: 'https://github.com/fairtracks/unifair#readme',
        //     },
        //   ],
        // },
        {
          title: 'Materials',
          to: '/materials/',
          submenu: [
            {
              title: 'Blogs',
              query: { category: 'Blog' },
            },
            {
              title: 'Posters',
              query: { category: 'Poster' },
            },
            {
              title: 'Presentations',
              query: { category: 'Presentation' },
            },
            {
              title: 'Publications',
              query: { category: 'Publication' },
            },
          ],
        },
        {
          title: 'Community',
          to: '/community/',
        },
      ],
    }
  },
  methods: {
    changeThemeColor() {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },

    getRouteObject(path, hash, query) {
      if (hash || query) {
        return { path, hash: hash || null, query: query || null }
      } else {
        return null
      }
    },

    getRouteFromItem(name, item) {
      return this.getRouteObject(name.to, item.anchor, item.query)
    },

    getValue(route) {
      if (route && route.path) {
        let url = route.path
        if (route.hash) {
          url += route.hash
        }
        if (route.query && Object.keys(route.query).length > 0) {
          url += '?' + require('qs').stringify(route.query)
        }
        return url
      } else {
        return null
      }
    },

    isActiveItem(name, item) {
      return (
        !item.href &&
        this.getValue(this.$route) === this.getValue(this.getRouteFromItem(name, item))
      )
    },
  },
}
</script>
