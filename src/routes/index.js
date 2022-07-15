import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const appRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default appRouter;