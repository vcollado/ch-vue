import Vue from 'vue';
import Router from 'vue-router';
import VueTidyRoutes from 'vue-tidyroutes';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css';
import {
  map,
} from 'lodash';
import './element-variables.scss';

import app from './app';
import common from './common';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Element);

const routes = map(VueTidyRoutes.export(), route => ({
  path: route.path,
  name: route.name,
  components: {
    ...{
      default: route.component,
    },
    ...common.components,
  },
}));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // https://github.com/vuejs/vue-router/issues/298#issuecomment-342700295
  router: new Router({
    routes,
  }),
  template: '<app/>',
  components: {
    app,
  },
});
