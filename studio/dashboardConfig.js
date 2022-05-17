export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6283976a999c277d95de881b',
                  title: 'Sanity Studio',
                  name: 'sanity-11-ty-studio-a2ufrczw',
                  apiId: '4c5be739-d8db-41e9-88c4-929360b20be7'
                },
                {
                  buildHookId: '6283976acf42d27e5bb3bed5',
                  title: 'Blog Website',
                  name: 'sanity-11-ty-web',
                  apiId: 'c57d0d28-ba4e-43e6-81f0-0f1274d43abc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmldev2022/sanity-11ty',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11-ty-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
