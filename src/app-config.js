import MainPage from 'pages/MainPage';
import SettingsPage from 'pages/SettingsPage';
import WalletsPage from 'pages/WalletsPage';
import CurrenciesPage from 'pages/CurrenciesPage';
import CategoriesPage from 'pages/CategoriesPage';


export default {
    id: 'com.myapp.test',
    name: 'Money Costs',
    theme: 'ios',
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/settings/',
            component: SettingsPage,
        },
        {
            path: '/wallets/',
            component: WalletsPage,
        },
        {
            path: '/currencies/',
            component: CurrenciesPage,
        },
        {
            path: '/categories/',
            component: CategoriesPage,
        },
    ],
};
