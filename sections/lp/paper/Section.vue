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
        publicationType: 'Conference',
        title:
          'OpenPack: A Large-scale Dataset for Recognizing Packaging Works in IoT-enabled Logistic Environments',
        booktitle:
          'Proceedings of the IEEE International Conference on Pervasive Computing and Communications (PerCom2024)',
        authors: 'N. Yoshimura, J. Morales, T. Maekawa, T. Hara',
        description:
          'Unlike human daily activities, existing publicly available sensor datasets for work activity recognition in industrial domains are limited by difficulties in collecting realistic data as close collaboration with industrial sites is required. This also limits research on and development of methods for industrial applications. To address these challenges and contribute to research on machine recognition of work activities in industrial domains, in this study, we introduce a new large-scale dataset for packaging work recognition called OpenPack. OpenPack contains 53.8 hours of multimodal sensor data, including acceleration data, keypoints, depth images, and readings from IoT-enabled devices (e.g., handheld barcode scanners), collected from 16 distinct subjects with different levels of packaging work experience. We apply state-of-the-art human activity recognition techniques to the dataset and provide future directions of complex work activity recognition studies in the pervasive computing community based on the results. We believe that OpenPack will contribute to the sensor-based action/activity recognition community by providing challenging tasks. The OpenPack dataset is available at https://open-pack.github.io.',
        links: [
          {
            url: 'https://ieeexplore.ieee.org/abstract/document/10494448',
            linkText: 'IEEE',
          },
          {
            url: 'https://arxiv.org/abs/2212.11152',
            linkText: 'arXiv',
          },
        ],
      },
      {
        publicationType: 'Conference',
        title:
          'Preliminary investigation of SSL for Complex Work Activity Recognition in Industrial Domain via MoIL',
        booktitle:
          'Proceedings of the IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops 2024)',
        authors:
          'Q. Xia, T. Maekawa, J. Morales, T. Hara, H. Oshima, M. Fukuda, Y. Namioka',
        description: '(note: Best WIP Award)',
        links: [],
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
