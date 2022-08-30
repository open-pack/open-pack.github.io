<template>
  <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
    <v-container>
      <v-row>
        <v-col cols="12">
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
            packaging operations, not only the combination of items to be packed
            changes a worker's movements greatly, but also a number of other
            difficulties affects the process such as a wide variety of speed,
            body movements and procedures which are highly dependent on the
            skill level of the worker. Develop the perfect activity recognition
            model using OpenPack's various modalities and contribute to the
            advanced smart logistics centers!
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Start</div>
              <p class="text-h5 font-weight-bold">2022-10-15</p>
              <div>End</div>
              <p class="text-h5 font-weight-bold">2023-01-15</p>
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
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'LpChallengeSection',
}
</script>
<style lang="scss" scoped></style>
