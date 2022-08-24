<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>What is OpenPack dataset?</h2>
            <p>
              OpenPacking Dataset is a new large-scale multi-modal dataset of
              packing processes. OpenPack is an open access logistics-dataset
              for human activity recognition, which contains 53 hours of human
              movement data with 21,041 instances of work operation annotation.
              In addition, OpenPack dataset contains data from IoT-enabled
              devices and rich metadata such as error annotation and order
              information.
            </p>
            <v-img :src="keyVisual"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <LpDatasetOverviewFeaturesSec />
      <LpDatasetOverviewSampleSec />
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'OverviewSec',
  data: () => ({
    keyVisual: require('@/assets/img/dataset/OpenPack__KeyVisual.png'),
  }),
}
</script>
<style lang="scss" scoped></style>
