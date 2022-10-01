<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-left">
          <h2>Characterisitcs</h2>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="3" class="d-flex pb-1 pb-md-3 pr-md-1">
          <v-sheet
            color="op-brown darken-1"
            rounded
            :elevation="cardElevation"
            width="100%"
            class="d-flex align-center justify-center"
          >
            <div class="white--text text-h2 font-weight-black">53H+</div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="9" class="d-flex pt-1 pt-md-3 pl-md-1">
          <v-sheet
            color="op-brown lighten-1"
            rounded
            :elevation="cardElevation"
            width="100%"
          >
            <v-col cols="12">
              <h3>Large Scale activity dataset in Industrial Domain</h3>
              <p class="mb-0">
                OpenPack is the first large-scale dataset for packaging work
                recognition. 16 distinct subjects packed 3956 items in 2048
                shipping boxes in total and the total recording length is more
                than 53 hours. The work operations and actions were annotated by
                the professional annotators. The total number of annotated work
                operations and actions are 21,041 and 38,671 respectively.
              </p>
              <div class="d-flex justify-center justify-md-end">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-btn
                    class="ma-2"
                    outlined
                    small
                    disabled
                    color="op-brown darken-1"
                  >
                    <v-icon>mdi-arrow-right-thick</v-icon>
                    Sessions
                  </v-btn>
                </nuxt-link>
                <nuxt-link to="/gallery/" class="text-decoration-none">
                  <v-btn class="ma-2" outlined small color="op-brown darken-1">
                    <v-icon>mdi-arrow-right-thick</v-icon>
                    Activity Classes
                  </v-btn>
                </nuxt-link>
              </div>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="3" class="d-flex pb-1 pb-md-3 pr-md-1">
          <v-sheet
            color="op-brown darken-1"
            rounded
            :elevation="cardElevation"
            width="100%"
            class="d-flex align-center justify-center"
          >
            <div class="white--text text-h2 text-center font-weight-black">
              9 <br />+ IoT
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="9" class="d-flex pt-1 pt-md-3 pl-md-1">
          <v-sheet
            color="op-brown lighten-1"
            rounded
            :elevation="cardElevation"
            width="100%"
          >
            <v-col cols="12">
              <h3>Rich Modalities - Vision + Wearable + IoT Device</h3>
              <p class="mb-0">
                OpenPack provides 9 data modalities including acceleration,
                gyroscope, quaternion, blood volume pulse (BVP), and
                electrodermal activity (EDA) data, as well as keypoints, a LiDAR
                point cloud, and depth images. As for the wearable sensor
                modality, we collected data with 4 IMUs and 2 E4 sensors. For
                the vision modality, 2 depth cameras (front view and top view)
                and 1 LiDAR sensor were installed to our environment. In
                addition, we collected data from IoT devices which are sparse
                but have strong relation with specific activity classes.
              </p>
              <div class="d-flex justify-center justify-md-end">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-btn
                    class="ma-2"
                    outlined
                    small
                    disabled
                    color="op-brown darken-1"
                  >
                    <v-icon>mdi-arrow-right-thick</v-icon>
                    Sensor List
                  </v-btn>
                </nuxt-link>
              </div>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="3" class="d-flex pb-1 pb-md-3 pr-md-1">
          <v-sheet
            color="op-brown darken-1"
            rounded
            :elevation="cardElevation"
            width="100%"
            class="d-flex align-center justify-center"
          >
            <div class="white--text text-h2 text-center font-weight-black">
              META
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="9" class="d-flex pt-1 pt-md-3 pl-md-1">
          <v-sheet
            color="op-brown lighten-1"
            rounded
            :elevation="cardElevation"
            width="100%"
          >
            <v-col cols="12">
              <h3>Rich Meta Data</h3>
              <p class="mb-0">
                OpenPack also provides a rich set of metadata such as subject’s
                experience in packaging work and physical traits of subjects,
                enabling designs of various research tasks such as assessment of
                worker’s performance in addition to basic work activity
                recognition. In addition, we made a list of irregular activities
                which can be used for developing normal detection technologies.
              </p>
              <div class="d-flex justify-center justify-md-end">
                <nuxt-link to="/" class="text-decoration-none">
                  <v-btn
                    class="ma-2"
                    outlined
                    small
                    disabled
                    color="op-brown darken-1"
                  >
                    <v-icon>mdi-arrow-right-thick</v-icon>
                    Meta Data List
                  </v-btn>
                </nuxt-link>
              </div>
            </v-col>
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <v-alert dense outlined type="error">
            The full dataset will be made available after the OpenPack
            Challenge. Currently available data are smaller than the above
            numbers. Depth images and LiDAR data will be available in the next
            version.
          </v-alert>
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
  }),
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
