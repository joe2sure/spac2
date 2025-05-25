"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSection = () => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        infinite: true,
        swipeToSlide: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="tekup-section-title center">
                    <p>Empowered professionals to connect with top-tier opportunities</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/airbnb.jpg" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/amazon.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/google_1.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/hp_1.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/microsoft_1.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/brand/netflix.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;




// "use client"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export default function TrustedBy() {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const logosRef = useRef(null)

//   const logos = [
//     { name: "Netflix", src: "/images/brand/brand-1.png" },
//     { name: "Airbnb", src: "/images/brand/brand-2.png" },
//     { name: "Amazon", src: "/images/brand/brand-3.png" },
//     { name: "Buffer", src: "/images/brand/brand-4.png" },
//     { name: "Spotify", src: "/images/brand/brand-5.png" },
//     { name: "Alphao", src: "/images/brand/brand-6.png" },
//     { name: "Grammarly", src: "/images/brand/brand-7.png" },
//     { name: "Grill", src: "/images/brand/brand-8.png" },
//     { name: "USA Today", src: "/images/brand/brand-9.png" },
//   ]

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none none",
//       },
//     })

//     tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })

//     gsap.fromTo(
//       ".logo-item",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: logosRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   return (
//     <section ref={sectionRef} className="tekup-brand-section tekup-brand-section-2 tekup-section-padding">
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           <div className="col-lg-8">
//             <div className="tekup-section-title" ref={titleRef}>
//               <h2 className="title">Trusted by Thousands Business</h2>
//               <p>Many top companies trust Softec</p>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={logosRef}>
//           <div className="col-lg-12">
//             <div className="tekup-brand-wrap">
//               {logos.map((logo, index) => (
//                 <div key={index} className="logo-item tekup-brand-item">
//                   <img src={logo.src || "/placeholder.svg"} alt={logo.name} className="img-fluid" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }