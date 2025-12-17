import { LabValue, Patient, DrugEntry, Abbreviation, MedicalSpecialty, DiseaseEntry } from "../types";

export const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'Sarah Connor', age: 34, gender: 'F', condition: 'Acute Abdominal Pain', triage: 'Urgent', waitingTime: '15m', avatarColor: 'bg-orange-500' },
  { id: '2', name: 'John Rambo', age: 45, gender: 'M', condition: 'Laceration (Arm)', triage: 'Stable', waitingTime: '45m', avatarColor: 'bg-blue-500' },
  { id: '3', name: 'Ellen Ripley', age: 29, gender: 'F', condition: 'Respiratory Distress', triage: 'Critical', waitingTime: '2m', avatarColor: 'bg-red-600' },
  { id: '4', name: 'James Logan', age: 55, gender: 'M', condition: 'Hypertension Follow-up', triage: 'Stable', waitingTime: '10m', avatarColor: 'bg-teal-500' },
  { id: '5', name: 'Tony Stark', age: 42, gender: 'M', condition: 'Chest Palpitations', triage: 'Urgent', waitingTime: '20m', avatarColor: 'bg-orange-500' },
];

export const LAB_VALUES: LabValue[] = [
  // Hematology
  { category: 'Hematology', test: 'Hemoglobin (Male)', normalRange: '13.5 - 17.5', units: 'g/dL' },
  { category: 'Hematology', test: 'Hemoglobin (Female)', normalRange: '12.0 - 15.5', units: 'g/dL' },
  { category: 'Hematology', test: 'WBC Count', normalRange: '4.5 - 11.0', units: 'x 10³/µL' },
  { category: 'Hematology', test: 'Platelets', normalRange: '150 - 450', units: 'x 10³/µL' },
  { category: 'Hematology', test: 'Hematocrit (Male)', normalRange: '41 - 50', units: '%' },
  { category: 'Hematology', test: 'Hematocrit (Female)', normalRange: '36 - 48', units: '%' },
  
  // Electrolytes (BMP)
  { category: 'Chemistry', test: 'Sodium (Na)', normalRange: '135 - 145', units: 'mEq/L' },
  { category: 'Chemistry', test: 'Potassium (K)', normalRange: '3.5 - 5.0', units: 'mEq/L' },
  { category: 'Chemistry', test: 'Chloride (Cl)', normalRange: '98 - 106', units: 'mEq/L' },
  { category: 'Chemistry', test: 'Bicarbonate (CO2)', normalRange: '23 - 29', units: 'mEq/L' },
  { category: 'Chemistry', test: 'BUN', normalRange: '7 - 20', units: 'mg/dL' },
  { category: 'Chemistry', test: 'Creatinine', normalRange: '0.6 - 1.2', units: 'mg/dL' },
  { category: 'Chemistry', test: 'Glucose (Fasting)', normalRange: '70 - 99', units: 'mg/dL' },
  { category: 'Chemistry', test: 'Calcium', normalRange: '8.5 - 10.2', units: 'mg/dL' },

  // Liver Function
  { category: 'Liver', test: 'ALT', normalRange: '7 - 56', units: 'U/L' },
  { category: 'Liver', test: 'AST', normalRange: '10 - 40', units: 'U/L' },
  { category: 'Liver', test: 'ALP', normalRange: '44 - 147', units: 'U/L' },
  { category: 'Liver', test: 'Bilirubin (Total)', normalRange: '0.1 - 1.2', units: 'mg/dL' },
  { category: 'Liver', test: 'Albumin', normalRange: '3.4 - 5.4', units: 'g/dL' },

  // Lipids
  { category: 'Lipids', test: 'Total Cholesterol', normalRange: '< 200', units: 'mg/dL' },
  { category: 'Lipids', test: 'LDL (Bad)', normalRange: '< 100', units: 'mg/dL' },
  { category: 'Lipids', test: 'HDL (Good)', normalRange: '> 60', units: 'mg/dL' },
  { category: 'Lipids', test: 'Triglycerides', normalRange: '< 150', units: 'mg/dL' },

  // Coagulation
  { category: 'Coagulation', test: 'PT', normalRange: '11 - 13.5', units: 'seconds' },
  { category: 'Coagulation', test: 'INR (Normal)', normalRange: '0.8 - 1.1', units: 'ratio' },
  { category: 'Coagulation', test: 'PTT', normalRange: '25 - 35', units: 'seconds' },

  // ABG
  { category: 'Blood Gas', test: 'pH', normalRange: '7.35 - 7.45', units: '' },
  { category: 'Blood Gas', test: 'pCO2', normalRange: '35 - 45', units: 'mmHg' },
  { category: 'Blood Gas', test: 'pO2', normalRange: '80 - 100', units: 'mmHg' },
  { category: 'Blood Gas', test: 'HCO3', normalRange: '22 - 26', units: 'mEq/L' },
];

