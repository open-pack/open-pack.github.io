<template>
<v-container fluid>
    <Teaser />
    <News />
    <Features />
    <Publications />
    <Terms />
    <Sponsors />
</v-container>
</template>

<script>
import Features from '../../components/Features/Features.vue';
import News from '../../components/News/News.vue';
import Publications from '../../components/Publications/Publications.vue';
import Teaser from '../../components/Teaser/Teaser.vue';
import Terms from '../../components/Terms/Terms.vue';
import Sponsors from '../../components/Sponsors/Sponsors.vue';

export default {
  name: 'Home',

  components: {
    Features,
    News,
    Teaser,
    Publications,
    Terms,
    Sponsors,
  },
};
</script>
