"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: false, amount: 0.3 });
    const cardControls = useAnimation();
    
    useEffect(() => {
        if (isCardInView) {
            cardControls.start("visible");
        } else {
            cardControls.start("hidden");
        }
    }, [isCardInView, cardControls]);
    
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.7,
                ease: "easeOut", 
                delay: index * 0.1
            }
        }
    };
    
    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0.8 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                duration: 0.5 
            }
        },
        hover: {
            scale: 1.07,
            transition: { duration: 0.4 }
        }
    };
    
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                delay: 0.2 
            }
        }
    };
    
    const categoryVariants = {
        hover: {
            color: "#007bff",
            transition: { duration: 0.2 }
        }
    };
    
    return (
        <motion.div 
            ref={cardRef}
            className="col-xl-4 col-md-6"
            variants={cardVariants}
            initial="hidden"
            animate={cardControls}
        >
            <motion.div 
                className="tekup-blog-wrap bg-white border-0"
                style={{ 
                    height: "100%", 
                    display: "flex", 
                    flexDirection: "column" 
                }}
                whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                }}
            >
                <Link href={item?.link || "single-blog"} style={{ display: "block" }}>
                    <motion.div 
                        className="tekup-blog-thumb"
                        style={{ 
                            height: "220px", 
                            overflow: "hidden",
                            position: "relative" 
                        }}
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <motion.img 
                            src={item?.image} 
                            alt={item?.title}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover",
                                objectPosition: "center" 
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                </Link>
                <motion.div 
                    className="tekup-blog-content"
                    style={{ 
                        flex: 1, 
                        display: "flex", 
                        flexDirection: "column",
                        padding: "25px 20px" 
                    }}
                    variants={contentVariants}
                >
                    <Link href={item?.link || "single-blog"} style={{ display: "block" }}>
                        <motion.h3
                            style={{ 
                                fontSize: "18px", 
                                lineHeight: "1.4", 
                                marginBottom: "15px",
                                height: "50px", 
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical" 
                            }}
                            whileHover={{ 
                                color: "#007bff",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {item?.title}
                        </motion.h3>
                    </Link>
                    <div 
                        className="tekup-blog-meta tekup-blog-meta3"
                        style={{ marginTop: "auto" }}
                    >
                        <ul style={{ display: "flex", flexWrap: "wrap" }}>
                            <motion.li variants={categoryVariants} whileHover="hover">
                                <Link href="">{item?.category}</Link>
                            </motion.li>
                            <li><Link href="">{item?.date}</Link></li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default BlogCard;



// const BlogCard = ({ item }) => {
//     return (
//         <div className="col-xl-4 col-md-6">
//             <div className="tekup-blog-wrap bg-white border-0">
//                 <Link href="single-blog">
//                     <div className="tekup-blog-thumb">
//                         <img src={item?.image} alt="" />
//                     </div>
//                 </Link>
//                 <div className="tekup-blog-content">
//                     <Link href="">
//                         <h3>{item?.title}</h3>
//                     </Link>
//                     <div className="tekup-blog-meta tekup-blog-meta3">
//                         <ul>
//                             <li><Link href="">{item?.category}</Link></li>
//                             <li><Link href="">{item?.date}</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogCard;