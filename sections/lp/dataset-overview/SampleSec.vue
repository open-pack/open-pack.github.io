<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left">
          <h2>Sample Video</h2>
        </v-col>
      </v-row>
      <v-row class="d-flex">
        <v-col cols="12" class="d-flex justify-center">
          <youtube ref="youtube" :video-id="videoId"></youtube>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'DatasetSec',
  data: () => ({
    cardElevation: 0,
    videoId: 'KRG5zv3ueRQ',
    playing: false,
  }),
}
</script>
<style lang="scss" scoped>
.embedly-embed {
  width: 100%;
}
</style>
