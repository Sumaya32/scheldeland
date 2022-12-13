module.exports = {
  siteMetadata: {
    title: "Scheldeland",
    description: "Het iconische Scheldeland in Rupelmonde heropent 27/05/2022 de deuren. Met nieuwe eigenaren chef Zjef Thieren en zijn partner Sally Caluwaerts.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
       url: "http://scheldeland.local/graphql",
       schema: {
        timeout: 1000000,
        perPage: 200,
      },
      
      },
    },
  ],
};



/*
   develop: {
        nodeUpdateInterval: 30000,
      },
*/

