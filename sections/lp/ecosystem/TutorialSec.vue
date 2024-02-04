<template>
  <section id="tutorials" class="gnt-sec-3 op-brown lighten-2 py-6">
    <v-container>
      <v-row>
        <v-col cols="12" class="pb-0">
          <h2>Tutorials</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Notebooks (Colab / Jupyter Notebook)</h3>
          <p>
            When you click on the link, a notebook will open in Google Colaboratory. 
            A warning will appear when you run the first cell, but press "continue" to proceed.
            It is recommended to download the dataset to Google Drive when you run the tutorials on Google Colab.
            Before starting tutorials, please follow the instructions in the first tutorial (<a href="https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/Tutorial_Download_OpenPack_Dataset_to_Google_Drive.ipynb">Tutorial - Download OpenPack Dataset to Google Drive</a>) and download the OpenPack dataset from zenodo to your Google Drive.
          </p>
          <v-alert dense outlined type="error" class="mb-0">
            Change runtime to enable GPU acceleration when you train models in
            colab.
          </v-alert>
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
                        v-for="link in item.links"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        class="text-decoration-none"
                      >
                        <v-btn color="op-brown" text>
                          {{ link.tool }}
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

      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTutorialNotebook',
  data: () => ({
    selected: [],
    items: [
      {
        title: 'Download OpenPack Dataset to Google Drive',
        body: 'This tutorial explains how you can download the OpenPack dataset from zenodo to your Google Drive.',
        level: 'Beginner',
        links: [
          {
            tool: 'Colab',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/Tutorial_Download_OpenPack_Dataset_to_Google_Drive.ipynb',
          },
        ],
      },
      {
        title: 'Visualize OpenPack Dataset',
        body: 'This notebook shows how to visualize the OpenPack dataset (sample data in GitHub). You can get an overview of the dataset and get familiar with our data and tools.',
        level: 'Beginner',
        links: [
          {
            tool: 'Colab',
            url: 'https://colab.research.google.com/github/open-pack/openpack-toolkit/blob/main/samples/OpenPack_DataVisualization.ipynb',
          },
        ],
      },
      {
        title:
          'Train DeepConvLSTM and Learn the Modeling  Basics on OpenPack Dataset',
        body: 'This notebook will show you how to train and test DeepConvLSTM models. You will learn important concepts when building a work activity recognition model.',
        level: 'Beginner',
        links: [
          {
            tool: 'Colab',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/Tutorial_Basics_of_Modeling.ipynb',
          },
          {
            tool: 'Colab (日本語)',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/Tutorial_Basics_of_Modeling__JA.ipynb',
          },
        ],
      },
      {
        title: 'U-Net: Train Model and Make Submission File',
        body: 'This notebook shows how to train and test U-Net to predict work operations for each timeslot. You can learn the pipline of model training, e.g. loading data, training, predicting and visuaizing model outputs. This tutorial is prepared for the participants of the OpenPack Challenge 2022.',
        level: 'Beginner (OpenPack Challenge)',
        links: [
          {
            tool: 'Colab',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/U-Net_Train-Model-and-Make-Submission-File.ipynb',
          },
          {
            tool: 'Colab (日本語)',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/U-Net_Train-Model-and-Make-Submission-File__JA.ipynb',
          },
        ],
      },
      {
        title: 'Change Input Data (Customize Configs and Dataset Classes)',
        body: 'This notebook describes how to change input modality for U-Net. Customizing config YAML files and Dataset classes.',
        level: 'Intermediate',
        links: [
          {
            tool: 'Colab',
            url: 'https://colab.research.google.com/github/open-pack/openpack-torch/blob/main/examples/notebooks/U-Net_Change-Input-Data.ipynb',
          },
        ],
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
