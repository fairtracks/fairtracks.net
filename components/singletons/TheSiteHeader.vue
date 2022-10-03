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
              :to="child.anchor ? { path: item.to, hash: child.anchor } : null"
              :href="child.href"
              nuxt
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
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <UiLogoLink />
      <v-spacer />

      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu :key="menuitem" open-on-hover offset-y bottom style="display: block">
            <template #activator="{ on, attrs }">
              <v-btn plain class="py-8 hidden-sm-and-down" v-bind="attrs" :to="name.to" v-on="on">
                {{ name.title }}
                <UiSmartIcon name="chevron-down" right small class="mx-0" />
              </v-btn>
            </template>
            <v-list dense class="secondary simplebutton">
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="`mli_${index}`"
                link
                :href="item.href"
                :to="item.anchor ? { path: name.to, hash: item.anchor } : null"
                nuxt
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
          submenu: [
            {
              title: 'The FAIRtracks ecosystem',
              anchor: '#index-01-intro',
            },
            {
              title: 'Overview for Analytical End-Users',
              anchor: '#index-02-end-users',
            },
            {
              title: 'Overview for Data Providers/Stewards',
              anchor: '#index-03-data-providers',
            },
            {
              title: 'Overview for Developers of Tools/Services',
              anchor: '#index-04-developers',
            },
            {
              title: 'Overview for the FAIR community',
              anchor: '#index-05-fair-community',
            },
          ],
        },
        {
          title: 'Topics',
          to: '/topics/',
          submenu: [
            {
              title: 'Genomic Tracks',
              anchor: '#topics-01-genomic-tracks',
            },
            {
              title: 'Genome Browsers',
              anchor: '#topics-02-genome-browsers',
            },
            {
              title: 'Track Types',
              anchor: '#topics-03-track-types',
            },
            {
              title: 'Finding Tracks',
              anchor: '#topics-04-finding-tracks',
            },
            {
              title: 'Track Collections',
              anchor: '#topics-05-track-collections',
            },
            {
              title: 'Analyzing Tracks',
              anchor: '#topics-06-analyzing-tracks',
            },
            {
              title: 'Track Metadata Models',
              anchor: '#topics-07-metadata-models',
            },
            {
              title: 'Identifiers',
              anchor: '#topics-08-identifiers',
            },
            {
              title: 'Ontologies',
              anchor: '#topics-09-ontologies',
            },
            {
              title: 'Validation',
              anchor: '#topics-10-validation',
            },
            {
              title: 'File formats',
              anchor: '#topics-11-file-formats',
            },
            {
              title: 'FAIR Interoperability',
              anchor: '#topics-12-interoperability',
            },
          ],
        },
        {
          title: 'Standards',
          to: '/standards/',
          submenu: [
            {
              title: 'FAIRtracks standards (overview)',
              anchor: '#standards-01-fairtracks',
            },
            {
              title: 'FAIRtracks draft standard',
              href: 'https://github.com/fairtracks/fairtracks_standard#readme',
            },
            {
              title: 'GTrack file format',
              href: 'https://github.com/gtrack/gtrack#readme',
            },
            {
              title: 'GSuite file format',
              href: 'https://github.com/gsuite/gsuite#readme',
            },
            {
              title: 'BioXSD/BioJSON/BioYAML (development on hold)',
              href: 'http://bioxsd.org/',
            },
          ],
        },
        {
          title: 'Services',
          to: '/services/',
          submenu: [
            {
              title: 'FAIRtracks ecosystem - Core services',
              anchor: '#core',
            },
            {
              title: '— TrackFind (Web GUI)',
              href: 'https://trackfind.elixir.no',
            },
            {
              title: '— TrackFind (API)',
              href: 'https://trackfind.elixir.no/api',
            },
            {
              title: '— FAIRtracks validator service (API)',
              href: 'http://fairtracks.bsc.es/api/',
            },
            {
              title: '— FAIRtracks augmentation service (API)',
              href: 'https://fairtracks.elixir.no/api/#api-Augmentation-augment',
            },
            {
              title: '— FAIRtracks JSON-to-GSuite converter (API)',
              href: 'https://fairtracks.elixir.no/api/#api-Conversion-json2gsuite',
            },
            {
              title: 'FAIRtracks ecosystem - Connected services',
              anchor: '#connected',
            },
            {
              title: '— Track Hub Registry (Web GUI)',
              href: 'https://trackhubregistry.org/',
            },
            {
              title: '— Track Hub Registry (API)',
              href: 'https://trackhubregistry.org/docs/apis',
            },
            {
              title: '— GSuite HyperBrowser (TF client)',
              href: 'https://hyperbrowser.uio.no/',
            },
            {
              title: '— BLUEPRINT / EPICO Data Analysis Portal (TF client)',
              href: 'http://blueprint-data.bsc.es/',
            },
          ],
        },
        {
          title: 'Code',
          to: '/code/',
          submenu: [
            {
              title: ' FAIRtracks code repos (overview)',
              anchor: '#fairtracks',
            },
            {
              title: 'The FAIRtracks.net web site',
              href: 'https://github.com/fairtracks/fairtracks.net#readme',
            },
            {
              title: 'TrackFind',
              href: 'https://github.com/elixir-oslo/trackfind#readme',
            },
            {
              title: 'The Genomic HyperBrowser (TrackFind API Client)',
              href: 'https://github.com/hyperbrowser/genomic-hyperbrowser/blob/38a3e27561dd148299d4cd7e594abec1d5cd57a2/lib/hb/quick/trackfind/TrackFindModule.py',
            },
            {
              title: 'EPICO (TrackFind API changes)',
              href: 'http://fairtracks.bsc.es/',
            },
            {
              title: 'Track Hub Registry (FAIRtracks branch)',
              href: 'https://github.com/Ensembl/trackhub-registry/tree/feature/fairtracks#readme',
            },
            {
              title: 'FAIRtracks validator',
              href: 'https://github.com/fairtracks/fairtracks_validator#readme',
            },
            {
              title: 'FAIRtracks augmentation service',
              href: 'https://github.com/fairtracks/fairtracks_augment#readme',
            },
            {
              title: 'FAIRtracks JSON-to-GSuite converter',
              href: 'https://github.com/fairtracks/fairtracks_json_to_gsuite#readme',
            },
            {
              title: 'uniFAIR (under development)',
              href: 'https://github.com/fairtracks/unifair#readme',
            },
          ],
        },
        {
          title: 'Materials',
          to: '/materials/',
          submenu: [
            {
              title: 'Publications',
              anchor: '#publications',
            },
            {
              title: 'Posters',
              anchor: '#posters',
            },
            {
              title: 'Presentations',
              anchor: '#presentations',
            },
            {
              title: 'Workshops',
              anchor: '#workshops',
            },
            {
              title: 'Media',
              anchor: '#media',
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
  },
}
</script>
