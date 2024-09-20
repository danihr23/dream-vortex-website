
import styled from 'styled-components/macro';
import fof_eng from '../asets/logos/FOF-ENG.png';
import layer from '../asets/logos/Layer.png';
import usa_army from '../asets/logos/United_States_Army.png';
import Nvidia from '../asets/logos/Nvidia.png';
import vitual_world from '../asets/logos/virtual_world.png';
import fb from '../asets/fb.png';
import insta from '../asets/insta.png';
import linktin from '../asets/linktin.png';




const logos = [
    {
        logo: vitual_world,
    },
    {
        logo: fof_eng,
    },
    {
        logo: layer,
    },
    {
        logo: usa_army,
    },
    {
        logo: usa_army,
    },
    {
        logo: Nvidia,
    },
    {
        logo: vitual_world,
    },
    {
        logo: layer,
    },
    {
        logo: fof_eng,
    },
    {
        logo: usa_army,
    },
    {
        logo: vitual_world,
    },

];
const Footer = ({ onClickPrivacy }) => {

    return (
        <Wrapper>
            <LogosWrapper id={'sectionTwo'}>
                {logos.map((item, index) => (
                    <Logo key={index} src={item.logo} alt="logo" />
                ))}
            </LogosWrapper>
            <TextSection>
                <LeftSideText>
                    <a href='#sectionOne' style={{ textDecoration: "none" }}>
                        <Text onClick={onClickPrivacy}>Privacy Policy</Text>
                    </a>
                    <IconWrapper>
                        <a href='https://www.linkedin.com/' target="_blank">
                            <Icon background={linktin} />
                        </a>

                        <a href='https://www.facebook.com/' target="_blank">
                            <Icon background={fb} />
                        </a>

                        <a href='https://www.instagram.com/' target="_blank">
                            <Icon background={insta} />
                        </a>


                    </IconWrapper>
                </LeftSideText>
                <RightSideText>
                    <TextTitle>
                        ©2024 DREAM VORTEX ALL RIGHTS RESERVED.
                    </TextTitle>
                    <Text>
                        All trademarks referenced herein are the properties of their respective owners.
                    </Text>
                </RightSideText>
            </TextSection>
        </Wrapper>
    )
}

export default Footer;
const Wrapper = styled.div`
position: relative;
font-family: "Syne", sans-serif;
font-weight: 400;
  height: auto;
  background: rgba(20, 23, 23, 1);
    margin: auto;
 padding: 80px;

`;

const LogosWrapper = styled.div`
z-index: 2;
position: relative;
width:80%;
flex-wrap:wrap;
display:flex;
align-content: center;
justify-content: center;
align-items:center ;
gap: 39px;
margin: 0 auto;
@media (max-width: 990px) { 
    padding: 25px; 
}
`;

const Logo = styled.img`
height: 100%;
width: auto;

@media (max-width: 1500px) { 
height:50% ;
}

@media (max-width: 990px) { 
    height:20% ;  
}
`;

const TextTitle = styled.p`
font-size:20px;
font-weight: 400;
color:#00BFBC;

@media (max-width: 1500px) { 
    font-size:20px;   
}

@media (max-width: 990px) { 
    font-size:18px;   
}
`;
const IconWrapper = styled.h4`
margin-top: 10px;
display:flex ;
gap:20px ;
@media (max-width: 1500px) { 
    font-size:24px;   
}

`;
const TextSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 52px;
    
`;
const LeftSideText = styled.section`

`;
const RightSideText = styled.section`
    text-align: right;
`;
const Text = styled.p`
font-weight: 400;
font-size:20px;
color:#00BFBC;

min-width: auto;
@media (max-width: 1500px) { 
    font-size:20px;
   
}
@media (max-width: 990px) { 
    font-size:14px; 
    
}
`;

const Icon = styled.div`
width:40px;
height:40px;
background: url(${(props) => props.background}) no-repeat center center;
background-size: 100% auto;
border-radius:50% ;
&:hover{
    opacity: 0.7;
  
    background: linear-gradient(0deg, rgba(5,180,178,0.4) 0%, rgba(5,180,178,0.4) 100%) ,url(${(props) => props.background}) no-repeat center center  ;
    background-size: 100% 100% ,100% auto;
}
@media (max-width: 990px) { 
    width:30px;
height:30px; 
}
`;