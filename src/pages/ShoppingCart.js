import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
} from "../redux/cart/action";
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

  const handleIncrement = (product) => {
    dispatch(increment(product));
    Swal.fire({
      title: "یک واحد به تعداد محصول اضافه شد",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  const handleDecrement = (product) => {
    dispatch(decrement(product));
    if (product > 1) {
      Swal.fire({
        title: "یک واحد از تعداد محصول کم شد",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        toast: true,
        position: "top",
      });
    }
  };

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
      <CartHeader />
      <div className="main-bg w-fit p-2 my-8 rounded-lg text-sm shadow-md">
        <button>
          <span className="text-white"> سبد خرید</span>
          <span className="bg-white shadow-md p-1 rounded-xl mx-1">
            {cart.length}
          </span>
        </button>
      </div>
      <div className="border-2 border-slate-200 shadow-md w-full h-auto p-3 rounded-xl">
        <div className="text-sky-500 text-xs font-bold">
          <FontAwesomeIcon className="mx-3" icon={faCircleInfo} />
          سبد خرید شما در حال حاضر خالی است.
        </div>
      </div>
      <div className="mx-auto border-2 border-slate-200 shadow-md rounded-xl w-fit p-2 mt-8 text-xs">
        <Link to="/products">بازگشت به فروشگاه</Link>
      </div>
    </div>
  );

  const CartSummary = ({ cart }) => (
    <section className="border-2 border-slate-200 shadow-md rounded-xl my-4 lg:my-0 lg:mx-4 w-full lg:w-1/4 h-fit p-3">
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
      <div className="text-center shadow-md w-full main-bg font-bold text-white p-3 text-xs rounded-lg cursor-pointer">
        <button>ادامه جهت تسویه حساب</button>
      </div>
      <div className="flex gap-1">
        <div className="text-center shadow-md w-full my-2 main-bg font-bold text-white p-3 text-xs rounded-lg cursor-pointer">
          <button>پیش فاکتور سبد خرید</button>
        </div>
        <div
          onClick={handleClearCart}
          className="text-center shadow-md w-full my-2 bg-red-600 hover:bg-red-700 font-bold text-white p-3 text-xs rounded-lg cursor-pointer transition-all"
        >
          <button>پاکسازی سبد خرید</button>
        </div>
      </div>
    </section>
  );

  const CartItem = ({ product, handleRemoveFromCart }) => (
    <div
      key={product.id}
      className="lg:flex justify-between md:px-14 border-2 border-slate-100 shadow-md p-4 sm:leading-6 leading-10 text-xs font-semilight rounded-b-xl"
    >
      <div className="lg:flex">
        <div
          onClick={() => handleRemoveFromCart(product.id)}
          className="my-auto text-center text-red-500 cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div>
          <Link to={`/products/${product.id}`}>
            <img
              className="w-32 lg:w-12 lg:mx-0 mx-auto my-4 lg:my-0"
              src={product.image}
              alt={product.name}
            />
            <hr className="lg:hidden" />
          </Link>
        </div>
        <div>
          <div className="mt-4 lg:mt-0">
            <span className="lg:hidden inline">محصول: </span>
            {product.name}
          </div>
          <div>وزن بسته بندی: {product.weight} گرم</div>
          <div className="mb-4 lg:mb-0">آسیاب: {product.eqs}</div>
          <hr className="lg:hidden" />
        </div>
      </div>
      <div className="my-auto flex">
        <span className="inline lg:hidden my-4 lg:my-0">قیمت:</span>
        <div className="mx-auto my-4 lg:my-0">
          <span className="main-text font-bold">{product.price}</span>
          <span> تومان</span>
        </div>
      </div>
      <hr className="lg:hidden" />
      <div className="my-auto flex">
        <span className="my-auto lg:hidden">تعداد:</span>
        <div className="mx-auto flex shadow-md border-2 border-slate-100 my-2 rounded-xl py-2">
          <div className="mx-6">
            <button
              className="bg-gray-100 shadow-md rounded-full p-1"
              onClick={() => handleDecrement(product.id)}
              disabled={product.qty === 1}
            >
              -
            </button>
          </div>
          <span>{product.qty}</span>
          <div className="mx-6">
            <button
              className="bg-gray-100 shadow-md rounded-full p-1"
              onClick={() => handleIncrement(product.id)}
              disabled={product.qty === 0}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="lg:hidden" />
      <div className="my-auto flex">
        <span className="my-4 lg:my-0 lg:hidden">جمع جزء:</span>
        <div className="mx-auto my-4 lg:my-0">
          <span className="main-text font-bold">
            {product.qty * product.price}
          </span>
          <span> تومان</span>
        </div>
      </div>
    </div>
  );

  const CartItems = ({ cart }) => (
    <section className="border-2 border-gray-100 shadow-md rounded-xl h-full p-6 lg:w-3/4 w-full">
      <div className="border-2 border-gray-100 shadow-md rounded-xl">
        <div className="hidden lg:flex justify-between border-2 border-gray-100 shadow-md p-3 rounded-t-xl md:px-24 text-xs font-bold">
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
      <div className="w-full px-6 shadow-md sm:w-fit my-4 text-center font-semibold h-fit p-2 sm:m-6 main-bg rounded-lg text-white text-xs">
        به روزرسانی سبد خرید
      </div>
      <div className="w-full h-32 border-2 border-slate-200 shadow-md rounded-xl p-3 md:p-6 text-sm">
        <div className="w-full h-full border-2 border-slate-200 shadow-md rounded-xl">
          <div className="flex justify-between m-5 text-xs">
            <input
              id="discountCode"
              className="focus:outline-none w-12 sm:w-fit"
              placeholder="کد تخفیف"
            />
            <div className="float-left main-bg h-fit rounded-lg p-2 mt-3 sm:mt-0 text-white">
              <button>اعمال کد تخفیف</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const CartHeader = () => (
    <section className="flex justify-between mx-3 sm:mx-10 md:mx-12 lg:mx-44 text-center">
      {[
        { icon: faCartShopping, label: "سبد خرید" },
        { icon: faBook, label: "جزئیات پرداخت" },
        { icon: faPuzzlePiece, label: "تکمیل سفارش" },
      ].map(({ icon, label }) => (
        <div key={label} className="py-4 sm:py-0">
          <div>
            <FontAwesomeIcon
              className="main-text border-2 border-slate-200 shadow-md p-2 rounded-xl cursor-pointer"
              icon={icon}
            />
          </div>
          <span className="text-xs font-bold">{label}</span>
        </div>
      ))}
    </section>
  );

  return (
    <main className="container p-4">
      {cart.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <section>
          <CartHeader />
          <div className="main-bg w-fit p-2 my-4 rounded-lg text-sm">
            <button>
              <span className="text-white font-bold text-xs"> سبد خرید</span>
              <span className="bg-white p-1 rounded-xl text-xs mr-1 font-bold">
                {cart.length}
              </span>
            </button>
          </div>
          <section className="lg:flex">
            <CartItems cart={cart} />
            <CartSummary cart={cart} />
          </section>
        </section>
      )}
    </main>
  );
};

export default ShoppingCart;
