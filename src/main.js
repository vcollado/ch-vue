// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import VueTidyRoutes from 'vue-tidyroutes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { map } from 'lodash';

import app from './app';
import common from './common';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Router);
Vue.use(ElementUI);

const routes = map(VueTidyRoutes.export(), route => ({
  path: route.path,
  name: route.name,
  components: {
    ...{ default: route.component },
    ...common.components,
  },
}));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // https://github.com/vuejs/vue-router/issues/298#issuecomment-342700295
  router: new Router({
    routes,
  }),
  template: '<app/>',
  components: {
    app,
  },
});
