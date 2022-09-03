import React from "react";
import { QueryClient, QueryClientProvider  } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import { Routes, Route } from "react-router-dom";
import "./App.css"


import Navbar from "./components/Navbar/Navbar";
import ClientDetailPage from "./pages/client-detail-page/ClientDetailPage";
import ClientsPage from "./pages/clients-page/ClientsPage";
import LoginPage from "./pages/login-page/LoginPage";
import NotFound from "./pages/not-found/NotFound";
import ProjectDetailPage from "./pages/project-detail-page/ProjectDetailPage";
import ProjectPage from "./pages/projects-page/ProjectPage";
import StatsPage from "./pages/stats-page/StatsPage";



const App = () => {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app_wrapper">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProjectPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/client/:clientId" element={<ClientDetailPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  );
};

export default App;
