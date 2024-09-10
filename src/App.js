
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components/macro';
import IntroScreen from './components/IntroScreen';
import CanvasChairScroll from './components/CanvasChairScroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import ContactForm from './components/ContactForm';


function App() {

  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
  const fakeDataFetch =()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3800)
  }

  fakeDataFetch();
  },[])
  
  return (
    <Wrapper >
     {isLoading && (
      <IntroScreen/>
     ) }
       <WrapperCanvas isLoading={isLoading}>
        <CanvasChairScroll/>
        <Header/>
        <About/>
        <Projects/>
        <Team/>
        <ContactForm/>
        <Footer>You are awesome!</Footer>
      </WrapperCanvas>
    </Wrapper>
  );
}

export default App;


const Wrapper =styled.div`
  height: 100%;
`;

const WrapperCanvas = styled.div`
  display: ${props => props.isLoading && 'none' };
`;
const Footer = styled.footer`
  background: #f5f5f7;
  font-weight: 700;
  font-size: 40px;
  height: 400px;
  display: grid;
  place-items: center;
`;
