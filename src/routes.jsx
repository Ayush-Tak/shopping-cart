import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import WishListPage from './pages/WishListPage';
import App from './App.jsx';

const routes =[
    {
        path: '/',
        element:<App />,
        children:[
            {index:true, element:<HomePage />},
            {path:'shop', element:<ShopPage />},
            {path:'cart', element:<CartPage />},
            {path:'wishlist', element:<WishListPage />},
        ],
    },
];
export default routes;