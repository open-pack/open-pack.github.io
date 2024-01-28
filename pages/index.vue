<template>
  <v-container fluid class="pa-0">
    <LpTopSection />
    <LpDatasetOverviewSection />
    <LpDownloadSection />
    <LpTermsSection />
    <LpEcosystemSection />
    <LpPaperSection />
    <LpTeamSection />
    <LpSnsSection />
  </v-container>
</template>

<script scoped>
export default {
  name: 'IndexPage',
  head: {
    titleTemplate: null,
    title: 'OpenPack Dataset',
  },
}
</script>
