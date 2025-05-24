"use client"

import { useEffect, useState } from "react"
import CountUp from "react-countup"
import { ArrowUpRightIcon as ArrowRightUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

// Styled components for enhanced design
const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  background: linear-gradient(135deg, 
    rgba(1, 25, 255, 0.1) 0%, 
    rgba(13, 14, 29, 0.8) 25%,
    rgba(1, 25, 255, 0.05) 50%,
    rgba(13, 14, 29, 0.9) 75%,
    rgba(1, 25, 255, 0.1) 100%
  );
`

const Shape = styled(motion.div)`
  position: absolute;
  background: ${(props) => props.gradient};
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : props.shape === "triangle" ? "0" : "10%")};
  ${(props) =>
    props.shape === "triangle" &&
    `
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
    border-left: ${props.size / 2}px solid transparent;
    border-right: ${props.size / 2}px solid transparent;
    border-bottom: ${props.size}px solid ${props.color};
  `}
`

const WaterButton = styled(motion.a)`
  position: relative;
  overflow: hidden;
  border-radius: 25px !important;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
  }
  
  &:hover::before {
    width: 300px;
    height: 300px;
    animation: waterRipple 0.6s ease-out;
  }
  
  @keyframes waterRipple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.8;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`

const VideoThumbnail = styled(motion.div)`
  position: relative;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const PlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(1, 25, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    margin-left: 4px;
  }
  
  &:hover {
    background: rgba(1, 25, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`

// Define the content for each slide
const heroContent = [
  {
    heading: "The best innovative technology solutions",
    paragraph: "We are architects of innovation, trailblazers of technological advancement",
    images: [
      "/images/v8/hero-thumb1.png",
      "/images/v8/hero-thumb2.png",
      "/images/v8/hero-thumb3.png",
      "/images/v8/hero-thumb4.png",
      "/images/v8/hero-thumb5.png",
    ],
  },
  {
    heading: "Cutting-edge digital transformation",
    paragraph: "Empowering businesses with next-generation technology solutions",
    images: [
      "/images/v8/hero-thumb5.png",
      "/images/v8/hero-thumb4.png",
      "/images/v8/hero-thumb3.png",
      "/images/v8/hero-thumb2.png",
      "/images/v8/hero-thumb1.png",
    ],
  },
  {
    heading: "Seamless integration of AI solutions",
    paragraph: "Harnessing the power of artificial intelligence to drive business growth",
    images: [
      "/images/v8/hero-thumb2.png",
      "/images/v8/hero-thumb1.png",
      "/images/v8/hero-thumb5.png",
      "/images/v8/hero-thumb3.png",
      "/images/v8/hero-thumb4.png",
    ],
  },
  {
    heading: "Future-proof your business strategy",
    paragraph: "Creating sustainable technological ecosystems for long-term success",
    images: [
      "/images/v8/hero-thumb3.png",
      "/images/v8/hero-thumb5.png",
      "/images/v8/hero-thumb1.png",
      "/images/v8/hero-thumb4.png",
      "/images/v8/hero-thumb2.png",
    ],
  },
  {
    heading: "Revolutionize your digital presence",
    paragraph: "Building immersive experiences that captivate and convert your audience",
    images: [
      "/images/v8/hero-thumb4.png",
      "/images/v8/hero-thumb3.png",
      "/images/v8/hero-thumb2.png",
      "/images/v8/hero-thumb1.png",
      "/images/v8/hero-thumb5.png",
    ],
  },
]

// Animation variants
const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  exit: (custom) => ({
    opacity: 0,
    y: -20,
    transition: {
      delay: custom * 0.05,
      duration: 0.4,
      ease: "easeIn",
    },
  }),
}

const imageVariants = {
  initial: (custom) => ({
    opacity: 0,
    scale: 0.8,
    rotate: custom % 2 === 0 ? -5 : 5,
    y: 30,
  }),
  animate: (custom) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.2 + custom * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
  exit: (custom) => ({
    opacity: 0,
    scale: 0.9,
    rotate: custom % 2 === 0 ? 5 : -5,
    y: -20,
    transition: {
      delay: custom * 0.05,
      duration: 0.5,
      ease: "easeIn",
    },
  }),
}

const buttonVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
}

// Animated shapes component
const AnimatedShapes = () => {
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const createShape = () => {
      const shapeTypes = ["circle", "square", "triangle"]
      const colors = [
        "rgba(1, 25, 255, 0.4)",
        "rgba(255, 255, 255, 0.2)",
        "rgba(1, 25, 255, 0.3)",
        "rgba(255, 255, 255, 0.15)",
        "rgba(1, 25, 255, 0.25)",
        "rgba(255, 255, 255, 0.3)",
      ]

      const gradients = [
        "linear-gradient(135deg, rgba(1, 25, 255, 0.4), rgba(255, 255, 255, 0.2))",
        "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(1, 25, 255, 0.3))",
        "radial-gradient(circle, rgba(1, 25, 255, 0.3), transparent)",
        "linear-gradient(90deg, rgba(255, 255, 255, 0.15), rgba(1, 25, 255, 0.25))",
        "linear-gradient(180deg, rgba(1, 25, 255, 0.35), rgba(255, 255, 255, 0.1))",
      ]

      return {
        id: Math.random(),
        shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        size: Math.random() * 80 + 30, // Increased size range
        x: Math.random() * window.innerWidth,
        y: -100,
        color: colors[Math.floor(Math.random() * colors.length)],
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        duration: Math.random() * 8 + 12, // Slightly faster
        delay: Math.random() * 1,
      }
    }

    const interval = setInterval(() => {
      setShapes((prev) => {
        const newShapes = [...prev, createShape()]
        return newShapes.slice(-30) // Keep more shapes visible
      })
    }, 400) // More frequent creation

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {shapes.map((shape) => (
        <Shape
          key={shape.id}
          shape={shape.shape}
          size={shape.size}
          color={shape.color}
          gradient={shape.gradient}
          initial={{
            x: shape.x,
            y: shape.y,
            opacity: 0,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [0, 1, 1, 0],
            rotate: 360,
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            ease: "linear",
          }}
          style={{
            width: shape.shape === "triangle" ? 0 : shape.size,
            height: shape.shape === "triangle" ? 0 : shape.size,
            left: shape.x,
            top: shape.y,
          }}
          onAnimationComplete={() => {
            setShapes((prev) => prev.filter((s) => s.id !== shape.id))
          }}
        />
      ))}
    </>
  )
}

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }

  const closeVideo = () => {
    setShowVideo(false)
  }

  // Handle scroll for counter visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-home-eight")
      if (section) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        setIsVisible(isVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle slide transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 6000) // Change slide every 6 seconds to allow for animations

    return () => clearInterval(interval)
  }, [])

  return (
    <HeroContainer className="tekup-hero-section8 dark-bg">
      <AnimatedBackground>
        <AnimatedShapes />
      </AnimatedBackground>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="tekup-hero-content white-color center large-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={`heading-${currentSlide}`}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0}
              variants={textVariants}
            >
              <h1>{heroContent[currentSlide].heading}</h1>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`paragraph-${currentSlide}`}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={1}
              variants={textVariants}
            >
              <p>{heroContent[currentSlide].paragraph}</p>
            </motion.div>
          </AnimatePresence>

          <div className="tekup-extra-mt">
            <div className="tekup-hero-btn-wrap center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`button-${currentSlide}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={buttonVariants}
                >
                  <WaterButton
                    className="tekup-default-btn"
                    href=""
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <span>
                      Start a Project <ArrowRightUp className="ml-2" />
                    </span>
                  </WaterButton>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="tekup-hero-thumb-wrap">
          <div className="tekup-hero-thumb-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-0-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={0}
                variants={imageVariants}
              >
                <img src={heroContent[currentSlide].images[0] || "/placeholder.svg"} alt="Hero image 1" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`image-1-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={1}
                variants={imageVariants}
              >
                <img src={heroContent[currentSlide].images[1] || "/placeholder.svg"} alt="Hero image 2" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="tekup-hero-thumb-column">
            <AnimatePresence mode="wait">
              <VideoThumbnail
                key={`video-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={2}
                variants={imageVariants}
                onClick={handleVideoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={heroContent[currentSlide].images[2] || "/placeholder.svg"} alt="Video thumbnail" />
                <PlayButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
              </VideoThumbnail>
            </AnimatePresence>
          </div>

          <div className="tekup-hero-thumb-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-3-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={3}
                variants={imageVariants}
              >
                <img src={heroContent[currentSlide].images[3] || "/placeholder.svg"} alt="Hero image 4" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`image-4-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={4}
                variants={imageVariants}
              >
                <img src={heroContent[currentSlide].images[4] || "/placeholder.svg"} alt="Hero image 5" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="tekup-hero-counter-section" id="counter-home-eight">
          <div id="tekup-counter"></div>
          <div className="tekup-counter-wrap">
            <div className="tekup-counter-data light-color">
              <h2>
                <span data-percentage="10" className="tekup-counter">
                  {isVisible && <CountUp end={10} duration={3} />}
                </span>
                +
              </h2>
              <h4>Years of Experience</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
            <div className="tekup-counter-data light-color">
              <h2>
                <span data-percentage="100" className="tekup-counter">
                  {isVisible && <CountUp end={100} duration={3} />}
                </span>
                +
              </h2>
              <h4>Successfully Projects Done</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
            <div className="tekup-counter-data light-color">
              <h2>
                <span data-percentage="90" className="tekup-counter">
                  {isVisible && <CountUp end={90} duration={3} />}
                </span>
                +
              </h2>
              <h4>Satisfied Happy Clients</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              aspectRatio: "16/9",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={closeVideo}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </HeroContainer>
  )
}

export default HeroSection







// "use client"

// import { useEffect, useState } from "react"
// import CountUp from "react-countup"
// import { ArrowUpRightIcon as ArrowRightUp } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import styled from "styled-components"

// // Styled components for enhanced design
// const HeroContainer = styled.div`
//   position: relative;
//   overflow: hidden;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100px;
//     background: linear-gradient(135deg, transparent 0%, #0D0E1D 100%);
//     transform: skewY(-2deg);
//     transform-origin: bottom left;
//     z-index: 2;
//   }
// `

// const AnimatedBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: 0;
  
//   background: linear-gradient(135deg, 
//     rgba(1, 25, 255, 0.1) 0%, 
//     rgba(13, 14, 29, 0.8) 25%,
//     rgba(1, 25, 255, 0.05) 50%,
//     rgba(13, 14, 29, 0.9) 75%,
//     rgba(1, 25, 255, 0.1) 100%
//   );
// `

// const Shape = styled(motion.div)`
//   position: absolute;
//   background: ${(props) => props.gradient};
//   border-radius: ${(props) => (props.shape === "circle" ? "50%" : props.shape === "triangle" ? "0" : "10%")};
//   ${(props) =>
//     props.shape === "triangle" &&
//     `
//     width: 0 !important;
//     height: 0 !important;
//     background: transparent !important;
//     border-left: ${props.size / 2}px solid transparent;
//     border-right: ${props.size / 2}px solid transparent;
//     border-bottom: ${props.size}px solid ${props.color};
//   `}
// `

// const WaterButton = styled(motion.a)`
//   position: relative;
//   overflow: hidden;
//   border-radius: 25px !important;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 0;
//     height: 0;
//     background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//     transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//     z-index: 0;
//   }
  
//   &:hover::before {
//     width: 300px;
//     height: 300px;
//     animation: waterRipple 0.6s ease-out;
//   }
  
//   @keyframes waterRipple {
//     0% {
//       width: 0;
//       height: 0;
//       opacity: 0.8;
//     }
//     50% {
//       opacity: 0.4;
//     }
//     100% {
//       width: 300px;
//       height: 300px;
//       opacity: 0;
//     }
//   }
  
//   span {
//     position: relative;
//     z-index: 1;
//   }
// `

// // Define the content for each slide
// const heroContent = [
//   {
//     heading: "The best innovative technology solutions",
//     paragraph: "We are architects of innovation, trailblazers of technological advancement",
//     images: [
//       "/images/v8/hero-thumb1.png",
//       "/images/v8/hero-thumb2.png",
//       "/images/v8/hero-thumb3.png",
//       "/images/v8/hero-thumb4.png",
//       "/images/v8/hero-thumb5.png",
//     ],
//   },
//   {
//     heading: "Cutting-edge digital transformation",
//     paragraph: "Empowering businesses with next-generation technology solutions",
//     images: [
//       "/images/v8/hero-thumb5.png",
//       "/images/v8/hero-thumb4.png",
//       "/images/v8/hero-thumb3.png",
//       "/images/v8/hero-thumb2.png",
//       "/images/v8/hero-thumb1.png",
//     ],
//   },
//   {
//     heading: "Seamless integration of AI solutions",
//     paragraph: "Harnessing the power of artificial intelligence to drive business growth",
//     images: [
//       "/images/v8/hero-thumb2.png",
//       "/images/v8/hero-thumb1.png",
//       "/images/v8/hero-thumb5.png",
//       "/images/v8/hero-thumb3.png",
//       "/images/v8/hero-thumb4.png",
//     ],
//   },
//   {
//     heading: "Future-proof your business strategy",
//     paragraph: "Creating sustainable technological ecosystems for long-term success",
//     images: [
//       "/images/v8/hero-thumb3.png",
//       "/images/v8/hero-thumb5.png",
//       "/images/v8/hero-thumb1.png",
//       "/images/v8/hero-thumb4.png",
//       "/images/v8/hero-thumb2.png",
//     ],
//   },
//   {
//     heading: "Revolutionize your digital presence",
//     paragraph: "Building immersive experiences that captivate and convert your audience",
//     images: [
//       "/images/v8/hero-thumb4.png",
//       "/images/v8/hero-thumb3.png",
//       "/images/v8/hero-thumb2.png",
//       "/images/v8/hero-thumb1.png",
//       "/images/v8/hero-thumb5.png",
//     ],
//   },
// ]

// // Animation variants
// const textVariants = {
//   initial: {
//     opacity: 0,
//     y: 20,
//   },
//   animate: (custom) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: custom * 0.1,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
//   exit: (custom) => ({
//     opacity: 0,
//     y: -20,
//     transition: {
//       delay: custom * 0.05,
//       duration: 0.4,
//       ease: "easeIn",
//     },
//   }),
// }

// const imageVariants = {
//   initial: (custom) => ({
//     opacity: 0,
//     scale: 0.8,
//     rotate: custom % 2 === 0 ? -5 : 5,
//     y: 30,
//   }),
//   animate: (custom) => ({
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     y: 0,
//     transition: {
//       delay: 0.2 + custom * 0.1,
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   }),
//   exit: (custom) => ({
//     opacity: 0,
//     scale: 0.9,
//     rotate: custom % 2 === 0 ? 5 : -5,
//     y: -20,
//     transition: {
//       delay: custom * 0.05,
//       duration: 0.5,
//       ease: "easeIn",
//     },
//   }),
// }

// const buttonVariants = {
//   initial: { opacity: 0, scale: 0.9 },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delay: 0.5,
//       duration: 0.5,
//       type: "spring",
//       stiffness: 200,
//       damping: 15,
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.9,
//     transition: {
//       duration: 0.3,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: {
//       duration: 0.2,
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
//   tap: {
//     scale: 0.95,
//   },
// }

// // Animated shapes component
// const AnimatedShapes = () => {
//   const [shapes, setShapes] = useState([])

//   useEffect(() => {
//     const createShape = () => {
//       const shapeTypes = ["circle", "square", "triangle"]
//       const colors = [
//         "rgba(1, 25, 255, 0.3)",
//         "rgba(255, 255, 255, 0.1)",
//         "rgba(1, 25, 255, 0.2)",
//         "rgba(255, 255, 255, 0.05)",
//         "rgba(1, 25, 255, 0.15)",
//       ]

//       const gradients = [
//         "linear-gradient(135deg, rgba(1, 25, 255, 0.3), rgba(255, 255, 255, 0.1))",
//         "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(1, 25, 255, 0.2))",
//         "radial-gradient(circle, rgba(1, 25, 255, 0.2), transparent)",
//         "linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(1, 25, 255, 0.15))",
//       ]

//       return {
//         id: Math.random(),
//         shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
//         size: Math.random() * 60 + 20,
//         x: Math.random() * window.innerWidth,
//         y: -100,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         gradient: gradients[Math.floor(Math.random() * gradients.length)],
//         duration: Math.random() * 10 + 15,
//         delay: Math.random() * 2,
//       }
//     }

//     const interval = setInterval(() => {
//       setShapes((prev) => {
//         const newShapes = [...prev, createShape()]
//         return newShapes.slice(-20) // Keep only last 20 shapes
//       })
//     }, 800)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       {shapes.map((shape) => (
//         <Shape
//           key={shape.id}
//           shape={shape.shape}
//           size={shape.size}
//           color={shape.color}
//           gradient={shape.gradient}
//           initial={{
//             x: shape.x,
//             y: shape.y,
//             opacity: 0,
//             rotate: 0,
//             scale: 0,
//           }}
//           animate={{
//             y: window.innerHeight + 100,
//             opacity: [0, 1, 1, 0],
//             rotate: 360,
//             scale: [0, 1, 1, 0],
//           }}
//           transition={{
//             duration: shape.duration,
//             delay: shape.delay,
//             ease: "linear",
//           }}
//           style={{
//             width: shape.shape === "triangle" ? 0 : shape.size,
//             height: shape.shape === "triangle" ? 0 : shape.size,
//             left: shape.x,
//             top: shape.y,
//           }}
//           onAnimationComplete={() => {
//             setShapes((prev) => prev.filter((s) => s.id !== shape.id))
//           }}
//         />
//       ))}
//     </>
//   )
// }

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)

