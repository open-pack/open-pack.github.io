<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-link-section">OpenPack Ecosystem</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in links" :key="index" cols="12" md="6">
          <v-card class="op-brown lighten-2" width="100%">
            <v-card-subtitle class="pb-0">
              {{ item.contentType }}
            </v-card-subtitle>
            <v-card-text>
              <h4 class="text-h5 black--text">{{ item.title }}</h4>
              <p class="mb-0">
                {{ item.description }}
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-end white">
              <v-spacer></v-spacer>
              <a :href="item.url" target="_blank" class="text-decoration-none">
                <v-btn color="op-brown" text>
                  Open
                  <v-icon class="mx-1">mdi-open-in-new</v-icon>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'LpLinkSection',
  data: () => ({
    links: [
      {
        contentType: 'GitHub',
        title: 'OpenPack Dataset',
        description: 'Dataset Documentations',
        url: 'https://github.com/open-pack/openpack-dataset',
      },
      {
        contentType: 'GitHub',
        title: 'OpenPack Toolkit',
        description: 'Dataset Utilities',
        url: 'https://github.com/open-pack/openpack-toolkit',
      },
      {
        contentType: 'GitHub',
        title: 'OpenPack Torch',
        description: 'Sample Code (PyTorch)',
        url: 'https://github.com/open-pack/openpack-torch',
      },
      {
        contentType: 'YouTube',
        title: 'OpenPack Dataset Channel',
        description: 'Sample Videos and a Tutorial Recording (Japanese)',
        url: 'https://www.youtube.com/channel/UC-AzuKxoJcyOtFi7B3CS4rA',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
