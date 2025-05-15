"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import projects from '~/db/recentProjects.json'
import RecentProjectsCardFour from "~/components/Ui/Cards/RecentProjectsCard";
const RecentProjectsSection = () => {
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
        <div className="section tekup-section-padding bg-light1 overflow-hidden">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Explore our recent projects</h2>
                </div>
            </div>
            <Slider {...settings}  >
                {
                    projects?.map((item, idx) => <RecentProjectsCardFour key={idx} item={item}></RecentProjectsCardFour>)
                }
            </Slider>
        </div>
    );
};

export default RecentProjectsSection;