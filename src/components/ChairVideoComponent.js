
import styled from 'styled-components/macro';
import video from '../asets/zero_video.mp4'
import Header from './Header';

const ChairVideoComponent = ({onScrollProp}) => {
    return (
        <Wrapper scroll={onScrollProp}>
            <Video
                autoPlay
                muted
                playsInline

            >
                <source src={video} type="video/mp4" />
            </Video>
            <Header />
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
`;