"use client"
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import BrandLogo from '~/components/Ui/BrandLogo/BrandLogo';
// import BrandLogo from '~/components/BrandLogo/BrandLogo';

// Styled Components
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 2;
  
  img {
    max-width: 120px;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 8px;
  position: relative;
`;

const Wave = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #f0f0f0);
  border-radius: 10px;
  width: 0%;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 1rem;
  opacity: 0.8;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
`;

const Loading = ({ isLoading }) => {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const dotsRef = useRef([]);
  const wavesRef = useRef([]);
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!isLoading) return;

    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set(wrapperRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { opacity: 0, y: -30, scale: 0.8 });
    gsap.set(dotsRef.current, { opacity: 0, scale: 0 });
    gsap.set(wavesRef.current, { opacity: 0, scale: 0 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    // Logo entrance animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    
    // Dots entrance
    .to(dotsRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.3")
    
    // Waves entrance
    .to(wavesRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.2")
    
    // Text entrance
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

    // Continuous animations
    const dotAnimation = gsap.to(dotsRef.current, {
      y: -15,
      duration: 0.6,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    const waveAnimation = gsap.to(wavesRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      repeat: -1,
      ease: "power2.out"
    });

    // Progress bar animation
    const progressAnimation = gsap.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
      repeat: -1
    });

    // Floating particles
    const createParticles = () => {
      for (let i = 0; i < 20; i++) {
        const particle = particlesRef.current[i];
        if (particle) {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.2
          });
          
          gsap.to(particle, {
            y: "-=100",
            x: `+=${(Math.random() - 0.5) * 100}`,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 2
          });
        }
      }
    };

    createParticles();

    return () => {
      tl.kill();
      dotAnimation.kill();
      waveAnimation.kill();
      progressAnimation.kill();
    };
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading && wrapperRef.current) {
      // Exit animation
      gsap.to(wrapperRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(wrapperRef.current, { display: 'none' });
        }
      });
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <LoaderWrapper ref={wrapperRef}>
      <ParticleContainer>
        {Array.from({ length: 20 }, (_, i) => (
          <Particle
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
          />
        ))}
      </ParticleContainer>
      
      <LoaderContainer>
        <LogoContainer ref={logoRef}>
          <BrandLogo />
        </LogoContainer>
        
        <AnimationContainer>
          {/* Animated waves */}
          {Array.from({ length: 3 }, (_, i) => (
            <Wave
              key={i}
              ref={(el) => (wavesRef.current[i] = el)}
              style={{
                animationDelay: `${i * 0.5}s`,
                transform: `translate(-50%, -50%) scale(${1 + i * 0.2})`
              }}
            />
          ))}
          
          {/* Animated dots */}
          {Array.from({ length: 5 }, (_, i) => (
            <Dot
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
            />
          ))}
        </AnimationContainer>
        
        <ProgressBar>
          <ProgressFill ref={progressRef} />
        </ProgressBar>
        
        <LoadingText ref={textRef}>
          Loading Experience...
        </LoadingText>
      </LoaderContainer>
    </LoaderWrapper>
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