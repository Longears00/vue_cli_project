// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vueResource from 'vue-resource';

Vue.use(vueResource);
Vue.config.productionTip = false;
export const bus = new Vue();

//customer directives
Vue.directive('rainbow', {
    bind(el, bindning, vnode) {
      el.style.color = '#' + Math.random().toString().slice(2, 8);
    },
  });

Vue.directive('theme', {
    componentUpdated(el, binding, vnode) {
      if (binding.value == 'spring') {
        el.style.background = 'green';
      } else if (binding.value == 'summer') {
        el.style.background = 'orange';
      } else if (binding.value == 'automn') {
        el.style.background = 'yellow';
      } else if (binding.value == 'winter') {
        el.style.background = 'white';
      }
    },
  });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