export const DRUG_DB: DrugEntry[] = [
  { name: 'Acetaminophen (Paracetamol)', class: 'Analgesic / Antipyretic', indication: 'Pain, Fever', dose: '500-1000mg q4-6h', sideEffects: 'Hepatotoxicity (high dose)' },
  { name: 'Ibuprofen', class: 'NSAID', indication: 'Inflammation, Pain', dose: '400-800mg q6-8h', sideEffects: 'GI bleeding, renal impairment' },
  { name: 'Amoxicillin', class: 'Antibiotic (Penicillin)', indication: 'Bacterial infections', dose: '500mg q8h', sideEffects: 'Diarrhea, Rash, Anaphylaxis' },
  { name: 'Lisinopril', class: 'ACE Inhibitor', indication: 'Hypertension, HF', dose: '10-40mg daily', sideEffects: 'Dry cough, Hyperkalemia, Angioedema' },
  { name: 'Atorvastatin', class: 'Statin', indication: 'Hyperlipidemia', dose: '10-80mg daily', sideEffects: 'Myopathy, Liver enzyme elevation' },
  { name: 'Metformin', class: 'Biguanide', indication: 'Type 2 Diabetes', dose: '500-1000mg BID', sideEffects: 'GI upset, Lactic acidosis' },
  { name: 'Albuterol (Salbutamol)', class: 'Beta-2 Agonist', indication: 'Asthma, COPD', dose: '90mcg 2 puffs q4-6h', sideEffects: 'Tremors, Tachycardia' },
  { name: 'Omeprazole', class: 'PPI', indication: 'GERD, Ulcers', dose: '20-40mg daily', sideEffects: 'Headache, B12 deficiency (long term)' },
  { name: 'Amlodipine', class: 'Calcium Channel Blocker', indication: 'Hypertension', dose: '5-10mg daily', sideEffects: 'Edema, Flushing' },
  { name: 'Levothyroxine', class: 'Thyroid Hormone', indication: 'Hypothyroidism', dose: '25-200mcg daily', sideEffects: 'Hyperthyroidism symptoms' },
  { name: 'Furosemide (Lasix)', class: 'Loop Diuretic', indication: 'Edema, Heart Failure', dose: '20-80mg daily', sideEffects: 'Hypokalemia, Dehydration' },
  { name: 'Azithromycin', class: 'Antibiotic (Macrolide)', indication: 'Pneumonia, Chlamydia', dose: '500mg day 1, then 250mg', sideEffects: 'QT prolongation, GI upset' },
  { name: 'Hydrochlorothiazide', class: 'Thiazide Diuretic', indication: 'Hypertension', dose: '12.5-25mg daily', sideEffects: 'Hypokalemia, Hyponatremia' },
  { name: 'Gabapentin', class: 'Anticonvulsant', indication: 'Neuropathic pain', dose: '300-600mg TID', sideEffects: 'Drowsiness, Dizziness' },
  { name: 'Prednisone', class: 'Corticosteroid', indication: 'Inflammation', dose: '5-60mg daily', sideEffects: 'Hyperglycemia, Insomnia, Weight gain' }
];

