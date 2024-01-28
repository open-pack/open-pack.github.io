<template>
  <v-container fluid class="pa-0">
    <LpTopSection />
    <LpDatasetOverviewSection />
    <LpTermsSection />
    <LpPaperSection />
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Getting Started</h2>
          </v-col>
          <ChallengeTutorialNotebook />
        </v-row>
      </v-container>
    </section>
    <ChallengeLinkSection />
    <LpSnsSection />
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
