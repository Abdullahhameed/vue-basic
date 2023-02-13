import { createWebHistory, createRouter} from  'vue-router';
import Home from './Home.vue';
import Login from './Login.vue';
import Profile from './Profile.vue';
import PageNotFound from './components/PageNotFound/PageNotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;