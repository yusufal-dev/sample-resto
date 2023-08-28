// import { HashRouter as Router, Routes, Route  } from 'react-router-dom'; // FOR ONLINE SERVER
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; // FOR LOCAL SERVER
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import PembayaranPage from './pages/PembayaranPage';
import PaidOrder from './pages/PaidOrder';
import ChoosingPage from './pages/ChoosingPage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setMenuList } from './redux/features/menus/menusSlice';

function App() {
  
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.restaurantInfo)
    const orderResta = restaurant?.order;


    function getMenuList(){
      const response = require("./static/sample-data/get-menu.json");
      
      if(response.success) dispatch(setMenuList(response.menu_list))
               
      
    }

    useEffect(()=>{
      if(orderResta){
        getMenuList();
      }
    }, [orderResta])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} /> 
        <Route path="/choosing" element={<ChoosingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PembayaranPage />} />
        <Route path="/paid-order" element={<PaidOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
