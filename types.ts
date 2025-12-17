export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export type AIProvider = 'gemini' | 'openai';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  LEARNING = 'LEARNING',
  MEDICAL_TOOLS = 'MEDICAL_TOOLS',
  LAB_REFERENCE = 'LAB_REFERENCE',
  DRUG_REFERENCE = 'DRUG_REFERENCE',
  SBAR_TOOL = 'SBAR_TOOL',
  ABBREVIATIONS = 'ABBREVIATIONS',
  SPECIALTIES = 'SPECIALTIES',
  ENCYCLOPEDIA = 'ENCYCLOPEDIA',
  NURSING_NOTES = 'NURSING_NOTES',
  ACADEMY = 'ACADEMY',
  PATIENTS = 'PATIENTS',
  PROFILE = 'PROFILE',
  DONATE = 'DONATE',
  VITALS_SCANNER = 'VITALS_SCANNER'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0 for A, 1 for B, etc.
}

export interface QuizModule {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

// New Types for EMR Features
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'M' | 'F';
  condition: string;
  triage: 'Critical' | 'Urgent' | 'Stable';
  waitingTime: string;
  avatarColor: string;
}

export interface ActivityLog {
  id: string;
  time: string;
  text: string;
  type: 'alert' | 'routine' | 'note' | 'success';
}

export interface LabValue {
  category: string;
  test: string;
  normalRange: string;
  units: string;
}

export interface DrugEntry {
  name: string;
  class: string;
  indication: string;
  dose: string;
  sideEffects: string;
}

export interface Abbreviation {
  term: string;
  definition: string;
  category: string;
}

export interface MedicalSpecialty {
  id: string;
  name: string;
  title: string;
  description: string;
  conditions: string[];
}

export interface DiseaseEntry {
  name: string;
  category: string;
  symptoms: string;
  treatment: string;
}

export interface NoteQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface NoteTopic {
  id: string;
  title: string;
  content: string; // Markdown-style text
  tags: string[];
  imageUrl?: string; // URL for apparatus/diagrams
  videoUrl?: string; // YouTube Embed URL
  readTime?: string; // Estimated reading time
  quiz?: NoteQuizQuestion[]; // Embedded quiz for the note
}

export interface NoteCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  yearLevel?: string; // 'Freshman', 'Sophomore', etc.
  topics: NoteTopic[];
}

// Academy Features
export interface CourseModule {
  id: string;
  title: string;
  content: string; // Markdown/HTML content for the lesson
  isCompleted?: boolean;
}

export interface CertificateCourse {
  id: string;
  title: string;
  provider: string;
  duration: string;
  description: string;
  skills: string[];
  modules: CourseModule[]; // Notes/Lessons
  externalLink?: string; // If it's a course from another website
  isCompleted?: boolean;
  enrolled?: boolean;
  progress?: number;
  credits?: number; // For GPA calculation
  grade?: string;
  gradeValue?: number; // 4.0 scale
}

export interface Scholarship {
  id: string;
  title: string;
  organization: string;
  amount: string;
  deadline: string;
  location: string; // e.g., "Liberia", "International"
  description: string;
  eligibility: string;
  applyLink: string;
}

export interface ExternalResource {
  id: string;
  title: string;
  platform: string;
  url: string;
  description: string;
  tags: string[];
  isFree: boolean;
}

export interface StudentProfileData {
  fullName: string;
  studentId: string;
  institution: string;
  program: string; // e.g., BSN, ADN
  level: string; // Freshman, etc.
  enrollmentDate?: string;
  gpa?: string;
}