"use client";
import InfoLeft from "../components/Info_left";
import InfoRight from "../components/Info_right";
import info from "../info.json";
import { useState } from "react";

export default function About() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };
  return (
    <div>
      <img className="ribbon" src="/ribbon_angle.png"></img>
      <div className="margins">
        <p className="h_wrap">
          2025 год был продуктивным не только на дизайн, но и на собщения в
          беседе команды дизайна!
        </p>
        <p className="p_wrap">мы собрали сухую статистику, вот она:</p>
      </div>
      <InfoLeft data={info[0]} />
      <img
        src="/check_mark.svg"
        style={{
          marginRight: 0,
          marginLeft: "auto",
          display: "block",
        }}
        className={isAnimating ? "ripple-animation" : ""}
        onClick={handleImageClick}
        alt="Check mark"
      />
      <InfoRight data={info[1]} />
      <img
        src="/1_m.png"
        style={{ marginRight: "auto", marginLeft: 0, display: "block" }}
        className={isAnimating ? "ripple-animation" : ""}
        onClick={handleImageClick}
      ></img>
      <InfoLeft data={info[2]} />
      <img
        src="/21_pic.svg"
        style={{ marginRight: 0, marginLeft: "auto", display: "block" }}
        className={isAnimating ? "ripple-animation" : ""}
        onClick={handleImageClick}
      ></img>
    </div>
  );
}
