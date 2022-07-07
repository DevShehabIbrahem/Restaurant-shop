export const data = {
  itemsWordsone: [
    { title: "Hamburger", img: require("../Asset/Items/1.png") },
    { title: "Yummy Donuts", img: require("../Asset/Items/2.png") },
  ],

  itemsWordtow: [
    { title: "Ice Cream", img: require("../Asset/Items/3.png") },
    { title: "Craft Pizza", img: require("../Asset/Items/4.png") },
  ],

  images: [
    { id: 1, imageUrl: require("../Asset/SliderCarousel/sandw1.png") },
    { id: 2, imageUrl: require("../Asset/SliderCarousel/Sandw.png") },
    { id: 3, imageUrl: require("../Asset/SliderCarousel/sandow3.png") },
  ],
  footerItems: [
    { id: 1, title: "+449 888 666 0000" },
    { id: 2, title: "hello@handout.com" },
    { id: 3, title: "855 Road, Brooklyn Street New York 600" },
  ],
  othersection: [
    {
      title: "Mild Butter",
      dec: "Learning do amet contur diiscivt suia non nuameius velit modi",
    },
    {
      title: "Slices Beef",
      dec: "Learning do amet contur diiscivt suia non nuameius velit modi",
    },
    {
      title: "Sleek Onion",
      dec: "Learning do amet contur diiscivt suia non nuameius velit modi",
    },
  ],

  products: [
    {
      id: 1,
      title: "Creazy burger",
      price: 65.5,
      dec: "Rearning do amet contur dicivt suia non nuameius velit",
      imageUrl: require("../Asset/Prodcuts/1.png"),
    },
    {
      id: 2,
      title: "Beefcakes Burgers",
      price: 29.5,
      dec: "Rearning do amet contur dicivt suia non nuameius velit",
      imageUrl: require("../Asset/Prodcuts/2.png"),
    },
    {
      id: 3,
      title: "The Crispy Bun",
      price: 50.5,
      dec: "Rearning do amet contur dicivt suia non nuameius velit",
      imageUrl: require("../Asset/Prodcuts/3.png"),
    },
    {
      id: 4,
      title: "Bugout Burgers",
      price: 35.5,
      dec: "Rearning do amet contur dicivt suia non nuameius velit",
      imageUrl: require("../Asset/Prodcuts/4.png"),
    },
  ],
  choooseOrder: [
    {
      id: 1,
      imgaeurl: require("../Asset/icons/2.png"),
      title: "burger",
    },
    {
      id: 2,
      imgaeurl: require("../Asset/icons/3.png"),
      title: "potato",
    },
    {
      id: 3,
      imgaeurl: require("../Asset/icons/4.png"),
      title: "pizzas",
    },

    {
      id: 5,
      imgaeurl: require("../Asset/icons/6.png"),
      title: "ٍSandwetch",
    },
  ],
  choooseOrderConentOne: [
    {
      title: "London Dry Ginger Kai ",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
    {
      title: "Magninil's Apple Juice",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
    {
      title: "6 Piece Sostikno Sticks",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
  ],
  choooseOrderConentTow: [
    {
      title: "Ocean Spray Swits Juice",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
    {
      title: "Smoked Brisket Sandwich",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
    {
      title: "Japanies Dilicious Burger",
      dec: "Lorem ipsum dolor sit amet consectetur adipiscing ipsum suspendisse ultrices gravida.",
      price: "30",
      Dotet: "..................",
    },
  ],
  opening: [
    { title: "Sunday", hours: "closed" },
    { title: "Monday", hours: "8.00 - 20.00" },
    { title: "Tuesday", hours: "10:00-5.00" },
    { title: "Wednesday", hours: "10:00-5.00" },
    { title: "Friday", hours: "10:00-5.00" },
    { title: "Saturday", hours: "10:00-5.00" },
  ],
};
//Seconde Time Make the Order
//check if this prodcts in this cart
// const prodctsIsExist = products?.find((pro) => pro.id === product.id);
// console.log(
//   "🚀 ~ file: BurgerSlider.jsx ~ line 49 ~ AddToCart ~ prodctsIsExist",
//   prodctsIsExist
// );
// const dublecate = { ...prodctsIsExist, qty: prodctsIsExist?.qty + 1 };
//incress the number of prodcuts
// const incressQTY = cartitems?.map((pro) =>
//   pro.id === product.id ? dublecate : pro
// );
//First time make the order
// const firstOrder = [...cartitems, { ...product, qty: 1 }];
// console.log(firstOrder);
//Update the incress Logic For second Time push
// if (prodctsIsExist) {
//   setCartitems(incressQTY);
// } else {
//   setCartitems(firstOrder);
// }
