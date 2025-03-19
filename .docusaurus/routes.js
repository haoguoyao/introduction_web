import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '206'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '45d'),
    exact: true
  },
  {
    path: '/freelancer',
    component: ComponentCreator('/freelancer', '0f8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/past_works',
    component: ComponentCreator('/past_works', 'dd3'),
    exact: true
  },
  {
    path: '/past_works/archive',
    component: ComponentCreator('/past_works/archive', '6d3'),
    exact: true
  },
  {
    path: '/past_works/authors',
    component: ComponentCreator('/past_works/authors', 'a8a'),
    exact: true
  },
  {
    path: '/past_works/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/past_works/authors/all-sebastien-lorber-articles', 'b8b'),
    exact: true
  },
  {
    path: '/past_works/authors/guoyao',
    component: ComponentCreator('/past_works/authors/guoyao', 'ffb'),
    exact: true
  },
  {
    path: '/past_works/authors/yangshun',
    component: ComponentCreator('/past_works/authors/yangshun', '7f4'),
    exact: true
  },
  {
    path: '/past_works/intro',
    component: ComponentCreator('/past_works/intro', '704'),
    exact: true
  },
  {
    path: '/past_works/project-1',
    component: ComponentCreator('/past_works/project-1', '7c8'),
    exact: true
  },
  {
    path: '/past_works/tags',
    component: ComponentCreator('/past_works/tags', '796'),
    exact: true
  },
  {
    path: '/past_works/tags/portfolio',
    component: ComponentCreator('/past_works/tags/portfolio', '036'),
    exact: true
  },
  {
    path: '/past_works/tags/project',
    component: ComponentCreator('/past_works/tags/project', 'a40'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '393'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '97a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7fc'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
