<template>
  <section class="gnt-sec-5">
    <v-row>
      <v-col cols="12" class="d-flex justify-center pb-0">
        <h3 class="op-brown--text lighten-1">Contents</h3>
      </v-col>
      <v-col cols="12" class="d-flex justify-center pt-0">
        <v-btn
          @click="test"
          v-for="(list, index) in lists"
          :key="index"
          v-scroll-to="`#${list.link}`"
          class="ma-1 text-capitalize"
          outlined
          color="op-brown"
        >
          {{ list.name }}
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script scoped>
export default {
  name: 'GalleryTopContents',
  data() {
    return {
      lists: [
        {
          name: 'Activity - Operations',
          link: 'gellery-activity-openpackoperationlist',
        },
        {
          name: 'Sensors',
          link: 'gallery-overview-sensor',
        },
        {
          name: 'Sessions',
          link: 'gellery-subject-sessions',
        },
      ],
    }
  },
  methods: {
    test() {
      this.$gtag('event', 'test', {
        // パラメータなどはここに追加
        event_name: 'test',
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
