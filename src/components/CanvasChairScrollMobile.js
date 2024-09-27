import React, { useRef, useEffect, } from 'react';
import styled from 'styled-components/macro';

function getCurrentFrame(index) {
    return `/assets/mobile/ezgif-frame-${index}.webp`;
}

const frameCount = 729;
//const { innerWidth: width, innerHeight: height } = window;
const CanvasChairScrollMobile = ({setIsToolbarVisible})=>{
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const heroSequenceRef = useRef(null);

  // Preload images
  useEffect(() => {
    const images = [];
    for (let i = 1;i < frameCount; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      img.onload = () => {
        images[i] = img;
        if (i === 1) {
          drawImage(1); // Draw the first image after it has loaded
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
      };
    }
    imagesRef.current = images;
  }, []);

  // Draw the image on the canvas
  const drawImage = (frameIndex) => {
    const canvas = canvasRef.current;
    if (canvas && imagesRef.current[frameIndex]) {
      const ctx = canvas.getContext('2d');
      const image = imagesRef.current[frameIndex];
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      if (frameIndex >= 41 && frameIndex <= 78) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('High-end eco leather.',400, 1330);
        ctx.fillText('Handstitched and designed', 400, 1380);
        ctx.fillText(' for ultimate comfort', 400, 1430);
      }
      if (frameIndex >= 168 && frameIndex <= 204) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Programmable chroma ', 400, 1330);
        ctx.fillText('LED lights displaying over',  400, 1380);
        ctx.fillText('  16M colours', 400, 1430);
      }
      if (frameIndex >= 260 && frameIndex <= 296) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Made of Carbon fiber. ', 400, 1330);
        ctx.fillText('Durable, lightweight and',  400, 1380);
        ctx.fillText('scratch-resistant', 400, 1430);
      }
      if (frameIndex >= 356 && frameIndex <= 392) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Dual motors enabling  ', 400, 1330);
        ctx.fillText('360° horizontal rotation',  400, 1380);
        ctx.fillText('and up to 90° vertical tilt', 400, 1430);
      }
      if (frameIndex >= 474 && frameIndex <= 510) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Solid casing with a built-', 400, 1330);
        ctx.fillText('in cutting-edge computer',  400, 1380);
        ctx.fillText('and cooling system', 400, 1430);
      }

      if (frameIndex >= 572 && frameIndex <= 609) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for ', 400, 1360);
        ctx.fillText('immersive scent diffusion',  400, 1410);
      
      }
      if (frameIndex >= 695 && frameIndex <= 729) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 30px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for immersive scent diffusion', 340, 1230);
       // ctx.fillText('immersive scent diffusion',  300, 1180);

       ctx.fillText('Made of Carbon fiber. Durable, lightweight and', 340, 1280);
       //ctx.fillText('Durable, lightweight and', 8400, 1950);
       ctx.fillText('scratch-resistant', 200, 1310);

       ctx.fillText('Programmable chroma LED lights displaying over ', 350, 1360);
       //ctx.fillText('LED lights displaying over',8400, 2250);
       ctx.fillText('  16M colours', 170, 1390);


        ctx.fillText('High-end eco leather. Handstitched and designed', 340, 1440);
       // ctx.fillText('Handstitched and designed', 8400, 1580);
        ctx.fillText(' for ultimate comfort', 200, 1470);

        ctx.fillText('Dual motors enabling 360° horizontal rotation ', 330, 1510);
        //ctx.fillText('360° horizontal rotation', 8400, 2550);
        ctx.fillText('and up to 90° vertical tilt', 230, 1540);

        ctx.fillText('Solid casing with a built-in cutting-edge computer', 340, 1590 );
       // ctx.fillText('in cutting-edge computer',8400, 1750);
        ctx.fillText('and cooling system',200, 1620);

        // ctx.fillText('Made of Carbon fiber. Durable, lightweight and', 330, 1440);
        // //ctx.fillText('Durable, lightweight and', 8400, 1950);
        // ctx.fillText('scratch-resistant', 180, 1540);

        // ctx.fillText('Programmable chroma LED lights displaying over ', 340, 1510);
        // //ctx.fillText('LED lights displaying over',8400, 2250);
        // ctx.fillText('  16M colours', 140, 1540);

        // ctx.fillText('Dual motors enabling 360° horizontal rotation ', 330, 1590);
        // //ctx.fillText('360° horizontal rotation', 8400, 2550);
        // ctx.fillText('and up to 90° vertical tilt', 220, 1620);
      
      }
    }
  };

  // Handle scroll event to update canvas image
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop - heroSequenceRef.current.offsetTop;
      const maxScrollTop = heroSequenceRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = (scrollTop / (maxScrollTop/1.1));
      const frameIndex = Math.max(
        0,
        Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount))
      );

      if(frameIndex >=647 ){
        setIsToolbarVisible(true)
      }else{
        setIsToolbarVisible(false)
      }

      drawImage(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSequenceWrapper ref={heroSequenceRef}>
        <StickyElement>
          <SequenceElement>
            <Canvas ref={canvasRef} width="780" height="1688" />
          </SequenceElement>
        </StickyElement>
      </HeroSequenceWrapper>


    </>
  );
};

export default CanvasChairScrollMobile;

// Styled Components
const HeroSequenceWrapper = styled.div`

  height: 730vh;
`;

const StickyElement = styled.div`
  position: sticky;
  z-index:2 ;
  top: 0;
  height: 100vh;
  width: auto;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #262726;

  @media (min-width: 1200px) {
    height: 115vh;
  }
`;

const SequenceElement = styled.div`
  width: auto;
 height: 100%; 

`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;

 
`;

