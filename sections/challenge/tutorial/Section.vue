<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>Getting Started</h2>
          </v-col>
          <v-col cols="12">
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                active-class="op-brown--text"
                multiple
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="index">
                    <v-list-item-content>
                      <v-list-item-subtitle
                        class="text-overline"
                        v-text="item.level"
                      ></v-list-item-subtitle>

                      <v-list-item-title
                        class="text-h6"
                        v-text="item.title"
                      ></v-list-item-title>
                      <div>
                        <p class="text--primary mb-0" v-text="item.body"></p>
                      </div>
                      <div class="d-flex justify-end">
                        <a
                          :href="item.url"
                          target="_blank"
                          class="text-decoration-none"
                        >
                          <v-btn color="op-brown" text>
                            Open in {{ item.tool }}
                            <v-icon class="mx-1">mdi-open-in-new</v-icon>
                          </v-btn>
                        </a>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12">
            <v-alert dense outlined type="error">
              Change runtime to enable GPU acceleration when you train models in
              colab.
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTutorialSection',
  data: () => ({
    selected: [],
    items: [
      {
        title: 'Download and visualize OpenPack Dataset',
        body: 'This notebook shows how to download and visualize the OpenPack dataset. You can get an overview of the dataset and get familiar with our data and tools.',
        level: 'Beginner',
        tool: 'Colab',
        url: 'https://colab.research.google.com/github/open-pack/openpack-toolkit/blob/main/samples/OpenPack_DataVisualization.ipynb',
      },
      {
        title: 'U-Net: Train Model and Make Submission File',
        body: 'This notebook shows how to train and test U-Net to predict work operations for each timeslot. You can learn the pipline of model training, e.g. loading data, training, predicting and visuaizing model outputs.',
        level: 'Beginner',
        tool: 'Colab',
        url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/unet/notebooks/U-Net_Train-Model-and-Make-Submission-File.ipynb',
      },
      {
        title: 'Change Input Data (Customize Configs and Dataset Classes)',
        body: 'This notebook describes how to change input modality for UNet. Customizing config YAML files and Dataset classes.',
        level: 'Intermediate',
        tool: 'Colab',
        url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/unet/notebooks/U-Net_Change-Input-Data.ipynb',
      },
      {
        title:
          'Train DeepConvLSTM and Learn the Modeling  Basics on OpenPack Dataset',
        body: 'This notebook will show you how to train and test DeepConvLSTM models. You will learn important concepts when building a work activity recognition model. This tutorial is currently only available in Japanese.',
        level: 'Beginner',
        tool: 'Colab',
        url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/deep-conv-lstm/notebooks/Tutorial_Basics_of_Modeling.ipynb',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
