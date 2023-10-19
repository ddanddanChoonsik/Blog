import './App.css';
// import { Route, Link, Routes } from "react-router-dom";
import { SectionsContainer, Section } from 'react-fullpage';
//import Content from './Component/Header';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blank from './pages/Blank';
import Skill from './pages/Skill';
import Works from './pages/Works';

function App() {

  let options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: ['Home', 'About', 'Skill', 'Works', 'Blank'], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
    menu: '.header'
  };

  return (
    <div className="App">
      <div className='content'>

<Header />
{/* <ScrollToTopOnMount/> */}
<SectionsContainer {...options}>

  <Section>
    <Home />
  </Section>

  <Section>

    <About />
  </Section>

  <Section>

    <Skill />
  </Section>

  <Section>

    <Works />
  </Section>

  <Section>

    <Blank />
  </Section>

</SectionsContainer>


{/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Skill" element={<Skill />} />
  <Route path="/Works" element={<Works />} />
  <Route path="/Blank" element={<Blank />} />
</Routes>  */}
</div>
    </div>
  );
}

export default App;
