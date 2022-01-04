<template>
    <v-row>
        <v-col cols="12">
            <h2>Sponsor</h2>
        </v-col>
        <v-col
            cols="6"
            sm="4"
            v-for="sponsor in sponsorList"
            :key="sponsor.name">
            <v-card
                outlined
            >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1" v-text="sponsor.name"></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="4em"
                        color="grey"
                    >
                        <v-icon
                            dark
                            large
                            :class="sponsor.color"
                            v-text="sponsor.icon"
                        ></v-icon>
                    </v-list-item-avatar>
                </v-list-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'Sponsors',
  data: () => ({
    sponsorList: [
        {
            name: "Sponsor A",
            color: 'grey lighten-1',
            icon: 'mdi-information',
        },
    ],
  }),
}
</script>

<style src="./Sponsors.scss" lang="scss"></style>