import {
  faCartShopping,
  faMagnifyingGlass,
  faPhoneVolume,
  faSliders,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const handleOpenCloseSliders = () => {
    const cofMenu = document.getElementById("coffe-menu");
    if (cofMenu) {
      cofMenu.classList.toggle("hidden");
    }
  };
  const handleMobileMenu = () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");
    if (menu_btn && mobile_menu) {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active");
      menu_btn.classList.toggle("sticky");
    }
  };
  return (
    <div>
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
            <Link to="/" className="cursor-pointer">
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
            <div className="flex space-x-4 space-x-reverse justify-between mt-6 md:mt-auto">
              <div className="flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>ورود / عضویت</div>
              </div>

              <NavLink to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute -m-2 bg-sky-400 w-4 px-1 text-white rounded-full">
                  {cart.length}
                </span>
              </NavLink>
            </div>
          </div>
          <div className="pt-12 flex justify-between">
            <div className="hidden md:flex space-x-4 space-x-reverse">
              <div>
                <NavLink to="/">خانه</NavLink>
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
            <div className="md:hidden block">
              <div onClick={() => handleMobileMenu()} className="hamburger">
                <div className="bar"></div>
              </div>
            </div>
            <div className="mobile-nav transition-all rounded-2xl">
              <div>
                <div>
                  <Link
                    to="/"
                    className="hover:text-blue-700 mt-12 text-xs font-bold md:text-lg"
                  >
                    خانه
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products"
                    className="hover:text-blue-700 mt-12 text-xs font-bold md:text-lg"
                  >
                    لیست قیمت محصولات
                  </Link>
                </div>
                <hr />
                <div className="hover:text-blue-700 text-xs font-bold md:text-lg">
                  پرسش و پاسخ
                </div>
                <hr />
                <div className="hover:text-blue-700 text-xs font-bold md:text-lg">
                  پیگیری سفارش
                </div>
                <hr />
                <div>
                  <Link
                    to="/cart"
                    className="hover:text-blue-700 mt-12 text-xs font-bold md:text-lg"
                  >
                    سبد خرید
                  </Link>
                </div>
                <hr />
                <div className="hover:text-blue-700 text-xs font-bold md:text-lg">
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
