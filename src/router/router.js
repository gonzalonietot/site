import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import Work from '../components/Work';
import Technologies from '../components/Technologies';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: Main, component: Main, path: '/'
        },
        {
            name: Work, component: Work, path: '/work'
        },
        {
            name: Technologies, component: Technologies, path: '/technologies'
        }
    ]
});

export default router;