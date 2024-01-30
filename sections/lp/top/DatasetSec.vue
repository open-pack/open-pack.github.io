<template>
  <v-container>
    <v-row>
      <v-col v-for="(link, i) in links" :key="i" cols="12" md="6" class="py-1">
        <v-btn
          v-scroll-to="link.tagId"
          class="py-2"
          block
          color="op-brown darken-1 white--text text-h6"
        >
          <span class="text-decoration-none text-capitalize">
            {{ link.title }}
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script scoped>
export default {
  name: 'DatasetSec',
  data: () => ({
    links: [
      {
        title: 'Dataset Docs',
        tagId: '#dataset-docs-toc',
      },
      {
        title: 'Download',
        tagId: '#download',
      },
      {
        title: 'Tutorials',
        tagId: '#tutorials',
      },
      {
        title: 'Conference Papers',
        tagId: '#papers',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
