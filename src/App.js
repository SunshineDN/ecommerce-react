import { useState } from "react";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddQuantity(productId) {
    const newCart = cart.map(product => {
      if (product.id === productId) {
        product.quantity += 1;
      }
      return product;
    });
    setCart(newCart);
  };

  function handleAddProductToCart(product) {
    cart.find(item => item.id === product.id) ? handleAddQuantity(product.id) :
    setCart([...cart, product]);
  };

  function handleSubtractQuantity(productId) {

    const newCart = cart.map(product => {
      if (product.id === productId) {
        product.quantity -= 1;
      }
      return product;
    });
    setCart(newCart);
    
    const product = cart.find(product => product.id === productId);
    if (product.quantity === 0) {
      handleRemoveProductFromCart(productId);
    }
  };

  function handleRemoveProductFromCart(productId) {
    handleResetQuantity(productId);
    setCart(cart.filter(product => product.id !== productId));
  };

  function handleClearCart() {
    cart.map(product => {
      product.quantity = 1;
      return product;
    });
    setCart([]);
  };

  function handleResetQuantity(productId) {
    const newCart = cart.map(product => {
      if (product.id === productId) {
        product.quantity = 1;
      }
      return product;
    });

    setCart(newCart);
  };



  return (
    <div>
      <Header clearCart={handleClearCart} removeProductFromCart={handleRemoveProductFromCart} cartList={cart} addQuantity={handleAddQuantity} subtractQuantity={handleSubtractQuantity} />
      <ProductsPage onAddProductToCart={handleAddProductToCart} />
    </div>
  );
};

export default App;
