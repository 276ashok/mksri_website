
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import AdminPanelTabs from '@/components/AdminPanelTabs';
import PageSEO from '@/components/PageSEO';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const tabFromQuery = queryParams.get('tab');
  
  useEffect(() => {
    if (tabFromQuery) {
      localStorage.setItem("adminActiveTab", tabFromQuery);
    }
  }, [tabFromQuery]);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the authentication token
    localStorage.removeItem('isAuthenticated'); // Clear the isAuthenticated flag
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Layout>
      <PageSEO 
        title="Admin Dashboard | MK Srinidhi Surveyors and Builders"
        description="Admin dashboard to manage content, quotes, and applications"
        keywords="admin, dashboard, management"
      />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
          <AdminPanelTabs />
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
