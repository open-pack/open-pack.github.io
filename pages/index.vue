<template>
  <v-container fluid class="pa-0">
    <LpTopSection />
    <LpDatasetOverviewSection />
    <LpChallengeSection />
    <SnsGoogleGroup margin="mt-0" />
    <LpTermsSection />
    <LpPaperSection />
    <LpTeamSection />
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
