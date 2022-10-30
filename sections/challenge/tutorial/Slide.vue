<template>
  <v-col cols="12">
    <h3>Slide</h3>
    <v-row class="d-flex justify-start my-1">
      <template v-for="(item, index) in items">
        <v-col :key="index" cols="12" md="6">
          <script
            async
            class="speakerdeck-embed"
            :data-id="item.dataId"
            :data-ratio="item.dataRatio"
            src="//speakerdeck.com/assets/embed.js"
          ></script>
          <div>
            <h4>{{ item.title }}</h4>
            <v-chip
              v-for="(tag, idx) in item.tags"
              :key="idx"
              class="text-uppercase font-weight-bold mr-1"
              color="op-brown darken-2"
              outlined
              label
              small
            >
              {{ tag }}
            </v-chip>
            <a :href="item.link.url" target="_blank">{{ item.link.tool }}</a>
          </div>
        </v-col>
      </template>
    </v-row>
  </v-col>
</template>
<script scoped>
export default {
  name: 'ChallengeTutorialSlide',
  data: () => ({
    items: [
      {
        title: 'Tutorial Session (日本語)',
        dataId: '137f4123eb2c493fa7f3232e41b7beab',
        dataRatio: '1.77777777777778',
        tags: ['BEGINNER', 'ConvLSTM'],
        link: {
          tool: 'Speaker Deck',
          url: 'https://speakerdeck.com/getty708/openpack-challenge-2022-tiyutoriaru-ri-ben-yu',
        },
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
