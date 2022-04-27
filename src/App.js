import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Gallery from './components/gallery/Gallery';
import Location from './components/location/Location';
import Menu from './components/menu/Menu';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Location />
      <Menu />
      <News />
    </div>
  );
}

export default App;
