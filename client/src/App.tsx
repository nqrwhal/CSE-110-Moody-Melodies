// client/src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginView } from './views/LoginView';
import { NewHomePageView } from './views/NewHomePageView';
import HomePageView from './views/HomePageView';
import { SurveyAPICall } from './views/SurveyAPICall';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/api" element={<SurveyAPICall />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <NewHomePageView />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;