<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      class="secondary"
      width="430px"
    >
      <v-list dense class="secondary simplebutton">
        <v-list-item-group v-for="(item, i) in items" :key="i">
          <v-list-item v-if="!item.submenu" :to="item.to">
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
                @click.stop="$router.push({ path: item.to })"
              >
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.title.toUpperCase()"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, index) in item.submenu"
              :key="index"
              :to="item.to + child.anchor"
              :href="child.href"
            >
              <v-list-item-title v-text="child.title"></v-list-item-title>
              <v-list-item-action v-if="child.href">
                <v-icon small> {{ mdiLaunch }}</v-icon>
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
          <v-menu :key="menuitem" open-on-hover offset-y bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                plain
                class="py-8 hidden-md-and-down"
                v-bind="attrs"
                :to="name.to"
                v-on="on"
              >
                {{ name.title }}
                <v-icon right small class="mx-0"> {{ mdiChevronDown }}</v-icon>
              </v-btn>
            </template>
            <v-list dense class="secondary simplebutton">
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="index"
                link
                :href="item.href"
                :to="item.anchor ? name.to + item.anchor : null"
              >
                <v-list-item-title> {{ item.title }}</v-list-item-title
                ><v-list-item-icon v-if="item.href">
                  <v-icon small> {{ mdiLaunch }}</v-icon>
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
          >{{ name.title }}
        </v-btn>
      </template>
      <!--      <v-spacer />-->

      <v-btn icon :ripple="false" @click="changeThemeColor">
        <v-icon
          >{{ $vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiWeatherNight }}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import {
  mdiChevronDown,
  mdiLaunch,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from '@mdi/js'

export default {
  data() {
    return {
      mdiLaunch,
      mdiChevronDown,
      mdiWhiteBalanceSunny,
      mdiWeatherNight,
      clipped: false,
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/',
        },
        // {
        //   title: 'News',
        //   to: '/news',
        // },
        {
          title: 'Overview',
          to: '/overview',
          submenu: [
            {
              title: '... of FAIRtracks',
              anchor: '#about-fairtracks',
            },
            {
              title: '... for Analytical End-Users',
              anchor: '#end-users',
            },
            {
              title: '... for Data Providers/Stewards',
              anchor: '#data-providers',
            },
            {
              title: '... for Developers of Tools/Services',
              anchor: '#developers',
            },
            {
              title: '... for the FAIR community',
              anchor: '#fair-community',
            },
          ],
        },
        {
          title: 'Topics',
          to: '/topics',
          submenu: [
            {
              title: 'Genomic Tracks',
              anchor: '#s01-genomic-tracks',
            },
            {
              title: 'Genome Browsers',
              anchor: '#s02-genome-browsers',
            },
            {
              title: 'Track Types',
              anchor: '#s03-track-types',
            },
            {
              title: 'Finding Tracks',
              anchor: '#s04-finding-tracks',
            },
            {
              title: 'Track Collections',
              anchor: '#s05-track-collections',
            },
            {
              title: 'Analysing Tracks',
              anchor: '#s06-analysing-tracks',
            },
            {
              title: 'FAIRification of Track Metadata',
              anchor: '#s07-fairification',
            },
            {
              title: 'Identifiers',
              anchor: '#s08-identifiers',
            },
            {
              title: 'Ontologies',
              anchor: '#s09-ontologies',
            },
            {
              title: 'Validation',
              anchor: '#s10-validation',
            },
            {
              title: 'File formats',
              anchor: '#s11-file_formats',
            },
            {
              title: 'FAIR Interoperability',
              anchor: '#s12-interoperability',
            },
          ],
        },
        {
          title: 'Standards',
          to: '/standards',
          submenu: [
            {
              title: 'FAIRtracks standards (overview)',
              anchor: '#fairtracks',
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
          to: '/services',
          submenu: [
            {
              title: 'FAIRtracks ecosystem - Core services',
              anchor: '#fairtracks',
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
          to: '/code',
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
          title: 'Material',
          to: '/material',
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
          to: '/community',
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