export const ABBREVIATIONS: Abbreviation[] = [
  { term: 'bid', definition: 'Twice a day (bis in die)', category: 'Frequency' },
  { term: 'tid', definition: 'Three times a day (ter in die)', category: 'Frequency' },
  { term: 'qid', definition: 'Four times a day (quater in die)', category: 'Frequency' },
  { term: 'ac', definition: 'Before meals (ante cibum)', category: 'Timing' },
  { term: 'pc', definition: 'After meals (post cibum)', category: 'Timing' },
  { term: 'po', definition: 'By mouth (per os)', category: 'Route' },
  { term: 'npo', definition: 'Nothing by mouth (nil per os)', category: 'Diet' },
  { term: 'prn', definition: 'As needed (pro re nata)', category: 'Frequency' },
  { term: 'stat', definition: 'Immediately', category: 'Priority' },
  { term: 'IM', definition: 'Intramuscular', category: 'Route' },
  { term: 'IV', definition: 'Intravenous', category: 'Route' },
  { term: 'SC/SQ', definition: 'Subcutaneous', category: 'Route' },
  { term: 'hs', definition: 'At bedtime (hora somni)', category: 'Timing' },
  { term: 'gtt', definition: 'Drops', category: 'Measurement' },
  { term: 'SOAP', definition: 'Subjective, Objective, Assessment, Plan', category: 'Documentation' },
  { term: 'NKDA', definition: 'No Known Drug Allergies', category: 'Assessment' },
  { term: 'WNL', definition: 'Within Normal Limits', category: 'Assessment' },
  { term: 'Dx', definition: 'Diagnosis', category: 'General' },
  { term: 'Hx', definition: 'History', category: 'General' },
  { term: 'Tx', definition: 'Treatment', category: 'General' },
  { term: 'Rx', definition: 'Prescription', category: 'General' },
  { term: 'VS', definition: 'Vital Signs', category: 'Assessment' },
  { term: 'BP', definition: 'Blood Pressure', category: 'Vitals' },
  { term: 'HR', definition: 'Heart Rate', category: 'Vitals' },
  { term: 'RR', definition: 'Respiratory Rate', category: 'Vitals' },
  { term: 'O2 Sat', definition: 'Oxygen Saturation', category: 'Vitals' },
  { term: 'c/o', definition: 'Complains of', category: 'Documentation' }
];

export const MEDICAL_SPECIALTIES: MedicalSpecialty[] = [
  { id: '1', name: 'Cardiologist', title: 'Heart Specialist', description: 'Diagnoses and treats diseases of the cardiovascular system.', conditions: ['Heart Failure', 'Arrhythmia', 'Hypertension', 'Coronary Artery Disease'] },
  { id: '2', name: 'Neurologist', title: 'Brain & Nerve Specialist', description: 'Treats disorders of the brain, spinal cord, and nerves.', conditions: ['Stroke', 'Epilepsy', 'Migraine', 'Multiple Sclerosis'] },
  { id: '3', name: 'Dermatologist', title: 'Skin Specialist', description: 'Specializes in conditions affecting the skin, hair, and nails.', conditions: ['Acne', 'Eczema', 'Psoriasis', 'Skin Cancer'] },
  { id: '4', name: 'Pediatrician', title: 'Child Specialist', description: 'Provides medical care for infants, children, and adolescents.', conditions: ['Growth Disorders', 'Childhood Infections', 'Vaccinations', 'Developmental Issues'] },
  { id: '5', name: 'Endocrinologist', title: 'Hormone Specialist', description: 'Treats problems related to glands and hormones.', conditions: ['Diabetes', 'Thyroid Disorders', 'Osteoporosis', 'Infertility'] },
  { id: '6', name: 'Gastroenterologist', title: 'Digestive Specialist', description: 'Treats the digestive system including stomach and intestines.', conditions: ['GERD', 'IBS', 'Crohn’s Disease', 'Liver Disease'] },
  { id: '7', name: 'Oncologist', title: 'Cancer Specialist', description: 'Diagnoses and provides treatment for various cancers.', conditions: ['Leukemia', 'Solid Tumors', 'Lymphoma', 'Melanoma'] },
  { id: '8', name: 'Orthopedist', title: 'Bone & Joint Specialist', description: 'Treats injuries and diseases of the musculoskeletal system.', conditions: ['Fractures', 'Arthritis', 'Back Pain', 'Sports Injuries'] },
  { id: '9', name: 'Pulmonologist', title: 'Lung Specialist', description: 'Specializes in the respiratory system.', conditions: ['Asthma', 'COPD', 'Pneumonia', 'Tuberculosis'] },
  { id: '10', name: 'Psychiatrist', title: 'Mental Health Specialist', description: 'Diagnoses and treats mental, emotional, and behavioral disorders.', conditions: ['Depression', 'Anxiety', 'Bipolar Disorder', 'Schizophrenia'] },
  { id: '11', name: 'Nephrologist', title: 'Kidney Specialist', description: 'Treats kidney diseases and high blood pressure.', conditions: ['Kidney Failure', 'Kidney Stones', 'Hypertension', 'Electrolyte Disorders'] },
  { id: '12', name: 'Ophthalmologist', title: 'Eye Specialist', description: 'Medical and surgical eye care.', conditions: ['Cataracts', 'Glaucoma', 'Macular Degeneration', 'Refractive Errors'] },
  { id: '13', name: 'Otolaryngologist (ENT)', title: 'Ear, Nose & Throat', description: 'Treats conditions of the ear, nose, and throat.', conditions: ['Sinusitis', 'Hearing Loss', 'Tonsillitis', 'Vertigo'] },
  { id: '14', name: 'Rheumatologist', title: 'Arthritis Specialist', description: 'Treats autoimmune diseases and arthritis.', conditions: ['Rheumatoid Arthritis', 'Lupus', 'Gout', 'Fibromyalgia'] },
  { id: '15', name: 'Urologist', title: 'Urinary Tract Specialist', description: 'Treats urinary tract of males and females and male reproductive system.', conditions: ['UTIs', 'Prostate Issues', 'Incontinence', 'Kidney Stones'] },
  { id: '16', name: 'Hematologist', title: 'Blood Specialist', description: 'Specializes in diseases of the blood and bone marrow.', conditions: ['Anemia', 'Hemophilia', 'Sickle Cell Disease', 'Clotting Disorders'] },
];

