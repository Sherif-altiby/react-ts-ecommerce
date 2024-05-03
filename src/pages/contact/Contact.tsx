import { Link } from "react-router-dom"
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact" >
      <div className="banner">
        <h1>Blog</h1>
        <div className="text">
          <Link to="/">Home</Link> - <p>Blog</p>
        </div>
      </div>
      <div className="icons">
        <div className="icon">
        <i className="fa-solid fa-phone"></i>
            <h2>Phone</h2>
            <p>+20 1017 143 343</p>
        </div>
        <div className="icon">
        <i className="fa-solid fa-location-dot"></i>
            <h2>Address</h2>
            <p>Egypt</p>
        </div>
        <div className="icon">
        <i className="fa-regular fa-clock"></i>
            <h2>Open Time</h2>
            <p>10:00 am to 23:00</p>
        </div>
        <div className="icon">
        <i className="fa-solid fa-envelope"></i>
            <h2>Email</h2>
            <p>sherifahmed852002@gmail.com</p>
        </div>
      </div>
      <div className="contact_us">
        <h1> Leave Message  </h1>
        <form>
            <div className="inputs_name_email">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email"/>
            </div>
            <textarea name="message" placeholder="Your Message"></textarea>
            <input type="submit" value = "Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact