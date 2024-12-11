import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

export default function Background({ playstatus, HeroCount }) {
  if (playstatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  }

  const images = [image1, image2, image3];
  const altTexts = [
    "Background image 1",
    "Background image 2",
    "Background image 3",
  ];

  if (HeroCount >= 0 && HeroCount <= 2) {
    return (
      <img
        src={images[HeroCount]}
        alt={altTexts[HeroCount]}
        className="background fade-in"
      />
    );
  }

  return <div className="background fade-in">Background Not Found</div>;
}
