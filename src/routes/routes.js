import TheHome from '../views/TheHome';
import TheCart from '../views/TheCart';
import TheCheckout from '../views/TheCheckout';
import TheAuthentication from '../views/TheAuthentication';
import TheUserAccount from "../views/TheUserAccount";

export default [
    {
        path: '/',
        name: 'home', 
        component: TheHome,
    },

    {
        path: '/account',
        name: 'account',
        component: TheUserAccount,
    },

    {
        path: '/auth',
        name: 'authentication', 
        component: TheAuthentication,
    },

    {
        path: '/cart',
        name: 'cart', 
        component: TheCart,
    },

    {
        path: '/checkout',
        name: 'checkout',
        component: TheCheckout,
    },
];