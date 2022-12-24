<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12" class="pb-1">
            <h2>Terms of Use (Licence)</h2>
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
        </v-row>
        <v-row>
          <v-col cols="12">
            <h2>Cite</h2>
            <p>
              If you use the OpenPack dataset or code please cite
              <small>(Updated on Dec 24 2022)</small>:
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
                  Works in IoT-enabled Logistic Environments”.
                  CoRRabs/2212.11152 (2022).
                  <a href="https://arxiv.org/abs/2212.11152" target="_blank"
                    >https://arxiv.org/abs/2212.11152</a
                  >
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
