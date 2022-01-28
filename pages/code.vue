<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />

    <v-data-iterator :items="repos" item-key="repo">
      <template #default="{ items }">
        <v-container>
          <v-row>
            <v-col
              v-for="(repo, r_index) in items"
              :key="`r_${r_index}`"
              cols="12"
            >
              <v-card>
                <v-card-title>{{ repo.title }} </v-card-title>
                <v-list two-line>
                  <v-list-item
                    v-for="(infoItem, i_index) in repoInfoItems"
                    :key="`i_${r_index}_${i_index}`"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{
                        'titleFunc' in infoItem
                          ? infoItem.titleFunc(repo)
                          : infoItem.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        infoItem.value(repo)
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-iterator>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  GITHUB_G_GET_ALL_REPOS,
  GITHUB_G_GET_REPO_URL,
  GITHUB_G_GET_REPO_OPEN_ISSUES,
  GITHUB_G_GET_REPO_LANGUAGE,
  GITHUB_G_GET_REPO_TIME_OF_CREATION,
  GITHUB_G_GET_REPO_TIME_OF_LAST_UPDATE,
  GITHUB_G_GET_REPO_CHILD_COMMIT_COUNT,
} from '../store/github/constants'

export default {
  data() {
    return {
      pageHeader: 'Code',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'VS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'SF.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'F.svg'),
      ],
    }
  },
  head() {
    return {
      title: 'Code',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
  computed: {
    ...mapGetters({ repos: GITHUB_G_GET_ALL_REPOS }),
    repoInfoItems() {
      return [
        {
          title: 'Repository URL',
          value: this.$store.getters[GITHUB_G_GET_REPO_URL],
        },
        {
          title: 'Open issues',
          value: this.$store.getters[GITHUB_G_GET_REPO_OPEN_ISSUES],
        },
        {
          title: 'Main programming language',
          value: this.$store.getters[GITHUB_G_GET_REPO_LANGUAGE],
        },
        {
          title: 'Time of creation',
          value: this.$store.getters[GITHUB_G_GET_REPO_TIME_OF_CREATION],
        },
        {
          title: 'Time of last update',
          value: this.$store.getters[GITHUB_G_GET_REPO_TIME_OF_LAST_UPDATE],
        },
        {
          titleFunc: (repo) => {
            return repo.parentCommit
              ? `#Commits (children of parent commit "${repo.parentCommit}")`
              : '#Commits (total)'
          },
          value: this.$store.getters[GITHUB_G_GET_REPO_CHILD_COMMIT_COUNT],
        },
      ]
    },
  },
}
</script>
