// src/components/Admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import CompanyForm from './CompanyForm';
import NotificationToast from '../Shared/NotificationToast';
import Modal from '../Shared/Modal';
import './styles/AdminDashboard.css';

function AdminDashboard() {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Load companies from localStorage when the component mounts
  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem('companies')) || [];
    setCompanies(storedCompanies);
  }, []);

  // Set timeout to hide the toast message after 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer); // Clear timeout on component unmount
    }
  }, [toastMessage]);

  // Handle saving a new or updated company
  const handleSave = (updatedCompany) => {
    let updatedCompanies;
    if (editingCompany) {
      updatedCompanies = companies.map((c) => (c.id === updatedCompany.id ? updatedCompany : c));
      setToastMessage('Company successfully updated.');
    } else {
      updatedCompanies = [...companies, { ...updatedCompany, id: Date.now() }];
      setToastMessage('Company successfully added.');
    }

    setCompanies(updatedCompanies);
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));  // Save to localStorage
    setEditingCompany(null);
  };

  // Handle confirming company deletion
  const confirmDelete = () => {
    const updatedCompanies = companies.filter((company) => company.id !== editingCompany.id);
    setCompanies(updatedCompanies);
    localStorage.setItem('companies', JSON.stringify(updatedCompanies));  // Save to localStorage
    setEditingCompany(null);
    setShowModal(false);
    setToastMessage('Company successfully deleted.');
  };

  // Handle editing an existing company
  const handleEdit = (company) => {
    setEditingCompany(company);
  };

  // Handle deleting a company
  const handleDelete = (id) => {
    setShowModal(true);
    setEditingCompany(companies.find((c) => c.id === id));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <CompanyForm editingCompany={editingCompany} handleSave={handleSave} />
      <h2>Company List</h2>
      <table className="company-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>LinkedIn</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>
                <a href={company.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(company)}>Edit</button>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal
          title="Confirm Delete"
          message={`Are you sure you want to delete ${editingCompany?.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
      {toastMessage && <NotificationToast message={toastMessage} onClose={() => setToastMessage('')} />}
    </div>
  );
}

export default AdminDashboard;
