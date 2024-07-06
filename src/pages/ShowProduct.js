import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/products/action";
import { addToCart, decrement, increment } from "../redux/cart/action";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
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
    if (selectedProductQty > 1) {
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

  const handleExplain = () => {
    const explain = document.getElementById("explain");
    const comments = document.getElementById("comments");
    const questions = document.getElementById("questions");
    const censure = document.getElementById("censure");

    explain.classList.remove("bg-slate-200");
    explain.classList.add("bg-sky-400");
    explain.classList.add("text-white");

    comments.classList.remove("bg-sky-400");
    comments.classList.add("bg-slate-200");
    comments.classList.remove("text-white");
    comments.classList.add("text-black");

    questions.classList.remove("bg-sky-400");
    questions.classList.add("bg-slate-200");
    questions.classList.remove("text-white");
    questions.classList.add("text-black");

    censure.classList.remove("bg-sky-400");
    censure.classList.add("bg-slate-200");
    censure.classList.remove("text-white");
    censure.classList.add("text-black");

    const box = document.getElementById("box");
    box.innerHTML = ` <div class="w-full h-full rounded-xl">
          <div class="text-sm font-semibold flex">
            <span class="m-2 border-2 border-black p-2 rounded-lg text-sm w-fit">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
              </svg>
            </span>
            <span class="my-auto">مشخصات کلی</span>
          </div>
          <div class="border-2 border-slate-100 shadow-md my-6 p-3 rounded-lg text-xs font-bold flex">
            <span class="border-2 border-sky-600 text-blue-600 p-1 rounded-xl text-sm mx-2 w-fit">
              <svg
                class="w-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
              >
                <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
              </svg>
            </span>
            <span class="my-auto">سایر مشخصات</span>
          </div>
          <div>
            <div class="flex">
              <div class="shadow-md p-4 w-44 rounded-xl text-xs">
                وزن بسته بندی
              </div>
              <div class="mx-4 shadow-md w-full p-4 rounded-xl text-xs">
                <div>۲۵۰ گرم</div>
                <div>۵۰۰ گرم</div>
                <div>۷۰۰ گرم</div>
              </div>
            </div>
            <div class="flex mt-1">
              <div class="shadow-md p-4 w-44 rounded-xl text-xs">آسیاب</div>
              <div class="shadow-md mx-4 w-full p-4 rounded-xl text-xs">
                <div>اسپرسو خانگی</div>
                <div>نیمه صنعتی</div>
                <div>تجاری</div>
              </div>
            </div>
          </div>
        </div>`;
  };
  const handlecComments = () => {
    const explain = document.getElementById("explain");
    const comments = document.getElementById("comments");
    const questions = document.getElementById("questions");
    const censure = document.getElementById("censure");

    explain.classList.remove("bg-sky-400");
    explain.classList.add("bg-slate-200");
    explain.classList.remove("text-white");
    explain.classList.add("text-black");

    comments.classList.remove("bg-slate-200");
    comments.classList.add("bg-sky-400");
    comments.classList.add("text-white");

    questions.classList.remove("bg-sky-400");
    questions.classList.add("bg-slate-200");
    questions.classList.remove("text-white");
    questions.classList.add("text-black");

    censure.classList.remove("bg-sky-400");
    censure.classList.add("bg-slate-200");
    censure.classList.remove("text-white");
    censure.classList.add("text-black");

    const box = document.getElementById("box");
    box.innerHTML = `<div class="w-full h-full rounded-xl">
        <div class="text-sm font-semibold flex">
          <span class="m-2 border-2 border-black p-2 rounded-lg text-sm w-fit">
            <svg
              class="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
            </svg>
          </span>
          <span class="my-auto text-xs">نظرات کاربران</span>
        </div>
        <div class="md:flex">
          <div class="md:w-1/2 h-auto my-8 rounded-xl border-2 border-slate-100 shadow-md p-4 text-xs leading-5">
            <p>
              لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
              <br />
              <br />
              فارسی بنویسید و از کیبورد فارسی استفاده کنید. بهتر است از فضای
              خالی (Space) بیش‌از‌حدِ معمول، شکلک یا ایموجی استفاده نکنید و از
              کشیدن حروف یا کلمات با صفحه‌کلید بپرهیزید.
              <br />
              <br />
              نظرات خود را براساس تجربه و استفاده‌ی عملی و با دقت به نکات فنی
              ارسال کنید؛ بدون تعصب به محصول خاص، مزایا و معایب را بازگو کنید و
              بهتر است از ارسال نظرات چندکلمه‌‌ای خودداری کنید.
              <br />
              <br />
              بهتر است در نظرات خود از تمرکز روی عناصر متغیر مثل قیمت، پرهیز
              کنید.
              <br />
              <br />
              به کاربران و سایر اشخاص احترام بگذارید. پیام‌هایی که شامل محتوای
              توهین‌آمیز و کلمات نامناسب باشند، حذف می‌شوند.
            </p>
          </div>
          <div class="md:p-6 md:px-6 text-xs md:w-1/2">
            <div>دیدگاه خود را بنویسید</div>
            <div class="h-fit bg-stone-100 shadow-md mt-6 rounded-md">
              <div class="p-6 leading-6">
                <p>
                  برای ثبت دیدگاه، لازم است ابتدا وارد حساب کاربری خود شوید. اگر
                  این محصول را قبلا از این فروشگاه خریده باشید، دیدگاه شما به
                  عنوان مالک محصول ثبت خواهد شد.
                </p>
                <button class="mt-4 w-full text-center md:text-start md:w-auto bg-stone-500 text-white p-2 font-bold rounded-lg">
                  افزودن دیدگاه جدید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between mt-6">
          <div class="text-xs font-bold my-4 md:my-0">
            <span>نقد و بررسی ها</span>
            <span class="bg-stone-100 shadow-md p-2 rounded-lg md:mx-3">۲</span>
          </div>
          <div class="text-xs font-semibold flex">
            <span class="border-2 border-black p-1 rounded-lg w-fit">
              <svg
                class="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
              </svg>
            </span>
            <span class="my-auto mx-2 main-text">جدیدترین</span>
            <span class="my-auto mx-2">مفیدترین</span>
            <span class="my-auto mx-2">دیدگاه خریداران</span>
          </div>
        </div>
        <hr class="my-3" />
        <div class="w-full h-fit rounded-xl border-2 border-slate-100 shadow-md p-4">
          <div class="w-full h-60 md:h-52 rounded-xl border-2 border-slate-100 shadow-md p-4 my-4">
            <div class="text-xs font-semibold flex">
              <span class="border-2 border-black p-1 rounded-lg w-fit h-6 my-auto">
                <svg
                  class="w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
              </span>
              <span class="my-auto mx-2">مهدی نیارشید</span>
              <div class="text-sm font-semibold flex">
                <span class="p-2 rounded-lg text-sm w-fit">
                  <svg
                    class="w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>
                </span>
                <span class="my-auto text-yellow-400">۳</span>
              </div>
              <span class="my-auto mr-4 font-light">۳۱ خرداد ۱۴۰۳</span>
            </div>
            <hr class="my-4" />
            <div class="text-xs leading-6">
              <p>
                سلام <br /> اسکرین ۱۷ هست نه ریز نه درشت <br /> پاکت‌ها بیشترشون
                جهت تزیین است پاکت اصلی نیست
              </p>
            </div>
            <div class="flex text-xs font-light mt-4 float-left gap-1">
              <span class="mx-2">آیا این دیدگاه مفید بود؟</span>
              <div class="border-2 border-slate-100 shadow-md p-1 w-20 text-center rounded-lg">
                ۰ بله
              </div>
              <div class="border-2 border-slate-100 shadow-md p-1 w-20 text-center rounded-lg">
                ۰ خیر
              </div>
            </div>
          </div>
          <div class="w-full h-60 md:h-52 rounded-xl border-2 border-slate-100 shadow-md p-4 my-4">
            <div class="text-xs font-semibold flex">
              <span class="border-2 border-black p-1 rounded-lg w-fit">
                <svg
                  class="w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
              </span>
              <span class="my-auto mx-2">مهدی نیارشید</span>
              <span class="my-auto mr-4 font-light">۳۱ خرداد ۱۴۰۳</span>
            </div>
            <hr class="my-4" />
            <div class="text-xs leading-6">
              <p>
                سلام
                <br />
                عکس پاکتها جهت تزیین کالاست و اکثرا مربوط به کالا نیست
                <br />
                البته فقط قهوه ها و پودرها
              </p>
            </div>
            <div class="flex text-xs font-light mt-4 float-left gap-1">
              <span class="mx-2">آیا این دیدگاه مفید بود؟</span>
              <div class="border-2 border-slate-100 shadow-md p-1 w-20 text-center rounded-lg">
                ۰ بله
              </div>
              <div class="border-2 border-slate-100 shadow-md p-1 w-20 text-center rounded-lg">
                ۰ خیر
              </div>
            </div>
          </div>
        </div>
      </div>`;
  };
  const handleQuestion = () => {
    const explain = document.getElementById("explain");
    const comments = document.getElementById("comments");
    const questions = document.getElementById("questions");
    const censure = document.getElementById("censure");

    explain.classList.remove("bg-sky-400");
    explain.classList.add("bg-slate-200");
    explain.classList.remove("text-white");
    explain.classList.add("text-black");

    comments.classList.remove("bg-sky-400");
    comments.classList.add("bg-slate-200");
    comments.classList.remove("text-white");
    comments.classList.add("text-black");

    questions.classList.remove("bg-slate-200");
    questions.classList.add("bg-sky-400");
    questions.classList.add("text-white");

    censure.classList.remove("bg-sky-400");
    censure.classList.add("bg-slate-200");
    censure.classList.remove("text-white");
    censure.classList.add("text-black");

    const box = document.getElementById("box");
    box.innerHTML = `<div class="w-full h-full rounded-xl">
        <div class="text-sm font-semibold flex">
          <span class="m-2 border-2 border-black p-2 rounded-lg text-sm w-fit">
            <svg class="w-2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
          </span>
          <span class="my-auto">پرسش و پاسخ</span>
        </div>
        <div class="w-full bg-red-50 text-sm p-2 rounded-md my-2">هیج پرسشی یافت نشد</div>
        <div class="w-full bg-slate-50 text-xs p-2 rounded-md my-2">برای ثبت پرسش، لازم است ابتدا وارد حساب کاربری خود شوید</div>
      </div>`;
  };
  const handleCensure = () => {
    const explain = document.getElementById("explain");
    const comments = document.getElementById("comments");
    const questions = document.getElementById("questions");
    const censure = document.getElementById("censure");

    explain.classList.remove("bg-sky-400");
    explain.classList.add("bg-slate-200");
    explain.classList.remove("text-white");
    explain.classList.add("text-black");

    comments.classList.remove("bg-sky-400");
    comments.classList.add("bg-slate-200");
    comments.classList.remove("text-white");
    comments.classList.add("text-black");

    questions.classList.remove("bg-sky-400");
    questions.classList.add("bg-slate-200");
    questions.classList.remove("text-white");
    questions.classList.add("text-black");

    censure.classList.remove("bg-slate-200");
    censure.classList.add("bg-sky-400");
    censure.classList.add("text-white");

    const box = document.getElementById("box");
    box.innerHTML = `<div class="w-full h-full rounded-xl">
        <div class="text-sm font-semibold flex">
          <span class="m-2 border-2 border-black p-2 rounded-lg text-sm w-fit">
            <svg
              class="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
            </svg>
          </span>
          <span class="my-auto">نقد و بررسی </span>
        </div>
      </div>`;
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
      <div className="lg:flex border-2 border-slate-100 shadow-md rounded-xl p-4">
        <div className="bg-white shadow-md w-full lg:w-96 h-96 py-4 lg:py-0 rounded-xl border-2 border-slate-100">
          <img className="w-full h-72" src={selectedProduct.image} alt="" />
          <div className="flex mt-8 gap-4 px-3 float-left">
            <FontAwesomeIcon
              className="border-2 border-slate-200 p-2 rounded-xl cursor-pointer"
              icon={faUpRightAndDownLeftFromCenter}
            />
            <FontAwesomeIcon
              className="border-2 border-slate-200 p-2 rounded-xl cursor-pointer"
              icon={faShareNodes}
            />
          </div>
          <div className="text-xs mx-2 mt-12">
            <span className="mx-2 border-2 border-yellow-600 text-yellow-600 p-1 rounded-xl text-sm">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            گزارش نادرستی مشخصات
          </div>
        </div>
        <div className="bg-white xl:mx-14 p-6 rounded-xl w-fit md:w-96">
          <div className="mb-4 flex items-center">
            <span className="text font-semibold">{selectedProduct.name}</span>
            <span className="bg-sky-300 text-blue-600 text-xs font-semibold mx-4 p-1 rounded-xl">
              % ۱۰۰ عربیکا
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
          <div className="flex gap-2">
            <h2 className="text-xs my-4 font-bold">وزن بسته بندی</h2>
            <div className="flex space-x-4 space-x-reverse m-3 mx-auto text-white">
              {["۲۵۰", "۵۰۰", "۷۰۰"].map((weight) => (
                <div
                  key={weight}
                  onClick={() => handleWeightClick(weight)}
                  className={`text-black text-xs p-2 rounded-lg cursor-pointer shadow-md hover:bg-green-700 hover:text-white transition-all ${
                    selectedWeight === weight ? "selected" : ""
                  }`}
                >
                  {weight} گرم
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:gap-20 gap-12 text-xs">
            <h2 className="font-bold my-2">آسیاب</h2>
            <div className="max-w-96">
              <select
                className="w-46 border-2 border-slate-100 shadow-md p-2 rounded-lg cursor-pointer focus:outline-none"
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
          <div className="flex my-6">
            <div className="flex">
              <div className="text-center border-2 w-fit border-slate-100 shadow-md p-3 py-5 rounded-s-lg text-sm">
                {selectedProductQty}
              </div>
              <div className="text-center border-2 border-slate-100 shadow-md p-3 rounded-e-lg text-sm">
                <div>
                  <button
                    onClick={() => handleIncrement(selectedProduct.id)}
                    disabled={selectedProductQty === 0}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleDecrement(selectedProduct.id)}
                    disabled={selectedProductQty === 0}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex sm:mx-4 mx-2 text-sm">
                <div className="bg-green-700 shadow-md text-white p-2 h-fit rounded-s-lg my-auto">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className={`text-xs sm:text-sm my-4 border-1 rounded-e-lg p-2.5 md:p-2 shadow-md text-white cursor-pointer ${
                    isButtonDisabled ? "bg-gray-600" : "bg-green-800"
                  }`}
                  disabled={isButtonDisabled || selectedProductQty >= 1}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          {selectedProductQty > 0 ? (
            <div className="text-xs font-semibold my-4 text-red-600 leading-6">
              <p>
                توجه: محصول به سبد خرید اضافه شده است! لطفا از دکمه های + و -
                برای افزایش یا کاهش تعداد محصول استفاده نمایید. (دکمه ی افزودن
                به سبد خرید غیرفعال شد)
              </p>
            </div>
          ) : (
            ""
          )}
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
            <hr />
            <div className="text-xs py-4">
              <FontAwesomeIcon
                className="text-green-600"
                icon={faSquareCheck}
              />
              <span className="m-2">موجود است</span>
            </div>
          </div>
          <div className="flex gap-4 p-6">
            <div className="flex justify-between w-full text-xs">
              <div className="w-fit md:w-full lg:w-fit text-center border-2 border-slate-100 shadow-md p-2 rounded-xl mx-4 cursor-pointer hover:bg-sky-500 hover:text-white transition-all">
                <FontAwesomeIcon className="mx-2" icon={faCodeCompare} />
                <button>مقایسه</button>
              </div>
              <div className="w-fit md:w-full lg:w-fit text-center border-2 border-slate-100 shadow-md p-2 rounded-xl cursor-pointer hover:bg-sky-500 hover:text-white transition-all">
                <FontAwesomeIcon className="mx-2" icon={faBookmark} />
                <button>افزودن به علاقه مندی ها</button>
              </div>
            </div>
          </div>
          <div className="text-xs">
            <div className="border-2 border-slate-100 shadow-md m-3 px-4 p-3 rounded-xl">
              تضمین بهترین قیمت
            </div>
            <div className="border-2 border-slate-100 shadow-md m-3 px-4 p-2 rounded-xl">
              ضمانت اصل بودن
            </div>
            <div className="border-2 border-slate-100 shadow-md m-3 px-4 p-2 rounded-xl">
              تحویل اکسپرس
            </div>
            <div className="border-2 border-slate-100 shadow-md m-3 px-4 p-2 rounded-xl">
              بسته بندی زیبا
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-nowrap overflow-x-auto py-6 justify-center gap-6 mx-auto text-white text-xs font-bold">
        <div
          id="explain"
          onClick={handleExplain}
          className="bg-sky-400 shadow-md p-3 rounded-e-full rounded-tr-full cursor-pointer transition-all"
        >
          <div className="flex">
            <span>
              <FontAwesomeIcon
                className="mx-1 border-2 border-white p-1 rounded-full"
                icon={faCodeCompare}
              />
            </span>
            <button>توضیحات تکمیلی</button>
          </div>
        </div>
        <div
          id="comments"
          onClick={handlecComments}
          className="bg-slate-200 shadow-md text-black p-3 rounded-full cursor-pointer transition-all"
        >
          <div className="flex">
            <span>
              <FontAwesomeIcon
                className="mx-1 border-2 border-white p-1 rounded-full"
                icon={faComments}
              />
            </span>
            <button>نظرات کاربران</button>
          </div>
        </div>
        <div
          id="questions"
          onClick={handleQuestion}
          className="bg-slate-200 shadow-md text-black p-3 rounded-full cursor-pointer transition-all"
        >
          <div className="flex">
            <span>
              <FontAwesomeIcon
                className="mx-1 border-2 border-white p-1 rounded-full"
                icon={faQuestion}
              />
            </span>
            <button>سوالات کاربران</button>
          </div>
        </div>
        <div
          id="censure"
          onClick={handleCensure}
          className="bg-slate-200 shadow-md text-black p-3 rounded-s-full rounded-tl-full cursor-pointer transition-all"
        >
          <div className="flex">
            <span>
              <FontAwesomeIcon
                className="mx-1 border-2 border-white p-1 rounded-full"
                icon={faMagnifyingGlass}
              />
            </span>
            <button>نقد و بررسی</button>
          </div>
        </div>
      </div>
      <div
        id="box"
        className="w-full h-fit my-8 rounded-xl border-2 border-slate-100 shadow-md p-4"
      >
        <div className="w-full h-full rounded-xl">
          <div className="text-sm font-semibold flex">
            <span className="m-2 border-2 border-black p-2 rounded-lg text-sm w-fit">
              <svg
                className="w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
              </svg>
            </span>
            <span className="my-auto">مشخصات کلی</span>
          </div>
          <div className="border-2 border-slate-100 shadow-md my-6 p-3 rounded-lg text-xs font-bold flex">
            <span className="border-2 border-sky-600 text-blue-600 p-1 rounded-xl text-sm mx-2 w-fit">
              <svg
                className="w-2 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
              >
                <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
              </svg>
            </span>
            <span className="my-auto">سایر مشخصات</span>
          </div>
          <div>
            <div className="flex">
              <div className="shadow-md p-4 w-44 rounded-xl text-xs">
                وزن بسته بندی
              </div>
              <div className="mx-4 shadow-md w-full p-4 rounded-xl text-xs">
                <div>۲۵۰ گرم</div>
                <div>۵۰۰ گرم</div>
                <div>۷۰۰ گرم</div>
              </div>
            </div>
            <div className="flex mt-1">
              <div className="shadow-md p-4 w-44 rounded-xl text-xs">آسیاب</div>
              <div className="shadow-md mx-4 w-full p-4 rounded-xl text-xs">
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
