<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'" class="py-16">
    <v-container fluid class="text-center">
      <v-row>
        <v-col>
          <h2 class="text-h4 text-sm-h3 text-capitalize font-weight-black mb-4">Our Core Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in ourTeam" :key="`person-${i}`">
          <v-sheet class="py-12 px-6" outlined shaped>
            <v-avatar size="240"
              ><img :src="`team/${item.photo}`" :lazy-src="`team/${item.photo}`" alt="John"
            /></v-avatar>
            <div class="text-h5 text-uppercase font-weight-black mt-6 mb-2">
              {{ item.name }}
            </div>
            <div class="text--disabled text-uppercase">
              {{ item.position }}
            </div>
            <div class="text-h6 font-weight-black mt-8">{{ item.phone }}</div>
            <div class="subtitle-1 mt-3">{{ item.email }}</div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ourTeam: [
        {
          name: 'John Churchill',
          position: 'Marketing Director',
          phone: '+1 (987) 1625346',
          email: 'john@example.com',
          photo: 'person-1.jpg',
        },
        {
          name: 'Fiona	Ross',
          position: 'Project Manager',
          phone: '+1 (987) 5894684',
          email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'Justin	Rees',
          position: 'VP Marketing',
          phone: '+1 (987) 6982456',
          email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'Amelia	Ogden',
          position: 'Communication Manager',
          phone: '+1 (987) 6982456',
          email: 'amelia@example.com',
          photo: 'person-4.jpg',
        },
        {
          name: 'Sebastian Bailey',
          position: 'Advertising Director',
          phone: '+1 (987) 6982456',
          email: 'sebastian@example.com',
          photo: 'person-5.jpg',
        },
        {
          name: 'Eric Sutton',
          position: 'Advertising Executive',
          phone: '+1 (987) 6982456',
          email: 'audrey@example.com',
          photo: 'person-6.jpg',
        },
        {
          name: 'Xia Yen',
          position: 'Advertising Manager',
          phone: '+1 (987) 6982456',
          email: 'christian@example.com',
          photo: 'person-7.jpg',
        },
        {
          name: 'Bernadette	Springer',
          position: 'Employee Relations Manager',
          phone: '+1 (987) 6982456',
          email: 'bernadette@example.com',
          photo: 'person-8.jpg',
        },
        {
          name: 'Elizabeth Newman',
          position: 'Project Manager',
          phone: '+1 (987) 6982456',
          email: 'elizabeth@example.com',
          photo: 'person-9.jpg',
        },
      ],
    }
  },
}
</script>
