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
    // Replace the number below with your studio's WhatsApp number (Start with 27)
    const studioNumber = "27123456789"; 
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
          <h1 className="display-title">MESSAGE <br/><span>SENT.</span></h1>
          <p>If your WhatsApp didn't open automatically, please contact us directly via the button below.</p>
          <button className="back-btn" onClick={() => setSubmitted(false)}>Back to Form</button>
        </div>
      </div>
    );
  }

  return (
    <div className="enroll-page dark-theme">
      <div className="enroll-container">
        
        {/* LEFT SIDE: INFO */}
        <div className="enroll-info">
          <span className="eyebrow">// Step 01</span>
          <h1 className="section-title">START YOUR <br/>JOURNEY.</h1>
          <p className="enroll-lead">Submit your details to chat with us about class placement and availability.</p>
          
          <ul className="enroll-check">
            <li><span>01.</span> Instant WhatsApp connection</li>
            <li><span>02.</span> Professional level assessment</li>
            <li><span>03.</span> Welcome pack & trial details</li>
          </ul>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="enroll-form-wrapper">
          <form className="enroll-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Student Name & Surname</label>
              <input type="text" name="studentName" required placeholder="Full Name" />
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

            <div className="form-group">
              <label>Parent/Guardian Email</label>
              <input type="email" name="email" required placeholder="email@example.com" />
            </div>

            <div className="form-group">
              <label>Previous Experience</label>
              <textarea name="experience" placeholder="Any prior training? (Optional)"></textarea>
            </div>

            <button type="submit" className="submit-enroll">
              Open WhatsApp Chat —
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Enroll;