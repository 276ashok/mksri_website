
import React, { useState, useEffect } from 'react';
import AdminDashboard from '@/components/AdminDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminPanelTabs = () => {
  // Use localStorage to persist the active tab between renders
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("adminActiveTab");
    return savedTab || "dashboard";
  });

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("adminActiveTab", activeTab);
  }, [activeTab]);

  return (
    <Tabs 
      defaultValue={activeTab} 
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="mb-8 overflow-x-auto whitespace-nowrap">
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="blog">Blog Management</TabsTrigger>
        <TabsTrigger value="quotes">Quote Requests</TabsTrigger>
        <TabsTrigger value="careers">Career Applications</TabsTrigger>
        <TabsTrigger value="jobs">Job Vacancies</TabsTrigger>
      </TabsList>
      
      <AdminDashboard activeTab={activeTab} />
    </Tabs>
  );
};

export default AdminPanelTabs;
