<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-5">
          <h3 class="title text-h5 text-md-h4 font-weight-black">NEWS</h3>
        </v-col>
      </v-row>
      <NewsLatestNews />
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'NewsSec',
}
</script>
<style lang="scss" scoped>
.title {
  color: #676c72;
}
</style>
