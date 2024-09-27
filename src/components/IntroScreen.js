
import styled from 'styled-components/macro';
import intro from '../asets/intro.gif'

const IntroScreen = () =>{
    return(
        <>
            <ImageWrapper />
        </>
    )
}

export default IntroScreen;
const ImageWrapper= styled.div`
background-image: url(${intro});
width: 100%;
height: 100vh;
    background-size: 100% auto;
    background-position: center center;
    background-repeat:no-repeat ;


`