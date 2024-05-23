import React from "react";
import "../App.css";

const studentData = [
  {
    id: 1,
    name: "John Doe",
    batch: "2022",
    gender: "Male",
    education: "Bachelor's in Computer Science",
  },
  {
    id: 2,
    name: "Jane Smith",
    batch: "2023",
    gender: "Female",
    education: "Bachelor's in Economics",
  },
  {
    id: 3,
    name: "Michael Johnson",
    batch: "2022",
    gender: "Male",
    education: "Bachelor's in Mechanical Engineering",
  },
  {
    id: 4,
    name: "Emily Williams",
    batch: "2024",
    gender: "Female",
    education: "Bachelor's in Psychology",
  },
  {
    id: 5,
    name: "David Brown",
    batch: "2023",
    gender: "Male",
    education: "Bachelor's in Business Administration",
  },
  {
    id: 6,
    name: "Sarah Davis",
    batch: "2022",
    gender: "Female",
    education: "Bachelor's in English Literature",
  },
  {
    id: 7,
    name: "James Wilson",
    batch: "2024",
    gender: "Male",
    education:
      "Bachelor's in History Bachelor's in History Bachelor's in History Bachelor's in History",
  },
  {
    id: 8,
    name: "Jennifer Martinez",
    batch: "2023",
    gender: "Female",
    education: "Bachelor's in Mathematics",
  },
  {
    id: 9,
    name: "Christopher Taylor",
    batch: "2022",
    gender: "Male",
    education: "Bachelor's in Physics",
  },
  {
    id: 10,
    name: "Amanda Anderson",
    batch: "2024",
    gender: "Female",
    education: "Bachelor's in Chemistry",
  },
];

console.log(studentData);

const StudentCard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {studentData.map((stud, id) => (
        <div className="card" key={id}>
          <p className="head" style={{ textAlign: "center" }}>
            Hello
          </p>
          <p>
            Name: <span>{stud.name}</span>
          </p>
          <p>
            Batch: <span>{stud.batch}</span>
          </p>
          <p>
            Gender: <span>{stud.gender}</span>
          </p>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Education Detail: <span>{stud.education}</span>
          </p>
          <div
            className=""
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: "blue",
                marginRight: "10px",
                color: "white",
              }}
            >
              Edit
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "red", color: "black" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;
