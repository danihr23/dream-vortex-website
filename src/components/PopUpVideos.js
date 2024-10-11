import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Olimpus from '../videos/ZenArt_Gameplay.mp4';
import Tcc from '../videos/TCCC20sec.mp4';
import Egypt from '../videos/Kingramses_trailer.mp4';
import Machu from '../videos/MachuPicchu_Trailer.mp4';
import NeuroPod from '../videos/rehab.mp4';
import arrowLeft from '../asets/arrow_left.png'
import arrowRight from '../asets/arrow_right.png'
import Belogradchik from '../videos/ZenArt_Gameplay_02.mp4';
import closeTag from '../asets/close_btn.png';

import { Swiper, SwiperSlide } from 'swiper/react';



const projects = [
    {
        id: 1,
        video: Olimpus,
        title: 'Zen Universe - Olympus: Home of the Gods',
        textOne: '• Released in VR shops',
        textTwo: '• CGI built and photogrammetry scanned on multiple locations including Greece and Bulgaria',
        textThree: '• Completely interactive, allowing the users to touch and explore at their own pace',
        textFour: ''
    },
    {
        id: 2,
        video: Tcc,
        title: 'Tactical Combat Casualty Care',
        textOne: '• Commissioned for the US army medical training corp',
        textTwo: '• Volumetric capture of instructors teaching TCCC protocols',
        textThree: '• Currently in use at undisclosed R&D locations',
        textFour: '• Completely interactive and immersive'
    },
    {
        id: 3,
        video: Egypt,
        title: 'Ramses & Nefertari: Journey to Osiris',
        textOne: '• Commissioned for NEON (fka Cityneon)',
        textTwo: '• First of its kind complete photogrammetry scan of the pyramids in Giza, the Sphinx and multiple Egyptian tombs under a permit by the Ministry of Tourism and Antiquities of Egypt',
        textThree: '• Travelling shown in Paris, Milan, Miami and others',
        textFour: '• Completely sold out'
    },
    {
        id: 4,
        video: Machu,
        title: 'Machu Picchu and the Spirit of the Condor',
        textOne: '• Commissioned for NEON (fka Cityneon)',
        textTwo: '• First of its kind complete photogrammetry scan of the entire Machu Picchu in collaboration with the Peruvian Government',
        textThree: '• Shown in 7 cities in USA, over 1 mln tickets sold under 2 years',
        textFour: '• Won prestigious Lumiere™ award'
    },
    {
        id: 5,
        video: NeuroPod,
        title: 'NeuroPod Rehab VR',
        textOne: '• Medical rehabilitation experience, allowing patients to perform routine exercises in a fun and interactive way',
        textTwo: '• Currently in use at Neuro-Robotics hospital and rehab centres',
        textThree: '• Fully mobile and lightweight'
    },
    {
        id: 6,
        video: Belogradchik,
        title: 'Tales Of The Rocks Belogradchik',
        textOne: '• Released in VR shops',
        textTwo: '• Completely photogrammetry scanned in Bulgaria covering the entirety of the Belogradchik Rocks (10 square km)',
        textThree: '• Completely interactive, allowing the users to touch and explore at their own pace',
        textFour: ''
    },
];

