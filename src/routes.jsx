import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
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