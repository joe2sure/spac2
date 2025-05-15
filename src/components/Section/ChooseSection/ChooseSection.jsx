"use client"

import ChoseUs from "./ChooseUs";

// import ChooseUsSection from "../../Common/ChooseUs/ChooseUsSection";
// import ChoseUsTwoSection from "../../Common/ChooseUs/ChoseUsTwoSection";

const ChooseSection = () => {
    return (
        <div className="section tekup-section-padding2">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Why you should choose us?</h2>
                </div>
                <ChoseUs/>
            </div>
        </div>
    );
};

export default ChooseSection;