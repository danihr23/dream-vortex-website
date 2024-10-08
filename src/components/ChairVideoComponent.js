import React, { useState} from 'react';
import styled from 'styled-components/macro';
import desktop_chair_video from '../videos/desktop_chair-video.mp4'
import mobile_chair_video from '../videos/mobile_video_chrair.mp4'
import useOrientation from '../hooks/useOrientation';
import Header from './Header';

const ChairVideoComponent = ({onScrollProp}) => {

  const isPortrait = useOrientation();

  const [videoEnd, setVideoEnd] = useState(false);

    return (
        <Wrapper scroll={onScrollProp}>
            <Video
                autoPlay
                muted
                playsInline
                onEnded={()=> setVideoEnd(true)}
            >
                <source src={isPortrait ? mobile_chair_video : desktop_chair_video} type="video/mp4" />
            </Video>
            <Header videoEnd={videoEnd} />
        </Wrapper>
    )
}

export default ChairVideoComponent;

const Wrapper = styled.div`
  font-weight: 700;
  place-items: center;
  background: #262626;
  display:${prop=> prop.scroll && 'none'} ;
  
`;
const Video = styled.video`
  width: 100%;
  height:100vh ;
  display: block;
  pointer-events: none; 


  @media screen and (orientation: portrait) {
    position: relative;
    top: -80px;
}
`;