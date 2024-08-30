import {
  faUtensils,
  faShoppingBasket,
  faBolt,
  faBasketballBall,
  faMobile,
  faMotorcycle,
  faTablet,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

const productCategories = [
  {
    name: "kitchen-accessories",
    color: "bg-pink-200",
    darkShade: "bg-pink-300",
    icon: faUtensils,
  },
  {
    name: "groceries",
    color: "bg-green-200",
    darkShade: "bg-green-300",
    icon: faShoppingBasket,
  },
  {
    name: "mobile-accessories",
    color: "bg-sky-200",
    darkShade: "bg-sky-300",
    icon: faBolt,
  },
  {
    name: "motorcycle",
    color: "bg-teal-200",
    darkShade: "bg-teal-300",
    icon: faMotorcycle,
  },
  {
    name: "sports-accessories",
    color: "bg-lime-200",
    darkShade: "bg-lime-300",
    icon: faBasketballBall,
  },
  {
    name: "tablets",
    color: "bg-cyan-200",
    darkShade: "bg-cyan-300",
    icon: faTablet,
  },
  {
    name: "mens-shirts",
    color: "bg-violet-200",
    darkShade: "bg-violet-300",
    icon: faShirt,
  },
  {
    name: "smartphones",
    color: "bg-indigo-200",
    darkShade: "bg-indigo-300",
    icon: faMobile,
  },
];

export default productCategories;
