<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-6">Sponsors</h2>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        md="5"
        class="d-flex justify-center"
      >
        <v-sheet
          elevation="1"
          width="100%"
          rounded="lg"
          class="pa-2"
          :class="item.bgColor"
        >
          <a :href="item.link" target="_blank" class="text-decoration-none">
            <template v-if="item.imgSrc">
              <v-img :src="item.imgSrc" :alt="item.alt"> </v-img>
            </template>
            <template v-else>
              <div>{{ item.alt }}</div>
            </template>
          </a>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script scoped>
export default {
  name: 'ChallengeTeamMemberList',
  data: () => ({
    items: [
      {
        alt: 'Sponsor.1 (TBA)',
        imgSrc: null,
        link: null,
        bgColor: 'op-brown lighten-2',
      },
      {
        alt: 'Cynav: What is Hierarchical Bio-Navigation?',
        imgSrc: require('@/assets/img/sponsors/Cynav_213ppi.png'),
        link: 'https://bio-navigation.jp/',
        bgColor: 'white',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
