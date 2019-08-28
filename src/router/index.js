import Vue from 'vue'
import Router from 'vue-router'
import Programa from '@/components/Programa'
import ComoFunciona  from '@/components/ComoFunciona'
import Parceiros from '@/components/Parceiros'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Programa',
      component: Programa
    },
    {
      path: '/comofunciona',
      name: 'ComoFunciona',
      component: ComoFunciona
    },
    {
      path: '/parceiros',
      name: 'Parceiros',
      component: Parceiros
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
  ]
})
