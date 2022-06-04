export default {
  name: 'FeaturesSection',
  data: () => ({
    featureList: [
        {
            header: "No.1",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: '11 Skilled Workers',
            body: 'We recruited 16 workers and 11 of them have a job experience of packaging operation.',
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
          title: "Rich Meta Information",
          body: 'For each box, detailed information about the items packed is provided, including scanner time stamps.',
      },
    ],
  }),
}