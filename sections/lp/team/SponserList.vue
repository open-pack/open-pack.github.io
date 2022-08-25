<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" md="4" class="d-flex justify-center">
      <v-sheet elevation="1" width="100%" rounded="lg" class="pa-2">
        <a href="https://bio-navigation.jp/" target="_blank">
          <v-img :src="imgCynav" />
        </a>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script scoped>
export default {
  name: 'LpTeamMemberList',
  data: () => ({
    imgCynav: require('@/assets/img/sponsors/Cynav_213ppi.png'),
  }),
}
</script>

<style lang="scss" scoped></style>
