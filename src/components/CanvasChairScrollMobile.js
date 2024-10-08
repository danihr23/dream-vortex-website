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

      console.log(canvas.height)

      if (frameIndex >= 41 && frameIndex <= 78) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('High-end eco leather.',200, canvas.height*0.79);
        ctx.fillText('Handstitched and designed', 200, canvas.height*0.82);
        ctx.fillText(' for ultimate comfort', 200,  canvas.height*0.85);
      }
      if (frameIndex >= 168 && frameIndex <= 204) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Programmable chroma ', 200, canvas.height*0.79);
        ctx.fillText('LED lights displaying over',  200, canvas.height*0.82);
        ctx.fillText('  16M colours', 200, canvas.height*0.85);
      }
      if (frameIndex >= 260 && frameIndex <= 296) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Made of Carbon fiber. ', 200, canvas.height*0.79);
        ctx.fillText('Durable, lightweight and',  200, canvas.height*0.82);
        ctx.fillText('scratch-resistant', 200, canvas.height*0.85);
      }
      if (frameIndex >= 356 && frameIndex <= 392) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Dual motors enabling  ', 200, canvas.height*0.79);
        ctx.fillText('360° horizontal rotation',  200, canvas.height*0.82);
        ctx.fillText('and up to 90° vertical tilt', 200, canvas.height*0.85);
      }
      if (frameIndex >= 474 && frameIndex <= 510) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Solid casing with a built-', 200, canvas.height*0.79);
        ctx.fillText('in cutting-edge computer',  200, canvas.height*0.82);
        ctx.fillText('and cooling system', 200, canvas.height*0.85);
      }

      if (frameIndex >= 572 && frameIndex <= 609) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 20px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for ', 200, canvas.height*0.79);
        ctx.fillText('immersive scent diffusion',  200, canvas.height*0.82);
      
      }
      if (frameIndex >= 695 && frameIndex <= 729) {
        ctx.fillStyle = 'rgba(0, 191, 188, 1)';
        ctx.font = 'italic 15px Lato';
        ctx.textAlign = 'center';
        ctx.fillText('Olfactory module for immersive scent diffusion', canvas.width * 0.5, canvas.height*0.67);
       // ctx.fillText('immersive scent diffusion',  300, 1180);

       ctx.fillText('Made of Carbon fiber. Durable, lightweight and', canvas.width * 0.5, canvas.height*0.70);
       //ctx.fillText('Durable, lightweight and', 8400, 1950);
       ctx.fillText('scratch-resistant', canvas.width * 0.26, canvas.height*0.72);

       ctx.fillText('Programmable chroma LED lights displaying over ', canvas.width * 0.5, canvas.height*0.75);
       //ctx.fillText('LED lights displaying over',8400, 2250);
       ctx.fillText('  16M colours', canvas.width * 0.26, canvas.height*0.77);


        ctx.fillText('High-end eco leather. Handstitched and designed', canvas.width * 0.5, canvas.height*0.80);
       // ctx.fillText('Handstitched and designed', 8400, 1580);
        ctx.fillText(' for ultimate comfort', canvas.width * 0.26, canvas.height*0.82);

        ctx.fillText('Dual motors enabling 360° horizontal rotation ', canvas.width * 0.5, canvas.height*0.85);
        //ctx.fillText('360° horizontal rotation', 8400, 2550);
        ctx.fillText('and up to 90° vertical tilt', canvas.width * 0.36, canvas.height*0.87);

        ctx.fillText('Solid casing with a built-in cutting-edge computer', canvas.width * 0.5, canvas.height*0.90 );
       // ctx.fillText('in cutting-edge computer',8400, 1750);
        ctx.fillText('and cooling system',canvas.width * 0.26, canvas.height*0.92);

      
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeroSequenceWrapper ref={heroSequenceRef}>
        <StickyElement>
          <SequenceElement>
            <Canvas ref={canvasRef} width="380" height={window.innerHeight} />
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

