
import React, { useCallback, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import IntroScreen from './IntroScreen';
import CanvasChairScroll from './CanvasChairScroll';
import About from './About';
import Projects from './Projects';
import Team from './Team';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Cookies from './Cookies';
import Toolbar from './Toolbar';
import useOrientation from '../hooks/useOrientation';
import ChairVideoComponent from './ChairVideoComponent';
import CanvasChairScrollMobile from './CanvasChairScrollMobile';



function Home() {
  const isPortrait = useOrientation();

  const [isLoading, setIsLoading] = useState(true)
  const [isAgree, setIsAgree] = useState(false);
  const [isFooterPriveceClicked, setIsFooterPriveceClicked] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);
  const [onScroll, setOnScroll] = useState(false);


  const onPrivacyClick = useCallback(() => {
    setIsAgree(false)
    setIsFooterPriveceClicked(true)
  }, [])
  const handleScroll = () => {
    setOnScroll(true)
  };

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3800)
    }

    fakeDataFetch();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



  return (
    <Wrapper >
      {isLoading && (
        <IntroScreen />
      )}
      <ContentWrapper isLoading={isLoading}>
        { isToolbarVisible && <Toolbar />}
        <ChairVideoComponent onScrollProp={onScroll}/>  
        { isPortrait ? <CanvasChairScrollMobile setIsToolbarVisible={setIsToolbarVisible} /> : <CanvasChairScroll setIsToolbarVisible={setIsToolbarVisible} />}   
        <About />
        { isToolbarVisible &&   <Cookies setIsAgree={setIsAgree} isAgree={isAgree} isFooterPriveceClicked={isFooterPriveceClicked} />}
        {/* <Projects />
         <Team /> */}
        <ContactForm />
        <Footer onClickPrivacy={onPrivacyClick} />
      </ContentWrapper>
      <Outlet />
    </Wrapper>
  );
}

export default Home;


const Wrapper = styled.div`
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: ${props => props.isLoading && 'none'};
`;

