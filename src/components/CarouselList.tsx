import { Carousel, Card, Stack } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "../axios";

import ei9 from "../assets/ei9.png";
import ei10 from "../assets/ei10.png";

/*
- disable autoscroll of carousel''''
- move the sliders
- have x number of items in a carousel item
    -> Carousel -> Item -> Stack -> Card
    . limit number of items in a carousel items depending on size 
        = design it dynamically, not statically
I HAVE NO IDEA HOW TO DO THIS SHITTY LIFE
*/
const base_URL = `https://image.tmdb.org/t/p/original`;

interface Props {
  title: string;
  fetchUrl: string;
}

/*
use map function with index, stop mapping them depending on the size of the window/device
 - if at this index at certain breakpoint, stop mapping 
		- if certain amount is reached, stop at that index, and carry over to the next carousel.item
*/

/*
if at this dimension, map the array from this to whatever amount is set to the dimension
*/

function testFunction(low, max) {
  return low * max;
}

const CarouselList = ({ title, fetchUrl }: Props) => {
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
  const [windowHeight, windowWidth] = useWindowSize();

  // get data
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  //math.ceil to get number of items
  function getCarousel(nMovies, nItem) {
    const renderCarousel = () => {
      <Carousel interval={null}>
        <Carousel.Item>
          <Stack className="carousel_page" direction="horizontal">
            {
              renderItems
              /*
								gotta make that
							*/
            }
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <Stack className="carousel_page" direction="horizontal">
            if (condition) {}
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ei10} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>;
    };
  }
  // render posters
  const renderItemsSec = movies.map((movie) => (
    <Card className="card" style={{ width: "18rem" }}>
      <img
        src={`${base_URL}${movie["poster_path"]}`}
        alt={`${movie["name"]}`}
      />
    </Card>
  ));

  // render posters
  const renderItems = movies.map((movie) => (
    <Card className="card" style={{ width: "18rem" }}>
      <img
        src={`${base_URL}${movie["backdrop_path"]}`}
        alt={`${movie["name"]}`}
      />
    </Card>
  ));

  return (
    <>
      <h2>{title}</h2>
      <Carousel interval={null}>
        <Carousel.Item>
          <Stack className="carousel_page" direction="horizontal">
            {
              renderItems.slice(0, 6)
              /*
								gotta make that
							*/
            }
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <Stack className="carousel_page" direction="horizontal">
            if (condition) {}
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ei10} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselList;
