import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-colors';
import StarRating from "./components/star-rating"

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* RandomColor component */}
      <RandomColor />

      {/* Star-Rating Component */}
      <StarRating numOfStars={6} />

    </div>
  );
}

export default App;
