// client/src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginView } from './views/LoginView';
//import { SurveyAPICall } from './views/SurveyAPICall';
import { HomePageView } from './views/HomePageView';
import { SurveyView1simple } from './views/SurveyView1simple';
import { SurveyView1advanced } from './views/SurveyView1advanced';
import { SurveyView2advanced } from './views/SurveyView2advanced';
import { SurveyView3advanced } from './views/SurveyView3advanced';
import { SurveyView4advanced } from './views/SurveyView4advanced';
import SurveyResultsView from './views/SurveyResultsView';



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView />} />
          {/* <Route path="/api" element={<SurveyAPICall />} /> */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePageView />
              </ProtectedRoute>
            } 
          />
          <Route path="/simple-survey" element={<SurveyView1simple />} />
          <Route path="/advanced-survey" element={<SurveyView1advanced />} />
          <Route path="/advanced-survey-feels" element={<SurveyView2advanced />} />
          <Route path="/advanced-survey-genres" element={<SurveyView3advanced />} />
          <Route path="/advanced-survey-number" element={<SurveyView4advanced />} />
          <Route path="/results" element={<SurveyResultsView  />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;