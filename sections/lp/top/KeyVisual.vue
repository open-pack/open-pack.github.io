<template>
  <section id="top-key-visual" class="gnt-sec-0 py-6">
    <div class="d-block">
      <v-img :src="imgLogo" alt="OpenPack" class="mr-3" contain></v-img>
    </div>
  </section>
</template>

<script scoped>
export default {
  name: 'KeyVisual',
  data: () => ({
    imgLogo: require('@/assets/img/brand/OpenPackDataset-black.png'),
  }),
}
</script>

<style lang="scss" scoped>
#top-key-visual {
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    font-size: 10rem;
    display: flex;
    justify-content: center;
    max-width: 80vw;
  }
}
</style>
