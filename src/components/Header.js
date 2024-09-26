
import styled,{keyframes} from 'styled-components/macro';


const Header = () =>{

    return(
        <Wrapper>
        <Title>Virtual Reality of a new generation</Title>
        <Text>One stop solution for immersive entertainment.</Text>
        </Wrapper>
    )
}

export default Header;

const appearToolbar= keyframes`

to {
  opacity: 1;
}`;

const Wrapper= styled.div`
position: absolute;
top:40%;
right:0 ;
  font-weight: 600;
  max-width: 600px;
  display: grid;
  place-items: center;
  text-align:right ;
  padding:53px  40px  ;
  opacity:0 ;
  animation-name: ${appearToolbar};
      animation-delay:1000ms ;
      animation-duration: 250ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards
`;

const Title= styled.h1`
  font-size:64px ;
color: #fff;
font-family: "Yrsa", serif;
@media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 990px) { 
    font-size:32px;   
}

`;

const Text= styled.h3`
 font-family: "Lato", sans-serif;
 color: rgba(173, 168, 168, 1);
font-size:40px;
font-weight: 400;
margin-top:50px;
@media (max-width: 1500px) {
    font-size: 24px;
  }
  @media (max-width: 990px) { 
    font-size:20px;   
}
`;