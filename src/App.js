import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import ShowProduct from "./pages/ShowProduct";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
const LazyHome = lazy(() => import("./pages/Home"));
const LazyProducts = lazy(() => import("./pages/Products"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route
            path="/cartproject"
            element={
              <Suspense fallback={<Loading />}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Loading />}>
                <LazyProducts />
              </Suspense>
            }
          />
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
