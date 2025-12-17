import { Patient, CertificateCourse, ActivityLog, StudentProfileData } from '../types';
import { MOCK_PATIENTS } from '../data/medicalData';
import { CERTIFICATE_COURSES } from '../data/academyData';

const KEYS = {
  PATIENTS: 'bn_patients_v1',
  COURSES: 'bn_courses_v2', // Version bumped for new structure
  ACTIVITY: 'bn_activity_v1',
  STUDENT: 'bn_student_profile_v1'
};

// --- Student Profile ---
export const getStudentProfile = (): StudentProfileData => {
  try {
    const stored = localStorage.getItem(KEYS.STUDENT);
    return stored ? JSON.parse(stored) : {
      fullName: '',
      studentId: '',
      institution: '',
      program: '',
      level: ''
    };
  } catch (e) { return { fullName: '', studentId: '', institution: '', program: '', level: '' }; }
};

export const saveStudentProfile = (data: StudentProfileData) => {
  localStorage.setItem(KEYS.STUDENT, JSON.stringify(data));
};

// --- Patients ---
export const getPatients = (): Patient[] => {
  try {
    const stored = localStorage.getItem(KEYS.PATIENTS);
    return stored ? JSON.parse(stored) : MOCK_PATIENTS;
  } catch (e) { return MOCK_PATIENTS; }
};

export const savePatients = (patients: Patient[]) => {
  localStorage.setItem(KEYS.PATIENTS, JSON.stringify(patients));
};

// --- Courses ---
export const getCourses = (): CertificateCourse[] => {
  try {
    const stored = localStorage.getItem(KEYS.COURSES);
    const storedCourses: CertificateCourse[] = stored ? JSON.parse(stored) : [];
    
    if (storedCourses.length === 0) return CERTIFICATE_COURSES;

    // Merge strategy: update static definitions with stored progress
    return CERTIFICATE_COURSES.map(defCourse => {
      const existing = storedCourses.find(sc => sc.id === defCourse.id);
      if (existing) {
        return {
          ...defCourse,
          enrolled: existing.enrolled,
          isCompleted: existing.isCompleted,
          progress: existing.progress,
          // Merge modules state
          modules: defCourse.modules.map(m => {
            const existingModule = existing.modules?.find(em => em.id === m.id);
            return existingModule ? { ...m, isCompleted: existingModule.isCompleted } : m;
          })
        };
      }
      return defCourse;
    });
  } catch (e) { return CERTIFICATE_COURSES; }
};

export const saveCourses = (courses: CertificateCourse[]) => {
  localStorage.setItem(KEYS.COURSES, JSON.stringify(courses));
};

// --- Activity Log ---
export const getActivities = (): ActivityLog[] => {
  try {
    const stored = localStorage.getItem(KEYS.ACTIVITY);
    return stored ? JSON.parse(stored) : [
      { id: 'init', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), text: 'System initialized', type: 'routine' }
    ];
  } catch (e) { return []; }
};

export const addActivity = (text: string, type: 'alert' | 'routine' | 'note' | 'success') => {
  const activities = getActivities();
  const newActivity: ActivityLog = {
    id: Date.now().toString(),
    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    text,
    type
  };
  // Keep last 50
  const updated = [newActivity, ...activities].slice(0, 50);
  localStorage.setItem(KEYS.ACTIVITY, JSON.stringify(updated));
  
  // Dispatch event for real-time updates across components
  window.dispatchEvent(new Event('activityUpdated'));
  
  return updated;
};