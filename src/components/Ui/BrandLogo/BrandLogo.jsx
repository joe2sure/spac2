const BrandLogo = ({ logoImage = "/images/logo/spac_logo.png", className = "light-version-logo" }) => {
  return <img src={logoImage || "/placeholder.svg"} alt="" className={className} />
}

export default BrandLogo




// const BrandLogo = ({ logoImage = "/images/logo/spacinfo_logo.svg", className = "light-version-logo" }) => {
//     return (
//         <img src={logoImage} alt="" className={className} />
//     );
// };

// export default BrandLogo;