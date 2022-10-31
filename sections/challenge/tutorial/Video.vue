<template>
  <v-col cols="12">
    <h3>Video</h3>
    <v-row class="d-flex justify-center">
      <template v-for="(item, index) in items">
        <v-col :key="index" cols="12" md="10" class="">
          <v-card>
            <youtube
              ref="youtube"
              :video-id="item.videoId"
              :resize="videoResize"
              :fit-parent="videoFitParent"
            ></youtube>
            <v-card-title class="pt-1 pb-0">{{ item.title }}</v-card-title>
            <v-card-actions class="pt-0">
              <v-chip
                class="text-uppercase font-weight-bold mx-2"
                color="op-brown darken-2"
                outlined
                label
                small
              >
                {{ item.level }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn
                color="op-brown darken-1"
                text
                @click="item.show = !item.show"
              >
                Details
              </v-btn>
              <v-btn icon @click="item.show = !item.show">
                <v-icon>{{
                  item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="item.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.body }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-col>
</template>
<script scoped>
export default {
  name: 'ChallengeTutorialVideo',
  data: () => ({
    videoResize: true,
    videoFitParent: true,
    items: [
      {
        title: 'Tutorial Session (日本語)',
        body: 'This is a tutorial session for the OpenPack Challenge 2022, held on October 28, 2022, at the academic workshop (Hierarchical BioNavigation Workshop). The session explains how to build a work activity recognition model and how to submit it to the competition site (codalab), which is the challenge of the competition.',
        level: 'Beginner',
        videoId: 'X1Tj9t1EbK0',
        show: false,
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
