import React, {createContext, useState} from 'react';
export const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [whishlist, setWhishlist] = useState([]);
  const [bookData, setBookData] = useState([]);
  const addToCart = item => {
    cart.push(item);
  };

  const removeFromCart = item => {
    const newArray = cart.filter(object => object !== item);
    setCart(newArray);
  };

  const addToWhishlist = item => {
    whishlist.push(item);
  };

  const removeFromWhishlist = item => {
    const newArray = whishlist.filter(object => object !== item);
    setWhishlist(newArray);
  };

  const value = {
    cart,
    setCart,
    whishlist,
    setWhishlist,
    addToCart,
    addToWhishlist,
    removeFromCart,
    removeFromWhishlist,
    bookData,
    setBookData,
   
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
