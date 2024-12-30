Admin Dashboard Application

Overview

This project is a React-based Admin Dashboard application that enables administrators to manage companies, define communication methods, and view tasks or notifications. It also includes user-centric features such as a calendar view and notifications system.

Features

Admin Dashboard

Manage Companies: Add and view company information such as name, location, LinkedIn profile, emails, phone numbers, and periodicity.
Communication Methods: Define communication methods with properties like name, description, sequence, and whether they are mandatory.

User Features

Dashboard: Displays user-specific tasks and other data through a shared context.
Calendar View: Visualize communication tasks/events using an interactive calendar.
Notifications: Displays overdue and due notifications for user tasks.
Shared Components
Header: Navigation across the application.
Footer: A simple footer with branding information.

Folder Structure

src/
├── components/
│   ├── Admin/
│   │   ├── AdminDashboard.js
│   │   ├── CompanyForm.js
│   │   ├── CommunicationMethodForm.js
│   ├── User/
│   │   ├── Dashboard.js
│   │   ├── CalendarView.js
│   │   ├── Notifications.js
│   ├── Shared/
│   │   ├── Header.js
│   │   ├── Footer.js
├── context/
│   ├── AppContext.js
├── hooks/
│   ├── useAdmin.js
│   ├── useUser.js
├── services/
│   ├── api.js
│   ├── dataService.js
├── styles.css
└── App.js


Installation and Setup
Clone the repository:


git clone https://github.com/your-repo/admin-dashboard.git
cd admin-dashboard
Install dependencies:


npm install
Start the development server:


npm start
Open in browser: Navigate to http://localhost:3000 to use the application.

Usage
Admin Features
Navigate to /admin to access the Admin Dashboard.
Add companies via the "Add Company" form.
Define communication methods via the "Add Communication Method" form.
User Features
Access /dashboard to view user-specific tasks.
View communication events on the calendar at /calendar.
Check notifications at /notifications.
Dependencies
React: Frontend library.
React Router: Routing for navigation between pages.
React Calendar: Calendar component for event visualization.
Axios: API calls to fetch and manage data.
Contributing
Fork the repository.
Create a feature branch.
Commit changes and submit a pull request.


This README provides essential guidance for understanding, installing, and contributing to the Admin Dashboard application.






