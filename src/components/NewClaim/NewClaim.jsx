/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/NewClaim/NewClaim.jsx
 * @description React component that provides an entry form for new claims. The form collects Name, Date, and Type, and on submission, saves the data to FormData context.
 * @version 1.1.3
 * @exports NewClaim
 * @updated 2025-03-26
 */
import React, { useState, useContext, useCallback } from 'react';
import { MetadataContext, FormDataContext } from '../../App';
import './NewClaim.css';

export const NewClaim = () => {
  const metadata = useContext(MetadataContext);
  const { claims, setClaims } = useContext(FormDataContext);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    // Mock API submit delay.
    setTimeout(() => {
      setClaims([...claims, formData]);
      setSubmitStatus('Submitted successfully!');
      setFormData({ name: '', date: '', type: '' });
    }, 1000);
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type" className="form-label">
              Type:
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </div>
    </div>
  );
};
