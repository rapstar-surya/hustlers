import React from "react";
import "./TrainingPrograms.css";

const programs = [
  {
    name: "Body Building",
    imageSrc:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Yoga",
    imageSrc:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Aerobic",
    imageSrc:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Flexibility",
    imageSrc:
      "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function TrainingPrograms() {
  return (
    <div className="training-main-div">
      <div>
        <h1>Training Programs</h1>
      </div>
      <div className="training-section">
        {programs.map((program) => (
          <div key={program.name}>
            <img
              src={program.imageSrc}
              alt=""
              className="training-img"
            />
            <p>{program.name}</p>
          </div>
        ))}
      </div>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}


// import React from "react";
// import "./TrainingPrograms.css";

// const programs = [
//   {
//     name: "Body Building",
//     imageSrc:
//       "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "Yoga",
//     imageSrc:
//       "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "Aerobic",
//     imageSrc:
//       "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "Flexibility",
//     imageSrc:
//       "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// export default function TrainingPrograms() {
//   return (
//     <div className="wrapper">
//       <div className='item'>
//         <div className='content'>
//           <img
//             src="https://www.usmagazine.com/wp-content/uploads/800043282_eminem-zoom-d3e91cfd-e6d5-45dc-9009-833bd2fc3e3e.jpg"
//             className='size'
//           />
//           <p>Eminem</p>
//           <div>Age: 50 years</div>
//           <div>Nationality: American</div>
//         </div>
//       </div>
//     </div>
//   );
// }
