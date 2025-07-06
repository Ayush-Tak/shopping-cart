import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import App from './App.jsx';

const routes =[
    {
        path: '/',
        element:<App />,
        children:[
            {index:true, element:<HomePage />},
            {path:'/shop', element:<ShopPage />},
        ],
    },
];
export default routes;