import React from "react";
import ListMovie from "../components/ListMovie.jsx";
import Hero from "../components/Hero.jsx";
function Home() {
  return (
    <div className="bg-dark">
        <Hero />
        <ListMovie />
    </div>
  );
}

export default Home;
