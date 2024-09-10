
import styled from 'styled-components/macro';


const Header = () =>{

    return(
        <Wrapper>
        <Title>Virtual Reality of a new generation</Title>
        <Text>One stop solution for immersive entertainment.</Text>
        </Wrapper>
    )
}

export default Header;
const Wrapper= styled.div`
  font-weight: 700;
  display: grid;
  place-items: center;
  background: rgba(20, 23, 23, 1);
  padding:53px 0 40px 0 ;


`;

const Title= styled.h1`
  font-size:64px ;
color: #fff;
font-family: "Yrsa", serif;
@media (max-width: 1500px) {
    font-size: 40px;
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
`;