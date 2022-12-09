<template>
  <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2
            id="challenge-registration-section"
            class="text-h5 font-weight-bold my-3"
          >
            Registration and Submission
          </h2>
        </v-col>
        <v-col cols="12">
          <p>
            Before submitting your prediction, registration is required. You
            need to register your information to both (1) CodaLab and (2) Google
            Form. Please follow the procedures below.
          </p>
          <ul>
            <li>
              Solo challengers are also welcom! But don't forget to register you
              as a solo team!
            </li>
            <li>
              No limitation to team size. (But be careful about violation of NO
              PRIVATE SHARING policy when you make multiple teams.)
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <h3 class="text-h6 font-weight-bold my-3">Steps for Registration</h3>
          <ol>
            <li>
              <span class="font-italic op-brown--text">[Every Members]</span>
              Make your codalab accounts. All members should have thier own
              accounts.
            </li>
            <li>
              <span class="font-italic op-brown--text">[Every Members]</span>
              <strong>Register</strong> to this challenge from
              <strong>Participate</strong> tab in the codalab page.
            </li>
            <li>
              <span class="font-italic op-brown--text">[Team Leader]</span>
              Submit the Google Form for team registration.
            </li>
            <li>
              <span class="op-brown--text"
                >(Wait for a while... Admin team will check and aprove your
                team.)</span
              >
            </li>
            <li>
              You got email from codalab about approval and you can submit your
              prediction!
            </li>
          </ol>
        </v-col>
        <v-col cols="12" class="d-none d-md-block">
          <v-btn
            :href="urlCodalab"
            target="_blank"
            class="mx-2"
            color="op-brown darken-1 white--text text-button"
            @click="openCodalabPage"
          >
            <span class="text-decoration-none text-capitalize">
              (Step.2) Player Registration (Codalab)
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
          <v-btn
            :href="urlGoogleForm"
            target="_blank"
            color="op-brown darken-1 white--text text-button"
            @click="openGoogleFormPage"
          >
            <span class="text-decoration-none text-capitalize">
              (Step.3) Team Registration (Google Form)
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-block d-md-none">
          <v-btn
            :href="urlCodalab"
            target="_blank"
            class="my-2"
            block
            color="op-brown darken-1 white--text text-button"
            @click="openCodalabPage"
          >
            <span class="text-decoration-none text-capitalize">
              (S2) Player Registration (Codalab)
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
          <v-btn
            :href="urlGoogleForm"
            target="_blank"
            block
            color="op-brown darken-1 white--text text-button"
            @click="openGoogleFormPage"
          >
            <span class="text-decoration-none text-capitalize">
              (S3) Team Registration (Google Form)
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h6 font-weight-bold">Submission & Leadersboard</h2>
        </v-col>
        <v-col cols="12" class="d-none d-md-block">
          <v-btn
            :href="urlCodalab"
            target="_blank"
            color="op-brown darken-1 white--text text-button"
            @click="openCodalabPage"
          >
            <span class="text-decoration-none text-capitalize">
              Codalab
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-block d-md-none">
          <v-btn
            class="my-2"
            block
            color="op-brown darken-1 white--text text-button"
            @click="openCodalabPage"
          >
            <span class="text-decoration-none text-capitalize">
              Codalab
              <v-icon>mdi-open-in-new</v-icon>
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
import config from '@/assets/config'

export default {
  name: 'ChallengeRegistrationSection',
  data: () => ({
    urlGoogleForm:
      'https://docs.google.com/forms/d/e/1FAIpQLSfK9BueMB3KWbxAcyup13xZtX8YyVyqVtBhG7YMnOpq1dyFqQ/viewform?usp=sf_link',
    urlCodalab: config.challenge.codalab,
  }),
  methods: {
    openGoogleFormPage() {
      this.$gtag('event', 'open__challenge__registration__google_form', {
        event_name: 'open',
        page_title: 'challenge2022',
        section_name: 'registration',
        button: 'google_form',
      })
    },
    openCodalabPage() {
      this.$gtag('event', 'open__challenge__registration__codalab', {
        event_name: 'open',
        page_title: 'challenge2022',
        section_name: 'registration',
        button: 'codalab',
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
