import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import map from "../imgs/map.png";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="container">
        <section className="md:flex w-11/12 h-fit shadow-md mx-auto mt-4 p-4">
          <section>
            <div className=" h-fit border-2 border-slate-100 shadow-sm text-xs font-medium text-slate-600 p-2">
              <p>تماس با ما</p>
              <hr className="w-full my-4" />
              <div className="flex">
                <div className="border-2 mx-2 border-slate-50 shadow-md rounded-xl w-fit">
                  <FontAwesomeIcon className="h-5 m-3" icon={faEnvelope} />
                </div>
                <div>
                  <h4 className="my-auto mx-2">پست الکترونیک</h4>
                  <p className="mx-2 mt-2">Niarashid.mehdi@gmail.com</p>
                </div>
              </div>
              <div className="flex my-2">
                <div className="border-2 mx-2 border-slate-50 shadow-md rounded-xl w-fit">
                  <FontAwesomeIcon className="h-5 m-3" icon={faPhone} />
                </div>
                <div>
                  <h4 className="my-auto mx-2">شماره تماس</h4>
                  <p className="mx-2 mt-2">09169778006</p>
                </div>
              </div>
              <div className="flex">
                <div className="border-2 mx-2 h-fit border-slate-50 shadow-md rounded-xl w-fit">
                  <FontAwesomeIcon className="h-5 m-3" icon={faMap} />
                </div>
                <div>
                  <h4 className="my-auto mx-2">آدرس</h4>
                  <p className="mx-2 mt-2 leading-7">
                    اهواز، کیانپارس نبش آبان غربی فروشگاه قهوه 28
                  </p>
                </div>
              </div>
            </div>
            <div className="w-fit h-fit border-8 border-gray-100 p-2 rounded-b-2xl">
              <div className="w-full h-full shadow-md rounded-2xl">
                <img src={map} alt="نقشه" />
              </div>
            </div>
          </section>

          <section className="text-xs font-medium md:mx-4 w-full">
            <form>
              <div className="mt-4 md:mt-0">
                <label htmlFor="name">نام (اجباری)</label>
                <div className="my-2">
                  <input
                    id="name"
                    className="border-2 p-2 border-slate-100 shadow-md rounded-md w-full my-2 outline-none focus:border-slate-300 transition-all"
                    autoComplete="name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">ایمیل (اجباری)</label>
                <div className="my-2">
                  <input
                    id="email"
                    className="border-2 p-2 border-slate-100 shadow-md rounded-md w-full my-2 outline-none focus:border-slate-300 transition-all"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="title">موضوع</label>
                <div className="my-2">
                  <input
                    id="title"
                    className="border-2 p-2 border-slate-100 shadow-md rounded-md w-full my-2 outline-none focus:border-slate-300 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message">پیام شما</label>
                <div className="my-2">
                  <textarea
                    id="message"
                    className="border-2 p-2 border-slate-100 shadow-md rounded-md w-full my-2 h-36 outline-none focus:border-slate-300 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-gray-500 text-white rounded-md w-20 h-8"
                >
                  ارسال
                </button>
              </div>
            </form>
          </section>
        </section>
        <section className="w-11/12 h-fit shadow-md mx-auto mt-4 p-1 rounded-md">
          <div className="border-2 border-gray-300 h-full shadow-sm rounded-md p-3">
            <p className="text-sm font-bold text-slate-600 leading-7 mb-12">
              قهوه 28 یک فروشگاه اینترنتی قهوه و تجهیزات قهوه ست، قهوه‌ ات را به
              صورت آنلاین سفارش بده، فروشگاه ما در غرب اهواز محله کیانپارس هست،
              هر هفته برشت میکنیم که قهوه همیشه تازه باشه، سپس با توجه به ابزار
              دم آوری که انتخاب کردید، به آدرسی که درج کردید به چندین روش حمل
              مختلف به سراسر ایران ارسال می‌کنیم.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default ContactUs;
