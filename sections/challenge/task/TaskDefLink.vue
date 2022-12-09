<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-task-section-task-def-link">
            Task (Technical Details)
          </h2>
          <p>
            Plese visit the following page for more technical details such as
            task definition, evaluation procedures, and rules.
          </p>

          <a
            href="https://github.com/open-pack/openpack-toolkit/blob/main/docs/OPENPACK_CHALLENGE"
            target="_blank"
            class="text-decoration-none"
          >
            <v-btn
              class="d-inline-block d-md-none my-2"
              block
              color="op-brown darken-1 white--text text-button"
            >
              <span class="text-decoration-none text-capitalize">
                Technical Details
                <v-icon>mdi-github</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
            <v-btn
              class="d-none d-md-inline-block my-2"
              color="op-brown darken-1 white--text text-button"
              @click="openTechnicalDetailsPage"
            >
              <span class="text-decoration-none text-capitalize">
                Technical Details
                <v-icon>mdi-github</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTaskTaskDefLink',
  data: () => ({}),
  methods: {
    openTechnicalDetailsPage() {
      this.$gtag('event', 'open__challenge__task__technical_details', {
        event_name: 'open',
        page_title: 'challenge2022',
        section_name: 'task',
        button: 'technical_details',
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
