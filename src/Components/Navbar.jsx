import React from "react";
import StudentCard from "./StudentCard";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Flame</h1>
          <div className="btn-nav" style={{ display: "flex" }}>
            <div className="btn">Dashboard</div>
            <div className="btn">Student</div>
            <div className="btn">Add</div>
          </div>
        </nav>
      </div>
      <StudentCard />
    </div>
  );
};

export default Navbar;
