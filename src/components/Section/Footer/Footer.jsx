"use client";
import Link from 'next/link';
import styled from 'styled-components';

// Create styled components for the footer
const FooterSection = styled.footer`
    position: relative;
    z-index: 5; /* Lower z-index than CallToAction */
    
    /* Create a curved top edge effect */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 80px; /* Height of the curve */
        background-color: inherit; /* Match footer background */
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        z-index: -1;
    }
`;

export default function Footer() {
    return (
        <FooterSection className="tekup-footer-section dark-bg">
            <div className="container">
                <div className="tekup-infobox-wrap extra-padding">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <Link href="tel:123">
                                <div className="tekup-infobox-item">
                                    <div className="tekup-infobox-icon">
                                        <i className="ri-phone-fill" />
                                    </div>
                                    <div className="tekup-infobox-data">
                                        <p>Call anytime</p>
                                        <h5>07482187549</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <Link href="mailto:name@email.com">
                                <div className="tekup-infobox-item">
                                    <div className="tekup-infobox-icon">
                                        <i className="ri-mail-fill" />
                                    </div>
                                    <div className="tekup-infobox-data">
                                        <p>Email address</p>
                                        <h5>info@spacinfotech.co.uk</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="tekup-infobox-item">
                                <div className="tekup-infobox-icon">
                                    <i className="ri-time-fill" />
                                </div>
                                <div className="tekup-infobox-data">
                                    <p>Office Hours</p>
                                    <h5>8:00 AM – 4:00 PM</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tekup-footer-top tekup-section-padding-bottom">
                    <div className="row">
                        <div className="col-xl-4 offset-xl-1 col-lg-4 order-lg-4">
                            <div className="tekup-footer-title light-color light-color">
                                <h5>Subscribe Our Newsletter</h5>
                                <p>Get ready to work together for the better solution for your business</p>
                            </div>
                            <div className="tekup-subscription">
                                <form action="#">
                                    <input type="email" placeholder="Enter your email" />
                                    <button id="tekup-subscription-btn" type="button">
                                        <i className="ri-send-plane-fill" />
                                    </button>
                                </form>
                            </div>
                            <div className="tekup-social-icon m_bottom">
                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/">
                                            <i className="ri-facebook-fill" />
                                        </Link>
                                    </li><li>
                                        <Link href="https://www.linkedin.com/">
                                            <i className="ri-linkedin-fill" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/">
                                            <i className="ri-twitter-fill" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/">
                                            <i className="ri-instagram-fill" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="tekup-footer-menu light-color">
                                <div className="tekup-footer-title light-color">
                                    <h5>Quick Links</h5>
                                </div>
                                <ul>
                                    <li><Link href="about-us">About Us</Link></li>
                                    <li><Link href="team">Our Team</Link></li>
                                    <li><Link href="pricing">Pricing</Link></li>
                                    <li><Link href="blog">Blogs</Link></li>
                                    <li><Link href="contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="tekup-footer-menu light-color extar-margin">
                                <div className="tekup-footer-title light-color">
                                    <h5>Services</h5>
                                </div>
                                <ul>
                                    <li><Link href="#">Database Administration</Link></li>
                                    <li><Link href="#">Azure System Administration</Link></li>
                                    <li><Link href="#">Machine Learning Engineering</Link></li>
                                    <li><Link href="#">Data Analysis</Link></li>
                                    <li><Link href="#">Cyber Security</Link></li>
                                    <li><Link href="#">AI Integrated Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="tekup-footer-menu light-color mb-0">
                                <div className="tekup-footer-title light-color">
                                    <h5>Information</h5>
                                </div>
                                <ul>
                                    <li><Link href="#">Working Process</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    <li><Link href="faq">Faqs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tekup-footer-bottom center">
                    <div className="tekup-copywright light-color right">
                        <p> © 2024 Spacinfotech. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </FooterSection>
    )
}


// "use client";
// import Link from 'next/link';

