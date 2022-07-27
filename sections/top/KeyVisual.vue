<template>
  <section id="top-key-visual" class="gnt-sec-0">
    <div class="d-block">
      <div class="logo">OpenPack</div>
    </div>
  </section>
</template>

<script scoped></script>

<style lang="scss" scoped>
#top-key-visual {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  div {
    font-size: 10rem;
    display: flex;
    justify-content: center;
    max-width: 80vw;

    .subtitle {
      display: block;
      font-size: 2rem;
      text-align: center;
    }

    @media screen and (max-width: 600px) {
      font-size: 6rem;
      max-width: 90vh;

      .subtitle {
        font-size: 1rem;
      }
    }
  }
}
</style>
