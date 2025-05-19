"use client"

import { useEffect, useState } from "react"
import CountUp from "react-countup"
import Link from "next/link"
import { ArrowUpRightIcon as ArrowRightUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <div className="tekup-hero-section8 dark-bg overflow-hidden">
      <div className="container">
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
                  <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                    <Link className="tekup-default-btn" href="">
                      Start a Project <ArrowRightUp className="ml-2" />
                    </Link>
                  </motion.div>
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
              <motion.div
                key={`image-2-${currentSlide}`}
                className="tekup-hero-thumb-item"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={2}
                variants={imageVariants}
              >
                <img src={heroContent[currentSlide].images[2] || "/placeholder.svg"} alt="Hero image 3" />
              </motion.div>
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
                <span data-percentage="26" className="tekup-counter">
                  {isVisible && <CountUp end={26} duration={3} />}
                </span>
                +
              </h2>
              <h4>Years of Experience</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
            <div className="tekup-counter-data light-color">
              <h2>
                <span data-percentage="730" className="tekup-counter">
                  {isVisible && <CountUp end={730} duration={3} />}
                </span>
                +
              </h2>
              <h4>Successfully Projects Done</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
            <div className="tekup-counter-data light-color">
              <h2>
                <span data-percentage="198" className="tekup-counter">
                  {isVisible && <CountUp end={198} duration={3} />}
                </span>
                +
              </h2>
              <h4>Satisfied Happy Clients</h4>
              <p>To succeed, every software solution be deeply integrated into the</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection




// 'use client';

// import { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import Link from "next/link";

// const HeroSection = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const section = document.getElementById("counter-home-eight");
//             if (section) {
//                 const rect = section.getBoundingClientRect();
//                 const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
//                 setIsVisible(isVisible);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//     return (
//         <div className="tekup-hero-section8 dark-bg">
//             <div className="container">
//                 <div className="tekup-hero-content white-color center large-content">
//                     <h1>The best innovative technology solutions</h1>
//                     <p>We are architects of innovation, trailblazers of technological advancement</p>
//                     <div className="tekup-extra-mt">
//                         <div className="tekup-hero-btn-wrap center">
//                             <Link className="tekup-default-btn" href="">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="tekup-hero-thumb-wrap">
//                     <div className="tekup-hero-thumb-column">
//                         <div className="tekup-hero-thumb-item">
//                             <img src="/images/v8/hero-thumb1.png" alt="" />
//                         </div>
//                         <div className="tekup-hero-thumb-item">
//                             <img src="/images/v8/hero-thumb2.png" alt="" />
//                         </div>

//                     </div>
//                     <div className="tekup-hero-thumb-column">
//                         <div className="tekup-hero-thumb-item">
//                             <img src="/images/v8/hero-thumb3.png" alt="" />
//                         </div>
//                     </div>
//                     <div className="tekup-hero-thumb-column">
//                         <div className="tekup-hero-thumb-item">
//                             <img src="/images/v8/hero-thumb4.png" alt="" />
//                         </div>
//                         <div className="tekup-hero-thumb-item">
//                             <img src="/images/v8/hero-thumb5.png" alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="tekup-hero-counter-section" id="counter-home-eight">
//                     <div id="tekup-counter"></div>
//                     <div className="tekup-counter-wrap">
//                         <div className="tekup-counter-data light-color">
//                             <h2><span data-percentage="26" className="tekup-counter">{isVisible && <CountUp end={26} duration={3} />}</span>+</h2>
//                             <h4>Years of Experience</h4>
//                             <p>To succeed, every software solution be deeply integrated into the</p>
//                         </div>
//                         <div className="tekup-counter-data light-color">
//                             <h2><span data-percentage="730" className="tekup-counter">{isVisible && <CountUp end={730} duration={3} />}</span>+</h2>
//                             <h4>Successfully Projects Done</h4>
//                             <p>To succeed, every software solution be deeply integrated into the</p>
//                         </div>
//                         <div className="tekup-counter-data light-color">
//                             <h2><span data-percentage="198" className="tekup-counter">{isVisible && <CountUp end={198} duration={3} />}</span>+</h2>
//                             <h4>Satisfied Happy Clients</h4>
//                             <p>To succeed, every software solution be deeply integrated into the</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HeroSection;