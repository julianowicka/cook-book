module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/recipe`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
    ],
};