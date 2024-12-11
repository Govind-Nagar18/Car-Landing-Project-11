import './Hero.css'
import play_icon from "../assets/play_icon.png";
import pause_icon from "../assets/pause_icon.png";
import arrow_btn from "../assets/arrow_btn.png";


export default function Hero({
  heroData,
  setPlaystatus,
  setHerocount, 
  HeroCount,
  playstatus,
}) {
  return (
    <div className="hero">
      <div className="herotext">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img id='arrow' src={arrow_btn} alt="Explore" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHerocount(0)}
            className={HeroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(1)}
            className={HeroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(2)}
            className={HeroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="heroplay">
          <img id='playbtn'
            onClick={() => setPlaystatus(!playstatus)}
            src={playstatus ? pause_icon : play_icon}
            alt="Play/Pause"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}
