import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Main from '@/views/Main'
import Bookmark from '@/views/Bookmark'

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
      path: '/bookmark',
      name: 'Bookmark',
      components: {
        header: Header,
        default: Bookmark
      }
    }
  ]
})
