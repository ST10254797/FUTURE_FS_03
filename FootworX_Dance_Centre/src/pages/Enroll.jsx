import React, { useState } from 'react';
import './Enroll.css';

const Enroll = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Capture Form Data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // 2. Format the WhatsApp Message
    // Updated to your specific number: 072 203 6428 (International format 27722036428)
    const studioNumber = "27722036428"; 
    const text = `*NEW ENROLLMENT INQUIRY*%0A%0A` +
                 `*Student:* ${data.studentName}%0A` +
                 `*Age:* ${data.age}%0A` +
                 `*Discipline:* ${data.discipline}%0A` +
                 `*Parent Email:* ${data.email}%0A` +
                 `*Experience:* ${data.experience || 'None'}`;

    // 3. Open WhatsApp Link
    window.open(`https://wa.me/${studioNumber}?text=${text}`, '_blank');
    
    // 4. Show Success Screen
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="enroll-success dark-theme">
        <div className="success-content">
          <span className="eyebrow">Transmission Received</span>
          <h1 className="display-title">MESSAGE <br/><span>SENT.</span></h1>
          <p>We will review your technical details and contact you shortly.</p>
          <button className="back-btn" onClick={() => setSubmitted(false)}>Return to Portal</button>
        </div>
      </div>
    );
  }

  return (
    <div className="enroll-page dark-theme">
      <div className="enroll-container">
        
        {/* LEFT SIDE: EDITORIAL INFO */}
        <div className="enroll-info">
          <div className="info-sticky">
            <span className="eyebrow">// Intake Portal</span>
            <h1 className="section-title">JOIN THE <br/>COLLECTIVE.</h1>
            <div className="accent-line"></div>
            <p className="enroll-lead">
                FootworX is a technical sanctuary. Provide your metrics below to initialize 
                your professional placement.
            </p>
            
            <div className="enroll-steps">
                <div className="step">
                    <span className="step-num">01</span>
                    <p>Direct technical inquiry via encrypted WhatsApp.</p>
                </div>
                <div className="step">
                    <span className="step-num">02</span>
                    <p>Syllabus assessment and age-appropriate grading.</p>
                </div>
                <div className="step">
                    <span className="step-num">03</span>
                    <p>Trial session confirmation and studio tour.</p>
                </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: MINIMALIST FORM */}
        <div className="enroll-form-wrapper">
          <form className="enroll-form" onSubmit={handleSubmit}>
            <div className="form-section-label">Identity Metrics</div>
            
            <div className="form-group">
              <label>Student Full Name</label>
              <input type="text" name="studentName" required placeholder="Name & Surname" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" required placeholder="Years" />
              </div>
              <div className="form-group">
                <label>Discipline</label>
                <select name="discipline" required>
                  <option value="">Select Style</option>
                  <option value="Ballet">Classical Ballet</option>
                  <option value="Contemporary">Contemporary</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="Modern & Jazz">Modern & Jazz</option>
                </select>
              </div>
            </div>

            <div className="form-section-label">Contact Architecture</div>

            <div className="form-group">
              <label>Parent/Guardian Email</label>
              <input type="email" name="email" required placeholder="email@address.com" />
            </div>

            <div className="form-group">
              <label>Technical Background</label>
              <textarea name="experience" placeholder="Describe prior training, or leave blank for beginners."></textarea>
            </div>

            <button type="submit" className="submit-enroll">
              INITIALIZE CONNECTION
              <span className="btn-icon">→</span>
            </button>
            <p className="form-footer-note">Securely transmits to: 072 203 6428</p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Enroll;