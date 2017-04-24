import Vue from 'vue'
import Router from 'vue-router'
import Ry from '../components/ry.vue'
import Top250 from '../components/Top250.vue'
import Sy from'../components/Sy.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
  	routes:[
  		{path:'/ry',component:Ry},
  		{path:'/sy',component:Sy},
  		{path:'/top250',component:Top250},
  		{path:'/',component:Ry}
  	]
})