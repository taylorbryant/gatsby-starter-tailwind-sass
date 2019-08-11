module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind Sass`,
    description: `Gatsby starter styled with Tailwind & Sass`,
    author: `@taylorbryant`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js")
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true
      }
    },
    `gatsby-plugin-offline`
  ]
};
