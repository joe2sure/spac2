"use client"
import React, { useState } from 'react';

const RegistrationFormDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    homeAddress: '',
    phoneNumber: '',
    courseOfStudy: '',
    fieldOfExpertise: '',
    daysAvailable: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  // CONFIGURE YOUR EXPRESS SERVER URL HERE
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDayToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      daysAvailable: prev.daysAvailable.includes(day)
        ? prev.daysAvailable.filter(d => d !== day)
        : [...prev.daysAvailable, day]
    }));
    if (errors.daysAvailable) {
      setErrors(prev => ({ ...prev, daysAvailable: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.homeAddress.trim()) {
      newErrors.homeAddress = 'Home address is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    if (!formData.courseOfStudy.trim()) {
      newErrors.courseOfStudy = 'Course of study is required';
    }

    if (!formData.fieldOfExpertise.trim()) {
      newErrors.fieldOfExpertise = 'Field of expertise is required';
    }

    if (formData.daysAvailable.length === 0) {
      newErrors.daysAvailable = 'Please select at least one day';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to Express server
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          homeAddress: '',
          phoneNumber: '',
          courseOfStudy: '',
          fieldOfExpertise: '',
          daysAvailable: []
        });
        
        // Close dialog after 3 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
        console.error('Registration failed:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="dialog-overlay" onClick={onClose}>
        <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
          <div className="dialog-header">
            <h2>Registration Form</h2>
            <p>Join the Next Training Cohort</p>
            <button className="dialog-close" onClick={onClose} aria-label="Close dialog">
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="dialog-body">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="homeAddress">
                  Home Address <span className="required">*</span>
                </label>
                <textarea
                  id="homeAddress"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleChange}
                  className={errors.homeAddress ? 'error' : ''}
                  placeholder="Enter your full address"
                  rows="3"
                />
                {errors.homeAddress && <span className="error-text">{errors.homeAddress}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={errors.phoneNumber ? 'error' : ''}
                  placeholder="+44 123 456 7890"
                />
                {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="courseOfStudy">
                  Course of Study <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="courseOfStudy"
                  name="courseOfStudy"
                  value={formData.courseOfStudy}
                  onChange={handleChange}
                  className={errors.courseOfStudy ? 'error' : ''}
                  placeholder="e.g., Full Stack Development, Data Science"
                />
                {errors.courseOfStudy && <span className="error-text">{errors.courseOfStudy}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="fieldOfExpertise">
                  Field of Expertise <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fieldOfExpertise"
                  name="fieldOfExpertise"
                  value={formData.fieldOfExpertise}
                  onChange={handleChange}
                  className={errors.fieldOfExpertise ? 'error' : ''}
                  placeholder="e.g., Frontend Development, Machine Learning"
                />
                {errors.fieldOfExpertise && <span className="error-text">{errors.fieldOfExpertise}</span>}
              </div>

              <div className="form-group">
                <label>
                  Days Available in the Week <span className="required">*</span>
                </label>
                <div className="days-grid">
                  {daysOfWeek.map((day) => (
                    <label key={day} className="day-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.daysAvailable.includes(day)}
                        onChange={() => handleDayToggle(day)}
                      />
                      <span className="day-label">{day}</span>
                    </label>
                  ))}
                </div>
                {errors.daysAvailable && <span className="error-text">{errors.daysAvailable}</span>}
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <i className="ri-checkbox-circle-line"></i>
                  Registration successful! Check your email for confirmation.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <i className="ri-error-warning-line"></i>
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line spinning"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <i className="ri-arrow-right-line"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.3s ease;
        }

        .dialog-container {
          background: white;
          border-radius: 20px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease;
        }

        .dialog-header {
          background: linear-gradient(135deg, #6425FE 0%, #8B5CF6 100%);
          padding: 30px;
          color: white;
          position: relative;
        }

        .dialog-header h2 {
          font-size: 28px;
          margin: 0 0 8px 0;
          color: white;
          font-weight: 600;
        }

        .dialog-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 16px;
          color: white;
        }

        .dialog-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;
        }

        .dialog-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .dialog-close i {
          font-size: 20px;
        }

        .dialog-body {
          padding: 30px;
          overflow-y: auto;
          max-height: calc(90vh - 120px);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #0d0e1d;
          font-size: 15px;
        }

        .required {
          color: #e74c3c;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6425FE;
          box-shadow: 0 0 0 3px rgba(100, 37, 254, 0.1);
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #e74c3c;
        }

        .error-text {
          display: block;
          color: #e74c3c;
          font-size: 13px;
          margin-top: 6px;
        }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .day-checkbox {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .day-checkbox input[type="checkbox"] {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          cursor: pointer;
          accent-color: #6425FE;
        }

        .day-label {
          font-size: 14px;
          color: #0d0e1d;
        }

        .alert {
          padding: 16px 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
        }

        .alert i {
          font-size: 20px;
        }

        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }

        .btn-primary,
        .btn-secondary {
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
        }

        .btn-primary {
          background: #6425FE;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #5219d4;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(100, 37, 254, 0.3);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #f5f5f5;
          color: #0d0e1d;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #e0e0e0;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .dialog-container {
            max-width: 100%;
            border-radius: 12px;
          }

          .dialog-header {
            padding: 24px 20px;
          }

          .dialog-header h2 {
            font-size: 24px;
          }

          .dialog-body {
            padding: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .days-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-actions {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default RegistrationFormDialog;



// "use client"
// import React, { useState } from 'react';

// const RegistrationFormDialog = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     homeAddress: '',
//     phoneNumber: '',
//     courseOfStudy: '',
//     fieldOfExpertise: '',
//     daysAvailable: []
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [errors, setErrors] = useState({});

//   const daysOfWeek = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleDayToggle = (day) => {
//     setFormData(prev => ({
//       ...prev,
//       daysAvailable: prev.daysAvailable.includes(day)
//         ? prev.daysAvailable.filter(d => d !== day)
//         : [...prev.daysAvailable, day]
//     }));
//     if (errors.daysAvailable) {
//       setErrors(prev => ({ ...prev, daysAvailable: '' }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email address is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.homeAddress.trim()) {
//       newErrors.homeAddress = 'Home address is required';
//     }

//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required';
//     }

//     if (!formData.courseOfStudy.trim()) {
//       newErrors.courseOfStudy = 'Course of study is required';
//     }

//     if (!formData.fieldOfExpertise.trim()) {
//       newErrors.fieldOfExpertise = 'Field of expertise is required';
//     }

//     if (formData.daysAvailable.length === 0) {
//       newErrors.daysAvailable = 'Please select at least one day';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Submit to your backend API endpoint
//       const response = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           homeAddress: '',
//           phoneNumber: '',
//           courseOfStudy: '',
//           fieldOfExpertise: '',
//           daysAvailable: []
//         });
        
//         // Close dialog after 2 seconds
//         setTimeout(() => {
//           onClose();
//           setSubmitStatus(null);
//         }, 2000);
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="dialog-overlay" onClick={onClose}>
//         <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
//           <div className="dialog-header">
//             <h2>Registration Form</h2>
//             <p>Join the Next Training Cohort</p>
//             <button className="dialog-close" onClick={onClose} aria-label="Close dialog">
//               <i className="ri-close-line"></i>
//             </button>
//           </div>

//           <div className="dialog-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="firstName">
//                     First Name <span className="required">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={errors.firstName ? 'error' : ''}
//                     placeholder="Enter your first name"
//                   />
//                   {errors.firstName && <span className="error-text">{errors.firstName}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="lastName">
//                     Last Name <span className="required">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={errors.lastName ? 'error' : ''}
//                     placeholder="Enter your last name"
//                   />
//                   {errors.lastName && <span className="error-text">{errors.lastName}</span>}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">
//                   Email Address <span className="required">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={errors.email ? 'error' : ''}
//                   placeholder="your.email@example.com"
//                 />
//                 {errors.email && <span className="error-text">{errors.email}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="homeAddress">
//                   Home Address <span className="required">*</span>
//                 </label>
//                 <textarea
//                   id="homeAddress"
//                   name="homeAddress"
//                   value={formData.homeAddress}
//                   onChange={handleChange}
//                   className={errors.homeAddress ? 'error' : ''}
//                   placeholder="Enter your full address"
//                   rows="3"
//                 />
//                 {errors.homeAddress && <span className="error-text">{errors.homeAddress}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phoneNumber">
//                   Phone Number <span className="required">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   className={errors.phoneNumber ? 'error' : ''}
//                   placeholder="+44 123 456 7890"
//                 />
//                 {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="courseOfStudy">
//                   Course of Study <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="courseOfStudy"
//                   name="courseOfStudy"
//                   value={formData.courseOfStudy}
//                   onChange={handleChange}
//                   className={errors.courseOfStudy ? 'error' : ''}
//                   placeholder="e.g., Full Stack Development, Data Science"
//                 />
//                 {errors.courseOfStudy && <span className="error-text">{errors.courseOfStudy}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="fieldOfExpertise">
//                   Field of Expertise <span className="required">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="fieldOfExpertise"
//                   name="fieldOfExpertise"
//                   value={formData.fieldOfExpertise}
//                   onChange={handleChange}
//                   className={errors.fieldOfExpertise ? 'error' : ''}
//                   placeholder="e.g., Frontend Development, Machine Learning"
//                 />
//                 {errors.fieldOfExpertise && <span className="error-text">{errors.fieldOfExpertise}</span>}
//               </div>

//               <div className="form-group">
//                 <label>
//                   Days Available in the Week <span className="required">*</span>
//                 </label>
//                 <div className="days-grid">
//                   {daysOfWeek.map((day) => (
//                     <label key={day} className="day-checkbox">
//                       <input
//                         type="checkbox"
//                         checked={formData.daysAvailable.includes(day)}
//                         onChange={() => handleDayToggle(day)}
//                       />
//                       <span className="day-label">{day}</span>
//                     </label>
//                   ))}
//                 </div>
//                 {errors.daysAvailable && <span className="error-text">{errors.daysAvailable}</span>}
//               </div>

//               {submitStatus === 'success' && (
//                 <div className="alert alert-success">
//                   <i className="ri-checkbox-circle-line"></i>
//                   Registration successful! Check your email for confirmation.
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="alert alert-error">
//                   <i className="ri-error-warning-line"></i>
//                   Something went wrong. Please try again.
//                 </div>
//               )}

//               <div className="form-actions">
//                 <button
//                   type="button"
//                   className="btn-secondary"
//                   onClick={onClose}
//                   disabled={isSubmitting}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn-primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <i className="ri-loader-4-line spinning"></i>
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       Submit Registration
//                       <i className="ri-arrow-right-line"></i>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .dialog-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0, 0, 0, 0.6);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 10000;
//           padding: 20px;
//           backdrop-filter: blur(4px);
//           animation: fadeIn 0.3s ease;
//         }

//         .dialog-container {
//           background: white;
//           border-radius: 20px;
//           max-width: 700px;
//           width: 100%;
//           max-height: 90vh;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//           animation: slideUp 0.3s ease;
//         }

//         .dialog-header {
//           background: linear-gradient(135deg, #6425FE 0%, #8B5CF6 100%);
//           padding: 30px;
//           color: white;
//           position: relative;
//         }

//         .dialog-header h2 {
//           font-size: 28px;
//           margin: 0 0 8px 0;
//           color: white;
//           font-weight: 600;
//         }

//         .dialog-header p {
//           margin: 0;
//           opacity: 0.9;
//           font-size: 16px;
//           color: white;
//         }

//         .dialog-close {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           background: rgba(255, 255, 255, 0.2);
//           border: none;
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           color: white;
//         }

//         .dialog-close:hover {
//           background: rgba(255, 255, 255, 0.3);
//           transform: rotate(90deg);
//         }

//         .dialog-close i {
//           font-size: 20px;
//         }

//         .dialog-body {
//           padding: 30px;
//           overflow-y: auto;
//           max-height: calc(90vh - 120px);
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//         }

//         .form-group {
//           margin-bottom: 24px;
//         }

//         .form-group label {
//           display: block;
//           font-weight: 600;
//           margin-bottom: 8px;
//           color: #0d0e1d;
//           font-size: 15px;
//         }

//         .required {
//           color: #e74c3c;
//         }

//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           padding: 12px 16px;
//           border: 2px solid #e0e0e0;
//           border-radius: 10px;
//           font-size: 15px;
//           transition: all 0.3s ease;
//           font-family: inherit;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: #6425FE;
//           box-shadow: 0 0 0 3px rgba(100, 37, 254, 0.1);
//         }

//         .form-group input.error,
//         .form-group textarea.error {
//           border-color: #e74c3c;
//         }

//         .error-text {
//           display: block;
//           color: #e74c3c;
//           font-size: 13px;
//           margin-top: 6px;
//         }

//         .days-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
//           gap: 12px;
//           margin-top: 12px;
//         }

//         .day-checkbox {
//           display: flex;
//           align-items: center;
//           cursor: pointer;
//           user-select: none;
//         }

//         .day-checkbox input[type="checkbox"] {
//           width: 20px;
//           height: 20px;
//           margin-right: 10px;
//           cursor: pointer;
//           accent-color: #6425FE;
//         }

//         .day-label {
//           font-size: 14px;
//           color: #0d0e1d;
//         }

//         .alert {
//           padding: 16px 20px;
//           border-radius: 10px;
//           margin-bottom: 20px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           font-size: 15px;
//         }

//         .alert i {
//           font-size: 20px;
//         }

//         .alert-success {
//           background: #d4edda;
//           color: #155724;
//           border: 1px solid #c3e6cb;
//         }

//         .alert-error {
//           background: #f8d7da;
//           color: #721c24;
//           border: 1px solid #f5c6cb;
//         }

//         .form-actions {
//           display: flex;
//           gap: 12px;
//           justify-content: flex-end;
//           margin-top: 30px;
//           padding-top: 20px;
//           border-top: 1px solid #e0e0e0;
//         }

//         .btn-primary,
//         .btn-secondary {
//           padding: 14px 28px;
//           border-radius: 10px;
//           font-size: 16px;
//           font-weight: 600;
//           border: none;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-family: inherit;
//         }

//         .btn-primary {
//           background: #6425FE;
//           color: white;
//         }

//         .btn-primary:hover:not(:disabled) {
//           background: #5219d4;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(100, 37, 254, 0.3);
//         }

//         .btn-primary:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .btn-secondary {
//           background: #f5f5f5;
//           color: #0d0e1d;
//         }

//         .btn-secondary:hover:not(:disabled) {
//           background: #e0e0e0;
//         }

//         .spinning {
//           animation: spin 1s linear infinite;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideUp {
//           from {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @media (max-width: 768px) {
//           .dialog-container {
//             max-width: 100%;
//             border-radius: 12px;
//           }

//           .dialog-header {
//             padding: 24px 20px;
//           }

//           .dialog-header h2 {
//             font-size: 24px;
//           }

//           .dialog-body {
//             padding: 20px;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 0;
//           }

//           .days-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .form-actions {
//             flex-direction: column;
//           }

//           .btn-primary,
//           .btn-secondary {
//             width: 100%;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default RegistrationFormDialog;