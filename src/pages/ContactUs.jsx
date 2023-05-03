import React from "react";
import Navbar from "../components/Navbar";
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="contact-div">
        <div>
          <h1>Contact Us</h1>
          <h3>Phone: +91 92000 92000</h3>
          <h3>Email: gym@gmail.com</h3>
          <h3>
            Address: <br />
            42, New Delhi, <br />
            India.
          </h3>
        </div>

        <div>
          <h2>Have any query? filled the below form</h2>
          <input type="text" placeholder="Type your name" style={{width:'20rem',padding:'5px'}}/> <br /> <br />
          <input type="email" placeholder="Enter your email" style={{width:'20rem',padding:'5px'}}/> <br /> <br />
          <textarea
            name=""
            id=""
            cols="42.5"
            rows="10"
            placeholder="add your query"
          /> <br /> <br />
          <button type="submit" style={{padding:'1rem'}}>Submit</button>
        </div>
      </div>
    </div>
  );
}
