import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import PortfolioPage from './pages/Portfolio';
import ContactCanvas from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route exact path='/' component={AboutPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/portfolio' component={PortfolioPage} />
      <Route exact path='/skills' component={SkillsPage} />
      <ContactCanvas />
      <Footer />
    </Router>
  );
}

export default App;
