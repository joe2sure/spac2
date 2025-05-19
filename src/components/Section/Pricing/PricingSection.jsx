"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const PricingSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [inView, setInView] = useState(false);

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: i => ({ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                delay: i * 0.3 + 0.5,
                duration: 0.4,
                ease: "easeOut"
            }
        }),
        hover: { scale: 1.02, color: "#0070f3" }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05,
            backgroundColor: "#0070f3",
            color: "#ffffff",
            transition: { duration: 0.2 }
        }
    };

    const pricingData = [
        {
            id: 1,
            title: "Essential Tech",
            description: "Perfect for small businesses beginning their digital transformation journey.",
            price: "$499",
            features: [
                "Basic database administration",
                "Standard Azure cloud setup",
                "Entry-level data analysis",
                "Foundational cybersecurity measures",
                "24/7 technical support"
            ],
            isPopular: false
        },
        {
            id: 2,
            title: "Advanced Solutions",
            description: "Comprehensive tech services for growing businesses with complex needs.",
            price: "$999",
            features: [
                "Advanced database optimization",
                "Complete Azure system administration",
                "ML model development & training",
                "Enhanced data visualization & analysis",
                "Project management integration"
            ],
            isPopular: true
        },
        {
            id: 3,
            title: "Enterprise Suite",
            description: "Full-scale technological solutions for large organizations with enterprise requirements.",
            price: "$2499",
            features: [
                "Enterprise database architecture",
                "Custom AI integrated solutions",
                "Advanced machine learning engineering",
                "Comprehensive cybersecurity protection",
                "Dedicated project management team"
            ],
            isPopular: false
        }
    ];

    return (
        <motion.div 
            className="section tekup-section-padding2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onViewportEnter={() => setInView(true)}
        >
            <div className="container">
                <motion.div 
                    className="tekup-section-title center"
                    variants={titleVariants}
                >
                    <h2>Flexible Technology Solutions</h2>
                    <p>Tailored packages to accelerate your technical capabilities</p>
                </motion.div>
                <div className="row">
                    {pricingData.map((plan, index) => (
                        <div className="col-xl-4 col-md-6" key={plan.id}>
                            <motion.div 
                                className={`tekup-pricing-wrap all-border ${plan.isPopular ? 'popular' : ''}`}
                                variants={cardVariants}
                                onHoverStart={() => setHoveredCard(plan.id)}
                                onHoverEnd={() => setHoveredCard(null)}
                                whileHover="hover"
                                custom={index}
                                style={{
                                    height: "100%", 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    justifyContent: "space-between"
                                }}
                            >
                                <div>
                                    <div className="tekup-pricing-header">
                                        <h4>{plan.title}</h4>
                                        <p>{plan.description}</p>
                                    </div>
                                    <motion.div 
                                        className="tekup-pricing-price mb-0"
                                        animate={hoveredCard === plan.id ? { scale: 1.1 } : { scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2>{plan.price}<span>/month</span></h2>
                                    </motion.div>
                                    <div className="tekup-pricing-feature extra-mt">
                                        <ul>
                                            {plan.features.map((feature, i) => (
                                                <motion.li 
                                                    key={i}
                                                    variants={listItemVariants}
                                                    initial="hidden"
                                                    animate={inView ? "visible" : "hidden"}
                                                    custom={i}
                                                    whileHover="hover"
                                                >
                                                    <motion.i 
                                                        className="ri-check-line"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                                        transition={{ delay: 0.2 + i * 0.3 }}
                                                    ></motion.i>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <motion.div variants={buttonVariants} whileHover="hover" style={{ marginTop: "auto" }}>
                                    <Link 
                                        className={`tekup-pricing-btn ${plan.isPopular ? 'active' : ''}`} 
                                        href="pricing"
                                    >
                                        Select This Package <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default PricingSection;



// import Link from "next/link";

// const PricingSection = () => {
//     return (
//         <div className="section tekup-section-padding2">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Effective & flexible pricing</h2>
//                 </div>
//                 <div className="row">
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap all-border">
//                             <div className="tekup-pricing-header">
//                                 <h4>Startup</h4>
//                                 <p>Best for Startup business owners who needs website for business.</p>
//                             </div>
//                             <div className="tekup-pricing-price mb-0">
//                                 <h2>$99<span>/month</span></h2>
//                             </div>
//                             <div className="tekup-pricing-feature extra-mt">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>10 GB disk space availability</li>
//                                     <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
//                                     <li><i className="ri-check-line"></i>Free platform access for all</li>
//                                     <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
//                                     <li><i className="ri-check-line"></i>Free one year support</li>
//                                 </ul>
//                             </div>
//                             <Link className="tekup-pricing-btn" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap all-border">
//                             <div className="tekup-pricing-header">
//                                 <h4>Business</h4>
//                                 <p>Best for Startup business owners who needs website for business.</p>
//                             </div>
//                             <div className="tekup-pricing-price mb-0">
//                                 <h2>$299<span>/month</span></h2>
//                             </div>
//                             <div className="tekup-pricing-feature extra-mt">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>10 GB disk space availability</li>
//                                     <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
//                                     <li><i className="ri-check-line"></i>Free platform access for all</li>
//                                     <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
//                                     <li><i className="ri-check-line"></i>Free one year support</li>
//                                 </ul>
//                             </div>
//                             <Link className="tekup-pricing-btn active" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap all-border">
//                             <div className="tekup-pricing-header">
//                                 <h4>Enterprise</h4>
//                                 <p>Best for Startup business owners who needs website for business.</p>
//                             </div>
//                             <div className="tekup-pricing-price mb-0">
//                                 <h2>$779<span>/month</span></h2>
//                             </div>
//                             <div className="tekup-pricing-feature extra-mt">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>10 GB disk space availability</li>
//                                     <li><i className="ri-check-line"></i>50 GB NVMe SSD for use</li>
//                                     <li><i className="ri-check-line"></i>Free platform access for all</li>
//                                     <li><i className="ri-check-line"></i>Free lifetime updates facility</li>
//                                     <li><i className="ri-check-line"></i>Free one year support</li>
//                                 </ul>
//                             </div>
//                             <Link className="tekup-pricing-btn" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PricingSection;