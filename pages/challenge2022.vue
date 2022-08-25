<template>
  <v-container fluid class="pa-0">
    <ChallengeOverviewSection />
    <ChallengeTaskSection />
    <ChallengeRegistrationSection />
    <ChallengeTimelineSection />
    <SnsGoogleGroup />
    <ChallengeTutorialSection />
    <ChallengeLinkSection />
    <ChallengeTeamSection />
  </v-container>
</template>

<script scoped>
const description =
  "OpenPack Challenge 2022 is an activity recognition competition using the OpenPack dataset. You'll develop a model to recognize the 10 work operations in the packaging work."

export default {
  name: 'ChallengePage',
  head: {
    title: 'OpenPack Challenge 2022',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'OpenPack Challenge 2022',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://open-pack.github.io/challenge2022/',
      },
    ],
  },
}
</script>
