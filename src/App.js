import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Gallery from './components/gallery/Gallery';
import Location from './components/location/Location';
import Menu from './components/menu/Menu';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Location />
      <Menu />
      <News />
      <Footer />
    </div>
  );
}

export default App;
