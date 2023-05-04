import React from "react";
import './TrainerSection.css'

const trainers = [
  {
    name: "Amitee Loiselle",
    role: "Fitness Coach",
    imageUrl: "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Liam Harpaut",
    role: "Crossfit Coach",
    imageUrl: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mark Anthony",
    role: "Crossfit Coach",
    imageUrl: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ron Richardson",
    role: "Body Building",
    imageUrl: "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  
];

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
        {trainers.map((trainer) => (
          <div key={trainer.name}>
            <img src={trainer.imageUrl} alt={trainer.name} className="trainers-img" />
            <h4>{trainer.name}</h4>
            <p>{trainer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}