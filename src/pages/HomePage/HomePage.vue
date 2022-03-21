<template>
<v-container fluid>
    <TeaserSection />
    <NewsSection />
    <FeaturesSection />
    <DownloadSection />
    <TermsSection />
    <SponsorsSection />
</v-container>
</template>

<script>
import FeaturesSection from '../../components/organisms/FeaturesSection/FeaturesSection.vue';
import NewsSection from '../../components/organisms/NewsSection/NewsSection.vue';
import TeaserSection from '../../components/organisms/TeaserSection/TeaserSection.vue';
import DownloadSection from '../../components/organisms/DownloadSection/DownloadSection.vue';
import TermsSection from '../../components/organisms/TermsSection/TermsSection.vue';
import SponsorsSection from '../../components/organisms/SponsorsSection/SponsorsSection.vue';

export default {
  name: 'HomePage',

  components: {
    FeaturesSection,
    NewsSection,
    TeaserSection,
    TermsSection,
    DownloadSection,
    SponsorsSection,
  },
};
</script>
