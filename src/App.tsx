import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import Nav from "./components/nav/Nav";
import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
import { useAppSelector } from "./components/hooks";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Contact from "./pages/contact/Contact";

function App() {
  const selector = useAppSelector((state) => state.menu.showMenue);
  return (
    <div className= {selector ? "app_100vh" : " "}>
      <Router>
        <Nav />
        <ResponsiveMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
