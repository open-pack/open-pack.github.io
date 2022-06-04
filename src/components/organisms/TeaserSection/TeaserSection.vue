<template>
    <v-row>
         <v-col cols="12" class="mx-0 px-0 pt-0 d-none d-md-block">
           <v-parallax src="@/assets/home/teaser_v2.jpeg"></v-parallax>
        </v-col>
        <v-col cols="12" class="mx-0 px-0 pt-0 d-block d-md-none">
            <v-img src="@/assets/home/teaser_v2.jpeg"></v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'TeaserSection',
}
</script>

<style src="./style.scss" lang="scss"></style>