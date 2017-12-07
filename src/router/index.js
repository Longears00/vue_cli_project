import Vue from 'vue';
import Router from 'vue-router';
import test from '@/components/test';
import app from '@/components/App';
import slots from '@/components/slots';
import blogApp from '@/components/blog_app';
import listBlog from '@/components/listBlogs';
import showBlog from '@/components/showBlog';
import addBlog from '@/components/addBlog';
import singleBlog from '@/components/singleBlog';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
   {
        path: '/',
        name: 'Hello app',
        component: listBlog,
      },
      {
          path: '/show',
          name: 'Hello show',
          component: showBlog,
        },
        {
            path: '/add',
            name: 'Hello add',
            component: addBlog,
          },
          {
            path: '/blog/:id',
            component: singleBlog,
          },
   ],
  });
