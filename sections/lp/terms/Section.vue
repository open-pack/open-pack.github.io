<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12" class="pb-1">
            <h2>Terms of Use (Licence)</h2>
            <p>
              The OpenPack dataset consists of RGB data
              <i>(OpenPack Dataset (+RGB))</i> and other data
              <i>(OpenPack Dataset)</i>, and the non-RGB data will continue to
              be provided under "CC BY-NC-SA 4.0". On the other hand, the
              dataset including RGB data will be provided under a different
              license for privacy and ethical considerations, as described
              below. Please check the license of the dataset you use before
              using it.
            </p>
          </v-col>
          <v-col cols="12" class="pb-1">
            <h3>OpenPack Dataset</h3>
            <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"
              >OpenPack Dataset</span
            >
            by
            <a
              xmlns:cc="http://creativecommons.org/ns#"
              href="https://github.com/open-pack"
              property="cc:attributionName"
              rel="cc:attributionURL"
              >OpenPack Team</a
            >
            is licensed under a
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License</a
            >. This means that you must give appropriate credit, provide a link
            to the license, and indicate if changes were made. You may do so in
            any reasonable manner, but not in any way that suggests the licensor
            endorses you or your use. You may not use the material for
            commercial purposes.
          </v-col>
          <v-col cols="12" class="pt-1">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
            >
              <img
                alt="Creative Commons License"
                style="border-width: 0"
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
          </v-col>
          <v-col cols="12" class="pb-1">
            <h3>OpenPack Dataset (+RGB)</h3>
            <p>
              “OpenPack Dataset (+RGB)” is one of the version that includes RGB
              data. OpenPack Dataset (+RGB) is licenced under
              <a
                rel="license"
                href="https://github.com/open-pack/openpack-dataset/blob/main/licenses/OPENPACK_DATASET_RGB_LICENSE.md"
                target="_blank"
                >“OpenPack Dataset (+RGB) License”</a
              >
              . This means that you may not redistribute this data for any
              porpose. Also, the usage of this dataset is limited to the
              academic research only. Use of commercial purpose is prohibited.
              See the
              <a
                rel="license"
                href="https://github.com/open-pack/openpack-dataset/blob/main/licenses/OPENPACK_DATASET_RGB_LICENSE.md"
                target="_blank"
                >OPENPACK_DATASET_RGB_LICENSE.md (@GitHub:openpack-dataset)</a
              >
              for the full license conditions.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h2>Citation</h2>
            <p>
              When you use the OpenPack dataset or code please cite the
              following paper.
              <small>(Updated on Jan 28 2024)</small>:
            </p>
            <v-sheet
              color="op-brown lighten-1"
              rounded
              :elevation="cardElevation"
              width="100%"
            >
              <v-col cols="12">
                <p class="font-italic mb-0">
                  Naoya Yoshimura, Jaime Morales, Takuya Maekawa, Takahiro Hara,
                  “OpenPack: A Large-scale Dataset for Recognizing Packaging
                  Works in IoT-enabled Logistic Environments”. Proceedings of
                  IEEE International Conference on Pervasive Computing and
                  Communications (2024).
                </p>
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'LpChallengeSection',
  data: () => ({
    cardElevation: 0,
  }),
}
</script>
<style lang="scss" scoped></style>
