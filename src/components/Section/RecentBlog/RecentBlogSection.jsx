"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link"; 
import BlogCard from "~/components/Ui/Cards/BlogCard"; 
import blog from '~/db/blogCard.json'; 

const RecentBlogSection = () => { 
    // Refs for scroll animations
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const buttonRef = useRef(null);
    
    // InView hooks
    const isSectionInView = useInView(sectionRef, { amount: 0.1 });
    const isTitleInView = useInView(titleRef, { amount: 0.5 });
    const isCardsInView = useInView(cardsContainerRef, { amount: 0.2 });
    const isButtonInView = useInView(buttonRef, { amount: 0.8 });
    
    // Animation controls
    const sectionControls = useAnimation();
    const titleControls = useAnimation();
    const cardsControls = useAnimation();
    const buttonControls = useAnimation();
    
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
        
        if (isCardsInView) {
            cardsControls.start("visible");
        } else {
            cardsControls.start("hidden");
        }
        
        if (isButtonInView) {
            buttonControls.start("visible");
        } else {
            buttonControls.start("hidden");
        }
    }, [isSectionInView, isTitleInView, isCardsInView, isButtonInView, sectionControls, titleControls, cardsControls, buttonControls]);
    
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
    
    const cardsContainerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.6
            }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#151515",
            color: "#ffffff",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.98 }
    };
    
    return ( 
        <motion.div 
            ref={sectionRef}
            className="section bg-light1 tekup-section-padding"
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
                        Latest Insights & Tech Articles
                    </motion.h2> 
                </motion.div> 
                
                <motion.div 
                    ref={cardsContainerRef}
                    className="row"
                    initial="hidden"
                    animate={cardsControls}
                    variants={cardsContainerVariants}
                > 
                    { 
                        blog?.map((item, idx) => (
                            <BlogCard key={idx} item={item} index={idx} />
                        ))
                    } 
                </motion.div> 
                
                <motion.div 
                    ref={buttonRef}
                    className="tekup-center-btn"
                    initial="hidden"
                    animate={buttonControls}
                    variants={buttonVariants}
                > 
                    <motion.div
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                    >
                        <Link className="tekup-default-btn" href="blog">
                            View All Posts 
                            <motion.i 
                                className="ri-arrow-right-up-line"
                                initial={{ x: 0, y: 0 }}
                                whileHover={{ x: 3, y: -3 }}
                                transition={{ duration: 0.2 }}
                            ></motion.i>
                        </Link>
                    </motion.div>
                </motion.div> 
            </div> 
        </motion.div> 
    ); 
}; 
 
export default RecentBlogSection;



// import Link from "next/link";
// import BlogCard from "~/components/Ui/Cards/BlogCard";
// import blog from '~/db/blogCard.json'
// const RecentBlogSection = () => {
//     return (
//         <div className="section bg-light1 tekup-section-padding">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Our recent blog & articles</h2>
//                 </div>
//                 <div className="row">
//                     {
//                         blog?.map((item, idx) => <BlogCard key={idx} item={item}></BlogCard>)
//                     }
//                 </div>
//                 <div className="tekup-center-btn">
//                     <Link className="tekup-default-btn" href="blog">View All Posts <i className="ri-arrow-right-up-line"></i></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecentBlogSection;