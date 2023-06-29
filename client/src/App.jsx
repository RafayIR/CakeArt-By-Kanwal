import Home from "./pages/Home";
import Order from "./pages/Category";
import Cart from "./components/Cart/Cart";
import CheckOut from "./pages/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/sass/all.scss'
import { useState } from "react";

function App() {

    const [cartData, setCartData] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cartItemsLength, setCartItemsLength] = useState(0);
    const [cartItems , setCartItems] =useState([])

    const updateCartItemsLength = (length) => {
        setCartItemsLength(length);
    };

    const handleOrderDetails = (data) => {
        setCartData(data)
    }

    const getCartItems = (data) => {
        setCartItems(data)
    }

    function toggleDrawer(open) {
        setIsDrawerOpen(open);
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/category" element={<Order sendData={handleOrderDetails} setdrawer={toggleDrawer} cartItemsLength={cartItemsLength} />}></Route>
                    <Route path="/checkout"  element={<CheckOut data={cartItems}  cartItemsLength={cartItemsLength}/>}></Route>
                </Routes >
            <Cart data={cartData} getCartItems={getCartItems} updateCartItemsLength={updateCartItemsLength} onClose={() => toggleDrawer(false)} open={isDrawerOpen} />
            </BrowserRouter >
        </>
    )
}

export default App
