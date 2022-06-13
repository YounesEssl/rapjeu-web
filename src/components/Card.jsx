import React from "react";
import "./Card.css";
import { Link, Routes, Route } from "react-router-dom";

export default function Card({name}) {
  return (
    <>
        <div className="cardcontainer">
            <div className="card">
                
            <Link to="/Questions" style={{ color: 'inherit', textDecoration: 'inherit'}}>{name}</Link>
            
            </div>
        </div>
    </>
  );
}
