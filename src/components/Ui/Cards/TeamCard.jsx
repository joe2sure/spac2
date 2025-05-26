import Link from "next/link";

const TeamCard = ({item}) => {
    return (
        <div className="tekup-team-wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="tekup-team-thumb" style={{ flexShrink: 0 }}>
                <img 
                    src={item?.image} 
                    alt={item?.name || "Team member"} 
                    style={{ 
                        width: '100%', 
                        height: '250px', 
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} 
                />
                <div className="tekup-social-icon-box style-four position">
                    <ul>
                        <li>
                            <Link href="https://www.linkedin.com/">
                                <i className="ri-linkedin-fill"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/">
                                <i className="ri-twitter-fill"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/">
                                <i className="ri-instagram-fill"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div 
                className="tekup-team-data tekup-team-data2" 
                style={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '80px',
                    padding: '15px'
                }}
            >
                <Link href="single-team">
                    <h5 style={{ 
                        margin: '0 0 8px 0',
                        fontSize: '16px',
                        lineHeight: '1.3',
                        height: '42px',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {item?.name}
                    </h5>
                </Link>
                <p style={{ 
                    margin: '0',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    height: '40px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    color: '#666'
                }}>
                    {item?.position}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;



// import Link from "next/link";

// const TeamCard = ({item}) => {
//     return (
//         <div className="tekup-team-wrap">
//             <div className="tekup-team-thumb">
//                 <img src={item?.image} alt="" />
//                 <div className="tekup-social-icon-box style-four position">
//                     <ul>
//                         <li>
//                             <Link href="https://www.linkedin.com/">
//                                 <i className="ri-linkedin-fill"></i>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="https://twitter.com/">
//                                 <i className="ri-twitter-fill"></i>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link href="https://www.instagram.com/">
//                                 <i className="ri-instagram-fill"></i>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="tekup-team-data tekup-team-data2">
//                 <Link href="single-team">
//                     <h5>{item?.name}</h5>
//                 </Link>
//                 <p>{item?.position}</p>
//             </div>
//         </div>
//     );
// };

// export default TeamCard;