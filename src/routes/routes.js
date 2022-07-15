import TheHome from '../views/TheHome';
import TheCart from '../views/TheCart';
import TheCheckout from '../views/TheCheckout';
import TheAuthentication from '../views/TheAuthentication';

export default [
    {
        path: '/', 
        component: TheHome,
    },

    {
        path: '/auth', 
        component: TheAuthentication,
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