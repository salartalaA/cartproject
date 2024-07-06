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
    mobile_menu.classList.add("is-active");
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
          <span className="p-1 bg-yellow-400 rounded-sm text-white mx-2">
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
            <div className="mx-auto mt-10 bg-slate-50 shadow-md w-full h-fit p-4 rounded-md">
              <div className="text-center">
                <div className="my-6">
                  <FontAwesomeIcon className="h-12" icon={faCartShopping} />
                </div>
                <div>هیچ محصولی در سبد حرید نیست.</div>
              </div>
            </div>
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
            <div className="fixed h-fit w-64 shadow-md p-2 bottom-24">
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
              <hr className="mt-4 bg-black w-full" />
              <div className="flex justify-between p-4">
                <Link
                  to="/cart"
                  onClick={() => handleCloseCartMenu()}
                  className="w-fit p-2 bg-gray-100 shadow-md hover:bg-sky-500 transition-all hover:text-white rounded-md font-bold text-xs"
                >
                  مشاهده سبد خرید
                </Link>

                <div
                  onClick={() => handleCloseCartMenu()}
                  className="w-fit p-2 bg-gray-100 shadow-md hover:bg-sky-500 transition-all hover:text-white rounded-md font-bold text-xs cursor-pointer"
                >
                  تسویه حساب
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:block bg-footer h-fit p-6 text-white text-2xl">
        <div className="container">
          <div>
            <p className="newFont">
              من قهوه را به اندازه خودم دوست دارم چرا که قوی، شیرین و فوق العاده
              جذاب است
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full h-auto text-sm font-semibold shadow-lg">
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
              <div className="md:mt-10 md:mx-0 mx-auto max-w-96 lg:w-96 bg-white shadow-md flex rounded-md">
                <div className="m-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                  id="search-bar"
                  className="max-w-fit p-2 focus:outline-none"
                  placeholder="کلید واژه ی مورد نظر..."
                />
                <div
                  onClick={() => handleOpenCloseSliders()}
                  className="m-2 cursor-pointer mr-auto"
                >
                  <FontAwesomeIcon icon={faSliders} />
                  <div
                    id="coffe-menu"
                    className="absolute -mx-32 mt-2 overflow-y-auto max-h-48 leading-7 text-xs hidden z-50"
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
              <div className="flex gap-2 mx-3 md:mx-0">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="text-xs font-bold">ورود / عضویت</div>
              </div>

              <button
                className="flex my-auto md:my-0 w-3"
                onClick={() => handleOpenCloseCartMenu()}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute -m-2 bg-gray-700 text-xs px-1 text-white rounded-full">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
          <div className="pt-6 md:py-3 md:pt-10 flex justify-between text-xs font-bold">
            <div className="hidden lg:flex space-x-4 space-x-reverse">
              <div>
                <NavLink to="/cartproject">خانه</NavLink>
              </div>
              <div>
                <NavLink to="/products">فروشگاه</NavLink>
              </div>
              <div>
                <div>لیست قیمت محصولات</div>
              </div>
              <div>
                <div>وبلاگ</div>
              </div>
              <div>
                <div>آموزش</div>
              </div>
              <div>
                <div>تماس با ما</div>
              </div>
            </div>
            <div className="lg:hidden flex gap-2">
              <div onClick={() => handleMobileMenu()} className="hamburger">
                <div className="bar"></div>
              </div>
              <span className="my-auto">فهرست</span>
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
                    className="hover:text-sky-600 mt-12 text-xs font-bold"
                  >
                    خانه
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products"
                    className="hover:text-sky-600 mt-12 text-xs font-bold"
                  >
                    لیست قیمت محصولات
                  </Link>
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold">
                  پرسش و پاسخ
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold">
                  پیگیری سفارش
                </div>
                <hr />
                <div>
                  <Link
                    to="/cart"
                    className="hover:text-sky-600 mt-12 text-xs font-bold"
                  >
                    سبد خرید
                  </Link>
                </div>
                <hr />
                <div className="hover:text-sky-600 text-xs font-bold">
                  وبلاگ
                </div>
              </div>
            </div>

            <div className="flex space-x-4 space-x-reverse text-sm">
              <div className="my-auto">۰۹۱۶۹۷۷۸۰۰۶</div>
              <div className="cursor-pointer my-auto">
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
