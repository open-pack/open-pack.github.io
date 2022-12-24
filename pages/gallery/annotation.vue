<template>
  <v-container fluid class="pa-0">
    <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h3 text-center font-weight-bold my-3">
              Gallery - Annotation
            </h2>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <GalleryActivitySection />
  </v-container>
</template>

<script scoped>
const description =
  'Lists of Activity classes used in OpenPack dataset, a new large-scale multi-modal dataset of packing processes.'

export default {
  head: {
    title: 'Annotation - Gallery',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Annotation - Gallery - OpenPack Dataset',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://open-pack.github.io/gallery/annotation',
      },
    ],
  },
}
</script>
