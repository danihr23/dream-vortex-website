import React, { useRef, useEffect, } from 'react';
import styled from 'styled-components/macro';

function getCurrentFrame(index) {
    return `/assets/new/ezgif-frame-${index}.webp`;
}

const frameCount = 616;
//const { innerWidth: width, innerHeight: height } = window;
const CanvasChairScroll = ({setIsToolbarVisible})=>{
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

      if (frameIndex >= 43 && frameIndex <= 57) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('High-end eco leather.', 1450, 230);
        ctx.fillText('Handstitched and designed', 1450, 280);
        ctx.fillText(' for ultimate comfort', 1450, 330);
      }
      if (frameIndex >= 145 && frameIndex <= 159) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Programmable chroma ', 340, 370);
        ctx.fillText('LED lights displaying over', 340, 420);
        ctx.fillText('  16M colours', 340, 470);
      }
      if (frameIndex >= 245 && frameIndex <= 261) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Made of Carbon fiber. ', 310, 390);
        ctx.fillText('Durable, lightweight and', 310, 440);
        ctx.fillText('scratch-resistant', 310, 490);
      }
      if (frameIndex >= 326 && frameIndex <= 337) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Dual motors enabling  ', 430, 660);
        ctx.fillText('360° horizontal rotation', 430, 710);
        ctx.fillText('and up to 90° vertical tilt', 430, 760);
      }
      if (frameIndex >= 441 && frameIndex <= 454) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Solid casing with a built-', 1330, 730);
        ctx.fillText('in cutting-edge computer', 1330, 780);
        ctx.fillText('and cooling system', 1330, 830);
      }

      if (frameIndex >= 534 && frameIndex <= 547) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for ', 880, 290);
        ctx.fillText('immersive scent diffusion', 880, 340);
      
      }
      if (frameIndex >= 602 && frameIndex <= 616) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 40px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for ', 1300, 250);
        ctx.fillText('immersive scent diffusion', 1300, 300);

        ctx.fillText('High-end eco leather.', 1385, 470);
        ctx.fillText('Handstitched and designed', 1385, 520);
        ctx.fillText(' for ultimate comfort', 1385, 570);

        ctx.fillText('Solid casing with a built-', 1385, 770);
        ctx.fillText('in cutting-edge computer', 1385, 820);
        ctx.fillText('and cooling system', 1385, 870);

        ctx.fillText('Made of Carbon fiber. ', 410, 230);
        ctx.fillText('Durable, lightweight and', 410, 280);
        ctx.fillText('scratch-resistant', 410, 330);

        ctx.fillText('Programmable chroma ', 400, 470);
        ctx.fillText('LED lights displaying over', 400, 520);
        ctx.fillText('  16M colours', 400, 570);

        ctx.fillText('Dual motors enabling  ', 380, 750);
        ctx.fillText('360° horizontal rotation', 380, 800);
        ctx.fillText('and up to 90° vertical tilt', 380, 850);
      
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
            <Canvas ref={canvasRef} width="1920" height="1080" />
          </SequenceElement>
        </StickyElement>
      </HeroSequenceWrapper>


    </>
  );
};

export default CanvasChairScroll;

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
  width: 100%;
 height: auto; 
aspect-ratio:  683 / 384;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;

 
`;

