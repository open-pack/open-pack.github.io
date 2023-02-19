<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 id="challenge-tutorial-section">Getting Started</h2>
          </v-col>
          <ChallengeTutorialNotebook />
          <ChallengeTutorialVideo />
          <ChallengeTutorialSlide />
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTutorialSection',
  data: () => ({}),
}
</script>
<style lang="scss" scoped></style>
