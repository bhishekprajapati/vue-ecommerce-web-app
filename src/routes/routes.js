import TheHome from '../views/TheHome';
import TheCart from '../views/TheCart';
import TheCheckout from '../views/TheCheckout';

export default [
    {
        path: '/', 
        component: TheHome,
    },

    {
        path: '/cart', 
        component: TheCart,
    },

    {
        path: '/checkout', 
        component: TheCheckout,
    },
];