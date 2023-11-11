import CarouselList from "./components/CarouselList";
import requests from "./requests";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // get window size
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState([
      window.innerWidth,
      window.innerHeight,
    ]);
    useEffect(() => {
      const handleResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  const [windowWidth, windowHeight] = useWindowSize();

  // get amount of items in each carousel per window res
  let carouselItemsAmt = 6; // default amount for resolutions at 1400p and higher
  if (windowWidth < 1400 && windowWidth >= 1100) {
    carouselItemsAmt = 5;
  } else if (windowWidth < 1100) {
    carouselItemsAmt = 4;
  }
  return (
    <>
      <Navigation />
      <Banner
        title="Elemental"
        fetchVidUrl={requests.featuredVideo}
        fetchDeetsUrl={requests.featured}
      />
      <div>
        <CarouselList
          title="Trending Now"
          fetchUrl={requests.trend}
          itemAmt={carouselItemsAmt}
        />
        <CarouselList
          title="Top Rated"
          fetchUrl={requests.toprated}
          itemAmt={carouselItemsAmt}
        />
        <CarouselList
          title="Horror"
          fetchUrl={requests.horror}
          itemAmt={carouselItemsAmt}
        />
        <CarouselList
          title="Action"
          fetchUrl={requests.action}
          itemAmt={carouselItemsAmt}
        />
        <CarouselList
          title="Romance"
          fetchUrl={requests.romance}
          itemAmt={carouselItemsAmt}
        />
      </div>
      width: {windowWidth}
    </>
  );
};
export default App;
