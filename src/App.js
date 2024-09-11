
import React,{useCallback,useState,useEffect} from 'react';
import styled from 'styled-components/macro';
import IntroScreen from './components/IntroScreen';
import CanvasChairScroll from './components/CanvasChairScroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Cookies from './components/Cookies';
import Toolbar from './components/Toolbar';



function App() {

  const [isLoading,setIsLoading] = useState(true)
  const [isAgree, setIsAgree] = useState(false);
  const [isFooterPriveceClicked, setIsFooterPriveceClicked] = useState(false);

  const onPrivacyClick = useCallback(()=>{
    if(!isAgree)  return;  
     setIsAgree(false)
     setIsFooterPriveceClicked(true)
  },[])
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
        <Toolbar/>
        <CanvasChairScroll/>
        <Header/>
        <About/>
        <Cookies setIsAgree={setIsAgree}  isAgree={isAgree} isFooterPriveceClicked={isFooterPriveceClicked} />
        <Projects/>
        <Team/>
        <ContactForm/>
        <Footer onClickPrivacy={onPrivacyClick}/> 
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

