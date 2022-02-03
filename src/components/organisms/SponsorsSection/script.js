export default {
  name: 'SponsorsSection',
  data: () => ({
    sponsorList: [
        {
            name: "Sponsor A",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            url: "https://bio-navigation.jp/",
            imgSrc: require("../../../assets/Sponsor/Cynav_213ppi.png"),
        },
    ],
  }),
  methods: {
    moveLink (url) {
      window.open(url, '_blank')
    }
  }
}