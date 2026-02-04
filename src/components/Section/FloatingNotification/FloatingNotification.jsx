"use client"
import React, { useState, useEffect } from 'react';
import RegistrationFormDialog from './RegistrationFormDialog';

const FloatingNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show notification after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNotificationClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`floating-notification ${isAnimating ? 'slide-in' : 'slide-out'}`}
        onClick={handleNotificationClick}
      >
        <div className="notification-content">
          <div className="notification-icon">
            <i className="ri-graduation-cap-line"></i>
          </div>
          <div className="notification-text">
            <h6>Join the Next Training Cohort</h6>
            <p>Register now for upcoming programs</p>
          </div>
          <button 
            className="notification-dismiss" 
            onClick={handleDismiss}
            aria-label="Dismiss notification"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="notification-pulse"></div>
      </div>

      <RegistrationFormDialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />

      <style jsx>{`
        .floating-notification {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #6425FE 0%, #8B5CF6 100%);
          color: white;
          padding: 20px 24px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(100, 37, 254, 0.3);
          cursor: pointer;
          z-index: 1000;
          max-width: 350px;
          transition: all 0.3s ease;
          animation: float 3s ease-in-out infinite;
        }

        .floating-notification:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(100, 37, 254, 0.4);
        }

        .floating-notification.slide-in {
          animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite 0.5s;
        }

        .floating-notification.slide-out {
          animation: slideOut 0.3s ease-in;
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }

        .notification-icon {
          background: rgba(255, 255, 255, 0.2);
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .notification-icon i {
          font-size: 24px;
          color: white;
        }

        .notification-text {
          flex: 1;
        }

        .notification-text h6 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 4px 0;
          color: white;
          line-height: 1.2;
        }

        .notification-text p {
          font-size: 13px;
          margin: 0;
          opacity: 0.9;
          color: white;
          line-height: 1.3;
        }

        .notification-dismiss {
          position: absolute;
          top: -8px;
          right: -8px;
          background: white;
          border: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .notification-dismiss:hover {
          background: #f0f0f0;
          transform: rotate(90deg);
        }

        .notification-dismiss i {
          font-size: 14px;
          color: #6425FE;
        }

        .notification-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: rgba(100, 37, 254, 0.4);
          animation: pulse 2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .floating-notification {
            bottom: 20px;
            right: 20px;
            left: 20px;
            max-width: none;
            padding: 16px 20px;
          }

          .notification-text h6 {
            font-size: 14px;
          }

          .notification-text p {
            font-size: 12px;
          }

          .notification-icon {
            width: 40px;
            height: 40px;
          }

          .notification-icon i {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingNotification;



// "use client"
// import React, { useState, useEffect } from 'react';
// import RegistrationFormDialog from './RegistrationFormDialog';

// const FloatingNotification = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     // Show notification after 2 seconds of page load
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//       setIsAnimating(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleNotificationClick = () => {
//     setIsDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//   };

//   const handleDismiss = (e) => {
//     e.stopPropagation();
//     setIsAnimating(false);
//     setTimeout(() => setIsVisible(false), 300);
//   };

//   if (!isVisible) return null;

//   return (
//     <>
//       <div 
//         className={`floating-notification ${isAnimating ? 'slide-in' : 'slide-out'}`}
//         onClick={handleNotificationClick}
//       >
//         <div className="notification-content">
//           <div className="notification-icon">
//             <i className="ri-graduation-cap-line"></i>
//           </div>
//           <div className="notification-text">
//             <h6>Join the Next Training Cohort</h6>
//             <p>Register now for upcoming programs</p>
//           </div>
//           <button 
//             className="notification-dismiss" 
//             onClick={handleDismiss}
//             aria-label="Dismiss notification"
//           >
//             <i className="ri-close-line"></i>
//           </button>
//         </div>
//         <div className="notification-pulse"></div>
//       </div>

//       <RegistrationFormDialog 
//         isOpen={isDialogOpen} 
//         onClose={handleCloseDialog} 
//       />

//       <style jsx>{`
//         .floating-notification {
//           position: fixed;
//           bottom: 30px;
//           right: 30px;
//           background: linear-gradient(135deg, #6425FE 0%, #8B5CF6 100%);
//           color: white;
//           padding: 20px 24px;
//           border-radius: 16px;
//           box-shadow: 0 10px 40px rgba(100, 37, 254, 0.3);
//           cursor: pointer;
//           z-index: 1000;
//           max-width: 350px;
//           transition: all 0.3s ease;
//           animation: float 3s ease-in-out infinite;
//         }

//         .floating-notification:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 50px rgba(100, 37, 254, 0.4);
//         }

//         .floating-notification.slide-in {
//           animation: slideIn 0.5s ease-out, float 3s ease-in-out infinite 0.5s;
//         }

//         .floating-notification.slide-out {
//           animation: slideOut 0.3s ease-in;
//         }

//         .notification-content {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           position: relative;
//         }

//         .notification-icon {
//           background: rgba(255, 255, 255, 0.2);
//           width: 48px;
//           height: 48px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .notification-icon i {
//           font-size: 24px;
//           color: white;
//         }

//         .notification-text {
//           flex: 1;
//         }

//         .notification-text h6 {
//           font-size: 16px;
//           font-weight: 600;
//           margin: 0 0 4px 0;
//           color: white;
//           line-height: 1.2;
//         }

//         .notification-text p {
//           font-size: 13px;
//           margin: 0;
//           opacity: 0.9;
//           color: white;
//           line-height: 1.3;
//         }

//         .notification-dismiss {
//           position: absolute;
//           top: -8px;
//           right: -8px;
//           background: white;
//           border: none;
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//         }

//         .notification-dismiss:hover {
//           background: #f0f0f0;
//           transform: rotate(90deg);
//         }

//         .notification-dismiss i {
//           font-size: 14px;
//           color: #6425FE;
//         }

//         .notification-pulse {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 100%;
//           height: 100%;
//           border-radius: 16px;
//           background: rgba(100, 37, 254, 0.4);
//           animation: pulse 2s ease-out infinite;
//           pointer-events: none;
//         }

//         @keyframes slideIn {
//           from {
//             transform: translateX(400px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideOut {
//           from {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           to {
//             transform: translateX(400px);
//             opacity: 0;
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes pulse {
//           0% {
//             transform: translate(-50%, -50%) scale(1);
//             opacity: 0.6;
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1.2);
//             opacity: 0;
//           }
//         }

//         @media (max-width: 768px) {
//           .floating-notification {
//             bottom: 20px;
//             right: 20px;
//             left: 20px;
//             max-width: none;
//             padding: 16px 20px;
//           }

//           .notification-text h6 {
//             font-size: 14px;
//           }

//           .notification-text p {
//             font-size: 12px;
//           }

//           .notification-icon {
//             width: 40px;
//             height: 40px;
//           }

//           .notification-icon i {
//             font-size: 20px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default FloatingNotification;