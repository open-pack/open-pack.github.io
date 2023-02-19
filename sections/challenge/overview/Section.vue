<template>
  <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-block">
            <v-img :src="imgLogo" alt="OpenPack" class="mr-3" contain></v-img>
          </div>
          <h2
            class="op-brown--text text-h5 text-md-h3 text-center font-weight-bold my-3"
          >
            @PerCom 2023 WS BiRD
          </h2>
          <p>
            We are hosting an activity recognition competition,
            <strong class="font-weight-black">OpenPack Challenge 2022</strong>,
            using the OpenPack dataset at a PerCom 2023 Workshop! The task is
            very simple: Recognize 10 work operations from the OpenPack dataset.
          </p>
          <p>
            High recognition accuracy is required to introduce action
            recognition technology into the industrial domain. However, in
            packaging operations, not only the combination of items to be packed
            change a worker's movements greatly but also a number of other
            difficulties affect the packing process, such as a wide variety of
            motion speed, body movements, and procedures which are highly
            dependent on the skill level of the worker. Develop the perfect
            activity recognition model using OpenPack's various modalities and
            contribute to advancing smart logistics centers!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-alert
            dense
            outlined
            type="error"
            elevation="0"
            class="font-weight-bold"
          >
            This challenge has been over. Thank you for your participation!
          </v-alert>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Start</div>
              <p class="text-h5 font-weight-bold text-decoration-line-through">
                2022-10-15 (AOE)
              </p>
              <div>End</div>
              <p class="text-h5 font-weight-bold text-decoration-line-through">
                2023-01-15 (AOE)
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Task</div>
              <p class="text-h5 font-weight-bold">
                Recognize 10 Work Operations
              </p>
              (Temporal Semantic Segmentation)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Prize</div>
              <div class="text-h5 font-weight-bold">
                <ul>
                  <li>Cash Prize</li>
                  <li>Travel Fee Support to attend Percom2023</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <ChallengeOverviewContents />
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'LpChallengeSection',
  data: () => ({
    imgLogo: require('@/assets/img/brand/OpenPackCHALLENG-black.png'),
  }),
}
</script>
<style lang="scss" scoped></style>
