import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import ShowProduct from "./pages/ShowProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/cartproject" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ShowProduct />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
