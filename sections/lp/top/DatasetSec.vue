<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center pb-0">
        <h3 class="title text-h6 text-md-h4 font-weight-black">
          Download Dataset
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="py-1">
        <a
          href="https://github.com/open-pack/openpack-dataset/tree/main/release/v1.0.0"
        >
          <v-btn
            class="py-1"
            block
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none">
              <span class="text-capitalize">Dataset</span>
              <small class="text-capitalize">(v1.0.0)</small>
            </span>
            <v-icon class="text-subtitle-1 mx-1">mdi-open-in-new</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <a href="https://github.com/open-pack/openpack-dataset" target="_blank">
          <v-btn
            class="py-2"
            block
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none text-capitalize"> GitHub </span>
            <small class="text-lowercase">(openpack-dataset)</small>
            <v-icon class="text-subtitle-1 mx-1">mdi-open-in-new</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <a target="_blank">
          <v-btn
            class="py-2"
            block
            disabled
            color="op-brown darken-1 white--text text-h6"
          >
            <span class="text-decoration-none text-capitalize">
              Conference Paper
            </span>
            <small class="text-lowercase">(PerCom2024)</small>
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
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
