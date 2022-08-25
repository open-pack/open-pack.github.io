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
        cols="6"
        md="4"
        class="d-flex justify-center"
      >
        <a
          :href="item.link"
          target="_blank"
          class="text-decoration-none d-flex align-stretch"
        >
          <v-sheet
            elevation="1"
            width="100%"
            rounded="lg"
            class="pa-2 d-flex align-stretch"
            :class="item.bgColor"
          >
            <template v-if="item.imgSrc">
              <img :src="item.imgSrc" :alt="item.alt" width="100%" />
            </template>
            <template v-else>
              <div>{{ item.alt }}</div>
            </template>
          </v-sheet>
        </a>
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
        imgSrc: require('@/assets/img/sponsors/Toshiba_Logo_Red_RGB.svg'),
        link: null,
        bgColor: 'white',
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
