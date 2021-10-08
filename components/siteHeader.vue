<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary class="secondary">
      <v-list dense class="secondary">
        <v-list-item-group v-for="(item, i) in items" :key="i">
          <v-list-item v-if="!item.submenu" :ripple="false" :to="item.to">
            <!--            <v-list-item-action>-->
            <!--              <v-icon>{{ item.icon }}</v-icon>-->
            <!--            </v-list-item-action>-->
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            :prepend-icon="item.icon"
            :ripple="false"
            no-action
          >
            <template #activator>
              <v-list-item
                :key="item.title"
                class="pl-0"
                :ripple="false"
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
              v-for="child in item.submenu"
              :key="child.title"
              :ripple="false"
              :to="child.to"
              :href="child.href"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="secondary" fixed app height="64">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <Logo />
      <v-spacer />

      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu :key="menuitem" open-on-hover offset-y bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                plain
                class="py-8 hidden-sm-and-down"
                :ripple="false"
                v-bind="attrs"
                :to="name.to"
                v-on="on"
              >
                {{ name.title }}
                <v-icon right small class="mx-0"> mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list dense class="secondary">
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="index"
                :ripple="false"
                link
                :to="item.to"
                :href="item.href"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
          class="py-8 hidden-sm-and-down"
          :ripple="false"
          :to="name.to"
          >{{ name.title }}
        </v-btn>
      </template>
      <!--      <v-spacer />-->

      <v-btn icon :ripple="false" @click="changeThemeColor">
        <v-icon
          >{{
            $vuetify.theme.dark
              ? 'mdi-white-balance-sunny'
              : 'mdi-weather-night'
          }}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'Services',
          to: '/services',
          submenu: [
            {
              title: 'Services Page',
              to: '/services#a',
            },
            {
              title: 'Static Websites',
              to: '/services#b',
            },
          ],
        },
        {
          title: 'Pricing',
          to: '/pricing',
        },
        {
          title: 'Gallery',
          to: '/gallery',
        },
        {
          title: 'Blog',
          to: '/blog',
        },
        {
          title: 'Contact',
          to: '/contact',
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

<style>
/* Inactive top menu buttons */
.secondary .v-btn:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content,
  /* Inactive sidebar and submenu items */
.secondary.v-list a.v-list-item:not(a.v-list-item--active):not(a.v-list-item--disabled):not(:hover) .v-list-item__title,
  /* Inactive top menu arrow icons */
.secondary .v-btn:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content .v-icon,
  /* Inactive sidebar icons */
.secondary.v-list a.v-list-item:not(a.v-list-item--active):not(a.v-list-item--disabled):not(:hover) .v-icon,
  /* Inactive sidebar arrow icons */
.secondary.v-list a.v-list-item:not(a.v-list-item--active):not(a.v-list-item--disabled):not(:hover) + .v-list-item__icon .v-icon {
  opacity: 1;
  color: var(--v-info-base);
}

/* Active top menu buttons */
.secondary .v-btn--active .v-btn__content,
  /* Active sidebar and submenu items */
.secondary.v-list a.v-list-item--active .v-list-item__title,
  /* Active top menu arrow icons */
.secondary .v-btn--active .v-icon,
  /* Active sidebar icons) */
.secondary.v-list a.v-list-item--active .v-icon,
  /* Active sidebar arrow icons */
.secondary.v-list a.v-list-item--active + .v-list-item__icon .v-icon {
  opacity: 1;
  color: var(--v-accent-base);
}

/* Hovering over top menu buttons */
.secondary .v-btn:hover:not(.v-btn--active) .v-btn__content,
  /* Hovering over sidebar and submenu items*/
.secondary.v-list a.v-list-item:hover:not(.v-list-item--active) .v-list-item__title,
  /* Hovering over top menu arrow icons*/
.secondary .v-btn:hover:not(.v-btn--active) .v-icon,
  /* Hovering over sidebar icons*/
.secondary.v-list a.v-list-item:hover:not(.v-list-item--active) .v-icon,
  /* Hovering over sidebar arrow icons*/
.secondary.v-list a.v-list-item:hover:not(a.v-list-item--active) + .v-list-item__icon .v-icon {
  opacity: 1;
  color: var(--v-accent-lighten3);
}

/* Remove darken and lighten when selecting menu buttons and items */
.secondary .v-list-item--link:before,
.secondary .v-btn:before {
  background-color: transparent;
}

/* Remove transition effect when selecting menu buttons and items */
.secondary .v-list-item--link,
.secondary .v-btn {
  transition-property: none;
}
</style>
