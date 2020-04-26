export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea5a424a4028df51738c4d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h6xt3atp',
                  apiId: 'add4a282-8eda-45d8-a8ec-01e6eae1eeaa'
                },
                {
                  buildHookId: '5ea5a4245418c31d991d731e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s7ahqh7i',
                  apiId: 'bd2acb3d-899d-4bde-9c1b-b37ce9082fc4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dotben/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s7ahqh7i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
