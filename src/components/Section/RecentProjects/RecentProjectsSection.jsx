"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import RecentProjectsCard from "~/components/Ui/Cards/RecentProjectsCard";

// Updated tech project data
const techProjects = [
  {
    id: 1,
    title: "Enterprise Database Migration",
    category: "Database Administration",
    // image: "/images/portfolio/db-admin.jpg",
    image: "/images/p1/ED_migration_1.jpg",
    description: "Seamless migration of legacy systems to cloud-based database architecture with zero downtime"
  },
  {
    id: 2,
    title: "Azure Cloud Infrastructure",
    category: "Azure System Administration",
    // image: "/images/portfolio/azure-admin.jpg",
    image: "/images/p1/azure_1.jpg",
    description: "Complete enterprise infrastructure deployment using Azure's latest cloud technologies"
  },
  {
    id: 3,
    title: "Predictive Analytics Engine",
    category: "Machine Learning Engineering",
    // image: "/images/portfolio/ml-engineering.jpg",
    image: "/images/p1/pred_ana_engine_2.jpg",
    description: "Custom machine learning algorithm for predictive maintenance in manufacturing sector"
  },
  {
    id: 4,
    title: "Financial Insights Dashboard",
    category: "Data Analysis",
    // image: "/images/portfolio/data-analysis.jpg",
    image: "/images/p1/finance_dash_1.jpg",
    description: "Real-time data visualization platform for financial institutions with predictive capabilities"
  },
  {
    id: 5,
    title: "Enterprise Digital Transformation",
    category: "Project Management",
    // image: "/images/portfolio/project-mgmt.jpg",
    image: "/images/p1/ED_migration_2.jpg",
    description: "End-to-end digital transformation for Fortune 500 company across multiple departments"
  },
  {
    id: 6,
    title: "AI-Powered Customer Service",
    category: "AI Integrated Solutions",
    // image: "/images/portfolio/ai-solutions.jpg",
    image: "/images/p1/ai_powered_2.jpg",
    description: "Natural language processing system that reduced customer service response time by 87%"
  },
  {
    id: 7,
    title: "Zero-Trust Security Framework",
    category: "Cybersecurity",
    // image: "/images/portfolio/cybersecurity.jpg",
    image: "/images/p1/zero-trust_1.jpg",
    description: "Comprehensive security overhaul implementing zero-trust architecture for financial services client"
  }
];

const RecentProjectsSection = () => {
  // Reference for scroll detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    threshold: 0.2,
    margin: "-100px 0px"
  });
  
  // Animation controls
  const controls = useAnimation();
  const sliderControls = useAnimation();
  
  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      sliderControls.start("visible");
    } else {
      controls.start("hidden");
      sliderControls.start("hidden");
    }
  }, [isInView, controls, sliderControls]);
  
  // Animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const sliderVariants = {
    hidden: { 
      opacity: 0,
      x: 100
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };
  
  // Slider settings
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1498,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          initialSlide: 5
        }
      },
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.div 
      ref={sectionRef}
      className="section tekup-section-padding bg-light1 overflow-hidden"
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <motion.div 
          className="tekup-section-title center"
          variants={titleVariants}
        >
          <h2>Explore Our Tech Solutions Portfolio</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 mb-4"
          >
            Transforming businesses with cutting-edge technology and data-driven innovations
          </motion.p>
        </motion.div>
      </div>
      
      <motion.div
        variants={sliderVariants}
        initial="hidden"
        animate={sliderControls}
      >
        <Slider {...settings}>
          {techProjects.map((item, idx) => (
            <RecentProjectsCard 
              key={idx} 
              item={item} 
              index={idx}
              isInView={isInView}
            />
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default RecentProjectsSection;



// "use client"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Link from "next/link";
// import projects from '~/db/recentProjects.json'
// import RecentProjectsCard from "~/components/Ui/Cards/RecentProjectsCard";
// const RecentProjectsSection = () => {
//     const settings = {
//         arrows: false,
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3.8,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1498,
//                 settings: {
//                     slidesToShow: 2.8,
//                     slidesToScroll: 1,
//                     initialSlide: 5
//                 }
//             },
//             {
//                 breakpoint: 1198,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 1.4,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="section tekup-section-padding bg-light1 overflow-hidden">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Explore our recent projects</h2>
//                 </div>
//             </div>
//             <Slider {...settings}  >
//                 {
//                     projects?.map((item, idx) => <RecentProjectsCard key={idx} item={item}></RecentProjectsCard>)
//                 }
//             </Slider>
//         </div>
//     );
// };

// export default RecentProjectsSection;