import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/pages/homepage/Homepage';
import Settings from '@/components/pages/settings/Settings';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
});
