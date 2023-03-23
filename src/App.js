import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddProductToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveProductFromCart(productId) {
    setCart(cart.filter(product => product.id !== productId));
  }

  function handleClearCart() {
    setCart([]);
  }



  return (
    <div>
      <Header clearCart={handleClearCart} removeProductFromCart={handleRemoveProductFromCart} cartList={cart} />
      <Products onAddProductToCart={handleAddProductToCart} />
    </div>
  );
}

export default App;
