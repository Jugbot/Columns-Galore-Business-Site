import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

const { staticRoutes, dynamicRoutes } = require('./routes')
const routes = [
  ...staticRoutes,
  ...dynamicRoutes,
  {
    path: '*',
    redirect: '/'
  }
]

Vue.use(VueRouter)
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
