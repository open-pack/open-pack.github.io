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
      {
        publicationType: 'Conference',
        title: 'Recent Trends in Sensor-based Activity Recognition',
        booktitle:
          'Proceedings of the IEEE International Conference on Mobile Data Management (MDM)',
        authors: 'T. Maekawa, Q. Xia, R. Otsuka, N. Yoshimura, K. Tanigaki',
        description:
          'This seminar introduces recent trends in sensor-based activity recognition technology. Technology to recognize human activities using sensors has been a hot topic in the field of mobile and ubiquitous computing for many years. Recent developments in deep learning and sensor technology have expanded the application of activity recognition to various domains such as industrial and natural science fields. However, because activity recognition in the new domains suffers from various real problems such as the lack of sufficient training data and complexity of target activities, new solutions have been proposed for the practical problems in applying activity recognition to real-world applications in the new domains. In this seminar, we introduce recent topics in activity recognition from the viewpoints of (1) recent trends in state-of-the-art machine learning methods for practical activity recognition, (2) recently focused domains for human activity recognition such as industrial and medical domains and their public datasets, and (3) applications of activity recognition to the natural science field, especially in animal behavior understanding.',
        links: [
          {
            url: 'https://ieeexplore.ieee.org/abstract/document/10214902',
            linkText: 'IEEE Explore',
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
