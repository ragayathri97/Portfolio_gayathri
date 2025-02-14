import React from 'react';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import AboutMe from "./components/AboutMe/AboutMe";
import SkillContainer from './components/skillContainer/SkillContainer';
import Projects from './components/Projects/Projects';
import GitStack from './components/GitStack/GitHubStatistics';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <AboutMe />
      <SkillContainer />
      <Projects />
      <GitStack />
      <ContactMe />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
