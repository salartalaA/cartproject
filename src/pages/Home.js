import {
  faArrowsLeftRight,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageItem = ({ src, alt }) => (
  <div className="w-full md:w-fit mx-2 my-4">
    <img className="rounded-xl cursor-pointer" src={src} alt={alt} />
  </div>
);

const ProductCard = ({ src, price, description }) => (
  <div className="bg-slate-100 w-72 h-80 rounded-lg leading-8">
    <div className="px-12 pt-6">
      <img className="rounded-xl cursor-pointer" src={src} alt={description} />
    </div>
    <div className="m-2">
      <span className="main-text">{price}</span> تومان
      <div>{description}</div>
      <div className="flex space-x-6 space-x-reverse mx-2 lg:mt-8">
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
  <div className="w-72 h-80 bg-slate-100 m-4 rounded-xl flex-shrink-0">
    <div className="p-2 text-xs m-2 float-left main-bg w-fit text-white rounded-b-xl rounded-tr-xl">
      وبلاگ
    </div>
    <div className="w-full cursor-pointer my-10 mx-4">
      <img src={src} alt={title} />
    </div>
    <div className="m-6">{title}</div>
    <div className="text-xs bg-yellow-300 w-fit p-3 float-left m-2 rounded-bl-full hover:rounded-t-full hover:bg-yellow-400 hover:text-white transition-all cursor-pointer">
      بزن بریم!
    </div>
  </div>
);

const NewProductCard = ({ src, price, description }) => (
  <div className="w-full h-24 bg-slate-200 rounded-md flex">
    <div className="w-24 p-3 mr-4">
      <img className="rounded-xl" src={src} alt={description} />
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
        <div className="m-6 block md:grid md:grid-cols-2 lg:grid-cols-3 space-y-4">
          {[...Array(12)].map((_, index) => (
            <ImageItem key={index} src={imageSrc} alt={`image-${index}`} />
          ))}
        </div>
        <div className="w-full px-6 md:w-1/2 mx-auto cursor-pointer">
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/Banner-instegram_coffee28-1536x445.webp"
            alt="Instagram Banner"
          />
        </div>
        <div className="my-12">
          <div className="mt-3 mx-4">
            آسیاب قهوه
            <div className="bg-black h-1 max-w-96 my-4"></div>
          </div>
          <div className="text-sm mx-4">
            <div className="flex lg:flex-nowrap lg:space-x-4 lg:space-x-reverse flex-wrap justify-center lg:justify-normal gap-4 flex-shrink-0">
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
        <div className="w-full px-6 md:w-1/2 mx-auto cursor-pointer">
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/Banner-telegram_coffee28-1536x445.png"
            alt="Telegram Banner"
          />
        </div>
        <div className="mt-3 mx-4">
          جدیدترین محصولات
          <div className="bg-black h-1 max-w-96 my-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 text-xs font-bold">
          {[...Array(6)].map((_, index) => (
            <NewProductCard
              key={index}
              src={newProductSrc}
              price="۴۹۰۰۰۰"
              description="موکاپات فانتزی"
            />
          ))}
        </div>
        <div className="m-3 my-6 leading-10 w-fit">
          <h2 className="font-bold text-xl">خرید قهوه از قهوه 28</h2>
          <p className="text-lg my-4 font-semibold">
            خرید انواع قهوه ها | قهوه اسپرسو | قهوه ترک | قهوه فوری | دانه قهوه
          </p>
          <p>
            خرید قهوه نیاز به آموزش دارد. در قهوه 28 می توانید همه چیز را در
            مورد قهوه ها بیاموزید، سپس بنا به سلیقه خود قهوه ی مورد نظرتان را
            بخرید. قهوه های قهوه 28 به دو صورت عرضه می شوند، قهوه هایی که خودمان
            تازه آسیاب می کنیم و قهوه هایی که از برندها و به صورت بسته بندی
            خریداری می شود.
          </p>
        </div>
        <div className="m-3">
          وبلاگ
          <div className="bg-black h-1 max-w-96 my-4"></div>
        </div>
        <div className="flex overflow-x-auto text-xs font-semibold">
          {[...Array(4)].map((_, index) => (
            <BlogCard key={index} src={blogSrc} title="تاثیر قهوه بر پوست" />
          ))}
        </div>
      </div>
      <div className="sm:grid hidden sm:grid-cols-2 md:grid-cols-5 gap-4 leading-8 mt-10">
        <div>
          <div className="font-semibold">تحویل اکسپرس</div>
          <div className="text-sm">ارسال به سراسر کشور</div>
        </div>
        <div>
          <div className="font-semibold">پرداخت در محل </div>
          <div className="text-sm"> تضمین امنیت خرید</div>
        </div>
        <div>
          <div className="font-semibold">تضمین قیمت </div>
          <div className="text-sm"> تضمین بهترین قیمت </div>
        </div>
        <div>
          <div className="font-semibold">ارسال به تمام نقاط </div>
          <div className="text-sm">ارسال به تمام نقاط کشور </div>
        </div>
        <div>
          <div className="font-semibold">ضمانت بازگشت </div>
          <div className="text-sm">7 روز ضمانت بازگشت کالا</div>
        </div>
      </div>
      <div className="w-full h-2 bg-footer my-12"></div>
      <div className="mx-4">
        <div className="max-w-24 my-4">
          <img
            src="https://28coffee.ir/wp-content/uploads/2023/02/113.65.svg"
            alt="Logo"
          />
        </div>
        <p>
          تلفن پشتیبانی
          <span className="text-red-500 font-semibold"> 09169778006</span> | ۷
          روز هفته،{" "}
          <span className="text-red-500 font-semibold">۲۴ ساعته </span>
          پاسخگوی شما هستیم
        </p>
      </div>
      <div className="w-full h-2 bg-footer my-12"></div>
    </div>
  );
};

export default Home;
