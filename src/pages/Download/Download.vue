<template>
<v-container fluid>
    <v-alert
      outlined
      type="warning"
      prominent
      border="left"
    >
      Coming soon ...
    </v-alert>
    
</v-container>
</template>

<script>
import Teaser from '../../components/Teaser/Teaser.vue';

export default {
  name: 'Download',

  components: {
    Teaser, 
  },
};
</script>
