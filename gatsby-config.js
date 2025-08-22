module.exports = {
  siteMetadata: {
    about: `안녕하세요, 김민주입니다.`,
    awards: [
      {
        name: '우수상',
        year: '2023',
        description: 'SW중심대학 사업단 캡스톤 디자인 경진대회'
      }
    ],
    // Site URL for when it goes live
    siteUrl: `https://minjoo-6.github.io`,
    // Your Name
    name: 'Kim MinJu',
    // Main Site Title
    title: `Kim MinJu | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Developer portfolio website`,
    // Optional: Twitter account handle
//    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/minjoo-6`,
    // Optional: LinkedIn account URL
//    linkedin: `https://github.com/minjoo-6/devfolio`,
    // Content of the About Me section
//    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'BMS',
        description:
          'BMS 개발',
        role: 'ss',
        stack: 'ss',
        year: `2022.09.01 - 2022.12.12`,
        link: 'https://github.com/minjoo-6/firstsnow-project',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'first noon',
        description: 'Full-Stack Developer, March 2024 - March 2025(1 year)',
        link: 'https://github.com/minjoo-6/firstsnow-project',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Frontend',
        description:
          'JavaScript (ES6+), React, Next.js, Tailwind CSS',
      },
      {
        name: 'Backend',
        description: 'Java, Spring Framework, REST API, PostgreSQL, MySQL',
      },
      {
        name: 'DevOps & Infra',
        description:
          'Docker, AWS, GitHub, Github Actions',
      },
      {
        name: 'Tools & Workflow',
        description:
          'Intellij, Postman, Notion, Slack',
      },
    ],
    certifications: [
      {
        name: '정보처리기사', institution: '한국산업인력공단', year: 2022, description: ''
      },
      {
        name: '컴퓨터활용능력 1급', institution: '대한상공회의소', year: 2022, description: ''
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
