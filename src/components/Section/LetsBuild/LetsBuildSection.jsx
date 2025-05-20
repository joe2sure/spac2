"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const LetsBuildSection = () => {
    // Refs for scroll animations
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const mapRef = useRef(null);
    
    // InView hooks with amount: 0.2 threshold and no "once" option to allow repeated animations
    const isInView = useInView(sectionRef, { amount: 0.2 });
    const isFormInView = useInView(formRef, { amount: 0.2 });
    const isMapInView = useInView(mapRef, { amount: 0.2 });
    
    // Animation controllers
    const titleControls = useAnimation();
    const formControls = useAnimation();
    const mapControls = useAnimation();
    
    // Form field animation staggering
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    // Handle scroll animations
    useEffect(() => {
        if (isInView) {
            titleControls.start('visible');
        } else {
            titleControls.start('hidden');
        }
        
        if (isFormInView) {
            formControls.start('visible');
            setIsFormVisible(true);
        } else {
            formControls.start('hidden');
            setIsFormVisible(false);
        }
        
        if (isMapInView) {
            mapControls.start('visible');
        } else {
            mapControls.start('hidden');
        }
    }, [isInView, isFormInView, isMapInView, titleControls, formControls, mapControls]);
    
    // Variants for animations
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            }
        }
    };
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    
    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const mapVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.8, 
                ease: "easeOut"
            }
        }
    };
    
    // Button hover animation
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            backgroundColor: "#151515", 
            color: "#ffffff",
            transition: { 
                duration: 0.3, 
                ease: "easeInOut" 
            }
        },
        tap: { scale: 0.98 }
    };

    // Input focus animation (to be applied with useState)
    const [focusedInput, setFocusedInput] = useState(null);
    
    const handleInputFocus = (inputId) => {
        setFocusedInput(inputId);
    };
    
    const handleInputBlur = () => {
        setFocusedInput(null);
    };

    return (
        <motion.div 
            ref={sectionRef}
            className="tekup-portfolio-section bg-light1 tekup-section-padding-top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <motion.div 
                    className="tekup-section-title center light-color"
                    initial="hidden"
                    animate={titleControls}
                    variants={titleVariants}
                >
                    <motion.h2
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        Let's build an awesome project together
                    </motion.h2>
                </motion.div>
                
                <motion.div 
                    className="tekup-map-form-wrap bg-white"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.3
                    }}
                    whileHover={{ 
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)", 
                        transition: { duration: 0.5 } 
                    }}
                >
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <motion.div 
                                ref={formRef}
                                className="tekup-main-form border-0"
                                initial="hidden"
                                animate={formControls}
                                variants={containerVariants}
                            >
                                <motion.h3 variants={formItemVariants}>Fill The Contact Form</motion.h3>
                                <motion.p variants={formItemVariants}>Feel free to contact with us, we don't spam your email</motion.p>
                                
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <motion.div 
                                                className="tekup-main-field"
                                                variants={formItemVariants}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <motion.input 
                                                    type="text" 
                                                    placeholder="Your name"
                                                    animate={
                                                        focusedInput === 'name' 
                                                            ? { boxShadow: "0 0 0 2px rgba(0,123,255,0.25)" } 
                                                            : { boxShadow: "none" }
                                                    }
                                                    onFocus={() => handleInputFocus('name')}
                                                    onBlur={handleInputBlur}
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-6">
                                            <motion.div 
                                                className="tekup-main-field"
                                                variants={formItemVariants}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <motion.input 
                                                    type="number" 
                                                    placeholder="Phone number"
                                                    animate={
                                                        focusedInput === 'phone' 
                                                            ? { boxShadow: "0 0 0 2px rgba(0,123,255,0.25)" } 
                                                            : { boxShadow: "none" }
                                                    }
                                                    onFocus={() => handleInputFocus('phone')}
                                                    onBlur={handleInputBlur}
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-12">
                                            <motion.div 
                                                className="tekup-main-field"
                                                variants={formItemVariants}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <motion.input 
                                                    type="email" 
                                                    placeholder="Email address"
                                                    animate={
                                                        focusedInput === 'email' 
                                                            ? { boxShadow: "0 0 0 2px rgba(0,123,255,0.25)" } 
                                                            : { boxShadow: "none" }
                                                    }
                                                    onFocus={() => handleInputFocus('email')}
                                                    onBlur={handleInputBlur}
                                                />
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-12">
                                            <motion.div 
                                                className="tekup-main-field"
                                                variants={formItemVariants}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <motion.textarea 
                                                    name="textarea" 
                                                    placeholder="Write your message"
                                                    animate={
                                                        focusedInput === 'message' 
                                                            ? { boxShadow: "0 0 0 2px rgba(0,123,255,0.25)" } 
                                                            : { boxShadow: "none" }
                                                    }
                                                    onFocus={() => handleInputFocus('message')}
                                                    onBlur={handleInputBlur}
                                                ></motion.textarea>
                                            </motion.div>
                                        </div>
                                        <div className="col-lg-12">
                                            <motion.button 
                                                id="tekup-main-form-btn" 
                                                type="button"
                                                variants={buttonVariants}
                                                initial="initial"
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
                                                <motion.span 
                                                    initial={{ display: "inline-flex" }}
                                                    animate={{ gap: "8px" }}
                                                >
                                                    Send Message 
                                                    <motion.i 
                                                        className="ri-arrow-right-up-line"
                                                        initial={{ x: 0 }}
                                                        whileHover={{ x: 3, y: -3 }}
                                                    ></motion.i>
                                                </motion.span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                        <div className="col-lg-5">
                            <motion.div 
                                ref={mapRef}
                                className="tekup-map-one"
                                initial="hidden"
                                animate={mapControls}
                                variants={mapVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 } 
                                }}
                            >
                                <div id="map"> 
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48438.11972650402!2d-2.1621312!3d52.5869731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709b1888a4a10f%3A0x6f5cb885cc3db6f0!2sWolverhampton!5e0!3m2!1sen!2suk!4v1716222220000!5m2!1sen!2suk"
                                        width="100%" 
                                        height="100%" 
                                        className="" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LetsBuildSection;





// const LetsBuildSection = () => {
//     return (
//         <div className="tekup-portfolio-section bg-light1 tekup-section-padding-top">
//             <div className="container">
//                 <div className="tekup-section-title center light-color">
//                     <h2>Let’s build an awesome project together</h2>
//                 </div>
//                 <div className="tekup-map-form-wrap bg-white">
//                     <div className="row">
//                         <div className="col-lg-7 d-flex align-items-center">
//                             <div className="tekup-main-form border-0">
//                                 <h3>Fill The Contact Form</h3>
//                                 <p>Feel free to contact with us, we don’t spam your email</p>
//                                 <form action="#">
//                                     <div className="row">
//                                         <div className="col-lg-6">
//                                             <div className="tekup-main-field">
//                                                 <input type="text" placeholder="Your name" />
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-6">
//                                             <div className="tekup-main-field">
//                                                 <input type="number" placeholder="Phone number" />
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <div className="tekup-main-field">
//                                                 <input type="email" placeholder="Email address" />
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <div className="tekup-main-field">
//                                                 <textarea name="textarea" placeholder="Write your message"></textarea>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-12">
//                                             <button id="tekup-main-form-btn" type="button">Send Message <i className="ri-arrow-right-up-line"></i></button>
//                                         </div>
//                                     </div>

//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-lg-5">
//                             <div className="tekup-map-one">
//                                 <div id="map"> <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
//             width="100%" height="100%" className="" allowfullscreen></iframe></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LetsBuildSection;