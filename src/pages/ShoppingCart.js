import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearCart, removeFromCart } from "../redux/cart/action";
import { Link } from "react-router-dom";
import {
  faBook,
  faCartShopping,
  faCircleInfo,
  faPuzzlePiece,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (selectedProductId) => {
    dispatch(removeFromCart(selectedProductId));
    Swal.fire({
      title: "محصول از سبد خرید حذف شد",
      icon: "warning",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    Swal.fire({
      title: "سبد خرید خالی شد",
      icon: "warning",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: "top",
    });
  };

  const EmptyCartMessage = () => (
    <div>
      <div className="border-2 border-slate-200 w-full h-auto p-3 rounded-xl">
        <div className="text-sky-500 text-center text-sm font-bold">
          <FontAwesomeIcon className="mx-3" icon={faCircleInfo} />
          سبد خرید شما در حال حاضر خالی است
        </div>
      </div>
      <div className="mx-auto border-2 border-slate-200 rounded-xl w-fit p-2 mt-8 text-sm font-bold">
        <Link to="/products">بازگشت به فروشگاه</Link>
      </div>
    </div>
  );

  const CartSummary = ({ cart }) => (
    <div className="border-2 border-slate-200 rounded-xl my-4 md:my-0 md:mx-4 w-full md:w-1/4 h-fit p-3">
      <div className="text-xs mx-6 my-2">جمع کل سبد خرید</div>
      <div className="flex justify-between mx-2 text-xs my-6">
        <div>جمع جزء</div>
        <div>
          {cart.reduce(
            (total, product) => total + product.price * product.qty,
            0
          )}{" "}
          تومان
        </div>
      </div>
      <div className="flex justify-between mx-2 text-xs my-6">
        <div>مجموع</div>
        <div>
          {cart.reduce(
            (total, product) => total + product.price * product.qty,
            0
          )}{" "}
          تومان
        </div>
      </div>
      <div className="text-center w-full bg-sky-400 font-bold text-white p-3 text-sm rounded-lg">
        <button>ادامه جهت تسویه حساب</button>
      </div>
      <div className="text-center w-full my-2 bg-sky-400 font-bold text-white p-3 text-sm rounded-lg">
        <button>پیش فاکتور سبد خرید</button>
      </div>
      <div
        onClick={handleClearCart}
        className="bg-red-600 hover:bg-red-700 p-2 rounded-lg text-white w-full text-center transition-all"
      >
        <button>پاکسازی سبد خرید</button>
      </div>
    </div>
  );

  const CartItem = ({ product, handleRemoveFromCart }) => (
    <div
      key={product.id}
      className="sm:flex justify-between md:px-14 border-2 border-slate-100 p-4 sm:leading-6 leading-10 text-xs font-semibold rounded-b-xl"
    >
      <div className="sm:flex">
        <div
          onClick={() => handleRemoveFromCart(product.id)}
          className="my-auto text-center text-red-500 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div>
          <Link to={`/products/${product.id}`}>
            <img
              className="w-32 sm:w-12 sm:mx-0 mx-auto my-4 sm:my-0"
              src={product.image}
              alt={product.name}
            />
            <hr className="sm:hidden" />
          </Link>
        </div>
        <div>
          <div>
            <span className="sm:hidden inline">محصول: </span>
            {product.name}
          </div>
          <div>وزن بسته بندی: {product.weight} گرم</div>
          <div>آسیاب: {product.eqs}</div>
          <hr className="sm:hidden" />
        </div>
      </div>
      <div className="my-auto">
        <span className="inline sm:hidden">قیمت: </span>
        <span className="text-sky-500 font-bold">{product.price}</span> تومان
      </div>
      <hr className="sm:hidden" />
      <div className="my-auto">
        <span>تعداد: </span>
        <span>{product.qty}</span>
      </div>
      <hr className="sm:hidden" />
      <div className="my-auto">
        <span>جمع جزء: </span>
        <span className="text-sky-500 font-bold">
          {product.price * product.qty}
        </span>{" "}
        تومان
      </div>
    </div>
  );

  const CartItems = ({ cart }) => (
    <div className="border-2 border-gray-100 rounded-xl h-full p-6 sm:w-3/4 w-full">
      <div className="border-2 border-gray-100 rounded-xl">
        <div className="hidden sm:flex justify-between border-2 border-gray-100 p-3 rounded-t-xl md:px-24 text-xs font-bold">
          <div>محصول</div>
          <div>قیمت</div>
          <div>تعداد</div>
          <div>جمع جزء</div>
        </div>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="w-full sm:w-fit my-4 sm:my-0 text-center font-semibold h-fit p-2 sm:m-6 bg-cyan-400 rounded-lg text-white text-xs">
        به روزرسانی سبد خرید
      </div>
      <div className="w-full h-32 border-2 border-slate-200 rounded-xl p-3 md:p-6 text-sm">
        <div className="w-full h-full border-2 border-slate-200 rounded-xl">
          <div className="m-5">
            <input className="focus:outline-none" placeholder="کد تخفیف" />
            <div className="w-fit float-left bg-cyan-400 h-fit rounded-lg p-2 mt-3 sm:mt-0 text-white">
              <button>اعمال کد تخفیف</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CartHeader = () => (
    <div className="hidden sm:flex justify-between sm:mx-44 text-center">
      {[
        { icon: faCartShopping, label: "سبد خرید" },
        { icon: faBook, label: "جزئیات پرداخت" },
        { icon: faPuzzlePiece, label: "تکمیل سفارش" },
      ].map(({ icon, label }) => (
        <div key={label} className="py-4 sm:py-0">
          <div>
            <FontAwesomeIcon
              className="text-sky-400 border-2 border-slate-200 p-2 rounded-xl cursor-pointer"
              icon={icon}
            />
          </div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container p-4">
      {cart.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <div>
          <CartHeader />
          <div className="bg-cyan-400 w-fit p-2 m-8 rounded-lg text-sm">
            <button>
              <span className="text-white"> سبد خرید</span>{" "}
              <span className="bg-white p-1 rounded-xl">{cart.length}</span>
            </button>
          </div>
          <div className="sm:flex">
            <CartItems cart={cart} />
            <CartSummary cart={cart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
