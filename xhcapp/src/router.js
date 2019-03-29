import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Video from './views/video.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/video',
      name: 'video',
      component:Video
    }
  ]
})
