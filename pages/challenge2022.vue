<template>
  <v-container fluid class="pa-0">
    <ChallengeOverviewSection />
    <ChallengeTaskSection />
    <ChallengePrizeSection />
    <ChallengeRuleSection />
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
  "OpenPack Challenge 2022 is an activity recognition competition using the OpenPack dataset. You'll develop a model to recognize the 10 work operations in the packaging work. (OPEN: 2022-10-15, END: 2023-01-15)"
const metaImg = 'https://open-pack.github.io/img/challenge2022.jpg'

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
      {
        hid: 'og:image',
        property: 'og:image',
        content: metaImg,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@OpenPackDataset',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'open-pack.github.io',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'OpenPack Challenge 2022',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: metaImg,
      },
    ],
  },
}
</script>
