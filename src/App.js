import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import PortfolioPage from './pages/Portfolio';
import ContactCanvas from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  return (
    <Router>
      <Route exact path='/portfolio' component={AboutPage} />
      <Route path='/portfolio/about' component={AboutPage} />
      <Route path='/portfolio/projects' component={PortfolioPage} />
      <Route path='/portfolio/skills' component={SkillsPage} />
      <ContactCanvas />
      <ResumeModal />
      <Footer />
    </Router>
  );
}

export default App;
