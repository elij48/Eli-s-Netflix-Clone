import List from "./components/List";
import CarouselList from "./components/CarouselList";
import requests from "./requests";

const App = () => {
  return (
    <>
      <List />
      <CarouselList title="Trending Now" fetchUrl={requests.trend} />
    </>
  );
};
export default App;
