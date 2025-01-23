import React from 'react';
import Hero from '../components/hero.jsx';
import LatestColl from "../components/LatestColl.jsx";
import OurPolicy from '../components/OurPolicy.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <LatestColl />
      <OurPolicy />
    </div>
  );
}

export default Home;