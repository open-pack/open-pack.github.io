<template>
  <v-list>
    <v-list-item-group>
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <v-row class="d-flex align-center">
            <v-col
              cols="12"
              md="3"
              sm="3"
              class="pa-0 text-subtitle-2 text-sm-center"
            >
              {{ item.date }}
            </v-col>
            <v-col
              cols="12"
              md="8"
              sm="8"
              class="pa-0 text-sm-subtitle-2 text-caption"
            >
              <nuxt-link :to="item.link" class="text-decoration-none">
                {{ item.title }}
              </nuxt-link>
            </v-col>
          </v-row>
        </v-list-item>

        <v-divider v-if="index < items.length" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        date: '2022.12.31',
        title:
          'Travel support has been extended to top-5 teams! (OpenPack Challenge 2022)',
        subtitle: '',
        color: 'secondary',
        link: 'challenge2022',
      },
      {
        date: '2022.10.17',
        title: 'Dataset (v0.3.1) is released!',
        subtitle: '',
        color: 'secondary',
        link: 'release/v0-3-1',
      },
      // {
      //   date: '2022.10.15',
      //   title: 'OpenPack Challenge has launched!',
      //   subtitle: '',
      //   color: 'op-brawn--text darken-2',
      //   link: 'challenge2022',
      // },
      // {
      //   date: '2022.10.01',
      //   title: 'Dataset (v0.3.0) is released!',
      //   subtitle: '',
      //   color: 'secondary',
      //   link: 'release/v0-3-0',
      // },
      // {
      //   date: '2022.08.23',
      //   title: 'Renewal of our homepage.',
      //   subtitle: 'New website is now published!',
      //   color: 'secondary',
      //   link: '',
      // },
      // {
      //   date: '2022.07.08',
      //   title: 'Dataset (v0.2.1) is released!',
      //   subtitle: '',
      //   color: 'secondary',
      //   link: 'release/v0-2-1',
      // },
    ],
  }),
}
</script>

<style scoped>
.v-list-item[data-v-dbfa1dfa] {
  min-height: none;
  height: auto;
}

.v-list-item {
  min-height: none;
}

.v-sheet {
  max-width: 1000px;
  margin: auto;
}

.v-application a {
  color: black;
  text-decoration-color: #676c72;
}

.v-chip.v-size--default {
  height: 1.8em;
}
</style>
