import './styles/App.css';
//import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects'; // Import Projects section
import Navigation from './components/Navigation/Navigation';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'; // Import Contact section
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Hero />
      <About />
      <Projects /> {/* Add the Projects section here */}
      <Skills/>
      <Contact />
      <Footer />{/* We can add other components here later */}
      {/* We can add other components here later */}
    </div>
  );
}

export default App;
