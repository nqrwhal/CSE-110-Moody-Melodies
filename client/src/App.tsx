// client/src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginView } from './views/LoginView';
import { SurveyAPICall } from './views/SurveyAPICall';
import { HomePageView } from './views/HomePageView';
import { SurveyView1 } from './views/SurveyView1';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/api" element={<SurveyAPICall />} />
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePageView />
              </ProtectedRoute>
            } 
          />
          <Route path="/survey" element={<SurveyView1 />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;