import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-footer mt-4 text-sm font-semibold leading-8">
      <div className="container pt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 text-white px-6 gap-6">
        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-300 mb-4">دسترسی سریع</h4>
          <ul className="space-y-2">
            <li>تماس با ما</li>
            <li>وبلاگ</li>
            <li>شورتکد</li>
            <li>پیگیری سفارش</li>
            <li>فروشگاه</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h4 className="text-yellow-300 mb-4">خدمات مشتریان</h4>
          <ul className="space-y-2">
            <li>سوالات متداول</li>
            <li>رویه بازگردانی کالا</li>
            <li>حریم خصوصی</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        {/* About 28 Coffee */}
        <div>
          <h4 className="text-yellow-300 mb-4">درباره قهوه 28</h4>
          <p className="max-w-prose">
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
            آدرس: اهواز، کیان پارس بین خیابان مهر و آبان غربی جنب پوشاک زاگرس
          </p>
          <p className="mb-2">تلفن: 09169778006</p>
          <div className="bg-black p-2 rounded-xl inline-block">
            <p className="text-white">Niarashid.mehdi@gmail.com</p>
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
