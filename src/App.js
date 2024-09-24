
import React, { useCallback, useState, useEffect, Fragment } from 'react';
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
import useOrientation from './hooks/useOrientation';



function App() {
  const isPortrait = useOrientation();

  const [isLoading, setIsLoading] = useState(true)
  const [isAgree, setIsAgree] = useState(false);
  const [isFooterPriveceClicked, setIsFooterPriveceClicked] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const onPrivacyClick = useCallback(() => {
    setIsAgree(false)
    setIsFooterPriveceClicked(true)
  }, [])


  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3800)
    }

    fakeDataFetch();

  }, [])



  return (
    <Wrapper >
      {isLoading && (
        <IntroScreen />
      )}
      <ContentWrapper isLoading={isLoading}>
        {isPortrait ? (
          <Fragment>
            <Toolbar />
            <Header />
          </Fragment>
        ) : isToolbarVisible && <Toolbar />}
        <CanvasChairScroll setIsToolbarVisible={setIsToolbarVisible} />
        {!isPortrait && <Header />}
        <About />
        <Cookies setIsAgree={setIsAgree} isAgree={isAgree} isFooterPriveceClicked={isFooterPriveceClicked} />
        <Projects />
        <Team />
        <ContactForm />
        <Footer onClickPrivacy={onPrivacyClick} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: ${props => props.isLoading && 'none'};
`;

const WrapperCanvas = styled.div`
 width:100%
`;
