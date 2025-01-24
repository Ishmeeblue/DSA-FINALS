import { createContext, useEffect, useState } from "react";
import { products} from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₱";
    const deliveryfee = 50;
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    const [token,setToken] = useState('');
    const backendUrl = import.meta.env.VITE_BACKEND_URL + '/';

    const addToCart = async (itemId, shades) => {
    if (!shades) {
        toast.error('Select Product Shade');
        return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        if (cartData[itemId][shades]) {
            cartData[itemId][shades] += 1; 
        } else {
            cartData[itemId][shades] = 1; 
        }
    } else {
        cartData[itemId] = { [shades]: 1 }; 
    }

    setCartItems(cartData);
}

const getCartAmount = async => {
    let totalAmount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=>product._id === items);
        for(const item in cartItems[items]){
            try{
                if (cartItems[items][item]>0){
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            } catch (error) {

            }
        }
    }
    return totalAmount;
}


const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
        for (const shade in cartItems[itemId]) {
            totalCount += cartItems[itemId][shade];  
        }
    }
    return totalCount;
}

const updateQuantity = async (itemId,shades,quantity) => {

    let cartData = structuredClone(cartItems);

    cartData[itemId][shades] = quantity;

    setCartItems(cartData);
}

const value = {
    products, currency, deliveryfee,
    cartItems, addToCart,
    getCartCount,updateQuantity,
    getCartAmount,navigate,
    setToken,token,backendUrl
}
    

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;