const PopUpVideos = ({ isOpen, projectNumber, setPopUpOpen }) => {
    const sliderRef = useRef();
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAtBeginning, setIsAtBeginning] = useState(true);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slideNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slidePrev();
        }
    };

    useEffect(() => {
        if (sliderRef.current && typeof projectNumber === 'number') {
            sliderRef.current.slideTo(projectNumber);
        }
    }, [projectNumber]);

    return (
        <Wrapper isOpen={isOpen}>
            <PopUpInfoWrapper>
                <CloseTag disabled={isOpen} onClick={() => setPopUpOpen(false)} />
                <SwiperWrapper>
                    <StyledSwiper
                        onSwiper={(swiper) => (sliderRef.current = swiper)}
                        slidesPerView={1}
                        spaceBetween={0}
                        simulateTouch={false}
                        allowTouchMove={false}
                        onReachEnd={() => setIsAtEnd(true)}
                        onReachBeginning={() => setIsAtBeginning(true)}
                        onSlideChange={(swiper) => {
                            setIsAtEnd(swiper.isEnd);
                            setIsAtBeginning(swiper.isBeginning);
                        }}
                    >
                        {projects.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ContentWrapper>
                                    <Video
                                        loop
                                        autoPlay
                                        muted
                                        playsInline
                                        
                                    >
                                        <source src={item.video} type="video/mp4" />
                                    </Video>
                                    <TextWrapper>
                                        <Title>{item.title}</Title>
                                        <Text>{item.textOne}</Text>
                                        <Text>{item.textTwo}</Text>
                                        <Text>{item.textThree}</Text>
                                        <Text>{item.textFour}</Text>
                                    </TextWrapper>
                                </ContentWrapper>
                            </SwiperSlide>
                        ))}
                    </StyledSwiper>
                </SwiperWrapper>
                        <ArrowWrapper>
                            <Arrow onClick={handlePrev} disabled={isAtBeginning} background={arrowLeft} />
                            <Arrow onClick={handleNext} disabled={isAtEnd} background={arrowRight} />
                        </ArrowWrapper>
            </PopUpInfoWrapper>
        </Wrapper>
    );
};

export default PopUpVideos;

const Wrapper = styled.div`
width: 100%;
top:20px ;
left: 0;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    font-family: Lato, sans-serif;
    height: auto;
    z-index: 5;
    box-sizing: border-box;
  display: ${(props) => !props.isOpen && 'none'}; ;


`;


const SwiperWrapper = styled.div`
  z-index: 2;
  height: auto;

`;

const PopUpInfoWrapper = styled.div`
    position: relative;
    border: 1px solid #666666; 
    border-radius: 6px;
    width:100%;
    height: 100vh;
     background: rgb(41 41 41 / 80%);
    padding: 40px;
    z-index: 2;
    backdrop-filter: blur(5px);
    
    @media (max-width: 990px) { 
        padding: 30px;   
}
@media screen and (orientation: portrait) {

    padding:30px 0px ;
    height: auto;

}
`;
const ContentWrapper = styled.div`
display: grid;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    grid-template-columns: 3fr 2fr;
    gap: 40px;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
  }
`;

const TextWrapper = styled.div`

  color: #fff;
  @media screen and (orientation: portrait) {
 padding: 35px;
}
`;

const Title = styled.h2`
 font-family: Yeseva One;
  font-size: 36px;
  color: #fff;
  @media (max-width: 1500px) {
    font-size: 30px;
  }
  @media (max-width: 990px) { 
    font-size:24px;   
}
@media screen and (orientation: portrait) {
    font-size:20px;  
}
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 23px;
  color: rgba(0, 191, 188, 1);
  margin: 10px 0;
  

  @media (max-width: 1500px) {
    font-size: 21px;
  }
  @media (max-width: 990px) { 
    font-size:18px;   
}
@media screen and (orientation: portrait) {
    font-size: 16px;  
}
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  max-height: 700px; 
  display: block;
  pointer-events: none; 
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    width:100.25% !important ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Arrow = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer; 
  background: url(${(props) => props.background}) no-repeat center center;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  background-size: 100% auto;
  @media (max-width: 990px) { 
    width: 40px;
    height: 40px;   
}

`;
const ArrowWrapper = styled.div`
position: absolute;
bottom: 60px;
  width: 100% ; 
  height: 60px;
   gap: 25px;
  display:flex ;
  justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (orientation: portrait) {
        bottom: 0 ;
}
`;

const CloseTag = styled.div`
position:absolute ;
cursor: pointer; 
top:0 ;
right:0 ;
  width: 40px;
  height: 40px;
  background: url(${closeTag}) no-repeat center center;
  opacity: ${(props) => props.disabled ? 1 : 0.5};
  background-size: 100% auto;
  
  @media (max-width: 990px) { 
    width: 30px;
    height: 30px;   
}    
@media screen and (orientation: portrait) {
    margin-top:0 ;
}

`;