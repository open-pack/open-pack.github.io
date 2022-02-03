<template>
  <v-footer
    color="primary lighten-1"
    padless>
    <v-row no-gutters justify="center">
        <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                :href="icon.link"
                color="white"
                rounded
                icon
        >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
        <v-col
            class="primary lighten-1 py-4 text-center white--text"
            cols="12"
        >
            2022 — <strong>Hara Lab, Graduate School of Information Science and Technology, Osaka University</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'OpdFooter',
  data: () => ({
    icons: [
      {icon: 'mdi-github', link: 'https://github.com/getty708/open-pack-dataset'},
      {icon: 'mdi-school', link: 'https://www.ist.osaka-u.ac.jp/english/'},
    ],
  }),
}
</script>

<style src="./style.scss" lang="scss"/>