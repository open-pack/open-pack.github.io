<template>
  <section class="gnt-sec-3 op-brown lighten-2" :class="margin">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="font-weight-bold my-3">
            Get Updates from OpenPack Team!
            <v-icon>mdi-email-multiple</v-icon>
          </h2>
          <p>
            Get the latest information about the OpenPack Challenge or OpenPack
            Dataset on our mailing list (Google Group) or Twitter. Please
            subscribe and follow now!
          </p>
          <a
            :href="googleGroup.url"
            target="_blank"
            class="text-decoration-none"
          >
            <v-btn
              class="d-inline-block d-md-none my-2"
              block
              color="op-brown darken-1 white--text text-button"
            >
              <span class="text-decoration-none text-capitalize">
                Subscribe (Google Group)
                <v-icon>mdi-account-multiple</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
            <v-btn
              class="d-none d-md-inline-block my-2"
              color="op-brown darken-1 white--text text-button"
            >
              <span class="text-decoration-none text-capitalize">
                Subscribe (Google Group)
                <v-icon>mdi-account-multiple</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
          </a>
          <a :href="twitter.url" target="_blank" class="text-decoration-none">
            <v-btn
              class="d-inline-block d-md-none my-2"
              block
              color="op-brown darken-1 white--text text-button"
            >
              <span class="text-decoration-none text-capitalize">
                Twitter
                <v-icon>mdi-twitter</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
            <v-btn
              class="d-none d-md-inline-block my-2"
              color="op-brown darken-1 white--text text-button"
            >
              <span class="text-decoration-none text-capitalize">
                Twitter
                <v-icon>mdi-twitter</v-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <Timeline
            id="OpenPackDataset"
            source-type="profile"
            :options="{ tweetLimit: '2' }"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'ChallengeRegistrationSection',
  components: { Timeline },
  props: {
    margin: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    googleGroup: {
      url: 'https://groups.google.com/g/openpack',
    },
    twitter: {
      url: 'https://twitter.com/OpenPackDataset',
    },
  }),
}
</script>
<style lang="scss" scoped></style>
