import { Link } from "react-router-dom";
import "./Blog.scss";

import { data } from "./blogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComment } from "@fortawesome/free-regular-svg-icons";

const Blog = () => {
  return (
    <div className="blog">
      <div className="banner">
        <h1>Blog</h1>
        <div className="text">
          <Link to="/">Home</Link> - <p>Blog</p>
        </div>
      </div>
      <div className="items">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="icons">
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <div className="text"> May 4,2020 </div>
              </div>
              <div className="icon">
              <FontAwesomeIcon icon={faComment} />
              <div className="text">12</div>
              </div>
            </div>
            <div className="title">
              <h2> {item.title} </h2>
            </div>
            <div className="describtion">
              <p> {item.describtion} </p>
            </div>
            <div className="btn"> <p>Read More</p> <i className="fa-solid fa-arrow-right-long"></i></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
