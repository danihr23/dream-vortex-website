import React, { useEffect, useState,useRef } from 'react';
import styled from 'styled-components/macro';


// Function to get the image source based on index
function getCurrentFrame(index) {
  return `/assets/chairImg_new/${(index+1).toString().padStart(4, '0')}.jpg`;
}

// Styled-component for Image
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const AnimationSection = styled.div`

  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`;
const Container = styled.div`
  height: 700vh; /* Adjusted scroll height for 490 frames */
  position: relative;
`;

const Footer = styled.div`
  background-color: #f8f9fa;
  padding: 50px;
  text-align: center;
  margin-top: 50px;
`;

const Test = () => {
  const [currentFrame, setCurrentFrame] = useState(0); 
  const imagesRef = useRef([]);
  const heroSequenceRef = useRef(null);// Set the default frame to 0
  const totalFrames = 490; // Total number of frames available
//   useEffect(() => {
//     const images = [];
//     for (let i = 1; i < totalFrames; i++) {
//       const img = new Image();
//       img.src = getCurrentFrame(i);
//       img.onload = () => {
//         images[i] = img;
//         if (i === 1) {
//             setCurrentFrame(1);// Draw the first image after it has loaded
//         }
//       };
//       img.onerror = () => {
//         console.error(`Failed to load image: ${img.src}`);
//       };
//     }
//     imagesRef.current = images;
//   }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Calculate the percentage scrolled
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / (maxScroll / 2.3 );

      // Calculate the current frame index based on the scroll position
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.ceil(scrollFraction * totalFrames)
      );

      setCurrentFrame(frameIndex);
    };
    // const handleScroll = () => {
    //           const scrollTop = document.documentElement.scrollTop - heroSequenceRef.current.offsetTop;
    //           const maxScrollTop = heroSequenceRef.current.scrollHeight - window.innerHeight;
    //           const scrollFraction = (scrollTop / maxScrollTop);
    //           const frameIndex = Math.max(
    //             0,
    //             Math.min(totalFrames - 1, Math.ceil(scrollFraction * totalFrames))
    //           );
        
    //           setCurrentFrame(frameIndex);
    //         };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalFrames]);
// useEffect(() => {
//    

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  return (
    <Container ref={heroSequenceRef}>
     <AnimationSection>
        {/* Render the current frame */}
        <Image src={getCurrentFrame(currentFrame)} alt={`Frame ${currentFrame}`} />
      </AnimationSection>
     
    </Container>
//     <>
//     <HeroSequenceWrapper ref={heroSequenceRef}>
//       <StickyElement>
//         <SequenceElement>
//         <Image src={getCurrentFrame(currentFrame)} alt={`Frame ${currentFrame}`} />
//         </SequenceElement>
//       </StickyElement>
//     </HeroSequenceWrapper>


//   </>

  );
};

export default Test;
const HeroSequenceWrapper = styled.div`

  height: 530vh;
`;

const StickyElement = styled.div`
  position: sticky;
  z-index:2 ;
  top: 0;
  height: 120vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #262726;

`;

const SequenceElement = styled.div`
  width: 100%;
 height: auto;
 aspect-ratio: 16 / 9;

`;


