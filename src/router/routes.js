
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

const dynamicRoutes = [
  ...staticRoutes,
  {
    path: '/part/:id',
    component: () => import(/* webpackChunkName: "partinformation" */ '../views/PartInformation.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

module.exports = { staticRoutes, dynamicRoutes }
