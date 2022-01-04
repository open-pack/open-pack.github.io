<template>
<v-app-bar
    dark
    dense
    height="64"
    fixed
>
    <v-toolbar-title>LOGI Challenge Dataset</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/home" class="text-decoration-none">
        <v-btn elevation="0" >Home</v-btn>
    </router-link>
    <router-link to="/download" class="text-decoration-none">
        <v-btn elevation="0" >Download</v-btn>
    </router-link>
</v-app-bar>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style src="./Header.scss" lang="scss"></style>