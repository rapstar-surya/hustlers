import React from "react";
import './TrainerSection.css'

export default function TrainerSection() {
  return (
    <div className="main-div">
      <div>
        <h1>Meet Our Team </h1>
        <p>
          We are team of experienced people, nuitritin, sports and fitness
          passionate experts with talent and knowledge unsurpassed in the
          industry. Get to know us
        </p>
      </div>

      <div className="images-div">
        <div>
          <img src="https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trainers-img"/>
          <h4>Amitee Loiselle</h4>
          <p>Fitness Coach</p>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trainers-img"/>
          <h4>Liam Harpaut</h4>
          <p>Crossfit Coach</p>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trainers-img"/>
          <h4>Mark Anthony</h4>
          <p>Crossfit Coach</p>
        </div>

        <div>
          <img src="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="trainers-img"/>
          <h4>Ron Richardson</h4>
          <p>Body Building</p>
        </div>
      </div>
    </div>
  );
}
