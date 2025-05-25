"use client";
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import BrandLogo from '~/components/Ui/BrandLogo/BrandLogo';
// import BrandLogo from './brandLogo';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0d0e1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  opacity: 0;
  filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0));
`;

const LoadingText = styled.div`
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  margin-top: 20px;
  opacity: 0;
`;

const Loading = ({ isLoading }) => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        {
          scale: 1.1,
          opacity: 1,
          rotation: 10,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))',
        }
      ).to(
        logoRef.current,
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      gsap.to(textRef.current, {
        '--dot-opacity': 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.2,
          from: 'end',
        },
      });
    }
  }, [isLoading]);

  return (
    isLoading && (
      <LoaderWrapper>
        <LogoContainer ref={logoRef}>
          <BrandLogo />
        </LogoContainer>
        <LoadingText ref={textRef}>
          Loading<span style={{ opacity: 'var(--dot-opacity, 1)' }}>.</span>
          <span style={{ opacity: 'var(--dot-opacity, 1)' }}>.</span>
          <span style={{ opacity: 'var(--dot-opacity, 1)' }}>.</span>
        </LoadingText>
      </LoaderWrapper>
    )
  );
};

export default Loading;





// "use client"
// import React from 'react';

// const Loading = ({ isLoading }) => {
//   return (
//     isLoading && (
//       <div className="tekup-preloader-wrap">
//       <div className="tekup-preloader">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//     )
//   );
// };

// export default Loading;