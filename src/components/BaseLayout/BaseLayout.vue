<template>
    <v-app class="pt-6">
        <OpdHeader />
        <v-sheet
            color="white"
            elevation="1"
            height="64"
            width="100%"
        ></v-sheet>
        <v-main class="content">
            <router-view />
        </v-main>
        <OpdFooter />
    </v-app>
</template>

<script>
    import OpdHeader from '@/components/OpdHeader/OpdHeader'
    import OpdFooter from '@/components/OpdFooter/OpdFooter'
    export default {
        name: 'BaseLayout',
        components: {OpdFooter, OpdHeader},
    }
</script>

<style src="./style.scss" lang="scss" />