import React,{useCallback,useState} from 'react';
import styled from 'styled-components/macro';
import Egypt from '../asets/Egypt.png';
import Marketing from '../asets/Marketing.png';
import Zen from '../asets/ZenCorporate.png';
import machu from '../asets/machuPicchu.png';
import NeuroTwo from '../asets/NeuroPodTwo.png';
import NeuroOne from '../asets/NeuroPodOne.png';

import useOrientation from '../hooks/useOrientation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import PopUpVideos from './PopUpVideos';

const projects = [
  {
 
    poster: Egypt,
    title: 'Ramses & Nefertari: Journey to Osiris',
  },
  {
    id: 2,
    poster: Marketing,
    title: 'Tactical Combat Casualty Care',
  },
  {

    poster: Zen,
    title: 'Zen Universe - Olympus: Home of the Gods',
  },
  {

    poster: machu,
    title: 'Machu Picchu and the Spirit of the Condor',
  },
  {

    poster: NeuroOne,
    title: 'NeuroPod Rehab VR',
  },
  {
  
    poster: NeuroTwo,
    title: 'NeuroPod Rehab VR',
  },
];

const Projects = () => {

  const isPortrait = useOrientation();

    const [projectNumber, setProjectNumber] = useState(0);
    const [popUpOpen, setPopUpOpen] = useState(false);

    const onItemClick = useCallback((id)=>{
        setProjectNumber(id);
        setPopUpOpen(true)
    },[])

  return (
    <Wrapper>
      <Title>PROJECTS</Title>
      <SwiperWrapper>
        <StyledSwiper
          slidesPerView={isPortrait ?  1.4 : 2.7}
          spaceBetween={isPortrait ? 20 : 50}

        >
          {projects.map((item,index) => (
            <SwiperSlide key={index} >
              <Poster background={item.poster}  onClick={() => onItemClick(index)} />
              <Text>{item.title}</Text>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SwiperWrapper>
      <PopUpVideos projectNumber={projectNumber} isOpen={popUpOpen} setPopUpOpen={setPopUpOpen}/>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  position: relative;
  font-family: 'Lato', sans-serif;
  height: auto;
  padding:80px 0 212px 80px;
  background:#07121A;

  @media (max-width: 990px) { 
    padding: 80px 0px 113px 80px; 
}
@media screen and (orientation: portrait) {
  padding:20px 0 80px 20px;

}
`;

const SwiperWrapper = styled.div`
  z-index: 2;
margin-top:60px ;
  height: auto;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Yeseva One;
  font-size: 100px;

  @media (max-width: 1500px) {
    font-size: 80px;
  }

  @media (max-width: 990px) { 
    font-size:60px;   
}

@media screen and (orientation: portrait) {
  font-size:48px;
}
`;

const Text = styled.h4
`color:#fff;
font-family: 'Lato', sans-serif;
font-weight: 400;
font-size:22px ;
margin-top:25px;
@media (max-width: 1500px) { 
    font-size:20px;   
}

@media (max-width: 990px) { 
    font-size:18px;   
}
    @media screen and (orientation: portrait) {
   font-size: 20px;
  font-weight: 700;
  max-width: 23ch;
  text-align: center;
}
`
;

const Poster = styled.div`
  cursor: pointer;
  border-radius: 8px ;
  border: 1px solid  ;
  border: 1.3px solid  #666666 ;
  width: 100%;
  height:100% ;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: 100% 100%;
  aspect-ratio:3/1.5;
  @media screen and (orientation: portrait) {
    background-size: auto 100%;
}
    @media screen and (orientation: portrait) {
    
      aspect-ratio:3/5;
}


`;

const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 



  }

  .swiper-pagination-bullet {
    background: #333 !important;
  }
`;
