import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Index from '@/views/Index';
import Detail from '@/views/Detail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'news-detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
