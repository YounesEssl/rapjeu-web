import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ name }) {
  return (
    <>
      <div className="cardcontainer">
        <Link
          to="/Questions"
          style={{ color: "inherit", textDecoration: "inherit"}}
        >
          <div className="card" >
            <p>{name}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
