<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Data Collection Environments & Sensors</h2>
        <v-img :src="dataCollectionEnvImage"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script scoped>
export default {
  name: 'LpDatasetOverviewDataCollectionSec',
  data() {
    return {
      dataCollectionEnvImage: require('@/assets/img/dataset/data-collection-environments.png'),
    }
  },
  computed: {},
}
</script>
<style lang="scss" scoped></style>
