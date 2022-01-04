<template>
    <v-row>
        <v-col cols="12">
            <h2>News</h2>
            <v-list subheader two-line>
                <v-list-item
                    v-for="article in articles"
                    :key="article.title"
                >
                    <v-list-item-avatar>
                    <v-icon
                        :class="article.color"
                        dark
                        v-text="article.icon"
                    ></v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-text="article.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="article.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'News',
  data: () => ({
      articles: [
          {
              color: 'grey lighten-1',
              icon: 'mdi-information',
              subtitle: 'Jan 05, 2021',
              title: 'Open this site',
        },
      ],
  }),
}
</script>

<style src="./News.scss" lang="scss"></style>