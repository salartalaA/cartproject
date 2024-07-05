import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-footer mt-4 text-sm font-semilight leading-6">
      <div className="container pt-4 grid grid-cols-1 text-center md:text-start sm:grid-cols-3 md:grid-cols-4 text-white px-6 gap-6">
        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-300 mb-4">دسترسی سریع</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer w-fit">تماس با ما</li>
            <li className="cursor-pointer w-fit">وبلاگ</li>
            <li className="cursor-pointer w-fit">شورتکد</li>
            <li className="cursor-pointer w-fit">پیگیری سفارش</li>
            <li className="cursor-pointer w-fit">فروشگاه</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h4 className="text-yellow-300 mb-4">خدمات مشتریان</h4>
          <ul className="space-y-2">
            <li className="cursor-pointer w-fit">سوالات متداول</li>
            <li className="cursor-pointer w-fit">رویه بازگردانی کالا</li>
            <li className="cursor-pointer w-fit">حریم خصوصی</li>
            <li className="cursor-pointer w-fit">تماس با ما</li>
          </ul>
        </div>

        {/* About 28 Coffee */}
        <div>
          <h4 className="text-yellow-300 mb-4">درباره قهوه 28</h4>
          <p>
            قهوه 28 یک فروشگاه تخصصی قهوه و تجهیزات قهوه است. ما قهوه را به صورت
            آنلاین فراهم می‌کنیم و فروشگاه ما در غرب اهواز واقع شده است. هر هفته
            قهوه تازه را برای شما به ارمغان می‌آوریم و با توجه به ابزار دم آوری
            که انتخاب می‌کنید، به آدرسی که درج کرده‌اید، قهوه را به سراسر ایران
            ارسال می‌کنیم.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-yellow-300 mb-4">تماس با ما</h4>
          <p className="mb-2">
            <span className="mx-1">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            اهواز، کیان پارس بین خیابان مهر و آبان غربی جنب پوشاک زاگرس
          </p>
          <p className="mb-2">
            <span className="mx-1">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </span>
            09169778006
          </p>
          <div className="bg-black p-2 rounded-xl inline-block">
            <p className="text-white text-xs font-bold">
              Niarashid.mehdi@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4">
        <hr />
      </div>

      {/* Copyright */}
      <div className="text-center text-white p-4">
        کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی برداری
        شامل پیگرد قانونی می باشد.
      </div>
    </footer>
  );
};

export default Footer;
