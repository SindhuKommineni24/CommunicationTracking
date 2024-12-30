import React, { useState, useEffect } from 'react';

function CompanyForm({ companies, setCompanies, editingCompany, handleSave }) {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    location: '',
    linkedin: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    periodicity: '2 weeks',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingCompany) {
      setFormData(editingCompany);
    } else {
      resetForm();
    }
  }, [editingCompany]);

  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      location: '',
      linkedin: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '2 weeks',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Company name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.linkedin.trim() || !formData.linkedin.startsWith('http')) {
      newErrors.linkedin = 'Valid LinkedIn URL is required';
    }
    if (!formData.emails.trim() || !formData.emails.includes('@')) {
      newErrors.emails = 'Valid email is required';
    }
    if (!formData.phoneNumbers.trim() || isNaN(formData.phoneNumbers)) {
      newErrors.phoneNumbers = 'Valid phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSave(formData);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingCompany ? 'Edit Company' : 'Add Company'}</h2>

      <input
        type="text"
        name="name"
        placeholder="Company Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      {errors.location && <p className="error">{errors.location}</p>}

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn Profile"
        value={formData.linkedin}
        onChange={handleChange}
        required
      />
      {errors.linkedin && <p className="error">{errors.linkedin}</p>}

      <input
        type="text"
        name="emails"
        placeholder="Emails"
        value={formData.emails}
        onChange={handleChange}
        required
      />
      {errors.emails && <p className="error">{errors.emails}</p>}

      <input
        type="text"
        name="phoneNumbers"
        placeholder="Phone Numbers"
        value={formData.phoneNumbers}
        onChange={handleChange}
        required
      />
      {errors.phoneNumbers && <p className="error">{errors.phoneNumbers}</p>}

      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      ></textarea>

      <select name="periodicity" value={formData.periodicity} onChange={handleChange}>
        <option value="1 week">1 Week</option>
        <option value="2 weeks">2 Weeks</option>
        <option value="1 month">1 Month</option>
      </select>

      <button type="submit">{editingCompany ? 'Save Changes' : 'Add Company'}</button>

      {editingCompany && (
        <button type="button" onClick={resetForm}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default CompanyForm;
