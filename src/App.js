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
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';
import UseFetchHooktest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';


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

      {/* Custom Tabs Component */}
      <TabTest />

      {/* Custom Modal Popup Component */}
      <ModalTest />

      {/* Github Profile Finder */}
      <GithubProfileFinder />

      {/* Search auto complete component */}
      <SearchAutocomplete />

      {/* Tic Tac Toe Component */}
      <TicTacToe />

      {/* UseFetch custom hook */}
      <UseFetchHooktest />

      {/* Use onclick outside hook test */}
      <UseOnclickOutsideTest />
    </div>
  );
}

export default App;
