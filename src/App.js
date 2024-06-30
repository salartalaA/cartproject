import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import Products from "./pages/Products";
import ShowProduct from "./pages/ShowProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ShowProduct />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
