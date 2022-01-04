<template>
    <v-row>
        <v-col cols="12">
            <h2>Features</h2>
            <div class="font-weight-bold">
                OpenPacking Dataset is a new large-scale multi modal dataset of packing process.  
            </div>
        </v-col>
        <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="feat in featureList"
            :key="feat.title">
            <v-card
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1" v-text="feat.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="feat.body"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="4em"
                        color="grey"
                    >
                        <v-icon
                            dark
                            large
                            :class="feat.color"
                            v-text="feat.icon"
                        ></v-icon>
                    </v-list-item-avatar>
                </v-list-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'Features',
  data: () => ({
    featureList: [
        {
            header: "No.1",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: 'Feat (1)',
            body: 'TBA',
        },
        {
            header: "No.2",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: 'Feat (2)',
            body: 'TBA',
        },
    ],
  }),
}
</script>

<style src="./Features.scss" lang="scss"></style>