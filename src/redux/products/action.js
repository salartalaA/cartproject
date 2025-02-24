import { SET_PRODUCTS, SET_FILTER } from "./actionType";

const products = [
  {
    id: 1,
    name: "قهوه اول",
    describe: "توضیحات قهوه ی اول",
    faColor: "آبی",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/SUNRISE-100-ROBUSTA-250G-185x185.webp",
    price: 200,
    color: "blue",
  },
  {
    id: 2,
    name: "قهوه دوم",
    describe: "توضیحات قهوه ی دوم",
    faColor: "خاکستری",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/rhino-40-arabica-250g-185x185.webp",
    price: 450,
    color: "gray",
  },
  {
    id: 3,
    name: "قهوه سوم",
    describe: "توضیحات قهوه ی سوم",
    faColor: "سبز",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 100,
    color: "green",
  },
  {
    id: 4,
    name: "قهوه چهارم",
    describe: "توضیحات قهوه ی چهارم",
    faColor: "همه",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 324,
    color: "all",
  },
  {
    id: 5,
    name: "قهوه پنجم",
    describe: "توضیحات قهوه ی پنجم",
    faColor: "همه",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 520,
    color: "all",
  },
  {
    id: 6,
    name: "قهوه ششم",
    describe: "توضیحات قهوه ی ششم",
    faColor: "زرد",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 470,
    color: "yellow",
  },
  {
    id: 7,
    name: "قهوه هفتم",
    describe: "توضیحات قهوه ی هفتم",
    faColor: "زرد",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 460,
    color: "yellow",
  },
  {
    id: 8,
    name: "قهوه هشتم",
    describe: "توضیحات قهوه ی هشتم",
    faColor: "قرمز",
    image:
      "https://28coffee.ir/wp-content/uploads/2023/02/VIOLA-70-ARABICA-500-G-185x185.webp",
    price: 410,
    color: "red",
  },
];

export const getProducts = () => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
