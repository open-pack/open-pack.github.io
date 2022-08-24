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
            Check List before Registration
          </h3>
          <ul>
            <li>TBA</li>
          </ul>
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
