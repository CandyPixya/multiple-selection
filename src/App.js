import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-colors';
import StarRating from "./components/star-rating"
import ImageSlider from './components/image-slider';
import LoadMoreData from "./components/load-more-data"
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* RandomColor component */}
      <RandomColor />

      {/* Star-Rating Component */}
      <StarRating numOfStars={6} />

      {/* ImageSlider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'2'} /> */}

      {/* LoadMoreProducts Component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component */}
      <TreeView menus={menus} />

      {/* QR Code Generator Component */}
      <QRCodeGenerator />

      {/* Light and Dark Theme switch */}
      <LightDarkMode />

    </div>
  );
}

export default App;
