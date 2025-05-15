
const BrandLogo = ({ logoImage = "/images/logo/spacinfo_logo.svg", className = "light-version-logo" }) => {
    return (
        <img src={logoImage} alt="" className={className} />
    );
};

export default BrandLogo;