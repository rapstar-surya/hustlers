import React from "react";
import "./About.css"
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div>
      <div >
        <Navbar/>
      </div>
      <div className="top">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cllK0z8BrlQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h1 >About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            nisi quas illum ratione accusantium doloribus possimus numquam, eius
            perspiciatis vitae quis voluptas assumenda quia eligendi, quisquam,
            fuga eum minima. Veritatis. Esse, pariatur numquam eveniet ut, atque
            consequuntur quod quae ea sunt, quos vero doloremque veritatis unde
            odit provident maxime obcaecati eos beatae voluptatibus voluptas
            odio. Esse cumque fugit quisquam assumenda.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, amet nulla autem tempora quaerat, officiis doloremque dignissimos non nihil quasi iure nobis minima modi sequi asperiores sapiente. Quibusdam, dolore ad?
            In vitae voluptatem minima quam repellat, quasi autem laborum doloremque quas fugit quisquam, odit blanditiis recusandae et voluptatum delectus optio id perferendis temporibus sint dolorem facilis cupiditate numquam. Nesciunt, delectus.
            A voluptatem repellat, rem fuga totam architecto expedita. Iusto voluptatem dignissimos, est expedita a neque qui illum exercitationem at architecto magnam quisquam nemo, laboriosam porro, ipsum ratione iure eveniet vitae.
          </p>
          <a href="" style={{color:'blue'}}>Read More</a>
        </div>
      </div>
        <br /> <br /> <br />
      <div className="bottom">
        <div>
            <h1 >Why Choose Us?</h1>
            <ul>
                <li> 
                    <h2>Consultaions with Expert </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem est soluta, quaerat blanditiis expedita nemo tempora optio aut facilis, cupiditate officiis repellendus molestias voluptatem facere voluptates quae architecto praesentium vitae?</p>
                </li>
                <li>
                    <h2>Best workout Facilities</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio explicabo sed eveniet veniam provident alias voluptates, voluptatem suscipit nihil ea dolorem dolor quis iure voluptas. Delectus quidem a laudantium.</p>
                </li>
            </ul>
        </div>

        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/h1rA2jMS-6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
