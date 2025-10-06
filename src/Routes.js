import React from "react";
import Home from './Components/pages/Home';
import NavAbout from "./Components/pages/Nav-about";
import NavProducts from "./Components/pages/Nav-products";
import NavOrder from "./Components/pages/Nav-order";
import Mainpost from "./Components/pages/Mainpost";
import Login from "./Components/pages/login";
import Cart from "./Components/pages/Cart";

let routes = [
    {path: '/' ,element: <Home/>},
    {path: '/Products' ,element: <NavProducts/>},
    {path: '/Orders' ,element: <NavOrder/>},
    {path: '/Aboutus' ,element: <NavAbout/>},
    {path: '/'},
    {path: '/Products/:Id' ,element: <Mainpost/>},
    {path: '/login' ,element: <Login/>},
    {path: '/Cart' ,element: <Cart/>}
]


export default routes;