// export default function Footer() {
//     return (
//         <>
//             <footer className="tekup-footer-section dark-bg">
//                 <div className="container">
//                     <div className="tekup-infobox-wrap extra-padding">
//                         <div className="row">
//                             <div className="col-xl-4 col-md-6">
//                                 <Link href="tel:123">
//                                     <div className="tekup-infobox-item">
//                                         <div className="tekup-infobox-icon">
//                                             <i className="ri-phone-fill" />
//                                         </div>
//                                         <div className="tekup-infobox-data">
//                                             <p>Call anytime</p>
//                                             <h5>07482187549</h5>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                             <div className="col-xl-4 col-md-6">
//                                 <Link href="mailto:name@email.com">
//                                     <div className="tekup-infobox-item">
//                                         <div className="tekup-infobox-icon">
//                                             <i className="ri-mail-fill" />
//                                         </div>
//                                         <div className="tekup-infobox-data">
//                                             <p>Email address</p>
//                                             <h5>info@spacinfotech.co.uk</h5>
//                                         </div>
//                                     </div>
//                                 </Link>
//                             </div>
//                             <div className="col-xl-4 col-md-6">
//                                 <div className="tekup-infobox-item">
//                                     <div className="tekup-infobox-icon">
//                                         <i className="ri-time-fill" />
//                                     </div>
//                                     <div className="tekup-infobox-data">
//                                         <p>Office Hours</p>
//                                         <h5>8:00 AM – 4:00 PM</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="tekup-footer-top tekup-section-padding-bottom">
//                         <div className="row">
//                             <div className="col-xl-4 offset-xl-1 col-lg-4 order-lg-4">
//                                 <div className="tekup-footer-title light-color light-color">
//                                     <h5>Subscribe Our Newsletter</h5>
//                                     <p>Get ready to work together for the better solution for your business</p>
//                                 </div>
//                                 <div className="tekup-subscription">
//                                     <form action="#">
//                                         <input type="email" placeholder="Enter your email" />
//                                         <button id="tekup-subscription-btn" type="button">
//                                             <i className="ri-send-plane-fill" />
//                                         </button>
//                                     </form>
//                                 </div>
//                                 <div className="tekup-social-icon m_bottom">
//                                     <ul>
//                                         <li>
//                                             <Link href="https://www.facebook.com/">
//                                                 <i className="ri-facebook-fill" />
//                                             </Link>
//                                         </li><li>
//                                             <Link href="https://www.linkedin.com/">
//                                                 <i className="ri-linkedin-fill" />
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="https://twitter.com/">
//                                                 <i className="ri-twitter-fill" />
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="https://www.instagram.com/">
//                                                 <i className="ri-instagram-fill" />
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-xl-2 col-lg-2 col-md-4">
//                                 <div className="tekup-footer-menu light-color">
//                                     <div className="tekup-footer-title light-color">
//                                         <h5>Quick Links</h5>
//                                     </div>
//                                     <ul>
//                                         <li><Link href="about-us">About Us</Link></li>
//                                         <li><Link href="team">Our Team</Link></li>
//                                         <li><Link href="pricing">Pricing</Link></li>
//                                         <li><Link href="blog">Blogs</Link></li>
//                                         <li><Link href="contact-us">Contact Us</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-xl-3 col-lg-3 col-md-4">
//                                 <div className="tekup-footer-menu light-color extar-margin">
//                                     <div className="tekup-footer-title light-color">
//                                         <h5>Services</h5>
//                                     </div>
//                                     <ul>
//                                         <li><Link href="#">Database Administration</Link></li>
//                                         <li><Link href="#">Azure System Administration</Link></li>
//                                         <li><Link href="#">Machine Learning Engineering</Link></li>
//                                         <li><Link href="#">Data Analysis</Link></li>
//                                         <li><Link href="#">Cyber Security</Link></li>
//                                         <li><Link href="#">AI Integrated Solutions</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-xl-2 col-lg-3 col-md-4">
//                                 <div className="tekup-footer-menu light-color mb-0">
//                                     <div className="tekup-footer-title light-color">
//                                         <h5>Information</h5>
//                                     </div>
//                                     <ul>
//                                         <li><Link href="#">Working Process</Link></li>
//                                         <li><Link href="#">Privacy Policy</Link></li>
//                                         <li><Link href="#">Terms &amp; Conditions</Link></li>
//                                         <li><Link href="faq">Faqs</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="tekup-footer-bottom center">
//                         <div className="tekup-copywright light-color right">
//                             <p> © 2024 Spacinfotech. All rights reserved.</p>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             </>
//     )
// }