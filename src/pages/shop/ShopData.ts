import img1 from "../../assets/pd-1.jpg"
import img2 from "../../assets/pd-2.jpg"
import img3 from "../../assets/pd-3.jpg"
import img4 from "../../assets/pd-4.jpg"
import img5 from "../../assets/pd-5.jpg"
import img6 from "../../assets/pd-6.jpg"

import imgP1 from "../../assets/product-1.jpg"
import imgP2 from "../../assets/product-2.jpg"
import imgP3 from "../../assets/product-3.jpg"
import imgP4 from "../../assets/product-4.jpg"
import imgP5 from "../../assets/product-5.jpg"
import imgP6 from "../../assets/product-6.jpg"
import imgP7 from "../../assets/product-7.jpg"
import imgP8 from "../../assets/product-8.jpg"
import imgP9 from "../../assets/product-9.jpg"
import imgP10 from "../../assets/product-10.jpg"
import imgP11 from "../../assets/product-11.jpg"
import imgP12 from "../../assets/product-12.jpg"

type Departments = string[]
type Products =  {id: number, img: string, title: string, category: string, price: number, oldPrice?: number}[]

export const departments: Departments = ["Fresh Meat", "Vegitables", "Fruit & Nut Gifts", "Fresh Berries", "Ocean Foods", "FastFood", "Fresh Onion", "Papaya & Crisps", "Oatmeal"];

export const products: Products = [
  {
    id: 8, 
    category: "Vegetables",
    img: img1,
    title: "Raisin Nut",
    price: 30,
    oldPrice: 36,
  },
  {
    id: 10, 
    category: "Vegetables",
    img: img2,
    title: "Vegetables’package",
    price: 30,
    oldPrice: 36,
  },
  {
    id: 11,
    category: "Vegetables",
    img: img3,
    title: "Mixed Friuts",
    price: 30,
    oldPrice: 36,
  },
  {
    id: 12, 
    category: "Vegetables",
    img: img4,
    title: "Raisin Nut",
    price: 30,
    oldPrice: 36,
  },
  {
    id: 13, 
    category: "Vegetables",
    img: img5,
    title: "Raisin Nut",
    price: 30,
    oldPrice: 36,
  },
  {
    id: 14,
    category: "Vegetables",
    img: img6,
    title: "Raisin Nut",
    price: 30,
    oldPrice: 36,
  },
]

export const productsData: Products = [
    {
        id: 15,
        category: "products",
        title: "Crab Pool Security",
        img: imgP1,
        price: 12,
    },
    {
        id: 16,
        category: "products",
        title: "Crab Pool Security",
        img: imgP2,
        price: 12,
    },
    {
        id: 17,
        category: "products",
        title: "Crab Pool Security",
        img: imgP3,
        price: 12,
    },
    {
        id: 18,
        category: "products",
        title: "Crab Pool Security",
        img: imgP4,
        price: 13,
    },
    {
        id: 19,
        category: "products",
        title: "Crab Pool Security",
        img: imgP5,
        price: 14,
    },
    {
        id: 20,
        category: "products",
        title: "Crab Pool Security",
        img: imgP6,
        price: 12,
    },
    {
        id: 21,
        category: "products",
        title: "Crab Pool Security",
        img: imgP7,
        price: 12,
    },
    {
        id: 22,
        category: "products",
        title: "Crab Pool Security",
        img: imgP8,
        price: 12,
    },
    {
        id: 23,
        category: "products",
        title: "Crab Pool Security",
        img: imgP9,
        price: 12,
    },
    {
        id: 24,
        category: "products",
        title: "Crab Pool Security",
        img: imgP10,
        price: 12,
    },
    {
        id: 25,
        category: "products",
        title: "Crab Pool Security",
        img: imgP11,
        price: 12,
    },
    {
        id: 26,
        category: "products",
        title: "Crab Pool Security",
        img: imgP12,
        price: 12,
    },
]