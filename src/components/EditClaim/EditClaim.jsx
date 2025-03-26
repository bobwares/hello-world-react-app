/**
 * @author bobwares codebot
 * @application Hello World React App
 * @source src/components/EditClaim/EditClaim.jsx
 * @description React component for editing a submitted claim. It retrieves the claim data from FormData context using the route parameter.
 * @version 1.0.1
 * @exports EditClaim
 * @updated 2025-03-26
 */
import React, { useState, useContext, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormDataContext } from '../../App';
import './EditClaim.css';

export const EditClaim = () => {
  const { claimId } = useParams();
  const { claims, setClaims } = useContext(FormDataContext);
  const navigate = useNavigate();

  // Get the current claim using the claimId from the route parameters.
  const claim = claims[claimId];
  const [formData, setFormData] = useState(
    claim || { name: '', date: '', type: '' }
  );
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
    // Mock update delay.
    setTimeout(() => {
      const updatedClaims = [...claims];
      updatedClaims[claimId] = formData;
      setClaims(updatedClaims);
      setSubmitStatus('Updated successfully!');
      // Navigate back to the claims list after update.
      navigate('/my-claims');
    }, 1000);
  };

  return (
    <div>
      <div className="edit-form-container">
        <h3>Edit Claim</h3>
        {claim ? (
          <form onSubmit={handleSubmit}>
            <div className="edit-form-group">
              <label htmlFor="name" className="edit-form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="edit-form-input"
              />
            </div>
            <div className="edit-form-group">
              <label htmlFor="date" className="edit-form-label">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="edit-form-input"
              />
            </div>
            <div className="edit-form-group">
              <label htmlFor="type" className="edit-form-label">
                Type:
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="edit-form-input"
              />
            </div>
            <button type="submit" className="update-button">
              Update Claim
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate('/my-claims')}
            >
              Cancel
            </button>
          </form>
        ) : (
          <p>Claim not found.</p>
        )}
        {submitStatus && <p className="edit-submit-status">{submitStatus}</p>}
      </div>
    </div>
  );
};
