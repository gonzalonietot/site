import VueRouter from 'vue-router';
import Main from '@/pages/Main';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: Main, component: Main, path: '/', auth: true
        },
        {
            name: Main, component: Main, path: '/home', auth: true
        },
    ]
});

export default router;