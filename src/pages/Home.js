import React, { useState } from "react";
import { motion } from "framer-motion";
import life from "../imgs/life.jpg";
import espresso from "../imgs/espresso maker.webp";
import instagram from "../imgs/instagram.webp";
import tiva from "../imgs/tiva.jpg";
import telegram from "../imgs/telegram.png";
import moka from "../imgs/moka.jpg";
import ImageItem from "../components/ImageItem";
import ProductCard from "../components/ProductCard";
import BlogCard from "../components/BlogCard";
import NewProductCard from "../components/NewProductCard";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const blogSrc = "https://28coffee.ir/wp-content/uploads/2023/02/113.65.svg";

  return (
    <main className="container">
      <div>
        <section className="block md:grid md:grid-cols-3">
          {[...Array(12)].map((_, index) => (
            <ImageItem
              key={index}
              src={espresso}
              alt={`image-${index}`}
              className="sm:w-full md:w-fit mx-2 md:my-3 mb-3"
            />
          ))}
        </section>
        <motion.div
          className="w-full px-6 md:w-1/2 mx-auto cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          animate={
            isHovering
              ? {
                  y: [0, -10, 10, 0],
                  transition: {
                    y: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }
              : { y: 0 }
          }
        >
          <ImageItem src={instagram} alt="Instagram Banner" />
        </motion.div>
        <section className="my-12">
          <div className="m-3 pb-4 flex justify-between">
            <h4 className="text-xs font-bold">آسیاب قهوه</h4>
            <div className="flex text-xs font-bold">
              <div className="w-4 h-4 main-bg rounded-full"></div>
              <span>مشاهده همه</span>
            </div>
          </div>

          <div className="text-xs font-bold mx-4 overflow-x-auto">
            <div className="flex lg:space-x-4 lg:space-x-reverse gap-4 lg:gap-0 min-w-fit mb-4 md:mb-4">
              {[...Array(5)].map((_, index) => (
                <ProductCard
                  key={index}
                  src={life}
                  price="1000000"
                  description="آسیاب یونیک لایف A 900"
                />
              ))}
            </div>
          </div>
        </section>
        <hr />
        <section className="my-12">
          <div className="m-3 pb-4 flex justify-between">
            <h4 className="text-xs font-bold">اسپرسوساز</h4>
            <div className="flex text-xs font-bold">
              <div className="w-4 h-4 main-bg rounded-full"></div>
              <span>مشاهده همه</span>
            </div>
          </div>
          <div className="text-xs font-bold mx-4 overflow-x-auto">
            <div className="flex lg:space-x-4 lg:space-x-reverse gap-4 lg:gap-0 min-w-fit mb-4 md:mb-4">
              {[...Array(5)].map((_, index) => (
                <ProductCard
                  key={index}
                  src={tiva}
                  price="1000000"
                  description="تیوارکس ۷۱۷۰"
                />
              ))}
            </div>
          </div>
        </section>
        <motion.div
          className="w-full px-6 md:w-1/2 mx-auto cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          animate={
            isHovering
              ? {
                  y: [0, -10, 10, 0],
                  transition: {
                    y: {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }
              : { y: 0 }
          }
        >
          <ImageItem src={telegram} alt="Telegram Banner" />
        </motion.div>

        <section>
          <div className="m-6 flex justify-between">
            <h4 className="text-xs font-bold">جدیدترین محصولات</h4>
            <div className="flex text-xs font-bold">
              <div className="w-4 h-4 main-bg rounded-full"></div>
              <span>مشاهده همه</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 text-xs font-bold">
            {[...Array(6)].map((_, index) => (
              <NewProductCard
                key={index}
                src={moka}
                price="۴۹۰۰۰۰"
                description="موکاپات فانتزی"
              />
            ))}
          </div>
        </section>

        <section className="m-3 my-6 w-fit">
          <h2 className="font-bold text-xl">خرید قهوه از قهوه 28</h2>
          <p className="text-lg my-4 font-semibold">
            خرید انواع قهوه ها | قهوه اسپرسو | قهوه ترک | قهوه فوری | دانه قهوه
          </p>
          <p className="text-sm font-bold leading-10">
            خرید قهوه نیاز به آموزش دارد. در قهوه 28 می توانید همه چیز را در
            مورد قهوه ها بیاموزید، سپس بنا به سلیقه خود قهوه ی مورد نظرتان را
            بخرید. قهوه های قهوه 28 به دو صورت عرضه می شوند، قهوه هایی که خودمان
            تازه آسیاب می کنیم و قهوه هایی که از برندها و به صورت بسته بندی
            خریداری می شود.
          </p>
        </section>

        <section>
          <div className="m-3 pt-4 md:pt-0 flex justify-between">
            <div className="text-sm font-bold">وبلاگ</div>
            <div className="flex text-xs font-bold">
              <div className="w-4 h-4 main-bg rounded-full"></div>
              <span>مشاهده همه</span>
            </div>
          </div>
          <div className="flex overflow-x-auto text-xs font-semibold">
            {[...Array(4)].map((_, index) => (
              <BlogCard key={index} src={blogSrc} title="تاثیر قهوه بر پوست" />
            ))}
          </div>
        </section>
      </div>
      <section className="sm:grid hidden sm:grid-cols-2 md:grid-cols-5 gap-4 leading-8 mt-10 mx-3">
        <div>
          <h4 className="text-sm font-bold leading-8">تحویل اکسپرس</h4>
          <p className="text-xs">ارسال به سراسر کشور</p>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-8">پرداخت در محل </h4>
          <p className="text-xs"> تضمین امنیت خرید</p>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-8">تضمین قیمت </h4>
          <p className="text-xs"> تضمین بهترین قیمت </p>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-8">ارسال به تمام نقاط </h4>
          <p className="text-xs">ارسال به تمام نقاط کشور </p>
        </div>
        <div>
          <h4 className="text-sm font-bold leading-8">ضمانت بازگشت </h4>
          <p className="text-xs">7 روز ضمانت بازگشت کالا</p>
        </div>
      </section>
      <hr className="w-full h-1 bg-footer my-12" />
      <section className="mx-4">
        <div className="max-w-24 my-4">
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/113.65.svg"
            alt="Logo"
          />
        </div>
        <p className="text-sm font-bold">
          تلفن پشتیبانی
          <span className="text-red-500 font-semibold"> 09169778006</span> | ۷
          روز هفته،{" "}
          <span className="text-red-500 font-semibold">۲۴ ساعته </span>
          پاسخگوی شما هستیم
        </p>
      </section>
      <hr className="w-full h-1 bg-footer my-12" />
    </main>
  );
};

export default Home;
