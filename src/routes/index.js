import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const appRouter = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) return savedPosition;
        return {
            left: 0,
            top: 0,
        };
    }
});

export default appRouter;