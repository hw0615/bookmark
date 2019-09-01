import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Main from '@/views/Main'
import Bookmarks from '@/views/Bookmarks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        header: Header,
        default: Main
      }
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      components: {
        header: Header,
        default: Bookmarks
      }
    }
  ]
})
