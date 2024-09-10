
import styled from 'styled-components/macro';
import bgr from '../asets/about_bgr.jpg';
import chair from '../asets/chair_about.png'
const About = () => {

    return (
        <Wrapper>
            <Title>ABOUT</Title>
            <TextWrapper>
                <TextTitle>Revolutionizing VR Experiences</TextTitle>
                <TextExperience>Experience Next-Level Immersion with Dream Vortex</TextExperience>
                <TextSection>
                    <Text>Dream Vortex is a versatile solution that can serve as the centerpiece of any VR cinema, museum exhibit, or marketing event while providing an unparalleled level of immersion by offering a highly comfortable and realistic experience.zIt provides a seamless and immersive simulation by synchronizing the chair's movement with the wearer's VR goggles, and can even disperse scents to enhance the user's sense of presence.</Text>
                </TextSection>
            </TextWrapper>
            <Chair />
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
  min-height:583px ;
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

`;

const Title = styled.h2`
color: #fff;
text-align:center ;
font-family: "Yrsa", serif;
font-optical-sizing: auto;
font-style: normal;
font-size:100px ;


@media (max-width: 1500px) { 
    font-size:80px;   
}

`;

const TextTitle = styled.h3`
color:#fff;
font-size:48px ;

@media (max-width: 1500px) { 
    font-size:36px;   
}
`;
const TextExperience = styled.h4`
color:#00BFBC;
font-weight: 400;
font-size:32px ;

@media (max-width: 1500px) { 
    font-size:24px;   
}

`;
const TextSection = styled.section`
    margin-top: 60px;
`;
const Text = styled.p`
font-weight: 400;
font-size:28px;
color:#fff;
max-width: 50ch;
min-width: auto;
@media (max-width: 1500px) { 
    max-width: 50ch;
    font-size:20px;
   
}
`;

const Chair = styled.div`
position:absolute ;
width:800px;
height:800px;
right: 0;
top: 50%;
margin-top: -350px;
background: url(${chair} ) top center no-repeat;
background-size: cover;

@media (max-width: 1500px) { 
    margin-top: -300px;
    width:700px;
    height:700px;
   
}
`;