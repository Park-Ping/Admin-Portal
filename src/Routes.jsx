import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AnalyticsIntelligence from './pages/analytics-intelligence';
import SystemAdministration from './pages/system-administration';
import ExecutiveDashboard from './pages/executive-dashboard';
import PaymentProcessingHub from './pages/payment-processing-hub';
import CardManagementConsole from './pages/card-management-console';
import AuthenticationGateway from './pages/authentication-gateway';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AuthenticationGateway />} />
        <Route path="/analytics-intelligence" element={<AnalyticsIntelligence />} />
        <Route path="/system-administration" element={<SystemAdministration />} />
        <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
        <Route path="/payment-processing-hub" element={<PaymentProcessingHub />} />
        <Route path="/card-management-console" element={<CardManagementConsole />} />
        <Route path="/authentication-gateway" element={<AuthenticationGateway />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
