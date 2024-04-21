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
              movement data with 20,129 instances of work operation annotation.
              In addition, OpenPack dataset contains data from IoT-enabled
              devices and rich metadata such as error annotation and order
              information.
            </p>
            <p>
              The latest release is
              <a :href="releaseNote" target="_blank"
                >OpenPack Dataset v1.0.0. (Release Note)</a
              >
            </p>
            <v-img :src="keyVisual"></v-img>
            <v-sheet color="op-brown lighten-2" rounded class="pa-3">
              Paper: N. Yoshimura, J. Morales, T. Maekawa and T. Hara,
              "OpenPack: A Large-Scale Dataset for Recognizing Packaging Works
              in IoT-Enabled Logistic Environments," 2024 IEEE International
              Conference on Pervasive Computing and Communications (PerCom),
              Biarritz, France, 2024 (<a :href="paperLink">link</a>)
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <LpDatasetOverviewFeaturesSec />
      <LpDatasetOverviewSampleSec />
      <LpDatasetOverviewDocsIndexSec />
      <LpDatasetOverviewActivityListSec />
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'OverviewSec',
  data: () => ({
    keyVisual: require('@/assets/img/dataset/OpenPack__KeyVisual.png'),
    releaseNote:
      'https://github.com/open-pack/openpack-dataset/tree/main/release/v1.0.0',
    paperLink: 'https://ieeexplore.ieee.org/abstract/document/10494448',
  }),
}
</script>
<style lang="scss" scoped></style>
