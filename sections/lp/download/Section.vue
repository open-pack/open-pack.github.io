<template>
  <section class="gnt-sec-3 op-brown lighten-2 py-6">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="font-weight-bold my-3">
            Download
            <v-icon>mdi-download</v-icon>
          </h2>
          <p>
            OpenPack dataset is available in 3 repositories. Different
            repositories provide different sets of data with different licenses.
            Please go to
            <a
              rel="license"
              href="https://github.com/open-pack/openpack-dataset"
              target="_blank"
              >openpack-dataset @GitHub</a
            >
            and follow the instructions.
          </p>
        </v-col>
        <v-col cols="12">
          <h3 class="font-weight-bold">Sample Dataset</h3>
          <p>
            You can see samples of CSVs and images without downloading them.
            Sample dataset is available on
            <a
              href="https://github.com/open-pack/openpack-dataset/tree/main/data/openpack"
              target="_blank"
              >data/openpack(@GitHub:openpack-dataset)</a
            >.
          </p>
        </v-col>
        <v-col cols="12">
          <h3 class="font-weight-bold">Preprocessed Dataset</h3>
          <p>
            Sensors used in the OpenPack dataset have different sampling rates.
            Therefore, each sensor is stored in a separate file. When you use
            them, you have to combine them using timestamps assosiated with each
            record. But we understand that it's not easy for the new users.
          </p>
          <p>
            Therefore, we prepared pre-processed dataset for the quick trial.
            IMU data from 4 sensors and work operation labels are combined into
            one CSV file. This preprocessd dataset is available on
            <a href="https://zenodo.org/records/8145223"
              >zenodo (preprocessed-IMU-with-operation-labels.zip)</a
            >
            (<a
              href="https://zenodo.org/records/8145223/files/preprocessed-IMU-with-operation-labels.zip?download=1"
              class="grey--text text--darken-3"
              >Click to Download [515MB]</a
            >).
          </p>
          <p>
            For more details, see
            <a
              href="https://github.com/open-pack/openpack-dataset/blob/main/docs/data-stream/preprocessed.md"
              target="_blank"
              >data-stream/preprocessed</a
            >.
          </p>
        </v-col>
        <v-col cols="12">
          <h3 class="font-weight-bold">Full Dataset</h3>
          <p>
            See
            <a
              rel="license"
              href="https://github.com/open-pack/openpack-dataset/blob/main/docs/DOWNLOAD.md"
              target="_blank"
              >DOWNLOAD.md (@GitHub:openpack-dataset)</a
            >.
          </p>
          <h4 class="op-brown--text">TL;DR</h4>
          <p>
            Below is a command to download data from
            <a href="https://zenodo.org/records/8145223" target="_blank"
              >zenodo</a
            >.
          </p>
          <v-sheet
            color="op-brown lighten-1"
            class="pa-3 scroll-x-topbar"
            max-width="100%"
          >
            <span class="mb-0"># Get a download script.</span>
            <pre class="mb-3 font-weight-bold">
$ curl -o download_from_zenodo.sh \
  https://raw.githubusercontent.com/open-pack/openpack-dataset/main/release/v1.0.0/download_from_zenodo.sh </pre
            >
            <span class="mt-3"># Create dataset root directory.</span>
            <pre class="mb-3 font-weight-bold">
$ export DATASET_ROOTDIR_PATH=./data/datasets
$ mkdir -p $DATASET_ROOTDIR_PATH</pre
            >
            <span class="mt-3"># Download the dataset.</span>
            <pre class="mb-0 font-weight-bold">
$ bash download_from_zenodo.sh $DATASET_ROOTDIR_PATH</pre
            >
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeRegistrationSection',
  data: () => ({
    googleGroup: {
      url: 'https://groups.google.com/g/openpack',
    },
    twitter: {
      url: 'https://twitter.com/OpenPackDataset',
    },
    github: {
      url: 'https://github.com/open-pack/openpack-dataset',
    },
  }),
}
</script>
<style lang="scss" scoped>
.scroll-x-topbar {
  overflow-x: scroll;
  // width: 500px;
  // height: 10px;
}
.scroll-x-content {
  overflow-y: hidden;
  overflow-x: scroll;
  width: 500px;
}
.inner-topbar {
  width: 1000px;
  height: 1px;
}
.inner-content {
  width: 1000px;
  background-color: lightskyblue;
}
</style>
