
import Link from 'next/link';

const ServiceCard  = ({ service, className }) => {
  return (
    <div className={className}>
      <div className="tekup-iconbox-wrap3 bg-white border-all">
        <div className="tekup-iconbox-icon3">
          <img src={service.icon} alt={service.title} />
        </div>
        <div className="tekup-iconbox-data3">
          <Link href="/single-service">
            <h5>{service.title}</h5>
          </Link>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;




// import Link from 'next/link';

// const ServiceCard = ({ service, className }) => {
//   return (
//     <div className={className}>
//       <div className="tekup-iconbox-wrap3 bg-white">
//         <div className="tekup-iconbox-icon3">
//           <img src={service.icon} alt={service.title} />
//         </div>
//         <div className="tekup-iconbox-data3">
//           <Link href="/single-service">
//             <h5>{service.title}</h5>
//           </Link>
//           <p>{service.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;