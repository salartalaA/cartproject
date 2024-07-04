import {
  faCartShopping,
  faMagnifyingGlass,
  faPhoneVolume,
  faSliders,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { decrement, increment, removeFromCart } from "../redux/cart/action";

const Header = () => {
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
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
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
  const handleOpenCloseSliders = () => {
    const cofMenu = document.getElementById("coffe-menu");
    if (cofMenu) {
      cofMenu.classList.toggle("hidden");
    }
  };
  const handleMobileMenu = () => {
    const mobile_menu = document.querySelector(".mobile-nav");
    mobile_menu.classList.toggle("is-active");
  };
  const handleCloseMobileMenu = () => {
    const mobile_menu = document.querySelector(".mobile-nav");
    mobile_menu.classList.remove("is-active");
  };
  const handleOpenCloseCartMenu = () => {
    const cart_menu = document.getElementById("cart-menu");
    if (cart_menu) {
      cart_menu.classList.toggle("hidden");
      cart_menu.classList.add("sticky");
    }
  };
  const handleCloseCartMenu = () => {
    const cart_menu = document.getElementById("cart-menu");
    cart_menu.classList.add("hidden");
  };
  return (
    <div>
      <div
        id="cart-menu"
        className="hidden absolute w-80 h-full p-8 text-xs font-bold bg-white"
      >
        <div>
          سبد خرید
          <span className="p-1 bg-yellow-400 text-white rounded-full mx-2">
            {cart.length}
          </span>
          <span
            onClick={() => handleCloseCartMenu()}
            className="float-left border-slate-300 border-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-full p-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
        {cart.length === 0 ? (
          <div>
            <div className="mx-auto mt-10 bg-slate-200 w-full h-fit p-4 rounded-xl">
              <div className="text-center">
                <div className="my-6">
                  <FontAwesomeIcon className="h-12" icon={faCartShopping} />
                </div>
                <div>هیچ محصولی در سبد حرید نیست!</div>
              </div>
            </div>
            <NavLink onClick={() => handleCloseCartMenu()} to="/products">
              <div className="text-center my-6 main-bg p-2 rounded-xl text-white">
                بازگشت به فروشگاه
              </div>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="my-8 overflow-y-auto h-96">
              {cart &&
                cart.map((product) => (
                  <div key={product.id} className="flex">
                    <div className="w-12">
                      <span
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="border-slate-300 border-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-full p-1 cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
                      <img src={product.image} alt="" />
                    </div>
                    <div className="leading-6">
                      <div>{product.name}</div>
                      <div>وزن بسته بندی: {product.weight} گرم</div>
                      <div>آسیاب: {product.eqs}</div>
                      <div className="flex my-4">
                        <div>
                          <span className="main-text">{product.price}</span>{" "}
                          <span className="font-light">تومان</span>
                        </div>
                        <div className="mr-6">
                          <button
                            onClick={() => handleIncrement(product.id)}
                            disabled={product.qty === 0}
                          >
                            +
                          </button>
                        </div>
                        <div className="mx-12">{product.qty}</div>{" "}
                        <div>
                          <button
                            onClick={() => handleDecrement(product.id)}
                            disabled={product.qty === 1}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="fixed h-fit w-64 bg-slate-50 p-2">
              <div className="flex justify-between ">
                <div>جمع جزء:</div>
                <div className="flex">
                  <div className="main-text">
                    {cart.reduce((total, product) => {
                      return total + product.price * product.qty;
                    }, 0)}
                  </div>
                  <span className="font-light mx-1">تومان</span>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <Link
                  to="/cart"
                  onClick={() => handleCloseCartMenu()}
                  className="w-fit p-2 bg-slate-200 rounded-xl font-bold text-xs"
                >
                  مشاهده سبد خرید
                </Link>

                <div
                  onClick={() => handleCloseCartMenu()}
                  className="w-fit p-2 bg-slate-200 rounded-xl font-bold text-xs cursor-pointer"
                >
                  تسویه حساب
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-footer h-fit p-6 text-white text-2xl">
        <div className="container">
          <div>
            <p className="newFont">
              من قهوه را به اندازه خودم دوست دارم چرا که قوی، شیرین و فوق العاده
              جذاب است
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full h-auto p-4 text-sm font-semibold">
        <div className="container px-6">
          <div className="block md:flex">
            <Link to="/cartproject" className="cursor-pointer mx-4">
              <img
                className="mx-auto md:mx-0"
                src="https://28coffee.ir/wp-content/uploads/elementor/thumbs/blog_28coffee-q2cg3yae8o1pfp48m6lk8fq5nuy1qivoakg4tzyrxk.webp"
                alt=""
              />
            </Link>
            <div className="m-auto">
              <div className="mt-10 md:mx-0 mx-auto max-w-96 bg-white flex rounded-md">
                <div className="m-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                  className="max-w-fit p-2 focus:outline-none"
                  placeholder="کلید واژه ی مورد نظر"
                  size="20"
                />
                <div
                  onClick={() => handleOpenCloseSliders()}
                  className="m-2 cursor-pointer mr-auto"
                >
                  <FontAwesomeIcon icon={faSliders} />
                  <div
                    id="coffe-menu"
                    className="absolute -mx-28 mt-2 overflow-y-auto max-h-48 leading-7 text-xs hidden z-50"
                  >
                    <div className="w-36 h-auto bg-white text-yellow-400 pr-2">
                      تمام دسته ها
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      اسباب قهوه
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      اسپرسوسازها
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      تجهیزات بار سرد
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      تجهیزات جانبی
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      تجهیزات دمی و نسل سوم
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      دان قهوه و پودر قهوه
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      فرنج پرس ها
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      لوازم یدکی
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      ماگ و فنجان
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      محصولات فوری و پودری
                    </div>
                    <div className="w-36 h-auto bg-white hover:text-amber-600 pr-2">
                      موکاپات ها
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 space-x-reverse justify-between mt-6 md:mt-16">
              <div className="flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>ورود / عضویت</div>
              </div>

              <button onClick={() => handleOpenCloseCartMenu()}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute -m-2 bg-gray-700 w-4 px-1 text-white rounded-full">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
          <div className="pt-12 flex justify-between">
            <div className="hidden md:flex space-x-4 space-x-reverse">
              <div>
                <NavLink to="/cartproject">خانه</NavLink>
              </div>
              <div>
                <NavLink to="/products">فروشگاه</NavLink>
              </div>
              <div>
                <NavLink>لیست قیمت محصولات</NavLink>
              </div>
              <div>
                <NavLink>وبلاگ</NavLink>
              </div>
              <div>
                <NavLink>آموزش</NavLink>
              </div>
              <div>
                <NavLink>تماس با ما</NavLink>
              </div>
            </div>
            <div className="md:hidden flex gap-2">
              <div onClick={() => handleMobileMenu()} className="hamburger">
                <div className="bar"></div>
              </div>
              <span>فهرست</span>
            </div>
            <div className="mobile-nav transition-all rounded-2xl">
              <div>
                <span
                  onClick={() => handleCloseMobileMenu()}
                  className="float-left border-slate-300 border-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-full p-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <div>
                  <Link
                    to="/cartproject"
                    className="hover:text-sky-600 mt-12 text-xs font-bold md:text-lg"
                  >
                    خانه
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products"
                    className="hover:text-sky-600 mt-12 text-xs font-bold md:text-lg"
                  >
                    لیست قیمت محصولات
                  </Link>
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold md:text-lg">
                  پرسش و پاسخ
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold md:text-lg">
                  پیگیری سفارش
                </div>
                <hr />
                <div>
                  <Link
                    to="/cart"
                    className="hover:text-sky-600 mt-12 text-xs font-bold md:text-lg"
                  >
                    سبد خرید
                  </Link>
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold md:text-lg">
                  وبلاگ
                </div>
              </div>
            </div>

            <div className="flex space-x-4 space-x-reverse">
              <div>09169778006</div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
