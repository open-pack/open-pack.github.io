<template>
  <v-container fluid class="pa-0">
    <GalleryTopSection />
    <GalleryOverviewSection />
    <GalleryPackagingProcedureSection />
    <GalleryActivitySection />
  </v-container>
</template>

<script scoped>
const description =
  'This page explains the OpenPack Dataset using pictures and other information to help you better understand its working procedures and the details of the activity classes.'

export default {
  name: 'GalleryPage',
  head: {
    title: 'Gallery',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Gallery - OpenPack Dataset',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://open-pack.github.io/gallery/',
      },
    ],
  },
}
</script>
