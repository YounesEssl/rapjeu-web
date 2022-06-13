import React from "react";
import "./Home.css";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <>
      <div className="allcontainer">

        <div className="firstcontainer">

          <div className="titlecontainer">
            <p className="title">SRap Game</p>
          </div>

          <div className="subtitle">
            <p>Select Game</p>
            <FontAwesomeIcon className="arrowdown" icon={ faArrowDown } />
          </div>

          <div className="cardcontainer">
                <Card name="Rapmon"></Card>
                <Card name="Comming soon"></Card>
          </div>

        </div>

      </div>
    </>
  );
}
