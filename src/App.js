import styled from 'styled-components';
import './App.css';
import Hero from './components/Hero Section/Hero';
import NavBar from './components/NavBar/Navbar';
import Skills from './components/Skills/Skills';
import Certification from './components/Certifications/Certification';
import Project from './components/Projects/Projects';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(18, 189, 255, 0.15) 0%, rgba(102, 212, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Wrapper>
        <Skills />
        <Certification />
      </Wrapper>
      <Project />
      <Wrapper>
        <Education />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
