<template>
  <header>
    <v-app-bar dark dense height="64" fixed>
      <v-img
        :src="brandLogo"
        alt="OpenPack"
        max-width="50"
        height="24"
        class="mr-3"
      ></v-img>
      <v-toolbar-title :class="brandNameFontWeight"
        >OpenPack Dataset</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="d-block d-sm-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <div class="d-none d-sm-block">
        <router-link
          v-for="(page, index) in pages"
          :key="index"
          :to="page.to"
          class="nt-app-bar-link"
          ><v-btn elevation="0">{{ page.title }}</v-btn>
        </router-link>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list-item class="d-flex py-3 px-0">
        <v-list-item>
          <v-img
            :src="brandLogo"
            alt="OpenPack Dataset"
            max-width="50"
            height="24"
          ></v-img>

          <v-list-item-title :class="brandNameFontWeight" class="text-h6 ml-4">
            OpenPack Dataset
          </v-list-item-title>
        </v-list-item>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <router-link v-for="page in pages" :key="page.title" :to="page.to">
            <v-list-item class="my-1">
              <v-list-item-icon>
                <v-icon v-text="page.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ page.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'HeaderBasic',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
    brandLogo: '',
    drawer: false,
    group: null,
    pages: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';

.nt-app-bar-link {
  text-decoration: none !important;
}

.v-application a {
  text-decoration: none;
}
</style>
