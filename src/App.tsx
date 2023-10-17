import CarouselList from "./components/CarouselList";
import requests from "./requests";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />

      <CarouselList title="Trending Now" fetchUrl={requests.trend} />
    </>
  );
};
export default App;
