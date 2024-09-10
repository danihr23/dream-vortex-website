
import styled from 'styled-components/macro';
import bgr from '../asets/teamSection_bgr.png';
import teamPicOne from '../asets/teamPicOne.png'
import teamPicTWo from '../asets/teamPicTwo.png'


const Team = () => {

    const teamInfo = [
        {

            poster: teamPicOne,
            title: 'NAME SURNAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {

            poster: teamPicTWo,
            title: 'NAME SURNAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {

            poster: teamPicTWo,
            title: 'NAME SURNAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {

            poster: teamPicOne,
            title: 'NAME SURNAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {

            poster: teamPicTWo,
            title: 'NAME SURNAME',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

    ];

    return (
        <Wrapper>
            <Title>TEAM</Title>
            <TextWrapper>
                {teamInfo.map((item, index) => (
                    <InfoSection key={index} index={index} >
                        <Container index={index}>
                            <Picture background={item.poster} />
                        </Container>
                        <TextSection>
                            <TextTitle>{item.title}</TextTitle>
                            <Text>{item.text}</Text>
                        </TextSection>
                    </InfoSection>
                ))}
            </TextWrapper>
        </Wrapper>
    )
}

export default Team;
const Wrapper = styled.div`
position: relative;
 font-family: "Lato", sans-serif;
  height: auto;
  background: url(${bgr} ) right center no-repeat;
  background-size: cover;
  padding: 80px;

`;

const TextWrapper = styled.div`
height:auto ;
min-height:583px ;
z-index: 2;
position: relative;
padding-top:60px ;
display:flex;
align-content: center;
justify-content: center;
gap: 5px;
@media (max-width: 600px) {
       flex-direction:column;
       gap: 20px;
  }

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
font-size:32px ;

@media (max-width: 1500px) { 
    font-size:28px;   
}
`;


const InfoSection = styled.section`
    max-width: 1260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content:${(props) => props.index % 2 === 0 ? "space-between " : "flex-end"} ;
    @media (max-width: 600px) {
      justify-content:flex-end;
  }
`;
const Text = styled.p`
margin-top:20px ;
font-weight: 400;
font-size:24px;
color:#00BFBC;
min-width: auto;
@media (max-width: 1500px) {
    font-size:22px;
   
}
`;

const TextSection = styled.section`
 position:relative ;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;


const Container = styled.div`
  position: relative;
  width:220px;
  height:220px;
  padding: 3px; 
  margin-bottom:${(props) => props.index % 2 !== 0 && 70}px ;
  background: rgba(0, 170, 243, 1);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  @media (max-width: 1500px) {
    width:150px;
    height:150px;
  }
`;
const Picture = styled.div`
position:relative ;
width:220px;
height:220px;
background: url(${(props) => props.background}) no-repeat center center;
background-size: cover;
clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
@media (max-width: 1500px) { 

    width:150px;
    height:150px;
   
}
`;
