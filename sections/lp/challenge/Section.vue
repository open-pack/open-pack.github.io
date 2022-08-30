<template>
  <section class="gnt-sec-2 op-brown py-3">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12" class="white--text">
            <h2 class="text-h3 text-center font-weight-bold my-3">
              OpenPack Challenge 2022
            </h2>
            <p>
              We are hosting an activity recognition competition using the
              OpenPack dataset at PerCom 2023 Workshop! The task is very simple:
              recognize 10 work operations in the OpenPack dataset.
            </p>
            <p>
              High recognition accuracy is required to introduce action
              recognition technology into the industrial domain. However, in
              packaging operations, not only does the combination of items to be
              packed change the workers movements greatly, but there are also
              many difficulties such as a wide variety of speed, body movements,
              and procedures, which are highly dependent on the skill level of
              the worker.
            </p>
            <p>
              Develop the perfect activity recognition model using OpenPack's
              various modalities and make it practical!
            </p>
          </v-col>
        </v-row>
        <v-row class="d-flex flex-child align-stretch">
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="op-brown lighten-1" width="100%" elevation="0">
              <v-card-text>
                <div>Start</div>
                <p class="text-h5 text--primary font-weight-bold">2022-10-15</p>
                <div>End</div>
                <p class="text-h5 text--primary font-weight-bold">2023-01-15</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="op-brown lighten-1" width="100%" elevation="0">
              <v-card-text>
                <div>Task</div>
                <p class="text-h5 text--primary font-weight-bold">
                  Recognize 10 Work Operations
                </p>
                (Temporal Semantic Segmentation)
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" class="d-flex">
            <v-card class="op-brown lighten-1" width="100%" elevation="0">
              <v-card-text>
                <div>Prize</div>
                <div class="text-h5 text--primary font-weight-bold">
                  <ul>
                    <li>Cash Prize</li>
                    <li>Travel Fee Support to attend Percom2023</li>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <nuxt-link to="/challenge2022" class="text-decoration-none">
              <v-btn class="text-h5 text-capitalize ma-3" text color="white">
                <v-icon>mdi-arrow-right-thick</v-icon>
                Check Competition Site !
              </v-btn>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'LpChallengeSection',
  data: () => ({
    imgChallengeLogo: require('@/assets/img/brand/OpenPackCHALLENG-white.png'),
  }),
}
</script>
<style lang="scss" scoped></style>
