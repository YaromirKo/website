export default [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    redirect: '/about',
    children: [
      {
        path: '/about',
        name: 'about',
        meta: {
          title: 'About'
        }
      },
      {
        path: '/experience',
        name: 'experience',
        meta: {
          title: 'Experience'
        }
      },
      {
        path: '/projects',
        name: 'projects',
        meta: {
          title: 'Projects'
        }
      },
      {
        path: '/scientific-publications',
        name: 'scientific-publications',
        meta: {
          title: 'Publications'
        }
      }
    ]
  }
]