import TheHome from '../views/TheHome';
import TheCart from '../views/TheCart';

export default [
    {
        path: '/', 
        component: TheHome,
    },

    {
        path: '/cart', 
        component: TheCart,
    },
];