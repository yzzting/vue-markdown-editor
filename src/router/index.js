import Vue from 'vue'
import Router from 'vue-router'
import input from '@/components/input'
import output from '@/components/output'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: input
    },
    {
      path:'/',
      name:'output',
      components: output
    }
  ]
})
