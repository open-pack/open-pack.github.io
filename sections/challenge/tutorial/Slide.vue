<template>
  <v-col cols="12">
    <h3>Slide</h3>
    <v-row>
      <template v-for="(item, index) in items">
        <v-col :key="index" cols="12" md="6">
          <v-dialog v-model="item.dialog">
            <template #activator="{ on, attrs }">
              <v-card class="op-brown lighten-2" width="100%">
                <div v-bind="attrs" v-on="on">
                  <v-card-subtitle class="pb-0">
                    {{ item.link.tool }}
                  </v-card-subtitle>
                  <v-card-text>
                    <h4 class="text-h5 black--text">{{ item.title }}</h4>
                    <p class="mb-0">
                      {{ item.description }}
                    </p>
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
                  </v-card-text>
                </div>
                <v-card-actions class="d-flex justify-end white">
                  <v-spacer></v-spacer>
                  <v-btn color="op-brown" text v-bind="attrs" v-on="on">
                    Open
                  </v-btn>
                  <v-btn
                    color="op-brown"
                    text
                    :href="item.link.url"
                    target="_blank"
                  >
                    {{ item.link.tool }}
                    <v-icon class="mx-1">mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>

            <v-card max-height="90vh">
              <v-card-title class="text-h5 font-weight-bold op-brown lighten-2">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="font-weight-bold op-brown lighten-2">
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
                <a :href="item.link.url" target="_blank">{{
                  item.link.tool
                }}</a>
              </v-card-text>
              <v-carousel
                :continuous="false"
                :cycle="cycle"
                :show-arrows="true"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="70vh"
                max-height="100%"
              >
                <v-carousel-item v-for="(slide, i) in item.slides" :key="i">
                  <v-img contain :src="slide" max-height="100%"></v-img>
                </v-carousel-item>
              </v-carousel>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="op-brown"
                  text
                  :href="item.link.url"
                  target="_blank"
                >
                  {{ item.link.tool }}
                  <v-icon class="mx-1">mdi-open-in-new</v-icon>
                </v-btn>
                <v-btn color="primary" text @click="item.dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        dialog: false,
        title: 'Tutorial (日本語)',
        description: 'Slides used for the tutorial session @2022-10-28',
        dataId: '137f4123eb2c493fa7f3232e41b7beab',
        dataRatio: '1.77777777777778',
        tags: ['BEGINNER', 'ConvLSTM'],
        link: {
          tool: 'Speaker Deck',
          url: 'https://speakerdeck.com/getty708/openpack-challenge-2022-tiyutoriaru-ri-ben-yu',
        },
        slides: [
          require('@/assets/img/slide/opc-tutorial-ja/Slide1.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide2.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide3.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide4.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide5.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide6.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide7.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide8.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide9.jpeg'),
          require('@/assets/img/slide/opc-tutorial-ja/Slide10.jpeg'),
        ],
      },
    ],
    colors: [
      'green',
      'secondary',
      'yellow darken-4',
      'red lighten-2',
      'orange darken-1',
    ],
    cycle: false,
  }),
}
</script>
<style lang="scss" scoped></style>
