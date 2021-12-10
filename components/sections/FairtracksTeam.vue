<template>
  <section
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    class="pa-16"
  >
    <v-col>
      <v-row class="text-h4 font-weight-black"> The FAIRtracks team </v-row>
      <v-row v-for="(group, i) in ourTeam" :key="`group-${i}`">
        <h4 class="text-h5 text-center pb-5 pt-15 px-5">{{ group.group }}</h4>

        <v-col
          v-for="(item, j) in group.members"
          :key="`person-${j}`"
          cols="12"
        >
          <v-row
            class="mx-auto team-column py-0"
            :class="{ 'flex-row-reverse': j % 2 === 1 }"
          >
            <v-col cols="6" class="pa-0">
              <v-img
                :src="createAssetPath('illustrations', 'team', item.photo)"
                height="135"
                width="102"
                :class="j % 2 === 1 ? 'mr-auto' : 'ml-auto'"
              />
            </v-col>
            <v-col cols="6" class="my-auto">
              <v-row
                class="pa-4"
                :class="j % 2 === 1 ? 'text-right' : 'text-left'"
              >
                <div class="text-h6 font-weight-bold">
                  {{ item.name }}
                </div>
                <div v-if="item.position" class="text-uppercase">
                  {{ item.position }}
                </div>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <h4
        class="text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"
      >
        * Has changed affiliation since contributing to FAIRtracks
      </h4>
    </v-col>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
              name: 'Finn Drabløs',
              position: '',
              photo: 'finn-drablos.png',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.team-column {
  max-width: 250px;
  min-width: 250px;
}
</style>
