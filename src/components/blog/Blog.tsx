import "./Blog.scss" 
import m1 from "../../assets/blog-1.jpg"
import m2 from "../../assets/blog-2.jpg"
import m3 from "../../assets/blog-3.jpg"

const Blog = () => {
  return (
    <div className="blog">
         <div className="title">
            <h1>From The Blog</h1>
         </div>
         <div className="blog_items">
            <div className="item">
                <div className="img"><img src={m1} alt="" /></div>
                <div className="icons">
                    <div className="icon"> <i className="fa-regular fa-calendar"></i> </div>
                    <p>May 4,2019</p>
                    <div className="icon"><i className="fa-regular fa-comment"></i></div>
                </div>
                <h3>Cooking tips make cooking simple</h3>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>
            <div className="item">
                <div className="img"><img src={m2} alt="" /></div>
                <div className="icons">
                    <div className="icon"> <i className="fa-regular fa-calendar"></i> </div>
                    <p>May 4,2019</p>
                    <div className="icon"><i className="fa-regular fa-comment"></i></div>
                </div>
                <h3>Cooking tips make cooking simple</h3>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>
            <div className="item">
                <div className="img"><img src={m3} alt="" /></div>
                <div className="icons">
                    <div className="icon"> <i className="fa-regular fa-calendar"></i> </div>
                    <p>May 4,2019</p>
                    <div className="icon"><i className="fa-regular fa-comment"></i></div>
                </div>
                <h3>Cooking tips make cooking simple</h3>
                <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
            </div>
         </div>
    </div>
  )
}

export default Blog