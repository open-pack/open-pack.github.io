<template>
<v-app-bar
    dark
    dense
    height="64"
    fixed
>
    <v-toolbar-title>OpenPacking Dataset</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/home" class="text-decoration-none">
        <v-btn elevation="0" >Home</v-btn>
    </router-link>
</v-app-bar>
</template>

<script>
export default {
    name: 'OpdHeader',
}
</script>

<style src="./style.scss" lang="scss"></style>