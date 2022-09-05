<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center pb-0">
        <h3 class="title text-h5 text-md-h4 font-weight-black">
          Download Dataset
        </h3>
        <div class="text-caption">
          The full dataset will be made available after the OpenPack Challenge.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <nuxt-link :to="getReleaseNotePath">
          <v-btn
            class="py-1"
            block
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none">
              <span class="text-lowercase">v0.2.1 </span>
              <small>(2022-07-08)</small>
            </span>
          </v-btn>
        </nuxt-link>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <a :href="urlZenodo" target="_blank">
          <v-btn
            class="py-2"
            block
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none text-lowercase"> zenodo </span>
            <v-icon class="text-subtitle-1 mx-1">mdi-open-in-new</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <v-btn
          class="py-2"
          block
          disabled
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none text-capitalize">
            Google Drive
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script scoped>
export default {
  name: 'DatasetSec',
  data: () => ({
    urlZenodo: 'https://doi.org/10.5281/zenodo.5909086',
    newestVersion: 'v0-2-1',
  }),
  computed: {
    getReleaseNotePath: function () {
      return 'release/' + this.newestVersion
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
