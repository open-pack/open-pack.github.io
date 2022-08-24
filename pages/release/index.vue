<template>
  <v-container>
    <section class="gnt-sec-1 nuxt-content">
      <h2 class="text-h2 primary--text font-weight-bold">Release Notes</h2>
      <v-list three-line>
        <template v-for="(item, index) in list">
          <nuxt-link :key="index" :to="item.path" class="text-decoration-none">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon large> mdi-calendar-blank-outline</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  class="text-h5"
                  v-html="item.title"
                ></v-list-item-title>
                <v-list-item-subtitle
                  class="text-body-1"
                  v-html="item.description"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </nuxt-link>
        </template>
      </v-list>
    </section>
  </v-container>
</template>

<script scoped>
export default {
  async asyncData({ $content }) {
    const list = await $content('release', { deep: true }).fetch()
    return { list }
  },
  head: {
    title: 'Projects',
  },
}
</script>

<style lang="scss" scoped></style>
