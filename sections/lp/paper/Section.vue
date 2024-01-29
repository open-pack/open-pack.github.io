<template>
  <section id="papers" class="gnt-sec-2 op-brown lighten-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Paper</h2>
          </v-col>
          <v-col v-for="(item, index) in items" :key="index" cols="12">
            <MoleculesPaperCard
              :publication-type="item.publicationType"
              :title="item.title"
              :booktitle="item.booktitle"
              :authors="item.authors"
              :description="item.description"
              :links="item.links"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'LpPaperSection',
  data: () => ({
    items: [
      {
        publicationType: 'Preprint',
        title:
          'OpenPack: A Large-scale Dataset for Recognizing Packaging Works in IoT-enabled Logistic Environments',
        booktitle: 'CoRRabs/2212.11152 (2022)',
        authors: 'N. Yoshimura, J. Morales, T. Maekawa, T. Hara',
        description:
          'In this study, we introduce a new large-scale dataset for packaging work recognition called OpenPack. OpenPack contains 53.8 hours of multimodal sensor data, including keypoints, depth images, acceleration data, and readings from IoT-enabled devices (e.g., handheld barcode scanners used in work procedures), collected from 16 distinct subjects with different levels of packaging work experience.',
        links: [
          {
            url: 'https://arxiv.org/abs/2212.11152',
            linkText: 'arXive.org',
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
