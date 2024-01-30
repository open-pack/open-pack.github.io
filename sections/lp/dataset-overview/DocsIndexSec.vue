<template>
  <section id="dataset-docs-toc" class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-link-section">Documentations (Index)</h2>
          <p class="mb-0">Here are links to the dataset documentations.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <ul>
            <li v-for="(link, i) in links" :key="i">
              <a :href="link.url"
                ><strong>{{ link.title }}</strong></a
              >
              <ul>
                <li v-for="(subSec, j) in link.subsections" :key="j">
                  <a :href="subSec.url">{{ subSec.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6">
          <ul>
            <li v-for="(link, i) in linksRight" :key="i">
              <a :href="link.url"
                ><strong>{{ link.title }}</strong></a
              >
              <ul>
                <li v-for="(subSec, j) in link.subsections" :key="j">
                  <a :href="subSec.url">{{ subSec.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'LpLinkSection',
  data: () => ({
    selectedItem: 0,
    links: [
      {
        title: 'Data Collection',
        description: 'Dataset Utilities',
        url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection',
        subsections: [
          {
            title: 'Subjects',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/subjects.md',
          },
          {
            title: 'Recording Sessions',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-collection/sessions.md',
          },
        ],
      },
      {
        title: 'Data Stream',
        url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream',
        subsections: [
          {
            title: 'Wearable Sensors',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docsdata-stream/wearables.md',
          },
          {
            title: 'Vision',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/vision.md',
          },
          {
            title: 'IoT Devices',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/iot.md',
          },
          {
            title: 'Meta Data',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/metadata.md',
          },
          {
            title: 'Preprocessed',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/preprocessed.md',
          },
        ],
      },
    ],
    linksRight: [
      {
        title: 'Annotation',
        url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/annotation',
        subsections: [
          {
            title: 'Activity Class Definition',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/annotation/activity-class.md',
          },
        ],
      },
      {
        title: 'Benchmark',
        url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/benchmark',
        subsections: [
          {
            title: 'Data Split',
            url: 'https://github.com/open-pack/openpack-dataset/blob/main/docs/benchmark/data-split.md',
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
