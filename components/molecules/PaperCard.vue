<template>
  <v-card class="white" width="100%" elevation="0">
    <v-card-subtitle class="pb-0">
      {{ publicationType }}
    </v-card-subtitle>
    <v-card-text class="pb-0">
      <h4 class="text-h6 black--text">{{ title }}</h4>
      <p class="op-brown--text lighten-1 mb-0">{{ authors }}</p>
      <p>{{ booktitle }}</p>
      <p v-if="description" class="mb-0">
        {{ description }}
      </p>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-spacer></v-spacer>
      <template v-for="(link, index) in links">
        <a
          :key="index"
          :href="link.url"
          target="_blank"
          class="text-decoration-none"
        >
          <v-btn color="op-brown" text>
            <span class="text-decoration-none">{{ link.linkText }}</span>
            <v-icon class="mx-1">mdi-open-in-new</v-icon>
          </v-btn>
        </a>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    publicationType: {
      type: String,
      default: 'Paper',
    },
    title: {
      type: String,
      default: 'Open Pack',
    },
    authors: {
      type: String,
      default: null,
    },
    booktitle: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    links: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
