import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Gallery from './components/gallery/Gallery';
import Location from './components/location/Location';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Location />
    </div>
  );
}

export default App;
