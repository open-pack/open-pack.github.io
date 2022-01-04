<template>
    <v-row>
        <v-col cols="12">
            <h2>Publications</h2>
        </v-col>
        <v-col
            cols="12"
            v-for="paper in paperList"
            :key="paper.doi">
            <v-card
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1" v-text="paper.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="paper.date"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="paper.booktitle"></v-list-item-subtitle>
                        <v-list-item-content v-text="paper.note"></v-list-item-content>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'Publications',
  data: () => ({
      paperList: [
          {
              color: 'grey lighten-1',
              icon: 'mdi-information',
              title: 'Paper 1',
              date: "May 00, 2022",
              booktitle: "XXX Conference",
              note: "TBA",
        },
        {
              color: 'grey lighten-1',
              icon: 'mdi-information',
              title: 'Paper 2',
              date: "June 00, 2022",
              booktitle: "XXX Conference",
              note: "TBA",
        },
      ],
  }),
}
</script>

<style src="./Publications.scss" lang="scss"></style>