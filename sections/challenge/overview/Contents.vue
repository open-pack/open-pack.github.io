<template>
  <section class="gnt-sec-5">
    <v-row>
      <v-col cols="12">
        <h4 class="d-inline-block op-brown--text mb-2">Contents:</h4>
        <v-btn
          v-for="(list, index) in lists"
          :key="index"
          v-scroll-to="`#${list.link}`"
          class="ma-1 text-capitalize"
          outlined
          small
          color="op-brown"
        >
          {{ list.name }}
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeContentsSection',
  data() {
    return {
      lists: [
        {
          name: 'Overview',
          link: 'challenge-task-section-overview',
        },
        {
          name: 'Task (Technical Details)',
          link: 'challenge-task-section-task-def-link',
        },
        {
          name: 'Prize',
          link: 'challenge-prize-section',
        },
        {
          name: 'Rules for OpenPack Challenge 2022',
          link: 'challenge-rule-section',
        },
        {
          name: 'Registration and Submission',
          link: 'challenge-registration-section',
        },
        {
          name: 'Timeline',
          link: 'challenge-timeline-section',
        },
        {
          name: 'Getting Started',
          link: 'challenge-tutorial-section',
        },
        {
          name: 'Tools',
          link: 'challenge-link-section',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
