
const staticRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
  {
    path: '/rebuiltcolumns',
    name: 'rebuiltcolumns',
    component: () => import(/* webpackChunkName: "rebuiltcolumns" */ '../views/RebuiltColumns.vue')
  },
  {
    path: '/columnparts',
    name: 'columnparts',
    component: () => import(/* webpackChunkName: "columnparts" */ '../views/ColumnParts.vue')
  },
  {
    path: '/coloroptions',
    name: 'coloroptions',
    component: () => import(/* webpackChunkName: "coloroptions" */ '../views/ColorOptions.vue')
  },
  {
    path: '/techsupport',
    name: 'techsupport',
    component: () => import(/* webpackChunkName: "techsupport" */ '../views/TechSupport.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "payment" */ '../views/Payment.vue')
  },
  {
    path: '/quote',
    component: () => import(/* webpackChunkName: "quoteform" */ '../views/Quote.vue')
  }
]

const MAX_PART_ID = 5

const dynamicRoutes = [
  {
    path: '/part/:id',
    component: () => import(/* webpackChunkName: "partinformation" */ '../views/PartInformation.vue'),
    meta: {
      // special code for including part urls in the sitemap
      sitemap: {
        priority: 0.1,
        slugs: [...Array(MAX_PART_ID).keys()]
      }
    }
  }
]

module.exports = { staticRoutes, dynamicRoutes }
