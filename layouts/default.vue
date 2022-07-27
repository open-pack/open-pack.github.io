<template>
  <v-app>
    <MyHeader />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from '@/sections/app/MyHeader'
import MyFooter from '@/sections/app/MyFooter'

export default {
  name: 'DefaultLayout',
  components: { MyHeader, MyFooter },
}
</script>
