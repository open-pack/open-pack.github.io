<template>
    <v-app class="pt-6">
        <Header />
        <v-sheet
            color="white"
            elevation="1"
            height="64"
            width="100%"
        ></v-sheet>
        <v-main class="content">
            <router-view />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header'
    import Footer from '@/components/Footer/Footer'
    export default {
        name: 'Layout',
        components: {Footer, Header},
    }
</script>

<style src="./Layout.scss" lang="scss" />