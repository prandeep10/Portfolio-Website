// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const servicesList = [
  'Web Development',
  'App Development',
  'AI Development',
  'Social Media Management',
  // Add more services as needed
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [],
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleServiceToggle = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((selectedService) => selectedService !== service)
        : [...prevData.services, service],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send a POST request to the formspree API
      const response = await fetch('https://formspree.io/f/xnqepjng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          services: [],
          message: '',
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form">
      <div className="contact-form">
        <h2>Contact Me</h2>
        {submissionStatus === 'success' ? (
          <p className="success-message">Form submitted successfully!</p>
        ) : submissionStatus === 'error' ? (
          <p className="error-message">Error submitting form. Please try again later.</p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Services Required:</label>
          <div className="services-checkboxes">
            {servicesList.map((service) => (
              <div key={service} className="service-checkbox">
                <input
                  type="checkbox"
                  id={service}
                  name={service}
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                <label htmlFor={service}>{service}</label>
              </div>
            ))}
          </div>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
