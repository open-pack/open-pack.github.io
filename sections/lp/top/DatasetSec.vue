<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="py-1">
        <v-btn
          v-scroll-to="`#download`"
          class="py-1"
          block
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none">
            <span class="text-capitalize">Download</span>
          </span>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <v-btn
          v-scroll-to="`#dataset-docs-toc`"
          class="py-2"
          block
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none text-capitalize">
            Dataset Docs
          </span>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <v-btn
          v-scroll-to="`#tutorials`"
          class="py-2"
          block
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none text-capitalize"> Tutorials </span>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="py-1">
        <v-btn
          v-scroll-to="`#papers`"
          class="py-2"
          block
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none text-capitalize">
            Conference Papers
          </span>
        </v-btn>
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
