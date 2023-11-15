import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/Routes";
import Sidebar from "../Sidebar/Sidebar";
import { getCategory } from "../../features/categories/categoriesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <div className="cont">
        <div className="container">
          <Sidebar />
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
