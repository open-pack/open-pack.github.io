export default {
  name: 'FeaturesSection',
  data: () => ({
    featureList: [
        {
            header: "No.1",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: 'TBA Skilled Workers',
            body: 'We recruited TBA workers who have a job experience of packing operation.',
        },
        {
            header: "No.2",
            color: 'grey lighten-1',
            icon: 'mdi-information',
            title: "Annotation of Work Process",
            body: '8 global operation classes and 17-sub classes are annotated.',
        },
        {
          header: "No.3",
          color: 'grey lighten-1',
          icon: 'mdi-information',
          title: "Rich Side Information",
          body: 'Detail information of packed items for each box and timestamp of scanner is provided.',
      },
    ],
  }),
}