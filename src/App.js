
import React,{useCallback,useState,useEffect,useRef} from 'react';
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
import Test from './components/Test';



function App() {

  const [isLoading,setIsLoading] = useState(true)
  const [isAgree, setIsAgree] = useState(false);
  const [isFooterPriveceClicked, setIsFooterPriveceClicked] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);
  const canvasPositonRef = useRef(null);


  const handleScroll = () => {
    if (canvasPositonRef.current) {
      const canvasPosition = canvasPositonRef.current.getBoundingClientRect();
      const isHeaderVisible = canvasPosition.top <= window.innerHeight && canvasPosition.bottom >= 0;
      setIsToolbarVisible(!isHeaderVisible); 
    }
  };

  const onPrivacyClick = useCallback(()=>{
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

  window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])


  return (
    <Wrapper >
     {isLoading && (
       <IntroScreen/>
      ) }
       <ContentWrapper isLoading={isLoading}>
        <WrapperCanvas ref={canvasPositonRef}>
         <CanvasChairScroll/>
        </WrapperCanvas>
        {isToolbarVisible && <Toolbar />}
        <Header />
        <About/>
        <Cookies setIsAgree={setIsAgree}  isAgree={isAgree} isFooterPriveceClicked={isFooterPriveceClicked} />
        <Projects/>
        <Team/>
        <ContactForm/>
        <Footer onClickPrivacy={onPrivacyClick}/> 
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;


const Wrapper =styled.div`
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: ${props => props.isLoading && 'none' };
`;

const WrapperCanvas = styled.div`
 width:100%
`;
