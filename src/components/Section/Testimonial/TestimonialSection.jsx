"use client" 
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick"; 

const TestimonialSection = () => { 
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  
  // InView hooks to detect when elements enter viewport
  const isSectionInView = useInView(sectionRef, { amount: 0.2 });
  const isTitleInView = useInView(titleRef, { amount: 0.2 });
  const isSliderInView = useInView(sliderRef, { amount: 0.2 });
  
  // Animation controls
  const sectionControls = useAnimation();
  const titleControls = useAnimation();
  const sliderControls = useAnimation();
  
  // Handle scroll animations
  useEffect(() => {
    if (isSectionInView) {
      sectionControls.start("visible");
    } else {
      sectionControls.start("hidden");
    }
    
    if (isTitleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
    
    if (isSliderInView) {
      sliderControls.start("visible");
    } else {
      sliderControls.start("hidden");
    }
  }, [isSectionInView, isTitleInView, isSliderInView, sectionControls, titleControls, sliderControls]);
  
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const sliderVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };
  
  // Star rating animation variants
  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const starVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: [0.5, 1.2, 1],
      transition: { duration: 0.5 }
    }
  };
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };
  
  // Author animation variants
  const authorVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };
  
  const authorItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  // Custom slider settings
  const settings = { 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
    beforeChange: () => {
      // Reset animations for next slide
      sliderControls.start("hidden");
      setTimeout(() => {
        sliderControls.start("visible");
      }, 100);
    }
  }; 
  
  // Custom testimonial component with animations
  const AnimatedTestimonial = ({ stars, text, authorImg, authorName, authorTitle }) => (
    <motion.div 
      className="tekup-testimonial-data"
      initial="hidden"
      animate="visible"
      variants={sliderVariants}
    >
      <motion.div 
        className="tekup-testimonial-rating"
        variants={starContainerVariants}
      >
        <ul>
          {[...Array(stars || 5)].map((_, index) => (
            <motion.li key={index} variants={starVariants}>
              <i className="ri-star-s-fill"></i>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <motion.p 
        variants={textVariants}
        whileHover={{ scale: 1.01 }}
      >
        {text}
      </motion.p>
      
      <motion.div 
        className="tekup-testimonial-author"
        variants={authorVariants}
      >
        <motion.img 
          src={authorImg} 
          alt={authorName}
          variants={imageVariants}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        />
        <motion.h5 variants={authorItemVariants}>{authorName}</motion.h5>
        <motion.span variants={authorItemVariants}>{authorTitle}</motion.span>
      </motion.div>
    </motion.div>
  );
  
  return ( 
    <motion.div 
      ref={sectionRef}
      className="section bg-light1 tekup-section-padding overflow-hidden"
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
    > 
      <div className="container"> 
        <motion.div 
          ref={titleRef}
          className="tekup-section-title center"
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        > 
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Trusted by many client's around the world
          </motion.h2> 
        </motion.div> 
        
        <motion.div
          ref={sliderRef}
          initial="hidden"
          animate={sliderControls}
          variants={sliderVariants}
          whileHover={{ 
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.05)",
            transition: { duration: 0.5 }
          }}
        >
          <Slider {...settings} className="tekup-testimonial-slider"> 
            {/* Testimonial 1 */}
            <AnimatedTestimonial 
              stars={5}
              text=" If you're looking for a rewarding career and a chance to make an impact, you've come to the right place We will transform your business through our techniques! "
              authorImg="/images/team/team1.png"
              authorName="Alexander Cameron"
              authorTitle="Lead Developer"
            />
            
            {/* Testimonial 2 */}
            <AnimatedTestimonial 
              stars={5}
              text=" If you're looking for a rewarding career and a chance to make an impact, you've come to the right place We will transform your business through our techniques! "
              authorImg="/images/team/team1.png"
              authorName="Alexander Cameron"
              authorTitle="Lead Developer"
            />
          </Slider> 
        </motion.div>
      </div> 
    </motion.div> 
  ); 
}; 
 
export default TestimonialSection;



// "use client"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const TestimonialSection = () => {
//   const settings = {

//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,

//   };
//   return (
//     <div className="section bg-light1 tekup-section-padding overflow-hidden">
//       <div className="container">
//         <div className="tekup-section-title center">
//           <h2>Trusted by more than 200+ client’s around the world</h2>
//         </div>
//         <Slider {...settings} className="tekup-testimonial-slider">
//           <div className="tekup-testimonial-data">
//             <div className="tekup-testimonial-rating">
//               <ul>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//               </ul>
//             </div>
//             <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place We will transform your business through our techniques! ”</p>
//             <div className="tekup-testimonial-author">
//               <img src="/images/team/team1.png" alt="" />
//               <h5>Alexander Cameron</h5>
//               <span>Lead Developer</span>
//             </div>
//           </div>
//           <div className="tekup-testimonial-data">
//             <div className="tekup-testimonial-rating">
//               <ul>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//                 <li><i className="ri-star-s-fill"></i></li>
//               </ul>
//             </div>
//             <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place We will transform your business through our techniques! ”</p>
//             <div className="tekup-testimonial-author">
//               <img src="/images/team/team1.png" alt="" />
//               <h5>Alexander Cameron</h5>
//               <span>Lead Developer</span>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;