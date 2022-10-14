<template>
  <SectionsPageContainer :page-header="pageHeader" :page-header-images="pageHeaderImages">
    <v-row no-gutters class="pa-0">
      <v-col md="6" cols="12" class="pa-16">
        <SectionsSubSection :title="surveyTitle">
          <UiClickableCard :card="surveyCard" class="survey" @btn-click="showSurveyDialog = true" />
        </SectionsSubSection>
        <UiPopupDialog
          v-model="showSurveyDialog"
          :buttons="surveyDialogButtons"
          :image-asset="surveyCard.img"
        />
        <SectionsContactUs
          :title="contactUsTitle"
          :contact-points="contactPoints"
          :github-issues="githubIssues"
        />
        <SectionsCiteUs :title="citeUsTitle" :text="citeUsText" :references="references" />
        <v-row no-gutters class="pa-0 pt-16">
          <v-col md="12" cols="12">
            <SectionsSubSection :title="recommendationsTitle">
              <UiClickableCard :card="recommendationCard" />
            </SectionsSubSection>
          </v-col>
        </v-row>
        <SectionsLogoList :title="logosTitle" :logos="logos" />
      </v-col>
      <v-col md="6" cols="12" class="pt-0">
        <SectionsTeamColumn
          class="fill-height"
          :our-team="ourTeam"
          :team-name="teamName"
          :img-dimensions="{ height: '135', width: '102' }"
        />
      </v-col>
    </v-row>
  </SectionsPageContainer>
</template>

<script>
import PageScrollLogic from '~/mixins/page-scroll-logic'

export default {
  mixins: [PageScrollLogic],
  data() {
    return {
      componentId: 'community',
      pageHeader: 'Community',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'LP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LBP.svg'),
      ],
      surveyTitle: 'Fill out our community survey!',
      surveyCard: {
        href: '',
        img: this.$getImageAssetObject('images', 'media', 'FAIRtracks-survey-ad-webpage.png'),
        maxWidth: '850px',
      },
      showSurveyDialog: false,
      surveyDialogButtons: [
        { text: 'Fill out survey!', icon: 'open-in-new', href: 'https://fairtracks.net/survey' },
      ],
      contactUsTitle: 'Contact us!',
      contactPoints: [
        {
          icon: 'bullhorn-variant',
          title: 'Join the FAIRtracks announcement mailing list:',
          link: 'https://sympa.uio.no/elixir.no/subscribe/fairtracks-info',
          linkText: 'Subscribe here',
        },
        {
          icon: 'twitter',
          title: 'Follow us on Twitter:',
          link: 'https://twitter.com/fairtracks',
          linkText: '@fairtracks',
        },
        {
          icon: 'email',
          title: 'Send an e-mail to the international FAIRtracks team:',
          link: 'mailto:fairtracks@elixir.no',
          linkText: 'fairtracks@elixir.no',
        },
      ],
      githubIssues: {
        icon: 'github',
        title: 'Submit an issue to a GitHub repo:',
        repos: [
          {
            title: 'The FAIRtracks draft standard',
            issuesLink: 'https://github.com/fairtracks/fairtracks_standard/issues',
          },
          {
            title: 'TrackFind',
            issuesLink: 'https://github.com/elixir-oslo/trackfind/issues',
          },
          {
            title: 'The FAIRtracks validator',
            issuesLink: 'https://github.com/fairtracks/fairtracks_validator/issues',
          },
        ],
        endComment: '...or any of the others listed on the',
        endCommentPageLink: '',
        endCommentPageText: 'source code page (coming soon...)',
      },
      citeUsTitle: 'Cite us!',
      citeUsText:
        'Please cite our primary publication in any research that uses or extends FAIRtracks:',
      references: [
        {
          icon: 'school',
          text:
            'Gundersen, S. et al. Recommendations to the FAIRification of ' +
            'genomic track metadata. F1000Res 10, ELIXIR-268 (2021).',
          doi: '10.12688/f1000research.28449.1',
        },
      ],
      recommendationsTitle: 'Recommendations',
      recommendationCard: {
        href: 'https://elixir-europe.org/platforms/interoperability/rirs',
        img: this.$getImageAssetObject('images', 'logos', 'elixir-rir.png'),
        maxWidth: '400px',
      },
      logosTitle: 'Funding / Acknowledgements',
      logos: [
        { filename: 'elixir-norway.png' },
        { filename: 'elixir-spain.png' },
        { filename: 'embl-ebi.svg', width: '587', height: '181' },
        { filename: 'inb.png' },
        { filename: 'bsc.jpeg' },
        { filename: 'rcn.png' },
        { filename: 'uio.png' },
        { filename: 'uib.png' },
        { filename: 'ntnu.png' },
      ],
      teamName: 'The FAIRtracks team',
      ourTeam: [
        {
          group: 'ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)',
          members: [
            {
              name: 'Sveinung Gundersen',
              position: '',
              photo: 'sveinung-gundersen-102-[fixed].png',
            },
            {
              name: 'Dmytro Titov*',
              position: '',
              photo: 'dmytro-titov-102-[fixed].png',
            },
            {
              name: 'Radmila Kompova*',
              position: '',
              photo: 'radmila-kompova-102-[fixed].png',
            },
            {
              name: 'Ahmed Ghanem',
              position: '',
              photo: 'ahmed-ghanem-102-[fixed].png',
            },
            {
              name: 'Nazeefa Fatima',
              position: '',
              photo: 'nazeefa-fatima-102-[fixed].png',
            },
            {
              name: 'Federico Bianchini',
              position: '',
              photo: 'federico-bianchini-102-[fixed].png',
            },
            {
              name: 'Eivind Hovig',
              position: '',
              photo: 'eivind-hovig-102-[fixed].png',
            },
          ],
        },
        {
          group:
            'ELIXIR Spain at the Life Sciences Department from the ' +
            'Barcelona Supercomputer Centre (BSC)',
          members: [
            {
              name: 'José Mariá Fernández',
              position: '',
              photo: 'jose-maria-fernandez-102-[fixed].png',
            },
            {
              name: 'Salvador Capella Gutierrez',
              position: '',
              photo: 'salvador-capella-gutierrez-102-[fixed].png',
            },
          ],
        },
        {
          group: 'The Track Hub Registry group at EMBL-EBI, Hinxton, UK',
          members: [
            {
              name: 'Sanjay Boddu',
              position: '',
              photo: 'sanjay-boddu-102-[fixed].png',
            },
            {
              name: 'Peter Harrison',
              position: '',
              photo: 'peter-harrison-102-[fixed].png',
            },
            {
              name: 'Kieron Taylor*',
              position: '',
              photo: 'kieron-taylor-102-[fixed].png',
            },
            {
              name: 'Daniel Zerbino*',
              position: '',
              photo: 'daniel-zerbino-102-[fixed].png',
            },
          ],
        },
        {
          group: 'ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)',
          members: [
            {
              name: 'Matúš Kalaš',
              position: '',
              photo: 'matus-kalas-102-[fixed].png',
            },
          ],
        },
        {
          group:
            'ELIXIR Norway at the Department of Clinical and Molecular Medicine, ' +
            'Norwegian University of Science and Technology (NTNU)',
          members: [
            {
              name: 'Finn Drabløs*',
              position: '',
              photo: 'finn-drablos-102-[fixed].png',
            },
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Community',
      meta: [
        // // TODO: BioSchemas metadata to appear here?
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm'
        // },
      ],
    }
  },
}
</script>
