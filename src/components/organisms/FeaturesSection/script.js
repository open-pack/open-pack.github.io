export default {
  name: 'FeaturesSection',
  data: () => ({
    featureList: [
        {
            header: "No.1",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: '11 Skilled Workers',
            body: 'We recruited 11 workers who have a job experience of packing operation.',
        },
        {
            header: "No.2",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: "Annotation of Work Process",
            body: '9 work process classes and multiple subclasses are annotated.',
        },
        {
          header: "No.3",
          color: 'grey lighten-1',
          icon: 'mdi-information',
          title: "Rich Side Information",
          body: 'For each box, detailed information about the items packed is provided, including scanner time stamps.',
      },
    ],
  }),
}