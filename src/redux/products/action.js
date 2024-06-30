import { SET_PRODUCTS } from "./actionType";

const products = [
  {
    id: 1,
    name: "قهوه اول",
    describe: "توضیحات قهوه ی اول",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/SUNRISE-100-ROBUSTA-250G-185x185.webp",
    price: 200,
  },
  {
    id: 2,
    name: "قهوه دوم",
    describe: "توضیحات قهوه ی دوم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/rhino-40-arabica-250g-185x185.webp",
    price: 450,
  },
  {
    id: 3,
    name: "قهوه سوم",
    describe: "توضیحات قهوه ی سوم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 100,
  },
  {
    id: 4,
    name: "قهوه چهارم",
    describe: "توضیحات قهوه ی چهارم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 324,
  },
  {
    id: 5,
    name: "قهوه پنجم",
    describe: "توضیحات قهوه ی پنجم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 520,
  },
  {
    id: 6,
    name: "قهوه ششم",
    describe: "توضیحات قهوه ی ششم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 470,
  },
  {
    id: 7,
    name: "قهوه هفتم",
    describe: "توضیحات قهوه ی هفتم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 460,
  },
  {
    id: 8,
    name: "قهوه هشتم",
    describe: "توضیحات قهوه ی هشتم",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 410,
  },
];

export const getProducts = () => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
