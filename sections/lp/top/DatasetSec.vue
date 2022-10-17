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
              <span class="text-lowercase">{{ zenodo.version }}</span>
              <small class="text-capitalize">({{ zenodo.date }})</small>
            </span>
          </v-btn>
        </nuxt-link>
      </v-col>
      <v-col cols="12" class="py-1">
        <a :href="optk.url" target="_blank">
          <v-btn
            class="py-2"
            block
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none text-capitalize">
              OpenPack Toolkit
            </span>
            <v-icon class="text-subtitle-1 mx-1">mdi-open-in-new</v-icon>
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script scoped>
export default {
  name: 'DatasetSec',
  data: () => ({
    optk: {
      url: 'https://github.com/open-pack/openpack-toolkit',
    },
    zenodo: {
      url: 'https://doi.org/10.5281/zenodo.5909086',
      version: 'v0-3-1',
      date: 'Oct 17, 2022',
    },
  }),
  computed: {
    getReleaseNotePath: function () {
      return 'release/' + this.zenodo.version
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
