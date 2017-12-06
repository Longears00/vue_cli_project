import Vue from 'vue';
import Router from 'vue-router';
import test from '@/components/test';
import app from '@/components/App';
import slots from '@/components/slots';
import blogApp from '@/components/blog_app';

Vue.use(Router);

export default new Router({
  routes: [
 {
      path: '/',
      name: 'Hello app',
      component: blogApp,
    },

  ],
});
