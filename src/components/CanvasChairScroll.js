import React, { useRef, useEffect, } from 'react';
import styled from 'styled-components/macro';

function getCurrentFrame(index) {
    return `/assets/new/ezgif-frame-${index}.webp`;
}

const frameCount = 656;
//const { innerWidth: width, innerHeight: height } = window;
const CanvasChairScroll = ({setIsToolbarVisible})=>{
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const heroSequenceRef = useRef(null);

  // Preload images
  useEffect(() => {
    const images = [];
    for (let i = 1; i < frameCount; i++) {
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

    //   if (frameIndex >= 75 && frameIndex <= 100) {
    //     ctx.fillStyle = 'white';
    //     ctx.font = 'bold 18px Arial';
    //     ctx.textAlign = 'left';
    //     ctx.fillText('Innovative Experience', 600, 100);
    //     ctx.fillText('maikata si e ebalo', 600, 150);
    //     ctx.fillText('maikata si e ebalo kucheto', 600, 200);
    //   }
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

