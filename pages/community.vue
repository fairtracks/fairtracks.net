<template>
  <section>
    <UiPageHeaderBanner
      :page-header="pageHeader"
      :page-header-images="pageHeaderImages"
    />
    <v-row no-gutters class="pa-0">
      <v-col md="6" cols="12" class="pt-0">
        <SectionsTeamColumn
          class="fill-height"
          :our-team="ourTeam"
          :team-name="teamName"
        />
      </v-col>
      <v-col md="6" cols="12" class="pa-16">
        <SectionsClickableCards
          :title="surveyTitle"
          :cards="surveyCards"
          class="survey"
          @btn-click="showSurveyDialog = true"
        />
        <UiPopupDialog
          v-model="showSurveyDialog"
          :buttons="surveyDialogButtons"
        >
          <v-img
            contain
            :src="
              $getNonImageAssetPath(
                'images',
                surveyCards[0].img[0],
                surveyCards[0].img[1]
              )
            "
          ></v-img>
        </UiPopupDialog>
        <SectionsContactUs
          :title="contactUsTitle"
          :contact-points="contactPoints"
          :github-issues="githubIssues"
        />
        <SectionsCiteUs
          :title="citeUsTitle"
          :text="citeUsText"
          :references="references"
        />
        <v-row no-gutters class="pa-0 pt-16">
          <v-col md="12" cols="12">
            <SectionsClickableCards
              :title="recommendationsTitle"
              :cards="recommendationCards"
            /> </v-col
        ></v-row>
        <SectionsLogoList :title="logosTitle" :logos="logos" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import {
  mdiBullhornVariant,
  mdiTwitter,
  mdiEmail,
  mdiGithub,
  mdiSchool,
} from '@mdi/js'
export default {
  data() {
    return {
      pageHeader: 'Community',
      pageHeaderImages: [
        this.$getImageAssetObject('images', 'tracktypes', 'LP.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LS.svg'),
        this.$getImageAssetObject('images', 'tracktypes', 'LBP.svg'),
      ],
      surveyTitle: 'Fill out our community survey!',
      surveyCards: [
        {
          link: '',
          img: ['media', 'FAIRtracks-survey-ad-webpage.png'],
          maxWidth: '850px',
        },
      ],
      showSurveyDialog: false,
      surveyDialogButtons: [
        { text: 'Later' },
        { text: 'Fill out survey!', link: 'https://fairtracks.net/survey' },
      ],
      contactUsTitle: 'Contact us!',
      contactPoints: [
        {
          icon: mdiBullhornVariant,
          title: 'Join the FAIRtracks announcement mailing list:',
          link: 'https://sympa.uio.no/elixir.no/subscribe/fairtracks-info',
          linkText: 'Subscribe here',
        },
        {
          icon: mdiTwitter,
          title: 'Follow us on Twitter:',
          link: 'https://twitter.com/fairtracks',
          linkText: '@fairtracks',
        },
        {
          icon: mdiEmail,
          title: 'Send an e-mail to the international FAIRtracks team:',
          link: 'mailto:fairtracks@elixir.no',
          linkText: 'fairtracks@elixir.no',
        },
      ],
      githubIssues: {
        icon: mdiGithub,
        title: 'Submit an issue to a GitHub repo:',
        repos: [
          {
            title: 'The FAIRtracks draft standard',
            issuesLink:
              'https://github.com/fairtracks/fairtracks_standard/issues',
          },
          {
            title: 'TrackFind',
            issuesLink: 'https://github.com/elixir-oslo/trackfind/issues',
          },
          {
            title: 'The FAIRtracks validator',
            issuesLink:
              'https://github.com/fairtracks/fairtracks_validator/issues',
          },
        ],
        endComment: '...or any of the others listed on the',
        endCommentPageLink: '/code',
        endCommentPageText: 'source code page',
      },
      citeUsTitle: 'Cite us!',
      citeUsText:
        'Please cite our primary publication in any research that uses or extends FAIRtracks:',
      references: [
        {
          icon: mdiSchool,
          text: 'Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).',
          doi: '10.12688/f1000research.28449.1',
        },
      ],
      recommendationsTitle: 'Recommendations',
      recommendationCards: [
        {
          link: 'https://elixir-europe.org/platforms/interoperability/rirs',
          img: ['logos', 'elixir-rir.png'],
        },
      ],
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
          group:
            'ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)',
          members: [
            {
              name: 'Sveinung Gundersen',
              position: '',
              photo: 'sveinung-gundersen.png',
            },
            {
              name: 'Dmytro Titov*',
              position: '',
              photo: 'dmytro-titov.png',
            },
            {
              name: 'Radmila Kompova*',
              position: '',
              photo: 'radmila-kompova.png',
            },
            {
              name: 'Ahmed Ghanem',
              position: '',
              photo: 'ahmed-ghanem.png',
            },
            {
              name: 'Nazeefa Fatima',
              position: '',
              photo: 'nazeefa-fatima.png',
            },
            {
              name: 'Federico Bianchini',
              position: '',
              photo: 'federico-bianchini.png',
            },
            {
              name: 'Eivind Hovig',
              position: '',
              photo: 'eivind-hovig.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)',
          members: [
            {
              name: 'José Mariá Fernández',
              position: '',
              photo: 'jose-maria-fernandez.png',
            },
            {
              name: 'Salvador Capella Gutierrez',
              position: '',
              photo: 'salvador-capella-gutierrez.png',
            },
          ],
        },
        {
          group: 'The Track Hub Registry group at EMBL-EBI, Hinxton, UK',
          members: [
            {
              name: 'Sanjay Boddu',
              position: '',
              photo: 'sanjay-boddu.png',
            },
            {
              name: 'Peter Harrison',
              position: '',
              photo: 'peter-harrison.png',
            },
            {
              name: 'Kieron Taylor*',
              position: '',
              photo: 'kieron-taylor.png',
            },
            {
              name: 'Daniel Zerbino*',
              position: '',
              photo: 'daniel-zerbino.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)',
          members: [
            {
              name: 'Matúš Kalaš',
              position: '',
              photo: 'matus-kalas.png',
            },
          ],
        },
        {
          group:
            'ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)',
          members: [
            {
              name: 'Finn Drabløs*',
              position: '',
              photo: 'finn-drablos.png',
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
        //     'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        // },
      ],
    }
  },
}
</script>

