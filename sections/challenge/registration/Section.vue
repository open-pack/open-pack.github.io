<template>
  <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 font-weight-bold my-3">
            Registration and Submission
          </h2>
          <p>TBA</p>
        </v-col>
        <v-col cols="12">
          <h3 class="text-h6 font-weight-bold my-3">
            Steps to Join This Challenge
          </h3>
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
          <v-btn disabled color="op-brown darken-1 white--text text-button">
            <span class="text-decoration-none text-capitalize">
              Registration (Google Form)
            </span>
          </v-btn>
          <v-btn
            class="mx-2"
            disabled
            color="op-brown darken-1 white--text text-button"
          >
            <span class="text-decoration-none text-capitalize">
              Submission & Leadersboard (Codalab)
            </span>
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-block d-md-none">
          <v-btn
            block
            disabled
            color="op-brown darken-1 white--text text-button"
          >
            <span class="text-decoration-none text-capitalize">
              Registration (Google Form)
            </span>
          </v-btn>
          <v-btn
            class="my-2"
            block
            disabled
            color="op-brown darken-1 white--text text-button"
          >
            <span class="text-decoration-none text-capitalize">
              Submission & Leadersboard (Codalab)
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeRegistrationSection',
}
</script>
<style lang="scss" scoped></style>