//   // Handle scroll for counter visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("counter-home-eight")
//       if (section) {
//         const rect = section.getBoundingClientRect()
//         const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
//         setIsVisible(isVisible)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Handle slide transitions
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroContent.length)
//     }, 6000) // Change slide every 6 seconds to allow for animations

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <HeroContainer className="tekup-hero-section8 dark-bg">
//       <AnimatedBackground>
//         <AnimatedShapes />
//       </AnimatedBackground>

//       <div className="container" style={{ position: "relative", zIndex: 1 }}>
//         <div className="tekup-hero-content white-color center large-content">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`heading-${currentSlide}`}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               custom={0}
//               variants={textVariants}
//             >
//               <h1>{heroContent[currentSlide].heading}</h1>
//             </motion.div>
//           </AnimatePresence>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`paragraph-${currentSlide}`}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               custom={1}
//               variants={textVariants}
//             >
//               <p>{heroContent[currentSlide].paragraph}</p>
//             </motion.div>
//           </AnimatePresence>

//           <div className="tekup-extra-mt">
//             <div className="tekup-hero-btn-wrap center">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`button-${currentSlide}`}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   variants={buttonVariants}
//                 >
//                   <WaterButton
//                     className="tekup-default-btn"
//                     href=""
//                     whileHover="hover"
//                     whileTap="tap"
//                     variants={buttonVariants}
//                   >
//                     <span>
//                       Start a Project <ArrowRightUp className="ml-2" />
//                     </span>
//                   </WaterButton>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         <div className="tekup-hero-thumb-wrap">
//           <div className="tekup-hero-thumb-column">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`image-0-${currentSlide}`}
//                 className="tekup-hero-thumb-item"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 custom={0}
//                 variants={imageVariants}
//               >
//                 <img src={heroContent[currentSlide].images[0] || "/placeholder.svg"} alt="Hero image 1" />
//               </motion.div>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`image-1-${currentSlide}`}
//                 className="tekup-hero-thumb-item"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 custom={1}
//                 variants={imageVariants}
//               >
//                 <img src={heroContent[currentSlide].images[1] || "/placeholder.svg"} alt="Hero image 2" />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="tekup-hero-thumb-column">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`image-2-${currentSlide}`}
//                 className="tekup-hero-thumb-item"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 custom={2}
//                 variants={imageVariants}
//               >
//                 <img src={heroContent[currentSlide].images[2] || "/placeholder.svg"} alt="Hero image 3" />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="tekup-hero-thumb-column">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`image-3-${currentSlide}`}
//                 className="tekup-hero-thumb-item"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 custom={3}
//                 variants={imageVariants}
//               >
//                 <img src={heroContent[currentSlide].images[3] || "/placeholder.svg"} alt="Hero image 4" />
//               </motion.div>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`image-4-${currentSlide}`}
//                 className="tekup-hero-thumb-item"
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 custom={4}
//                 variants={imageVariants}
//               >
//                 <img src={heroContent[currentSlide].images[4] || "/placeholder.svg"} alt="Hero image 5" />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         <div className="tekup-hero-counter-section" id="counter-home-eight">
//           <div id="tekup-counter"></div>
//           <div className="tekup-counter-wrap">
//             <div className="tekup-counter-data light-color">
//               <h2>
//                 <span data-percentage="10" className="tekup-counter">
//                   {isVisible && <CountUp end={10} duration={3} />}
//                 </span>
//                 +
//               </h2>
//               <h4>Years of Experience</h4>
//               <p>To succeed, every software solution be deeply integrated into the</p>
//             </div>
//             <div className="tekup-counter-data light-color">
//               <h2>
//                 <span data-percentage="100" className="tekup-counter">
//                   {isVisible && <CountUp end={100} duration={3} />}
//                 </span>
//                 +
//               </h2>
//               <h4>Successfully Projects Done</h4>
//               <p>To succeed, every software solution be deeply integrated into the</p>
//             </div>
//             <div className="tekup-counter-data light-color">
//               <h2>
//                 <span data-percentage="90" className="tekup-counter">
//                   {isVisible && <CountUp end={90} duration={3} />}
//                 </span>
//                 +
//               </h2>
//               <h4>Satisfied Happy Clients</h4>
//               <p>To succeed, every software solution be deeply integrated into the</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeroContainer>
//   )
// }

// export default HeroSection