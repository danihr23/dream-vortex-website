
import styled from 'styled-components/macro';
import bgr from '../asets/about_bgr.jpg';
import chair_desktop from '../asets/chair_about.png'
import mobile_chair_one from '../asets/mobile_chair_one.png'
import mobile_chair_two from '../asets/mobile_chair_two.png'
import mobile_chair_three from '../asets/mobile_chair_three.png'
import useOrientation from '../hooks/useOrientation'

const About = () => {
    const isPortrait = useOrientation();


    return (
        <Wrapper>
            <Title>ABOUT</Title>
            <TextWrapper>
                <TextTitle>{isPortrait ? 'Custom-made to your needs' : "Revolutionizing VR Experiences"}</TextTitle>
                <TextExperience>{isPortrait ? 'Dream Vortex delivers personalized experiences that exceed your expectations' : 'Experience Next-Level Immersion with Dream Vortex'}</TextExperience>
                {isPortrait && <MobileChairs />}
                <TextSection>
                    <Text>{isPortrait ? 'We understand the importance of meeting your unique needs and objectives. That’s why we work closely with you to customize our immersive experiences to align with your goals and craft solutions that reflect your mission and values. We listen attentively to your requirements and preferences,ensuring that every aspect of our projects is tailored to your specifications.' : "Dream Vortex is a versatile solution that can serve as the centerpiece of any VR cinema, museum exhibit, or marketing event while providing an unparalleled level of immersion by offering a highly comfortable and realistic experience.zIt provides a seamless and immersive simulation by synchronizing the chair's movement with the wearer's VR goggles, and can even disperse scents to enhance the user's sense of presence."}</Text>
                </TextSection>
            </TextWrapper>
            {!isPortrait && <Chair />}
        </Wrapper>
    )
}

export default About;
const Wrapper = styled.div`
position: relative;
 font-family: "Lato", sans-serif;
  height: auto;
  background: url(${bgr} ) right center no-repeat;
  background-size: cover;
  padding: 80px 80px 280px 80px;


@media (max-width: 990px) { 
padding:80px;
}
@media screen and (orientation: portrait) {
    padding: 35px 16px 39px 16px;
}
`;

const TextWrapper = styled.div`
z-index: 2;
position: relative;
padding-top:60px ;
display:flex;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
gap: 19px;

@media screen and (orientation: portrait) {
    align-items: center;
    padding-top:16px ;
}
`;

const Title = styled.h2`
color: #fff;
text-align:center ;
font-family: Yeseva One;
font-optical-sizing: auto;
font-style: normal;
font-size:100px ;


@media (max-width: 1500px) { 
    font-size:80px;   
}

@media (max-width: 1120px) { 
    font-size:60px;   
}

@media screen and (orientation: portrait) {
    font-size:48px; 
}

`;

const TextTitle = styled.h3`
color:#fff;
font-size:48px ;

@media (max-width: 1500px) { 
    font-size:36px;   
}
@media (max-width: 1120px) { 
    font-size:24px;   
}
@media (max-width: 770px) { 
    font-size:18px;   
}

@media screen and (orientation: portrait) {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 20px;  
}
`;
const TextExperience = styled.h4`
color:#00BFBC;
font-weight: 400;
font-size:32px ;

@media (max-width: 1500px) { 
    font-size:24px;   
}

@media (max-width: 1120px) { 
    font-size:18px;   
}
@media (max-width: 770px) { 
    font-size:14px;   
}
@media screen and (orientation: portrait) {
    font-family: "Lato", sans-serif;
    font-size:16px; 
    text-align: center; 
}

`;
const TextSection = styled.section`
    margin-top: 60px;

    @media screen and (orientation: portrait) {
        margin-top: 30px;
}
`;
const Text = styled.p`
font-weight: 400;
font-size:28px;
color:#fff;
max-width: 50ch;
min-width: auto;
@media (max-width: 1500px) { 
    font-size:20px;
   
}
@media (max-width: 1120px) { 
    font-size:14px;   
}

@media (max-width: 770px) { 
    font-size:12px;   
}
@media screen and (orientation: portrait) {
    font-size:16px;  
}
`;

const Chair = styled.div`
position:absolute ;
width:800px;
height:800px;
right: 0;
top: 50%;
margin-top: -350px;
background: url(${chair_desktop} ) top center no-repeat;
background-size: cover;

@media (max-width: 1500px) { 
    margin-top: -300px;
    width:700px;
    height:700px;
   
}
@media (max-width: 1120px) { 
    margin-top: -150px;
    width:400px;
    height:400px;  
}
@media (max-width: 770px) { 
    margin-top: -80px;
    width:280px;
    height:280px;    
}
`;

const MobileChairs = styled.div`
  width: 100%;
  height:150px ;
  background: url(${mobile_chair_one}) left 0 center no-repeat,
    url(${mobile_chair_two}) center center no-repeat,
    url(${mobile_chair_three}) right -10px center no-repeat;
  background-size: auto 100%, auto 100%, auto 100%;
  z-index: 1;

 
`;