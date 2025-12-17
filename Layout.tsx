import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  MessageSquare, 
  User as UserIcon, 
  RefreshCw, 
  Menu, 
  X,
  HeartHandshake,
  BookOpen,
  Stethoscope,
  FlaskConical,
  Users,
  Pill,
  ClipboardList,
  Book,
  Calculator,
  Library,
  Notebook,
  GraduationCap,
  Scan,
  Bell
} from 'lucide-react';
import { User } from 'firebase/auth';
import { ViewState } from '../types';

interface LayoutProps {
  user: User;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ user, currentView, setView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Global Notification Timer (Reminds user to support every 60 seconds for demo)
  useEffect(() => {
    const timer = setInterval(() => {
      setShowNotification(true);
      // Auto hide after 8 seconds
      setTimeout(() => setShowNotification(false), 8000);
    }, 60000); // 1 minute interval

    return () => clearInterval(timer);
  }, []);

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setView(view);
        setIsMobileMenuOpen(false);
      }}
      className={`flex items-center w-full px-4 py-3.5 mb-2 rounded-2xl transition-all duration-300 group ${
        currentView === view 
          ? 'bg-gradient-to-r from-teal-50 to-teal-100/50 text-teal-800 shadow-sm font-bold border-l-4 border-teal-500' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 font-medium'
      }`}
    >
      <Icon size={20} className={`mr-3 transition-colors ${currentView === view ? 'text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
      <span>{label}</span>
    </button>
  );

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans relative">
      {/* Global Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 md:right-8 z-50 animate-bounce-in max-w-sm w-full">
           <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-2xl p-4 flex items-start border border-teal-400/50 text-white">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                 <Bell size={20} className="text-white" />
              </div>
              <div className="flex-1">
                 <h4 className="font-bold text-sm mb-1">Support BioNurse Pro</h4>
                 <p className="text-xs text-teal-50 leading-relaxed mb-2">
                   Help us reach more students globally! Your subscription helps maintain high-quality AI services.
                 </p>
                 <div className="flex space-x-2">
                    <button 
                      onClick={() => { setView(ViewState.DONATE); setShowNotification(false); }}
                      className="bg-white text-teal-700 px-3 py-1 rounded-lg text-xs font-bold hover:bg-teal-50"
                    >
                      Donate Now
                    </button>
                    <button 
                      onClick={() => setShowNotification(false)}
                      className="text-teal-100 text-xs hover:text-white"
                    >
                      Dismiss
                    </button>
                 </div>
              </div>
              <button onClick={() => setShowNotification(false)} className="text-teal-200 hover:text-white">
                 <X size={16} />
              </button>
           </div>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-80 bg-white border-r border-slate-200 h-full shadow-xl z-20">
        <div className="p-8 flex items-center">
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-2.5 rounded-xl mr-4 shadow-lg shadow-teal-200">
            <Activity className="text-white" size={26} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">BioNurse<span className="text-teal-600">Pro</span></h1>
            <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Medical Suite</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-2 overflow-y-auto custom-scrollbar">
          <div className="mb-6">
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Clinical</p>
            <NavItem view={ViewState.DASHBOARD} icon={Activity} label="Dashboard" />
            <NavItem view={ViewState.VITALS_SCANNER} icon={Scan} label="Bio-Scanner (AI)" />
            <NavItem view={ViewState.PATIENTS} icon={Users} label="Patient Queue" />
            <NavItem view={ViewState.CHAT} icon={MessageSquare} label="AI Consultation" />
          </div>

          <div className="mb-6">
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Education</p>
            <NavItem view={ViewState.ACADEMY} icon={GraduationCap} label="BioNurse Academy" />
            <NavItem view={ViewState.NURSING_NOTES} icon={Notebook} label="Clinical Notebook" />
            <NavItem view={ViewState.LEARNING} icon={BookOpen} label="Quiz Modules" />
          </div>

          <div className="mb-6">
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Workstation</p>
            <NavItem view={ViewState.SBAR_TOOL} icon={ClipboardList} label="SBAR Handover" />
            <NavItem view={ViewState.MEDICAL_TOOLS} icon={Calculator} label="Calculators" />
            <NavItem view={ViewState.DRUG_REFERENCE} icon={Pill} label="Drug Database" />
            <NavItem view={ViewState.SPECIALTIES} icon={Stethoscope} label="Specialties Guide" />
            <NavItem view={ViewState.ENCYCLOPEDIA} icon={Library} label="Encyclopedia" />
            <NavItem view={ViewState.LAB_REFERENCE} icon={FlaskConical} label="Lab Values" />
            <NavItem view={ViewState.ABBREVIATIONS} icon={Book} label="Abbreviations" />
          </div>

          <div>
            <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">System</p>
            <NavItem view={ViewState.PROFILE} icon={UserIcon} label="Doctor Profile" />
            <NavItem view={ViewState.DONATE} icon={HeartHandshake} label="Support" />
          </div>
        </nav>

        <div className="p-4 m-4 bg-slate-50 rounded-2xl border border-slate-100">
           <div className="flex items-center mb-4">
              <img 
                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'Doctor'}&background=0d9488&color=fff`} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-bold text-slate-700 truncate">{user.displayName || 'Dr. Guest'}</p>
                <p className="text-[10px] text-teal-600 font-semibold uppercase tracking-wide truncate">Verified License</p>
              </div>
           </div>
           <button 
            onClick={handleReset}
            className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-all shadow-sm"
           >
             <RefreshCw size={14} className="mr-2" />
             Reset Session
           </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center">
          <div className="bg-teal-600 p-1.5 rounded-lg mr-2">
            <Activity className="text-white" size={20} />
          </div>
          <span className="font-bold text-lg text-slate-800">BioNurse<span className="text-teal-600">Pro</span></span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-20 pt-20 px-4 overflow-y-auto">
           <NavItem view={ViewState.DASHBOARD} icon={Activity} label="Dashboard" />
           <NavItem view={ViewState.VITALS_SCANNER} icon={Scan} label="Bio-Scanner (AI)" />
           <NavItem view={ViewState.ACADEMY} icon={GraduationCap} label="BioNurse Academy" />
           <NavItem view={ViewState.NURSING_NOTES} icon={Notebook} label="Clinical Notebook" />
           <NavItem view={ViewState.LEARNING} icon={BookOpen} label="Quiz Modules" />
           <NavItem view={ViewState.CHAT} icon={MessageSquare} label="AI Consultation" />
           <NavItem view={ViewState.SBAR_TOOL} icon={ClipboardList} label="SBAR Handover" />
           <NavItem view={ViewState.MEDICAL_TOOLS} icon={Calculator} label="Calculators" />
           <NavItem view={ViewState.DRUG_REFERENCE} icon={Pill} label="Drug Database" />
           <NavItem view={ViewState.SPECIALTIES} icon={Stethoscope} label="Specialties Guide" />
           <NavItem view={ViewState.ENCYCLOPEDIA} icon={Library} label="Encyclopedia" />
           <NavItem view={ViewState.LAB_REFERENCE} icon={FlaskConical} label="Lab Values" />
           <NavItem view={ViewState.ABBREVIATIONS} icon={Book} label="Abbreviations" />
           <NavItem view={ViewState.PATIENTS} icon={Users} label="Patient Queue" />
           <NavItem view={ViewState.PROFILE} icon={UserIcon} label="Doctor Profile" />
           <NavItem view={ViewState.DONATE} icon={HeartHandshake} label="Support" />
           <div className="mt-8 border-t border-slate-100 pt-6 pb-10">
             <button onClick={handleReset} className="flex items-center justify-center w-full text-slate-600 p-4 bg-slate-50 rounded-xl font-bold">
                <RefreshCw size={20} className="mr-3" />
                Reset App
             </button>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden md:relative pt-16 md:pt-0 bg-slate-50">
        {children}
      </main>
    </div>
  );
};

export default Layout;