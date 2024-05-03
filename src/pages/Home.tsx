import CategoriesSwiper from "../components/CategoriesSwiper/CategoriesSwiper";
import Blog from "../components/blog/Blog";
import Categories from "../components/categories/Categories";
import FeaturedProduct from "../components/featuredProduct/FeaturedProduct";
 
const Home = () => {
  return <>
   <Categories />
   <CategoriesSwiper />
   <FeaturedProduct />
   <Blog />
  </>;
};

export default Home;
