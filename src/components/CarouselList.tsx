import { Carousel, Card, Stack } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./CarouselList.css";
import playsvg from "../assets/triangle-play.svg";
/* TODO
- move the sliders and page scroll thingy
*/
const base_URL = `https://image.tmdb.org/t/p/original`;

interface Props {
  genre: string;
  fetchUrl: string;
  itemAmt: Number;
}

/*
USED A SLICE FUNCTION----
use map function with index, stop mapping them depending on the size of the window/device
 - if at this index at certain breakpoint, stop mapping 
		- if certain amount is reached, stop at that index, and carry over to the next carousel.item
*/

/*
if at this dimension, map the array from this to whatever amount is set to the dimension
*/

const CarouselList = ({ genre, fetchUrl, itemAmt }: Props) => {
  // get movie data from tmdb
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
  // math.ceil to get number of  carousel items
  // nItem represents the number of items that will fit on the screen depending on window size
  function getCarousel(nMovies, nItem) {
    const nCarouselItems = Math.ceil(nMovies / nItem);
    if (nCarouselItems === 4) {
      return (
        <Carousel interval={null}>
          {getCarouselItems(0, nItem)}
          {getCarouselItems(nItem, nItem * 2)}
          {getCarouselItems(nItem * 2, nItem * 3)}
          {getCarouselItems(nItem * 3, nItem * 4)}
        </Carousel>
      );
    }
    if (nCarouselItems === 5) {
      return (
        <Carousel interval={null}>
          {getCarouselItems(0, nItem)}
          {getCarouselItems(nItem, nItem * 2)}
          {getCarouselItems(nItem * 2, nItem * 3)}
          {getCarouselItems(nItem * 3, nItem * 4)}
          {getCarouselItems(nItem * 4, nMovies)}
        </Carousel>
      );
    }
  }

  // render movie batch
  function getCarouselItems(start, end) {
    return (
      <Carousel.Item>
        <Stack className="carousel_page" direction="horizontal">
          {renderItems.slice(start, end)}
        </Stack>
      </Carousel.Item>
    );
  }

  // render posters
  const renderItems = movies.map((movie) => (
    <Card>
      <img
        className="movie-img"
        src={`${base_URL}${movie["backdrop_path"]}`}
        alt={`${movie["title"]}`}
      />
      <div className="hoverable-card">
        <img
          className="hoverable-img"
          src={`${base_URL}${movie["backdrop_path"]}`}
          alt={`${movie["title"]}`}
        />
        <div className="card-details-box">
          <div className="card-details-container">
            <div className="card-play" onClick={() => {}}>
              <button className="card-button">
                <img src={playsvg} width={15} height={15} alt="" />
              </button>
            </div>
            <p className="card-name">{`${movie["title"]}`}</p>
            <div className="card-genre">{`${movie["genre_ids"]}`}</div>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <>
      <div className="carousel-name">{genre}</div>
      {getCarousel(movies.length, itemAmt)}
    </>
  );
};

export default CarouselList;
