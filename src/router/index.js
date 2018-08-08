    import Vue from 'vue';
    import Router from 'vue-router';
    import SearchPage from '@/components/SearchPage';
    import ItemWrapper from '@/components/ItemWrapper';

    Vue.use(Router);

    export default new Router({
      routes: [
        {
          path: '/',
          name: 'SearchPage',
          component: SearchPage
        },
        {
          path: '/item/:stackNameUrl',
          name: 'ItemWrapper',
          component: ItemWrapper,
          props: true,
        },
      ]
    });
