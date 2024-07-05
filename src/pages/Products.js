import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsLeftRight,
  faCartShopping,
  faHeart,
  faStar,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const CategoryList = () => (
    <div className="border-2 border-slate-200 h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>دسته های محصولات</div>
      <hr className="my-4" />
      <div className="leading-9">
        {[
          "آسیاب قهوه",
          "اسپرسوسازها",
          "تجهیزات بار سرد",
          "تجهیزات جانبی",
          "تجهیزات دمی و نسل سوم",
          "دان قهوه و پودر قهوه",
          "فرنج پرس ها",
          "فروش ویژه",
          "لوازم یدکی",
          "ماگ و فنجان",
          "محصولات فوری و پوری",
          "موکاپات ها",
        ].map((category) => (
          <div key={category}>{category}</div>
        ))}
      </div>
    </div>
  );

  const BrandList = () => (
    <div className="border-2 border-slate-200 h-auto w-full my-10 rounded-xl text-xs p-3 font-semibold">
      <div>برندها</div>
      <hr className="my-4" />
      <div className="grid grid-cols-2 mt-12 mx-auto w-fit text-center gap-3">
        {[
          {
            name: "اسمگ",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/smeg.jpg",
          },
          {
            name: "بارنی",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/barni.jpg",
          },
          {
            name: "برویل",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/breville.jpg",
          },
          {
            name: "جی پاس",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/geepas.jpg",
          },
          {
            name: "جیمیلای",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/gemilai.jpg",
          },
          {
            name: "داونگی",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/delonghi.jpg",
          },
          {
            name: "فیلیپس",
            src: "https://28coffee.ir/wp-content/uploads/2018/02/philips.png",
          },
          {
            name: "لواک",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/luwak.jpg",
          },
          {
            name: "مباشی",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/mebashi.jpg",
          },
          {
            name: "نوا",
            src: "https://28coffee.ir/wp-content/uploads/2024/04/nova.jpg",
          },
        ].map((brand) => (
          <div
            key={brand.name}
            className="max-w-24 border-2 border-slate-200 p-2 rounded-xl"
          >
            <div>
              <img src={brand.src} alt={brand.name} />
            </div>
            {brand.name}
          </div>
        ))}
      </div>
      <div className="border-2 border-slate-200 p-2 max-w-full rounded-xl mt-3 text-center">
        <div className="w-24 mx-auto">
          <img
            src="https://28coffee.ir/wp-content/uploads/2024/04/unique-life.jpg"
            alt="یونیک لایف"
          />
        </div>
        یونیک لایف
      </div>
    </div>
  );

  const ColorFilter = () => (
    <div className="border-2 border-slate-200 h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>فیلتر بر اساس رنگ</div>
      <hr className="my-4" />
      <div className="flex flex-wrap mx-2 cursor-pointer">
        {[
          "bg-blue-600",
          "bg-green-500",
          "bg-white",
          "bg-yellow-400",
          "bg-red-600",
          "bg-stone-500",
          "bg-gray-300",
        ].map((color) => (
          <div
            key={color}
            className="border-2 border-slate-100 p-1 w-fit rounded-xl"
          >
            <div className={`w-6 h-6 ${color} rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );

  const SizeFilter = () => (
    <div className="border-2 border-slate-200 h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>فیلتر بر اساس سایز</div>
      <hr className="my-4" />
      <div className="mx-2">
        {["۵۱", "۵۲", "۵۸"].map((size) => (
          <div key={size} className="flex gap-2 p-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              id={`size-${size}`}
            />
            <label htmlFor={`size-${size}`}>{size}</label>
          </div>
        ))}
      </div>
    </div>
  );

  const RatingFilter = () => (
    <div className="border-2 border-slate-200 h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>میانگین رتبه</div>
      <hr className="my-4" />
      <div className="mx-2 p-1">
        {[
          { rating: 5, count: 2 },
          { rating: 4, count: 1 },
          { rating: 3, count: 1 },
        ].map((rate) => (
          <div key={rate.rating}>
            <FontAwesomeIcon
              className="text-yellow-500 cursor-pointer"
              icon={faStar}
            />
            <span>{rate.rating}</span>
            <span className="mx-2">({rate.count})</span>
            <hr className="my-3" />
          </div>
        ))}
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div
      key={product.id}
      className="bg-gray-50 border-2 border-slate-200 w-full sm:w-fit rounded-lg"
    >
      <Link to={`/products/${product.id}`}>
        <div className="float-left p-1 text-xs font-bold bg-yellow-400 w-fit text-white rounded-s-full rounded-tl-full">
          <span>فروش ویژه</span>
        </div>

        <div className="mx-8">
          <img
            className="rounded-xl cursor-pointer bg-white"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="m-2">
          <div className="text-xs font-medium">
            <span className="main-text">{product.price}</span>{" "}
            <span className="font-light">تومان</span>
          </div>
          <div className="text-xs font-medium my-4">{product.name}</div>
          <div className="flex gap-4 text-xs mx-2">
            <div className="border-2 border-slate-500 rounded-full p-1 text-center mt-2 cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className="border-2 border-slate-500 rounded-full p-1 text-center mt-2 cursor-pointer">
              <FontAwesomeIcon icon={faArrowsLeftRight} />
            </div>
            <div className="border-2 border-slate-500 rounded-full p-1 text-center mt-2 cursor-pointer">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="container">
      <div className="mx-12 mt-4 text-xs font-semilight bg-gray-50 w-auto p-2 rounded-lg">
        خانه / فروشگاه
      </div>
      <div className="md:flex mx-10 mt-4">
        <div className="sm:w-96">
          <CategoryList />
          <BrandList />
          <ColorFilter />
          <SizeFilter />
          <RatingFilter />
        </div>
        <div className="sm:mx-12">
          <div className="flex gap-2 mt-10 md:mt-0">
            <span>
              <FontAwesomeIcon icon={faStore} />
            </span>
            <div className="text-sm font-bold">فروشگاه</div>
            <div className="bg-black h-1 w-full my-4"></div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 my-6">
            {products ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
