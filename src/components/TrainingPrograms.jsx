import React from "react";
import "./TrainingPrograms.css";

export default function TrainingPrograms() {
  return (
    <div className="training-main-div">
      <div>
        <h1>Training Programs</h1>
      </div>
      <div className="training-section">

        <div>
        <img
          src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="training-img"
        />
        <p>Body Building</p>
        </div>

        <div>
        <img
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="training-img"
        />
        <p>Yoga</p>
        </div>

        <div>
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="training-img"
        />
        <p>Aerobic</p>
        </div>

        <div>
        <img
          src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="training-img"
        />
        <p>Flexibility</p>
        </div>

      </div>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}