export const DISEASE_DB: DiseaseEntry[] = [
  { name: 'Hypertension', category: 'Cardiovascular', symptoms: 'Often none; headaches, shortness of breath, nosebleeds.', treatment: 'Lifestyle changes, ACE inhibitors, Diuretics.' },
  { name: 'Type 2 Diabetes', category: 'Endocrine', symptoms: 'Increased thirst, frequent urination, hunger, fatigue.', treatment: 'Metformin, Insulin, Diet, Exercise.' },
  { name: 'Asthma', category: 'Respiratory', symptoms: 'Wheezing, shortness of breath, chest tightness.', treatment: 'Inhalers (Albuterol, Steroids), avoiding triggers.' },
  { name: 'Gastroesophageal Reflux (GERD)', category: 'Gastrointestinal', symptoms: 'Heartburn, regurgitation, chest pain.', treatment: 'PPIs (Omeprazole), Antacids, lifestyle changes.' },
  { name: 'Migraine', category: 'Neurological', symptoms: 'Severe throbbing pain, light sensitivity, nausea.', treatment: 'Pain relievers, Triptans, rest in dark room.' },
  { name: 'Osteoarthritis', category: 'Musculoskeletal', symptoms: 'Joint pain, stiffness, swelling.', treatment: 'Pain relievers, physical therapy, exercise.' },
  { name: 'Common Cold', category: 'Infectious', symptoms: 'Runny nose, sore throat, cough, sneezing.', treatment: 'Rest, fluids, symptom relief (no antibiotics).' },
  { name: 'Influenza (Flu)', category: 'Infectious', symptoms: 'Fever, chills, muscle aches, cough, fatigue.', treatment: 'Antivirals (if early), rest, fluids, vaccination.' },
  { name: 'Depression', category: 'Mental Health', symptoms: 'Persistent sadness, loss of interest, fatigue, sleep issues.', treatment: 'Therapy, Antidepressants, lifestyle changes.' },
  { name: 'Urinary Tract Infection (UTI)', category: 'Urinary', symptoms: 'Burning urination, frequency, cloudy urine.', treatment: 'Antibiotics, increased fluid intake.' },
  { name: 'Eczema', category: 'Dermatological', symptoms: 'Itchy, red, dry, cracked skin.', treatment: 'Moisturizers, topical steroids, avoiding triggers.' },
  { name: 'Pneumonia', category: 'Respiratory', symptoms: 'Cough with phlegm, fever, chills, difficulty breathing.', treatment: 'Antibiotics (if bacterial), fluids, rest.' },
  { name: 'Anemia', category: 'Hematological', symptoms: 'Fatigue, weakness, pale skin, dizziness.', treatment: 'Iron supplements, vitamin B12, diet changes.' },
  { name: 'Malaria', category: 'Infectious', symptoms: 'Fever, chills, sweating, headache, nausea.', treatment: 'Antimalarial drugs (Artemisinin-based combination therapy).' },
  { name: 'Typhoid Fever', category: 'Infectious', symptoms: 'High fever, weakness, stomach pain, headache.', treatment: 'Antibiotics (Ciprofloxacin, Azithromycin), fluids.' }
];
