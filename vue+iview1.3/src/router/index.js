import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import company from '@/components/company/company.vue'
import companySearch from '@/components/company/companySearch.vue'
import test1 from '@/components/test1'

import school from '@/components/school/school.vue'
import client from '@/components/client/client.vue'


import searchDetails from '@/components/search/searchDetails.vue'
import searchRelation from '@/components/search/searchRelation.vue'

import tubiao from '@/components/school/tubiao.vue'

Vue.use(Router)

export default new Router({
	mode: 'history', // 使用HTML5 History默认是哈希值的方式
routes: [
    {
      path: '/companyinfo',
      name: 'company',
      component: company
    },
    {
      path: '/companySearch',
      name: 'companySearch',
      component: companySearch
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },{
      path: '/schoolinfo',
      name: 'school',
      component: school
    },{
      path: '/clientinfo',
      name: 'client',
      component: client
    },
    {
      path: '/searchDetails',
      name: 'searchDetails',
      component: searchDetails
    },{
      path: '/searchRelation',
      name: 'searchRelation',
      component: searchRelation
    },{
      path: '/tubiao',
      name: 'tubiao',
      component: tubiao
    }
]
})
