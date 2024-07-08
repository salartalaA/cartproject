import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  faArrowsLeftRight,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageItem = ({ src, alt }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="sm:w-full md:w-fit mx-2 md:my-3 mb-3"
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
      <img className="rounded-lg cursor-pointer" src={src} alt={alt} />
    </motion.div>
  );
};

const ProductCard = ({ src, price, description }) => (
  <div className="shadow-md w-72 h-auto rounded-lg leading-8">
    <div className="mx-3 mt-2 float-right bg-red-600 p-0.5 rounded-full text-white">
      <span>%10</span>
    </div>
    <div className="float-left p-1 text-xs font-bold bg-yellow-400 w-fit text-white rounded-s-full m-3 rounded-tl-full">
      <span>فروش ویژه</span>
    </div>
    <div className="px-12 pt-6">
      <img className="cursor-pointer" src={src} alt={description} />
    </div>
    <div className="m-2">
      <span className="main-text">{price}</span> تومان
      <div>{description}</div>
      <div className="flex gap-2 lg:mt-4">
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faArrowsLeftRight} />
        </div>
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  </div>
);

const BlogCard = ({ src, title }) => (
  <div className="w-72 h-80 shadow-md m-4 rounded-lg flex-shrink-0">
    <div className="p-2 text-xs m-2 float-left main-bg w-fit text-white rounded-b-xl rounded-tr-xl">
      وبلاگ
    </div>
    <div className="w-full cursor-pointer my-10 mx-4">
      <img src={src} alt={title} />
    </div>
    <div className="my-12 mx-4">{title}</div>
    <div className="text-xs bg-yellow-300 w-fit p-3 float-left m-2 rounded-bl-full hover:rounded-t-full hover:bg-yellow-400 hover:text-white transition-all cursor-pointer">
      بزن بریم!
    </div>
  </div>
);

const NewProductCard = ({ src, price, description }) => (
  <div className="w-full h-24 shadow-md rounded-md flex">
    <div className="w-24 p-3 mr-4 cursor-pointer">
      <img className="rounded-md" src={src} alt={description} />
    </div>
    <div className="m-4">
      {description}
      <div className="my-2">
        <span className="main-text text-sm">{price}</span> تومان
      </div>
    </div>
  </div>
);

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  const imageSrc =
    "https://28coffee.ir/wp-content/uploads/2023/02/01coffee28-group.webp";
  const productSrc =
    "https://28coffee.ir/wp-content/uploads/2024/06/IMG-20240619-WA0020-1-185x185.jpg";
  const newProductSrc =
    "https://28coffee.ir/wp-content/uploads/2024/05/IMG-20240506-WA0002-100x100.jpg";
  const blogSrc = "https://28coffee.ir/wp-content/uploads/2023/02/113.65.svg";

  return (
    <div className="container">
      <div>
        <div className="block md:grid md:grid-cols-3">
          {[...Array(12)].map((_, index) => (
            <ImageItem key={index} src={imageSrc} alt={`image-${index}`} />
          ))}
        </div>
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
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/Banner-instegram_coffee28-1536x445.webp"
            alt="Instagram Banner"
          />
        </motion.div>
        <div className="my-12">
          <div className="m-3 pb-4 flex justify-between">
            <div className="text-xs font-bold">آسیاب قهوه</div>
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
                  src={productSrc}
                  price="1000000"
                  description="آسیاب یونیک لایف A 900"
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="my-12">
          <div className="m-3 pb-4 flex justify-between">
            <div className="text-xs font-bold">اسپرسوساز</div>
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
                  src="https://28coffee.ir/wp-content/uploads/2024/07/IMG-20240706-WA0015-185x185.jpg"
                  price="1000000"
                  description="تیوارکس ۷۱۷۰"
                />
              ))}
            </div>
          </div>
        </div>
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
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/Banner-telegram_coffee28-1536x445.png"
            alt="Telegram Banner"
          />
        </motion.div>

        <div className="m-6 flex justify-between">
          <div className="text-xs font-bold">جدیدترین محصولات</div>
          <div className="flex text-xs font-bold">
            <div className="w-4 h-4 main-bg rounded-full"></div>
            <span>مشاهده همه</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 text-xs font-bold">
          {[...Array(6)].map((_, index) => (
            <NewProductCard
              key={index}
              src={newProductSrc}
              price="۴۹۰۰۰۰"
              description="موکاپات فانتزی"
            />
          ))}
        </div>
        <div className="m-3 my-6 w-fit">
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
        </div>

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
      </div>
      <div className="sm:grid hidden sm:grid-cols-2 md:grid-cols-5 gap-4 leading-8 mt-10 mx-3">
        <div>
          <div className="text-sm font-bold leading-8">تحویل اکسپرس</div>
          <div className="text-xs">ارسال به سراسر کشور</div>
        </div>
        <div>
          <div className="text-sm font-bold leading-8">پرداخت در محل </div>
          <div className="text-xs"> تضمین امنیت خرید</div>
        </div>
        <div>
          <div className="text-sm font-bold leading-8">تضمین قیمت </div>
          <div className="text-xs"> تضمین بهترین قیمت </div>
        </div>
        <div>
          <div className="text-sm font-bold leading-8">ارسال به تمام نقاط </div>
          <div className="text-xs">ارسال به تمام نقاط کشور </div>
        </div>
        <div>
          <div className="text-sm font-bold leading-8">ضمانت بازگشت </div>
          <div className="text-xs">7 روز ضمانت بازگشت کالا</div>
        </div>
      </div>
      <div className="w-full h-1 bg-footer my-12"></div>
      <div className="mx-4">
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
      </div>
      <div className="w-full h-1 bg-footer my-12"></div>
    </div>
  );
};

export default Home;
