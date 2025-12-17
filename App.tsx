import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { ViewState } from './types';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import LearningCenter from './components/LearningCenter';
import MedicalCalculators from './components/MedicalCalculators';
import LabReference from './components/LabReference';
import DrugReference from './components/DrugReference';
import SbarGenerator from './components/SbarGenerator';
import Abbreviations from './components/Abbreviations';
import SpecialtyGuide from './components/SpecialtyGuide';
import HealthEncyclopedia from './components/HealthEncyclopedia';
import NursingNotes from './components/NursingNotes';
import Academy from './components/Academy';
import PatientQueue from './components/PatientQueue';
import Profile from './components/Profile';
import Donate from './components/Donate';
import VitalsScanner from './components/VitalsScanner';

// Mock Guest User to bypass authentication
const GUEST_USER: any = {
  uid: 'guest-user-id',
  displayName: 'Guest Doctor',
  email: 'doctor@bionurse.pro',
  photoURL: null,
  emailVerified: true,
  isAnonymous: true,
  metadata: {},
  providerData: [],
};

const App: React.FC = () => {
  const [user] = useState<User | null>(GUEST_USER);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  
  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.CHAT:
        return <ChatInterface />;
      case ViewState.MEDICAL_TOOLS:
        return <MedicalCalculators />;
      case ViewState.LAB_REFERENCE:
        return <LabReference />;
      case ViewState.DRUG_REFERENCE:
        return <DrugReference />;
      case ViewState.SBAR_TOOL:
        return <SbarGenerator />;
      case ViewState.ABBREVIATIONS:
        return <Abbreviations />;
      case ViewState.SPECIALTIES:
        return <SpecialtyGuide />;
      case ViewState.ENCYCLOPEDIA:
        return <HealthEncyclopedia />;
      case ViewState.NURSING_NOTES:
        return <NursingNotes />;
      case ViewState.ACADEMY:
        return <Academy />;
      case ViewState.PATIENTS:
        return <PatientQueue />;
      case ViewState.LEARNING:
        return <LearningCenter />;
      case ViewState.VITALS_SCANNER:
        return <VitalsScanner />;
      case ViewState.PROFILE:
        return <Profile user={user!} />;
      case ViewState.DONATE:
        return <Donate />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout user={user!} currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;