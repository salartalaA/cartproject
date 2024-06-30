import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/products/action";
import { addToCart, decrement, increment } from "../redux/cart/action";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendarWeek,
  faCartShopping,
  faCodeCompare,
  faComments,
  faInfo,
  faMagnifyingGlass,
  faQuestion,
  faShareNodes,
  faSquareCheck,
  faStar,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

const ShowProduct = () => {
  const { id } = useParams();
  const { products, loading, error } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedEqs, setSelectedEqs] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setIsButtonDisabled(!(selectedWeight && selectedEqs));
  }, [selectedWeight, selectedEqs]);

  const handleAddToCart = (selectedProduct) => {
    dispatch(
      addToCart({
        ...selectedProduct,
        weight: selectedWeight,
        eqs: selectedEqs,
      })
    );
    Swal.fire({
      title: "محصول به سبد خرید اضافه شد",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  const handleWeightClick = (weight) => {
    setSelectedWeight(weight);
  };

  const handleEqsChange = (event) => {
    setSelectedEqs(event.target.value);
  };

  const handleIncrement = (selectedProductId) => {
    dispatch(increment(selectedProductId));
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

  const handleDecrement = (selectedProductId) => {
    dispatch(decrement(selectedProductId));
    Swal.fire({
      title: "یک واحد از تعداد محصول کم شد",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    });
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading products: {error}</h2>;
  if (!products || products.length === 0)
    return <h2>Products not available</h2>;

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );
  if (!selectedProduct) return <h2>Product not found</h2>;

  const cartItem = cart.find((item) => item.id === selectedProduct.id);
  const selectedProductQty = cartItem ? cartItem.qty : 0;

  return (
    <div className="container m-4">
      <div className="lg:flex border-2 border-slate-100 rounded-xl p-4">
        <div className="bg-white w-full lg:w-96 h-96 py-4 lg:py-0 rounded-xl border-2 border-slate-100">
          <img className="w-full h-72" src={selectedProduct.image} alt="" />
          <div className="flex px-3 pb-3">
            <FontAwesomeIcon
              className="border-2 border-slate-200 p-2 rounded-xl cursor-pointer"
              icon={faUpRightAndDownLeftFromCenter}
            />
            <FontAwesomeIcon
              className="border-2 border-slate-200 p-2 rounded-xl cursor-pointer"
              icon={faShareNodes}
            />
          </div>
          <div className="text-xs mx-2">
            <span className="mx-2 border-2 border-yellow-600 text-yellow-600 p-1 rounded-xl text-sm">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            گزارش نادرستی مشخصات
          </div>
        </div>
        <div className="bg-white mx-8 p-6 rounded-xl w-auto">
          <div className="mb-4 flex items-center">
            <span className="text font-semibold">{selectedProduct.name}</span>
            <span className="bg-sky-300 text-blue-600 text-xs font-semibold mx-4 p-1 rounded-xl">
              فروش ویژه
            </span>
          </div>
          <div className="text-xs my-8 font-semibold">
            دسته : دان قهوه و پودرقهوه برچسب : عربیکا, {selectedProduct.name}
          </div>
          <div className="text-xs font-semibold leading-6">
            {selectedProduct.name}
            <div>اسکرین ۱۷ دانه متوسط</div>
          </div>
          <div className="my-4 mt-8 text-sm font-bold">
            <span className="text-blue-600">{selectedProduct.price}</span> تومان
          </div>
          <div className="flex">
            <h2 className="text-xs my-4 font-bold">وزن بسته بندی</h2>
            <div className="flex space-x-4 space-x-reverse m-3 mx-auto text-white">
              {["۲۵۰", "۵۰۰", "۷۰۰"].map((weight) => (
                <div
                  key={weight}
                  onClick={() => handleWeightClick(weight)}
                  className={`text-black text-xs p-2 rounded-lg cursor-pointer bg-stone-100 hover:bg-green-700 hover:text-white transition-all ${
                    selectedWeight === weight ? "selected" : ""
                  }`}
                >
                  {weight} گرم
                </div>
              ))}
            </div>
          </div>
          <div className="sm:flex text-xs">
            <h2 className="font-bold my-2">اسباب</h2>
            <div className="max-w-96 sm:mx-24">
              <select
                className="w-46 border-2 border-slate-100 p-2 rounded-xl cursor-pointer focus:outline-none"
                value={selectedEqs}
                onChange={handleEqsChange}
              >
                <option value="">یک گزینه را انتخاب کنید</option>
                <option value="اسپرسو خانگی">اسپرسو خانگی</option>
                <option value="نیمه صنعتی">نیمه صنعتی</option>
                <option value="تجاری">تجاری</option>
              </select>
            </div>
          </div>
          <div className="sm:flex my-6">
            <div className="flex">
              <div className="text-center my-auto border-2 border-slate-100 p-3 py-5 rounded-s-lg text-sm">
                {selectedProductQty}
              </div>
              <div className="text-center my- border-2 border-slate-100 p-3 rounded-e-lg text-sm">
                <button
                  onClick={() => handleIncrement(selectedProduct.id)}
                  disabled={selectedProductQty === 0}
                >
                  +
                </button>
                <button
                  onClick={() => handleDecrement(selectedProduct.id)}
                  disabled={selectedProductQty === 0}
                >
                  -
                </button>
              </div>
            </div>
            <div>
              <div className="flex sm:mx-4 mx-2 text-sm">
                <div className="bg-green-700 text-white p-2 h-fit rounded-s-lg my-auto">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className={`w-full text-xs sm:text-sm my-4 border-1 rounded-e-lg p-2 text-white cursor-pointer ${
                    isButtonDisabled ? "bg-gray-600" : "bg-green-800"
                  }`}
                  disabled={isButtonDisabled || selectedProductQty >= 1}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          <div className="text-xs">
            آیا قیمت مناسب‌تری سراغ دارید؟ بلی | خیر
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl leading-8">
          <div className="mx-8">
            <div className="flex mx-8 text-xs font-bold">
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <span className="mx-1">۳</span>
            </div>
            <div className="text-xs my-4">(۱ بررسی مشتری)</div>
            <div className="text-xs py-4">
              <FontAwesomeIcon
                className="text-green-600"
                icon={faSquareCheck}
              />
              <span className="m-2">موجود است</span>
            </div>
          </div>
          <div className="flex justify-between gap-4 p-6">
            <div className="flex text-xs">
              <div className="border-2 border-slate-100 p-2 rounded-xl mx-4 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
                <FontAwesomeIcon className="mx-2" icon={faCodeCompare} />
                <button>مقایسه</button>
              </div>
              <div className="border-2 border-slate-100 p-2 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
                <FontAwesomeIcon className="mx-2" icon={faBookmark} />
                <button>افزودن به علاقه مندی ها</button>
              </div>
            </div>
          </div>
          <div className="text-xs">
            <div className="border-2 border-slate-100 m-3 px-4 p-3 rounded-xl">
              تضمین بهترین قیمت
            </div>
            <div className="border-2 border-slate-100 m-3 px-4 p-2 rounded-xl">
              ضمانت اصل بودن
            </div>
            <div className="border-2 border-slate-100 m-3 px-4 p-2 rounded-xl">
              تحویل اکسپرس
            </div>
            <div className="border-2 border-slate-100 m-3 px-4 p-2 rounded-xl">
              بسته بندی زیبا
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-auto my-12 text-white text-xs font-bold">
        <div className="bg-sky-400 p-3 rounded-e-full rounded-tr-full">
          <FontAwesomeIcon
            className="mx-1 border-2 border-white p-1 rounded-full"
            icon={faCodeCompare}
          />
          <button>توضیحات تکمیلی</button>
        </div>
        <div className="bg-slate-200 text-black p-3 rounded-full">
          <FontAwesomeIcon
            className="mx-1 border-2 border-black p-1 rounded-full"
            icon={faComments}
          />
          <button>نظرات کاربران</button>
        </div>
        <div className="bg-slate-200 text-black p-3 rounded-full">
          <FontAwesomeIcon
            className="mx-1 border-2 border-black p-1 rounded-full"
            icon={faQuestion}
          />
          <button>سوالات کاربران</button>
        </div>
        <div className="bg-slate-200 text-black p-3 rounded-s-full rounded-tl-full">
          <FontAwesomeIcon
            className="mx-1 border-2 border-black p-1 rounded-full"
            icon={faMagnifyingGlass}
          />
          <button>نقد و بررسی</button>
        </div>
      </div>
      <div className="w-full h-auto my-8 rounded-xl border-2 border-slate-100 p-4">
        <div className="w-full h-full rounded-xl p-8">
          <div className="text-sm font-semibold">
            <span className="m-2 border-2 border-black p-2 rounded-xl text-sm">
              <FontAwesomeIcon icon={faCalendarWeek} />
            </span>
            مشخصات کلی
          </div>
          <div className="border-2 border-slate-100 my-6 p-3 rounded-xl text-xs font-bold">
            <span className="border-2 border-sky-600 text-blue-600 p-1 rounded-xl text-sm mx-2">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            سایر مشخصات
          </div>
          <div>
            <div className="flex">
              <div className="bg-stone-50 p-4 w-44 rounded-xl text-xs">
                وزن بسته بندی
              </div>
              <div className="mx-4 w-full p-4 rounded-xl text-xs">
                <div>۲۵۰ گرم</div>
                <div>۵۰۰ گرم</div>
                <div>۷۰۰ گرم</div>
              </div>
            </div>
            <div className="flex mt-1">
              <div className="bg-stone-50 p-4 w-44 rounded-xl text-xs">
                آسیاب
              </div>
              <div className="mx-4 w-full p-4 rounded-xl text-xs">
                <div>اسپرسو خانگی</div>
                <div>نیمه صنعتی</div>
                <div>تجاری</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
