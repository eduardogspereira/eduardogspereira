module.exports = {
  siteMetadata: {
    title: `Eduardo G. S. Pereira`,
    description: 'Personal website of Eduardo G. S. Pereira',
    author: `eduardogspereira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eduardogspereira`,
        short_name: `egsp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: './src/assets/favicon.ico',
      },
    },
  ],
}
