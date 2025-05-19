"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const SuccessRatesSection = () => {
  const successRate1 = 92;
  const successRate2 = 88; // Updated from 82 to 88
  const successRate3 = 95;
  
  // Ref for section to detect when it's in view
  const sectionRef = useRef(null);
  // Changed "once: true" to "once: false" to make animations trigger every time the section comes into view
  const isInView = useInView(sectionRef, { 
    once: false, 
    threshold: 0.2,
    margin: "-100px 0px"  // Starts animation slightly before the section comes into view
  });
  
  // Animation controls
  const controls = useAnimation();
  const imageControls = useAnimation();

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      imageControls.start("visible");
    } else {
      // Reset animations when section is out of view
      controls.start("hidden");
      imageControls.start("hidden");
    }
  }, [isInView, controls, imageControls]);

  // Variants for different animations
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2 
      } 
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { 
        duration: 2.5,  // Increased from 1.2 to 2.5 seconds for slower animation
        ease: "easeInOut",  // Changed to easeInOut for smoother progression
        delay: 0.5  // Slightly increased delay before animation starts
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const thumbCardVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.5,
        ease: "easeOut" 
      }
    }
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.8 
      } 
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="section bg-light1 tekup-section-padding"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div className="tekup-thumb mr-30 position-relative">
              {/* Main thumb image with animation */}
              <motion.img 
                src="/images/v3/thumb2.png" 
                alt="Main Thumb"
                variants={imageVariants}
              />
              
              {/* Right side thumb card with animation */}
              <motion.div 
                className="tekup-thumb-card right"
                variants={thumbCardVariants}
              >
                <img src="/images/v3/project-done.png" alt="Project Done"/>
              </motion.div>
              
              {/* Additional floating thumb images that appear with animation */}
              <motion.div 
                className="tekup-thumb-card" 
                style={{ position: "absolute", top: "-25px", left: "20px", zIndex: 3 }}
                variants={floatingImageVariants}
              >
                <img src="/images/v3/thumb2.png" alt="Floating Thumb 1" style={{ width: "90px", height: "auto", borderRadius: "8px" }}/>
              </motion.div>
              
              <motion.div 
                className="tekup-thumb-card" 
                style={{ position: "absolute", bottom: "40px", left: "-15px", zIndex: 2 }}
                variants={floatingImageVariants}
                initial="hidden"
                animate={imageControls}
                transition={{ delay: 1.0 }}
              >
                <img src="/images/v3/thumb2.png" alt="Floating Thumb 2" style={{ width: "100px", height: "auto", borderRadius: "8px" }}/>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-6 d-flex align-items-center">
            <motion.div 
              className="tekup-default-content ml-60"
              variants={sectionVariants}
            >
              <motion.h2 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                We are increasing business success with technology
              </motion.h2>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
              >
                We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization
              </motion.p>
              
              <motion.div 
                className="tekup-extra-mt"
                variants={sectionVariants}
              >
                {/* Progress Bar 1 */}
                <motion.div 
                  className="skillbar" 
                  data-percent="92"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <motion.p 
                    className="skillbar-lable"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="skill-bar-title">Business Security</span>
                    <motion.span 
                      className="skill-bar-percent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      {successRate1}%
                    </motion.span>
                  </motion.p>
                  
                  <div className="skillbar-box">
                    <motion.p 
                      className="skillbar-bar progressbar-one" 
                      custom={successRate1}
                      variants={progressBarVariants}
                    ></motion.p>
                  </div>
                </motion.div>
                
                {/* Progress Bar 2 */}
                <motion.div 
                  className="skillbar" 
                  data-percent="88"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                  }}
                >
                  <motion.p 
                    className="skillbar-lable"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="skill-bar-title">Career Development</span>
                    <motion.span 
                      className="skill-bar-percent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      {successRate2}%
                    </motion.span>
                  </motion.p>
                  
                  <div className="skillbar-box">
                    <motion.p 
                      className="skillbar-bar progressbar-two" 
                      custom={successRate2}
                      variants={progressBarVariants}
                    ></motion.p>
                  </div>
                </motion.div>
                
                {/* Progress Bar 3 */}
                <motion.div 
                  className="skillbar" 
                  data-percent="95"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
                  }}
                >
                  <motion.p 
                    className="skillbar-lable"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="skill-bar-title">Business Innovation</span>
                    <motion.span 
                      className="skill-bar-percent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      {successRate3}%
                    </motion.span>
                  </motion.p>
                  
                  <div className="skillbar-box">
                    <motion.p 
                      className="skillbar-bar progressbar-three" 
                      custom={successRate3}
                      variants={progressBarVariants}
                    ></motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessRatesSection;



// const SuccessRatesSection = () => {
//     const successRate1 = 86;
//     const successRate2 = 82;
//     const successRate3 = 95;
//     return (
//         <div className="section bg-light1 tekup-section-padding">
//         <div className="container">
//           <div className="row">
//           <div className="col-lg-6">
//               <div className="tekup-thumb mr-30">
//                 <img src="/images/v3/thumb2.png" alt=""/>
//                 <div className="tekup-thumb-card right">
//                   <img src="/images/v3/project-done.png" alt=""/>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 d-flex align-items-center">
//               <div className="tekup-default-content ml-60">
//                 <h2>We are increasing business success with technology</h2>
//                 <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
//                 <div className="tekup-extra-mt">
//                   <div className="skillbar" data-percent="86">
//                     <p className="skillbar-lable">
//                       <span className="skill-bar-title">Business Security</span>
//                       <span className="skill-bar-percent">{successRate1}%</span>
//                     </p>
//                     <div className="skillbar-box">
//                       <p className="skillbar-bar progressbar-one" style={{ width: `${successRate1}%` }}></p>
//                     </div>
//                   </div>
//                   <div className="skillbar" data-percent="72">
//                     <p className="skillbar-lable">
//                       <span className="skill-bar-title">Career Development</span>
//                       <span className="skill-bar-percent">{successRate2}%</span>
//                     </p>
//                     <div className="skillbar-box">
//                       <p className="skillbar-bar  progressbar-two"style={{ width: `${successRate2}%` }}></p>
//                     </div>
//                   </div>
//                   <div className="skillbar" data-percent="95">
//                     <p className="skillbar-lable">
//                       <span className="skill-bar-title">Business Innovation</span>
//                       <span className="skill-bar-percent">{successRate3}%</span>
//                     </p>
//                     <div className="skillbar-box">
//                       <p className="skillbar-bar  progressbar-three"style={{ width: `${successRate3}%` }}></p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     );
// };

// export default SuccessRatesSection;