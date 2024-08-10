import React, { useState } from 'react';
import './feedback.css';
import Navbar from './Navbar';

const EnhancedFeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    category: '',
    feedback: ''
  });

  const [message, setMessage] = useState('');

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleCategoryChange = (category) => {
    setFormData({ ...formData, category });
  };

  const handleFeedbackChange = (e) => {
    setFormData({ ...formData, feedback: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/feedback/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Feedback submitted successfully');
        setFormData({
          rating: '',
          category: '',
          feedback: ''
        });
      } else {
        setMessage('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('Error submitting feedback');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="enhanced-feedback-form-container">
        <h2>We would like your feedback to improve our website.</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className="enhanced-feedback-form">
          <div className="rating-section">
            <p>What is your opinion of this page?</p>
            <div className="rating-icons">
              {['😡', '🙁', '😐', '🙂', '😍'].map((icon, index) => (
                <span
                  key={index}
                  className={`rating-icon ${formData.rating === icon ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(icon)}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div className="category-section">
            <p>Please select your feedback category below.</p>
            <div className="category-buttons">
              {['Suggestion', 'Something is not quite right', 'Compliment'].map((category, index) => (
                <button
                  type="button"
                  key={index}
                  className={`category-button ${formData.category === category ? 'selected' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="feedback-section">
            <p>Please leave your feedback below:</p>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleFeedbackChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedFeedbackForm;
