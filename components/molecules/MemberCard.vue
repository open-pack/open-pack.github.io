<template>
  <div class="text-center">
    <div v-if="imgSrc">
      <v-avatar :size="imgSize">
        <v-img :src="imgSrc" />
      </v-avatar>
    </div>
    <div v-else>
      <v-avatar color="op-brown" :size="imgSize">
        <span class="white--text text-h4 font-size-black">{{ name[0] }}</span>
      </v-avatar>
    </div>
    <p clss="mt-3">
      <template v-if="link">
        <a :href="link" target="_blank" class="black--text">
          <strong>{{ name }}</strong>
        </a>
      </template>
      <template v-else>
        <strong>{{ name }}</strong>
      </template>
      <br />
      <small>{{ role }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/john.jpg',
    },
    name: {
      type: String,
      default: 'Open Pack',
    },
    role: {
      type: String,
      default: 'Role',
    },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },
    imgSize: {
      type: String,
      default: '5rem',
    },
    link: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
