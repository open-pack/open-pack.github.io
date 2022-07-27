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
              <a :href="item.link">
                {{ item.title }}
              </a>
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
        date: '2022.04.14',
        title: 'News 1',
        subtitle: '',
        color: 'secondary',
        link: '#',
      },
      {
        date: '2022.05.14',
        title: 'News 2',
        subtitle: '',
        color: 'secondary',
        link: '#',
      },
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
