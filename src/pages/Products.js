import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsLeftRight,
  faCartShopping,
  faFilter,
  faHeart,
  faStar,
  faStore,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import smeg from "../imgs/smeg.jpg";
import barni from "../imgs/barni.jpg";
import breville from "../imgs/breville.jpg";
import geepas from "../imgs/geepas.jpg";
import gemilai from "../imgs/gemilai.jpg";
import delonghi from "../imgs/delonghi.jpg";
import philips from "../imgs/philips.png";
import luwak from "../imgs/luwak.jpg";
import mebashi from "../imgs/mebashi.jpg";
import nova from "../imgs/nova.jpg";
import Loading from "../components/Loading";

const ImageItem = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <img
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const FilterList = ({ title, items }) => (
    <div className="border-2 border-slate-200 shadow-md h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>{title}</div>
      <hr className="my-4" />
      <div
        className={
          title === "برندها"
            ? "grid grid-cols-2 mt-12 mx-auto w-fit text-center gap-3 cursor-pointer"
            : "leading-9"
        }
      >
        {items.map((item, index) =>
          title === "برندها" ? (
            <div
              key={index}
              className="max-w-24 border-2 border-slate-200 shadow-md p-2 rounded-xl"
            >
              <ImageItem src={item.src} alt={item.name} />
              {item.name}
            </div>
          ) : (
            <div key={index}>{item}</div>
          )
        )}
      </div>
    </div>
  );

  const ColorFilter = () => (
    <div className="border-2 border-slate-200 shadow-md h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>فیلتر بر اساس رنگ</div>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-1 mx-2">
        {[
          "bg-blue-600",
          "bg-green-500",
          "bg-white",
          "bg-yellow-400",
          "bg-red-600",
          "bg-stone-500",
          "bg-gray-300",
        ].map((color, index) => (
          <div
            key={index}
            className="border-2 border-slate-100 p-1 w-fit rounded-lg cursor-pointer"
          >
            <div className={`w-6 h-6 ${color} shadow-md rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );

  const SizeFilter = () => (
    <div className="border-2 border-slate-200 shadow-md h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>فیلتر بر اساس سایز</div>
      <hr className="my-4" />
      <div className="mx-2">
        {["۵۱", "۵۲", "۵۸"].map((size, index) => (
          <div key={index} className="flex gap-2 p-1">
            <input name={size} className="cursor-pointer" type="checkbox" />
            <label>{size}</label>
          </div>
        ))}
      </div>
    </div>
  );

  const RatingFilter = () => (
    <div className="border-2 border-slate-200 shadow-md h-auto w-full mt-10 rounded-xl text-xs p-3 font-semibold">
      <div>میانگین رتبه</div>
      <hr className="my-4" />
      <div className="mx-2 p-1">
        {[
          { rating: 5, count: 2 },
          { rating: 4, count: 1 },
          { rating: 3, count: 1 },
        ].map((rate, index) => (
          <div key={index}>
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

  const ProductCard = React.memo(({ product }) => (
    <div className="border-2 border-slate-200 shadow-md w-full sm:w-fit rounded-lg">
      <Link to={`/products/${product.id}`}>
        <div className="float-left p-1 text-xs font-bold bg-yellow-400 w-fit text-white rounded-s-full m-2 rounded-tl-full">
          <span>فروش ویژه</span>
        </div>

        <div className="sm:mx-16 md:mx-8">
          <ImageItem
            className="mt-6 cursor-pointer bg-gray-50 shadow-md"
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
          <div className="flex flex-wrap gap-4 text-xs mx-2">
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
  ));

  const handleOpenCloseFilterMenu = () => {
    const filterMenu = document.getElementById("filter-menu");
    filterMenu.classList.toggle("hidden");
  };

  const handleCloseFilterMenu = () => {
    const filterMenu = document.getElementById("filter-menu");
    filterMenu.classList.add("hidden");
  };

  return (
    <main className="container">
      <div
        onClick={handleOpenCloseFilterMenu}
        className="bottom-6 left-6 sticky md:hidden border-2 border-yellow-600 text-amber-400 p-2 rounded-lg bg-white shadow-md"
      >
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <div className="mx-12 mt-4 text-xs font-semilight bg-gray-50 w-auto p-2 rounded-lg">
        <Link to="/cartproject">خانه</Link> / فروشگاه
      </div>
      <section className="md:flex mx-10 mt-4">
        <section className="sm:w-96 hidden md:block">
          <FilterList
            title="دسته های محصولات"
            items={[
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
            ]}
          />
          <FilterList
            title="برندها"
            items={[
              {
                name: "اسمگ",
                src: smeg,
              },
              {
                name: "بارنی",
                src: barni,
              },
              {
                name: "برویل",
                src: breville,
              },
              {
                name: "جی پاس",
                src: geepas,
              },
              {
                name: "جیمیلای",
                src: gemilai,
              },
              {
                name: "دلونگی",
                src: delonghi,
              },
              {
                name: "فیلیپس",
                src: philips,
              },
              {
                name: "لواک",
                src: luwak,
              },
              {
                name: "مباشی",
                src: mebashi,
              },
              {
                name: "نوا",
                src: nova,
              },
            ]}
          />
          <ColorFilter />
          <SizeFilter />
          <RatingFilter />
        </section>
        <section className="sm:mx-12">
          <div className="flex gap-2 mt-10 md:mt-0">
            <span>
              <FontAwesomeIcon icon={faStore} />
            </span>
            <div className="text-sm font-bold">فروشگاه</div>
            <div className="bg-black h-1 w-full my-4"></div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 my-6">
            {products ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </section>
        <section
          id="filter-menu"
          className="absolute w-3/4 top-0 bg-white z-[100] right-0 p-4 rounded-lg hidden shadow-md"
        >
          <span
            onClick={handleCloseFilterMenu}
            className="float-right border-slate-300 border-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all rounded-full p-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <FilterList
            title="دسته های محصولات"
            items={[
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
            ]}
          />
          <FilterList
            title="برندها"
            items={[
              {
                name: "اسمگ",
                src: smeg,
              },
              {
                name: "بارنی",
                src: barni,
              },
              {
                name: "برویل",
                src: breville,
              },
              {
                name: "جی پاس",
                src: geepas,
              },
              {
                name: "جیمیلای",
                src: gemilai,
              },
              {
                name: "دلونگی",
                src: delonghi,
              },
              {
                name: "فیلیپس",
                src: philips,
              },
              {
                name: "لواک",
                src: luwak,
              },
              {
                name: "مباشی",
                src: mebashi,
              },
              {
                name: "نوا",
                src: nova,
              },
            ]}
          />
          <ColorFilter />
          <SizeFilter />
          <RatingFilter />
        </section>
      </section>
    </main>
  );
};

export default Products;
