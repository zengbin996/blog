import { defineClientConfig } from '@vuepress/client';
import Layout from './layouts/Layout.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const newRoute = {
      path: '/utils',
      name: 'utils',
      component: () => import('./pages/utils/Index.vue'),
    };

    router.addRoute(newRoute);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
  layouts: {
    Layout,
  },
});
