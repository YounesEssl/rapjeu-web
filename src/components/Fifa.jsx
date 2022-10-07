import "./Fifa.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Question = () => {
  const tab = {
    images: [
      "../../fifa/1.png",
      "../../fifa/2.png",
      "../../fifa/3.png",
      "../../fifa/4.png",
      "../../fifa/5.png",
      "../../fifa/6.png",
      "../../fifa/7.png",
      "../../fifa/8.png",
      "../../fifa/9.png",
      "../../fifa/10.png",
      "../../fifa/11.png",
      "../../fifa/12.png",
      "../../fifa/13.png",
      "../../fifa/14.png",
      "../../fifa/15.png",
      "../../fifa/16.png",
      "../../fifa/17.png",
      "../../fifa/18.png",
      "../../fifa/19.png",
      "../../fifa/20.png",
      "../../fifa/21.png",
      "../../fifa/22.png",
      "../../fifa/23.png",
      "../../fifa/24.png",
      "../../fifa/25.png",
      "../../fifa/26.png",
      "../../fifa/27.png",
      "../../fifa/28.png",
      "../../fifa/29.png",
      "../../fifa/30.png",
      "../../fifa/31.png",
      "../../fifa/32.png",
      "../../fifa/33.png",
      "../../fifa/34.png",
      "../../fifa/35.png",
      "../../fifa/36.png",
      "../../fifa/37.png",
      "../../fifa/38.png",
      "../../fifa/39.png",
      "../../fifa/40.png",
      "../../fifa/41.png",
      "../../fifa/42.png",
      "../../fifa/43.png",
      "../../fifa/44.png",
      "../../fifa/45.png",
      "../../fifa/46.png",
      "../../fifa/47.png",
      "../../fifa/48.png",
      "../../fifa/49.png",
      "../../fifa/50.png",
      "../../fifa/51.png",
      "../../fifa/52.png",
      "../../fifa/53.png",
      "../../fifa/54.png",
      "../../fifa/55.png",
      "../../fifa/56.png",
      "../../fifa/57.png",
      "../../fifa/58.png",
      "../../fifa/59.png",
      "../../fifa/60.png",
      "../../fifa/61.png",
      "../../fifa/62.png",
      "../../fifa/63.png",
      "../../fifa/64.png",
      "../../fifa/65.png",
      "../../fifa/66.png",
      "../../fifa/67.png",
      "../../fifa/68.png",
      "../../fifa/69.png",
      "../../fifa/70.png",
      "../../fifa/71.png",
      "../../fifa/72.png",
      "../../fifa/73.png",
      "../../fifa/74.png",
      "../../fifa/75.png",
      "../../fifa/76.png",
      "../../fifa/78.png",
      "../../fifa/79.png",
      "../../fifa/80.png",
      "../../fifa/81.png",
      "../../fifa/82.png",
      "../../fifa/83.png",
      "../../fifa/84.png",
      "../../fifa/85.png",
      "../../fifa/86.png",
      "../../fifa/87.png",
      "../../fifa/88.png",
      "../../fifa/89.png",
      "../../fifa/90.png",
      "../../fifa/91.png",
      "../../fifa/92.png",
      "../../fifa/93.png",
      "../../fifa/94.png",
      "../../fifa/95.png",
      "../../fifa/96.png",
      "../../fifa/97.png",
      "../../fifa/98.png",
      "../../fifa/99.png",
      "../../fifa/100.png",
      "../../fifa/101.png",
      "../../fifa/102.png",
      "../../fifa/103.png",
      "../../fifa/104.png",
      "../../fifa/105.png",
      "../../fifa/106.png",
      "../../fifa/107.png",
      "../../fifa/108.png",
      "../../fifa/109.png",
      "../../fifa/110.png",
      "../../fifa/111.png",
      "../../fifa/112.png",
      "../../fifa/113.png",
      "../../fifa/114.png",
      "../../fifa/115.png",
      "../../fifa/116.png",
      "../../fifa/117.png",
      "../../fifa/118.png",
      "../../fifa/119.png",
      "../../fifa/120.png",
      "../../fifa/121.png",
      "../../fifa/122.png",
      "../../fifa/123.png",
      "../../fifa/124.png",
      "../../fifa/125.png",
      "../../fifa/126.png",
      "../../fifa/127.png",
      "../../fifa/128.png",
      "../../fifa/129.png",
      "../../fifa/130.png",
      "../../fifa/131.png",
      "../../fifa/132.png",
      "../../fifa/133.png",
      "../../fifa/134.png",
      "../../fifa/135.png",
      "../../fifa/136.png",
      "../../fifa/137.png",
      "../../fifa/138.png",

    ],
    index: "../../fifa/1.png",
  };

  function Random() {
    setTimeout(() => {
      let randomnumber = 0;
      if (index.images.lenght !== 0) {
        randomnumber = Math.floor(Math.random() * (index.images.length + 1));
      }
      let urlactuel = index.images[randomnumber];

      const images = index.images.filter((value, index) => {
        return randomnumber !== index;
      });

      const test = {
        images: images,
        index: urlactuel,
      };
      setindex(test);
    }, 1000);
  }

  const [index, setindex] = useState(tab);
  return (
    <div className="cartecontainer">
      <button onClick={() => Random()}> CHANGER DE CARTE </button>
      <img src={index.index} alt="carte" />
      <Link
        className="btnhome"
        to="/"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <FontAwesomeIcon className="arrowdown" icon={faArrowLeft} /> Return Home
      </Link>
    </div>
  );
};

export default Question;
