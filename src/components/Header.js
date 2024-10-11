
import styled,{keyframes} from 'styled-components/macro';



const Header = ({videoEnd}) =>{
   return(
        <Wrapper videoEnd={videoEnd}>
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

  animation-name: ${(props)=> props.videoEnd && appearToolbar};
      animation-duration: 250ms;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

 @media screen and (orientation: portrait) {

  text-align:left;
  top :unset ;
  bottom:0;
  padding:23px 30px 30px 30px;
  transform: scale(var(--scale-coef))
}

      
   
`;

const Title= styled.h1`
  font-size:64px ;
color: #fff;
font-family: Yeseva One;
@media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 990px) { 
    font-size:32px;   
}
@media screen and (orientation: portrait) {

  font-size:28px;   
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
@media screen and (orientation: portrait) {

font-size:18px;   
margin-top:18px;
}
`;