import CarouselList from "./components/CarouselList";
import requests from "./requests";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  return (
    <>
      <Navigation />

      <CarouselList title="Trending Now" fetchUrl={requests.trend} />
    </>
  );
};
export default App;
