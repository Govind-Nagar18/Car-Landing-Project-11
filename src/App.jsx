import { useEffect, useState } from "react";
import Navbar from "./Navigation/Navbar.jsx";
import Background from "./Component/Background/Background.jsx";
import Hero from "./Hero/Hero.jsx";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "whta you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "yout passions" },
  ];

  const [HeroCount, setHerocount] = useState(0);
  const [playstatus, setPlaystatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHerocount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background playstatus={playstatus} HeroCount={HeroCount} />
      <Navbar />
      <Hero
        setHerocount={setHerocount}
        setPlaystatus={setPlaystatus}
        heroData={heroData[HeroCount]}
        HeroCount={HeroCount}
        playstatus={playstatus}
      />
    </div>
  );
}

export default App;
