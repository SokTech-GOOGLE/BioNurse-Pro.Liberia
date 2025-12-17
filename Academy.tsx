import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Award, FileCheck, Printer, Download, BookOpen, Star, 
  User, PlayCircle, CheckCircle2, ExternalLink, MapPin, Calendar, 
  DollarSign, School, ChevronRight, Lock, Globe, CreditCard, FileText
} from 'lucide-react';
import { DEGREE_PATHS, SCHOLARSHIPS, EXTERNAL_RESOURCES } from '../data/academyData';
import { CertificateCourse, StudentProfileData, CourseModule } from '../types';
import { getCourses, saveCourses, addActivity, getStudentProfile, saveStudentProfile } from '../services/storage';
import { SIGNATURE_IMAGE_URL, CREATOR_INFO } from '../constants';

const Academy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'scholarships' | 'profile' | 'degrees' | 'external' | 'transcript'>('courses');
  const [courses, setCourses] = useState<CertificateCourse[]>([]);
  const [student, setStudent] = useState<StudentProfileData>(getStudentProfile());
  
  // Course Player State
  const [activeCourse, setActiveCourse] = useState<CertificateCourse | null>(null);
  const [activeModule, setActiveModule] = useState<CourseModule | null>(null);

  useEffect(() => {
    setCourses(getCourses());
    setStudent(getStudentProfile());
  }, []);

  // --- Student Profile Logic ---
  const handleSaveProfile = () => {
    // Basic GPA Calc simulation
    const completedCourses = courses.filter(c => c.isCompleted);
    // Logic: 4.0 for A, 0.0 if not completed (simplified)
    const totalCredits = completedCourses.reduce((sum, c) => sum + (c.credits || 0), 0);
    const totalPoints = completedCourses.reduce((sum, c) => sum + (4.0 * (c.credits || 0)), 0); // Assuming A grade
    
    // Default to 0.0 or calculated
    let calculatedGPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(1) : "0.0";
    
    // Simulate randomized GPA for demo if no courses, just to show how it looks, or stick to real calculation
    // Let's enforce the rule: If not enough courses, GPA is low.
    
    const updatedProfile = { 
      ...student, 
      gpa: calculatedGPA,
      enrollmentDate: student.enrollmentDate || new Date().toLocaleDateString()
    };
    
    setStudent(updatedProfile);
    saveStudentProfile(updatedProfile);
    addActivity('Updated student profile & transcript', 'routine');
    alert(`Profile Saved! Current GPA: ${calculatedGPA}`);
  };

  // --- Course Logic ---
  const handleEnroll = (id: string) => {
    const course = courses.find(c => c.id === id);
    const updated = courses.map(c => 
      c.id === id ? { ...c, enrolled: true, progress: 0 } : c
    );
    setCourses(updated);
    saveCourses(updated);
    addActivity(`Enrolled in course: ${course?.title}`, 'note');
  };

  const openCoursePlayer = (course: CertificateCourse) => {
    setActiveCourse(course);
    if (course.modules.length > 0) {
      setActiveModule(course.modules[0]);
    }
  };

  const markModuleComplete = (courseId: string, moduleId: string) => {
    const updatedCourses = courses.map(c => {
      if (c.id === courseId) {
        const updatedModules = c.modules.map(m => 
          m.id === moduleId ? { ...m, isCompleted: true } : m
        );
        
        const completedCount = updatedModules.filter(m => m.isCompleted).length;
        const progress = Math.round((completedCount / updatedModules.length) * 100);
        const isCompleted = progress === 100;

        if (isCompleted && !c.isCompleted) {
           addActivity(`Completed course: ${c.title}`, 'success');
        }

        // Return updated course object
        const newCourse = { ...c, modules: updatedModules, progress, isCompleted };
        
        if (activeCourse?.id === courseId) {
            setActiveCourse(newCourse);
            const currentIdx = updatedModules.findIndex(m => m.id === moduleId);
            if (currentIdx < updatedModules.length - 1) {
                setActiveModule(updatedModules[currentIdx + 1]);
            }
        }
        return newCourse;
      }
      return c;
    });

    setCourses(updatedCourses);
    saveCourses(updatedCourses);
    
    // Trigger Profile Update to refresh GPA in background
    handleSaveProfile(); 
  };

  const handleDownloadCertificate = (courseTitle: string) => {
    if (!student.fullName) {
        alert("Please complete your Student Profile first.");
        setActiveTab('profile');
        return;
    }
    
    // Enforce GPA Requirement
    const currentGPA = parseFloat(student.gpa || "0");
    if (currentGPA < 2.5) {
      alert(`ACADEMIC ALERT: Your current GPA is ${currentGPA}. You need a minimum GPA of 2.5 to graduate or download certificates. Please complete more courses or assignments to raise your score.`);
      return;
    }

    // Use the actual signature image from constants if available, else fallback to a styled div
    const signatureHtml = SIGNATURE_IMAGE_URL 
      ? `<img src="${SIGNATURE_IMAGE_URL}" alt="Signature" style="max-height: 80px; display:block; margin: 0 auto;">` 
      : `<div style="font-family: 'Brush Script MT', cursive; font-size: 30px; color: #000;">${CREATOR_INFO.name}</div>`;

    const printContent = `
      <html>
        <head>
          <title>Certificate of Completion</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
            body { 
              margin: 0; 
              padding: 0; 
              background: #f0f0f0; 
              font-family: 'Lato', sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .cert-container {
              width: 1000px;
              height: 700px;
              background: white;
              padding: 40px;
              position: relative;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              border: 1px solid #ddd;
            }
            .border-pattern {
              width: 100%;
              height: 100%;
              border: 5px double #0d9488;
              position: relative;
              padding: 40px;
              box-sizing: border-box;
            }
            .corner {
              position: absolute;
              width: 60px;
              height: 60px;
              border-color: #0d9488;
              border-style: solid;
            }
            .tl { top: 10px; left: 10px; border-width: 5px 0 0 5px; }
            .tr { top: 10px; right: 10px; border-width: 5px 5px 0 0; }
            .bl { bottom: 10px; left: 10px; border-width: 0 0 5px 5px; }
            .br { bottom: 10px; right: 10px; border-width: 0 5px 5px 0; }
            
            .header { text-align: center; margin-bottom: 30px; }
            .logo-text { font-family: 'Cinzel', serif; font-size: 48px; color: #0d9488; letter-spacing: 2px; font-weight: 700; }
            .sub-header { font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 3px; margin-top: 10px; }
            
            .content { text-align: center; margin-top: 50px; }
            .certify-text { font-style: italic; font-size: 20px; color: #555; margin-bottom: 20px; font-family: 'Great Vibes', cursive; }
            .student-name { font-family: 'Cinzel', serif; font-size: 42px; font-weight: 700; color: #333; border-bottom: 2px solid #0d9488; display: inline-block; padding: 0 30px 10px 30px; margin-bottom: 20px; }
            .body-text { font-size: 18px; color: #555; line-height: 1.6; max-width: 700px; margin: 0 auto; }
            .course-name { font-weight: bold; font-size: 28px; color: #0d9488; margin: 15px 0; display: block; }
            
            .footer { display: flex; justify-content: space-between; margin-top: 80px; padding: 0 80px; }
            .sig-block { text-align: center; }
            .sig-line { border-top: 1px solid #333; width: 250px; margin-top: 10px; padding-top: 10px; font-size: 14px; font-weight: bold; color: #333; }
            .date-block { text-align: center; }
            .seal { position: absolute; bottom: 60px; left: 50%; transform: translateX(-50%); width: 100px; height: 100px; opacity: 0.1; }
          </style>
        </head>
        <body>
          <div class="cert-container">
            <div class="border-pattern">
              <div class="corner tl"></div><div class="corner tr"></div>
              <div class="corner bl"></div><div class="corner br"></div>
              
              <div class="header">
                <div class="logo-text">BioNurse Academy</div>
                <div class="sub-header">School of Health Sciences</div>
              </div>

              <div class="content">
                <div class="certify-text">This is to certify that</div>
                <div class="student-name">${student.fullName}</div>
                <div class="body-text">
                  Having successfully completed all required modules and assessments with a GPA > 2.5, is hereby awarded this
                  Certificate of Completion for
                  <span class="course-name">${courseTitle}</span>
                </div>
              </div>

              <div class="footer">
                <div class="date-block">
                  <div style="font-size: 20px; font-weight: bold; margin-bottom: 5px;">${new Date().toLocaleDateString()}</div>
                  <div class="sig-line">Date Issued</div>
                </div>
                <div class="sig-block">
                  ${signatureHtml}
                  <div class="sig-line">${CREATOR_INFO.name}<br><span style="font-weight: normal; font-size: 12px;">${CREATOR_INFO.role}</span></div>
                </div>
              </div>
              
              <svg class="seal" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#0d9488" stroke-width="2" fill="none"/>
                <text x="50" y="55" text-anchor="middle" font-size="20" fill="#0d9488">BN</text>
              </svg>
            </div>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `;
    const win = window.open('', '', 'width=1100,height=800');
    if (win) {
      win.document.write(printContent);
      win.document.close();
    }
  };

  // --- Renderers ---

  // 1. Course Player View
  if (activeCourse) {
     return (
        <div className="flex flex-col h-full bg-slate-50">
           <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm">
              <div className="flex items-center">
                 <button onClick={() => setActiveCourse(null)} className="mr-4 p-2 hover:bg-slate-100 rounded-full text-slate-500">
                    <ChevronRight size={20} className="transform rotate-180" />
                 </button>
                 <div>
                    <h2 className="font-bold text-lg text-slate-800">{activeCourse.title}</h2>
                    <div className="w-48 h-2 bg-slate-100 rounded-full mt-1">
                       <div className="h-full bg-teal-500 rounded-full transition-all" style={{width: `${activeCourse.progress}%`}}></div>
                    </div>
                 </div>
              </div>
              <div className="text-sm font-bold text-slate-500">
                 {activeCourse.progress === 100 ? 'Course Completed' : `${activeCourse.progress}% Complete`}
              </div>
           </div>
           
           <div className="flex-1 flex overflow-hidden">
              <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto hidden md:block">
                 <div className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Course Modules</div>
                 {activeCourse.modules.map((mod, idx) => (
                    <button
                       key={mod.id}
                       onClick={() => setActiveModule(mod)}
                       className={`w-full text-left p-4 border-b border-slate-100 flex items-start transition-colors ${activeModule?.id === mod.id ? 'bg-teal-50 border-teal-500 border-l-4' : 'hover:bg-slate-50'}`}
                    >
                       <div className={`mt-0.5 mr-3 ${mod.isCompleted ? 'text-green-500' : 'text-slate-300'}`}>
                          {mod.isCompleted ? <CheckCircle2 size={18} /> : <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
                       </div>
                       <div>
                          <div className={`text-sm font-semibold ${activeModule?.id === mod.id ? 'text-teal-800' : 'text-slate-700'}`}>Module {idx+1}: {mod.title}</div>
                          <div className="text-xs text-slate-400 mt-1">Reading time: 5 mins</div>
                       </div>
                    </button>
                 ))}
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
                 {activeModule ? (
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                       <h1 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">{activeModule.title}</h1>
                       <div className="prose prose-slate max-w-none text-slate-700 leading-loose whitespace-pre-line">
                          {activeModule.content}
                       </div>
                       <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                          <button
                             onClick={() => markModuleComplete(activeCourse.id, activeModule.id)}
                             disabled={activeModule.isCompleted}
                             className={`px-6 py-3 rounded-xl font-bold flex items-center transition-all ${
                                activeModule.isCompleted 
                                ? 'bg-green-100 text-green-700 cursor-default' 
                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                             }`}
                          >
                             {activeModule.isCompleted ? (
                                <>Completed <CheckCircle2 className="ml-2" size={20}/></>
                             ) : (
                                "Mark as Complete"
                             )}
                          </button>
                       </div>
                    </div>
                 ) : (
                    <div className="flex h-full items-center justify-center text-slate-400">Select a module to begin</div>
                 )}
              </div>
           </div>
        </div>
     );
  }

  // 2. Main Dashboard View
  return (
    <div className="p-6 md:p-8 overflow-y-auto h-full bg-slate-50">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center">
          <GraduationCap className="mr-3 text-indigo-600" size={32} />
          BioNurse Academy
        </h2>
        <p className="text-slate-500 mt-2">Scholarships, Online Certification, and University Portal.</p>
        <div className="mt-2 text-sm text-red-500 font-bold flex items-center">
          <Award size={14} className="mr-1" /> GPA Requirement: 2.5+ required for graduation
        </div>
      </header>

      {/* Tabs */}
      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button onClick={() => setActiveTab('courses')} className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'courses' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
          <BookOpen className="mr-2" size={18} /> Courses
        </button>
        <button onClick={() => setActiveTab('external')} className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'external' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
          <Globe className="mr-2" size={18} /> External Links
        </button>
        <button onClick={() => setActiveTab('scholarships')} className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'scholarships' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
          <DollarSign className="mr-2" size={18} /> Scholarships
        </button>
        <button onClick={() => setActiveTab('transcript')} className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'transcript' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
          <FileText className="mr-2" size={18} /> Transcript
        </button>
        <button onClick={() => setActiveTab('profile')} className={`px-5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'profile' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
          <User className="mr-2" size={18} /> Profile & ID
        </button>
      </div>

      {/* COURSES TAB */}
      {activeTab === 'courses' && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 animate-fade-in">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col group">
               <div className="p-6 flex-1">
                 <div className="flex justify-between items-start mb-4">
                   <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wide">
                     {course.duration} • {course.credits} Credits
                   </span>
                   {course.isCompleted ? <CheckCircleBadge /> : course.enrolled && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-bold">In Progress</span>
                   )}
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                 <p className="text-sm text-slate-500 mb-4 line-clamp-2">{course.description}</p>
                 
                 {course.enrolled && (
                    <div className="mb-4">
                       <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                          <span>{course.progress || 0}% Completed</span>
                          <span>{course.modules.filter(m=>m.isCompleted).length}/{course.modules.length} Modules</span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 transition-all duration-500" style={{width: `${course.progress || 0}%`}}></div>
                       </div>
                    </div>
                 )}

                 <div className="space-y-2 mt-4">
                   {course.skills.slice(0, 3).map(skill => (
                     <div key={skill} className="flex items-center text-xs text-slate-600 font-medium">
                       <Star size={12} className="text-yellow-400 mr-2" /> {skill}
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="p-4 bg-slate-50 border-t border-slate-100">
                 {!course.enrolled ? (
                    <button 
                      onClick={() => handleEnroll(course.id)}
                      className="w-full py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold text-sm transition-colors shadow-sm"
                    >
                      Start Course
                    </button>
                 ) : course.isCompleted ? (
                    <button 
                      onClick={() => handleDownloadCertificate(course.title)}
                      className="w-full py-2 bg-green-600 text-white hover:bg-green-700 rounded-xl font-bold text-sm transition-colors flex items-center justify-center shadow-sm"
                    >
                      <Download size={16} className="mr-2" /> Download Certificate
                    </button>
                 ) : (
                    <button 
                      onClick={() => openCoursePlayer(course)}
                      className="w-full py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-xl font-bold text-sm transition-colors flex items-center justify-center"
                    >
                      <PlayCircle size={16} className="mr-2" /> Resume Learning
                    </button>
                 )}
               </div>
            </div>
          ))}
        </div>
      )}

      {/* EXTERNAL RESOURCES TAB */}
      {activeTab === 'external' && (
        <div className="animate-fade-in">
           <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8 flex items-start">
              <Globe className="text-indigo-600 mt-1 mr-4" size={24} />
              <div>
                 <h3 className="font-bold text-indigo-900 text-lg">External Learning Partners</h3>
                 <p className="text-indigo-700 text-sm mt-1">Explore accredited courses from top universities worldwide. These courses may offer separate certifications.</p>
              </div>
           </div>
           
           <div className="grid gap-6 md:grid-cols-2">
             {EXTERNAL_RESOURCES.map(res => (
               <div key={res.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between">
                 <div>
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{res.platform}</span>
                      {res.isFree && <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">Free</span>}
                   </div>
                   <h3 className="font-bold text-xl text-slate-800 mb-2">{res.title}</h3>
                   <p className="text-slate-600 text-sm mb-4">{res.description}</p>
                   <div className="flex flex-wrap gap-2 mb-6">
                     {res.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium">#{tag}</span>
                     ))}
                   </div>
                 </div>
                 <a href={res.url} target="_blank" rel="noreferrer" className="w-full py-3 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center">
                   Visit Website <ExternalLink size={16} className="ml-2" />
                 </a>
               </div>
             ))}
           </div>
        </div>
      )}

      {/* SCHOLARSHIPS TAB */}
      {activeTab === 'scholarships' && (
         <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
            {SCHOLARSHIPS.map(scholarship => (
               <div key={scholarship.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">{scholarship.organization}</span>
                     <span className="text-xs font-bold text-slate-400 flex items-center"><Calendar size={12} className="mr-1"/> Deadline: {scholarship.deadline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{scholarship.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                     <MapPin size={14} className="mr-1" /> {scholarship.location}
                     <span className="mx-2">•</span>
                     <span className="font-bold text-emerald-600">{scholarship.amount}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{scholarship.description}</p>
                  
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                     <span className="text-xs font-bold text-slate-400 uppercase">Eligibility</span>
                     <p className="text-sm font-semibold text-slate-700">{scholarship.eligibility}</p>
                  </div>

                  <a href={scholarship.applyLink} target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">
                     Apply Now
                  </a>
               </div>
            ))}
         </div>
      )}

      {/* TRANSCRIPT TAB */}
      {activeTab === 'transcript' && (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-fade-in">
          <div className="flex justify-between items-center border-b border-slate-100 pb-6 mb-6">
             <div className="flex items-center">
                <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">BN</div>
                <div>
                   <h2 className="text-2xl font-bold text-slate-800">Official Transcript</h2>
                   <p className="text-slate-500">BioNurse Academy of Health Sciences</p>
                </div>
             </div>
             <div className="text-right">
                <div className="text-sm font-bold text-slate-400 uppercase">Cumulative GPA</div>
                <div className={`text-4xl font-bold ${parseFloat(student.gpa || "0") >= 2.5 ? 'text-indigo-600' : 'text-red-500'}`}>{student.gpa || "0.0"}</div>
                {parseFloat(student.gpa || "0") < 2.5 && <div className="text-xs text-red-500 font-bold mt-1">Min. 2.5 Required</div>}
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
             <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Student Name</span>
                <div className="font-bold text-slate-800 text-lg">{student.fullName || "Not Set"}</div>
             </div>
             <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Student ID</span>
                <div className="font-bold text-slate-800 text-lg">{student.studentId || "N/A"}</div>
             </div>
             <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Program</span>
                <div className="font-bold text-slate-800 text-lg">{student.program || "General Nursing"}</div>
             </div>
             <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Status</span>
                <div className="font-bold text-green-600 text-lg">Active / Good Standing</div>
             </div>
          </div>

          <table className="w-full text-left mb-8">
             <thead>
                <tr className="border-b-2 border-slate-100">
                   <th className="py-3 text-sm font-bold text-slate-500 uppercase">Course Title</th>
                   <th className="py-3 text-sm font-bold text-slate-500 uppercase">Credits</th>
                   <th className="py-3 text-sm font-bold text-slate-500 uppercase">Status</th>
                   <th className="py-3 text-sm font-bold text-slate-500 uppercase text-right">Grade</th>
                </tr>
             </thead>
             <tbody>
                {courses.map((course, idx) => (
                   <tr key={idx} className="border-b border-slate-50">
                      <td className="py-4 font-semibold text-slate-700">{course.title}</td>
                      <td className="py-4 text-slate-600">{course.credits}</td>
                      <td className="py-4">
                         {course.isCompleted 
                            ? <span className="text-green-600 font-bold flex items-center"><CheckCircle2 size={14} className="mr-1"/> Completed</span>
                            : course.enrolled 
                               ? <span className="text-orange-500 font-bold">In Progress</span> 
                               : <span className="text-slate-400">Not Started</span>
                         }
                      </td>
                      <td className="py-4 text-right font-bold text-slate-800">{course.isCompleted ? 'A' : '-'}</td>
                   </tr>
                ))}
             </tbody>
          </table>
          
          <div className="text-center">
             <button onClick={() => window.print()} className="px-6 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors">
               <Printer size={18} className="inline mr-2" /> Print Transcript
             </button>
          </div>
        </div>
      )}

      {/* PROFILE TAB & ID CARD */}
      {activeTab === 'profile' && (
         <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
            {/* Input Form */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <School className="mr-3 text-indigo-600" /> Student Profile
               </h3>
               
               <div className="space-y-4">
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Full Legal Name</label>
                     <input type="text" value={student.fullName} onChange={e => setStudent({...student, fullName: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Sarah J. Doe" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Student ID</label>
                        <input type="text" value={student.studentId} onChange={e => setStudent({...student, studentId: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="ID-12345" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Current Level</label>
                        <select value={student.level} onChange={e => setStudent({...student, level: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500">
                           <option value="">Select Level</option>
                           <option value="Freshman">Freshman</option>
                           <option value="Sophomore">Sophomore</option>
                           <option value="Junior">Junior</option>
                           <option value="Senior">Senior</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Institution</label>
                     <input type="text" value={student.institution} onChange={e => setStudent({...student, institution: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Tubman University" />
                  </div>
                  <div>
                     <label className="block text-sm font-bold text-slate-700 mb-1">Program of Study</label>
                     <input type="text" value={student.program} onChange={e => setStudent({...student, program: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. BSN Nursing" />
                  </div>
                  
                  <button onClick={handleSaveProfile} className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg transition-all mt-4">
                     Save Profile & Generate ID
                  </button>
               </div>
            </div>

            {/* Digital ID Card */}
            <div className="flex flex-col items-center justify-center">
               <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 w-full max-w-sm rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden border-t border-indigo-500/50">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm">
                           <CreditCard size={20} className="text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold leading-tight">BioNurse Academy</h4>
                           <p className="text-[10px] text-indigo-200 uppercase tracking-widest">Student Identity</p>
                        </div>
                     </div>
                     <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">2024-2025</div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                     <div className="w-24 h-24 bg-indigo-800 rounded-2xl border-2 border-indigo-400 flex items-center justify-center mr-4 overflow-hidden relative">
                        {student.fullName ? (
                           <div className="text-3xl font-bold opacity-50">{student.fullName.charAt(0)}</div>
                        ) : <User size={40} className="opacity-50"/>}
                     </div>
                     <div>
                        <h3 className="text-xl font-bold truncate max-w-[150px]">{student.fullName || "Student Name"}</h3>
                        <p className="text-sm text-indigo-300 mb-1">{student.program || "Program Name"}</p>
                        <span className="inline-block bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                     <div>
                        <div className="text-indigo-300 uppercase text-[10px]">Student ID</div>
                        <div className="font-mono font-bold tracking-wide">{student.studentId || "0000000"}</div>
                     </div>
                     <div>
                        <div className="text-indigo-300 uppercase text-[10px]">Level</div>
                        <div className="font-bold">{student.level || "N/A"}</div>
                     </div>
                     <div className="col-span-2">
                        <div className="text-indigo-300 uppercase text-[10px]">Affiliation</div>
                        <div className="font-bold truncate">{student.institution || "BioNurse Pro Online"}</div>
                     </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-indigo-500/30 flex justify-between items-end">
                     <div className="w-16 h-8 bg-white/20 rounded"></div> {/* Barcode placeholder */}
                     <div className="text-[8px] text-indigo-300">Authorized by BioNurse Pro</div>
                  </div>
               </div>
               
               <button onClick={() => window.print()} className="mt-6 text-slate-400 hover:text-indigo-600 flex items-center text-sm font-bold transition-colors">
                  <Download size={16} className="mr-2" /> Download ID Card
               </button>
            </div>
         </div>
      )}
    </div>
  );
};

const CheckCircleBadge = () => (
  <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-lg">
    <CheckCircle2 size={14} className="mr-1" />
    <span className="text-[10px] font-bold uppercase">Completed</span>
  </div>
);

export default Academy;