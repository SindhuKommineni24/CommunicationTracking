import React, { useState, useEffect } from 'react';
import './styles/CompanyList.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/data/companies.json')
      .then((response) => response.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="company-list">
      <h2>Company Overview</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <strong>{company.name}</strong> - {company.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
