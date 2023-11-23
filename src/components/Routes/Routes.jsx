import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import SingleProducts from "../Products/SingleProducts";

import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProducts/>}/>    
      {/* ROUTES.PRODUCT из routes.js где PRODUCT products/:id   То есть при нажатии на елемент (компонент SingleProducts) будет маршрут /products/:id
       */}
    </Routes>
  );
};

export default AppRoutes;
