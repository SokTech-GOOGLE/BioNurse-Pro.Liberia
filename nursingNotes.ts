import { NoteCategory } from "../types";

export const NURSING_NOTES_DB: NoteCategory[] = [
  // --- YEAR 1: FRESHMAN (Foundations & History) ---
  {
    id: "freshman-foundations",
    title: "Year 1: Foundations & History of Nursing",
    description: "Core principles of nursing practice, historical perspectives from Florence Nightingale, and fundamental skills.",
    color: "bg-emerald-600",
    yearLevel: "Freshman",
    topics: [
      {
        id: "nightingale-notes",
        title: "Historical Foundations: Notes on Nursing (1859)",
        readTime: "25 Hours",
        tags: ["History", "Theory", "Environment", "Nightingale"],
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Florence+Nightingale",
        content: `
**INTRODUCTION: THE NATURE OF NURSING**
"Shall we begin by taking it as a general principle—that all disease, at some period or other of its course, is more or less a reparative process, not necessarily accompanied with suffering: an effort of nature to remedy a process of poisoning or of decay... The symptoms or the sufferings generally considered to be inevitable and incident to the disease are very often not symptoms of the disease at all, but of something quite different—of the want of fresh air, or of light, or of warmth, or of quiet, or of cleanliness, or of punctuality and care in the administration of diet, of each or of all of these." — *Florence Nightingale*

**I. VENTILATION AND WARMING**
The very **first canon of nursing**, the first and the last thing upon which a nurse's attention must be fixed, the first essential to the patient, without which all the rest you can do for him is as nothing, with which I had almost said you may leave all the rest alone, is this: **TO KEEP THE AIR HE BREATHES AS PURE AS THE EXTERNAL AIR, WITHOUT CHILLING HIM.**
*   Always air from the air without, and that, too, through those windows, through which the air comes freshest.
*   Never be afraid of open windows then. People don't catch cold in bed. This is a popular fallacy. With proper bed-clothes and hot bottles, if necessary, you can always keep a patient warm in bed, and well ventilate him at the same time.

**II. HEALTH OF HOUSES**
There are five essential points in securing the health of houses:
1.  **Pure Air:** The outer atmosphere shall find its way with ease to every corner.
2.  **Pure Water:** Well water of a very impure kind is used for domestic purposes.
3.  **Efficient Drainage:** All house drains should begin and end outside the walls.
4.  **Cleanliness:** Without cleanliness, within and without your house, ventilation is comparatively useless.
5.  **Light:** A dark house is always an unhealthy house, always an ill-aired house, always a dirty house.

**III. PETTY MANAGEMENT**
All the results of good nursing may be spoiled or utterly negatived by one defect, viz.: in petty management, or, in other words, by not knowing how to manage that what you do when you are there, shall be done when you are not there.
*   The most devoted friend or nurse cannot be always there.
*   "What is done when I am not there?" is the question the person in charge must ask.

**IV. NOISE**
Unnecessary noise, or noise that creates an **expectation** in the mind, is that which hurts a patient. It is rarely the loudness of the noise, the effect upon the organ of the ear itself, which appears to affect the sick.
*   **Whispered conversation** in the same room is absolutely cruel; for it is impossible that the patient's attention should not be involuntarily strained to hear.
*   Never let a patient be waked out of his first sleep.

**V. VARIETY**
To any but an old nurse, or an old patient, the degree would be quite inconceivable to which the nerves of the sick suffer from seeing the same walls, the same ceiling, the same surroundings during a long confinement to one or two rooms.
*   The effect in sickness of beautiful objects, of variety of objects, and especially of brilliancy of colour is hardly at all appreciated.
*   People say the effect is only on the mind. It is no such thing. The effect is on the body, too.

**VI. BED AND BEDDING**
Feverishness is generally supposed to be a symptom of fever—in nine cases out of ten it is a symptom of bedding.
*   The patient has had re-introduced into the body the emanations from himself which day after day and week after week saturate his unaired bedding.
*   **Iron spring bedsteads** are the best.
*   Never use anything but light Witney blankets as bed covering for the sick. The heavy cotton impervious counterpane is bad, for the very reason that it keeps in the emanations from the sick person.

**VII. OBSERVATION OF THE SICK**
The most important practical lesson that can be given to nurses is to teach them what to observe—how to observe—what symptoms indicate improvement—what the reverse—which are of importance—which are of none.
*   It is often thought that medicine is the curative process. It is no such thing; medicine is the surgery of functions, as surgery proper is that of limbs and organs. Neither can do anything but remove obstructions; neither can cure; **nature alone cures.**
        `,
        quiz: [
          { question: "According to Nightingale, what is the 'very first canon of nursing'?", options: ["To keep the patient quiet", "To keep the air as pure as external air without chilling", "To administer diet punctually", "To keep the room dark"], correctAnswer: 1, explanation: "Nightingale states: 'TO KEEP THE AIR HE BREATHES AS PURE AS THE EXTERNAL AIR, WITHOUT CHILLING HIM' is the first and last thing upon which a nurse's attention must be fixed." },
          { question: "Which type of noise does Nightingale describe as most hurtful to a patient?", options: ["Loud noises", "Continuous street noise", "Noise that creates expectation", "Music"], correctAnswer: 2, explanation: "Unnecessary noise, or noise that creates an expectation in the mind (like a whispered conversation), is that which hurts a patient." },
          { question: "Nightingale suggests that feverishness is often a symptom of what, rather than just the disease?", options: ["Diet", "Bedding", "Light", "Noise"], correctAnswer: 1, explanation: "She writes: 'Feverishness is generally supposed to be a symptom of fever—in nine cases out of ten it is a symptom of bedding' due to re-absorption of emanations." },
          { question: "What are the five essential points in securing the health of houses?", options: ["Pure air, water, drainage, cleanliness, light", "Heat, food, quiet, medicine, doctors", "Isolation, fumigation, darkness, silence, rest", "None of the above"], correctAnswer: 0, explanation: "The five points are Pure Air, Pure Water, Efficient Drainage, Cleanliness, and Light." }
        ]
      },
      {
        id: "lab-microscope",
        title: "Laboratory Practical: Advanced Microscopy",
        readTime: "30 Hours",
        tags: ["Freshman", "Lab", "Practical", "Instrumentation"],
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Compound+Microscope+Parts+Diagram",
        videoUrl: "https://www.youtube.com/embed/-b3Ewhf5YhE", 
        content: `
**CHAPTER 1: PRINCIPLES OF MICROSCOPY**

**1.1 Introduction**
The compound light microscope is the cornerstone of biological investigation. Unlike simple magnifying glasses, it utilizes a dual-lens system (objective and ocular) to achieve high magnification. Understanding its mechanics is crucial for identifying blood cells, bacteria, and tissue histology.

**1.2 The Physics of Magnification**
*   **Refraction:** Light bends as it passes through the specimen and lenses.
*   **Resolution:** The ability to distinguish two points as separate. The limit of resolution for a light microscope is approx. 0.2 micrometers (µm).
*   **Total Magnification Formula:** *Total Mag = Ocular Lens Power (10x) × Objective Lens Power (4x, 10x, 40x, 100x)*.
    *   Scanning: 10 × 4 = 40x
    *   Low Power: 10 × 10 = 100x
    *   High Dry: 10 × 40 = 400x
    *   Oil Immersion: 10 × 100 = 1000x

**1.3 Apparatus Anatomy (Detailed)**
*   **Base & Arm:** Structural support. Always carry by holding these two points.
*   **Illuminator (Light Source):** Usually a halogen bulb.
*   **Condenser:** A lens system below the stage that concentrates light onto the specimen. *Critical for resolution.*
*   **Iris Diaphragm:** Located within the condenser. Controls the *contrast* and *depth of field*.
    *   *Closed Diaphragm:* High contrast, low resolution (Good for unstained bacteria).
    *   *Open Diaphragm:* High resolution, low contrast (Good for stained blood smears).
*   **Mechanical Stage:** Holds the slide and allows precise X-Y movement via control knobs.
*   **Nosepiece:** Rotating turret holding the objectives.

**CHAPTER 2: OPERATIONAL PROCEDURE**

**2.1 Slide Preparation (Wet Mount)**
1.  Place a clean glass slide on a flat surface.
2.  Add a drop of water or saline to the center.
3.  Place the specimen (e.g., onion skin, buccal cell) in the drop.
4.  Gently lower a coverslip at a 45° angle to prevent air bubbles. "Bubble Artifacts" look like dark circles with bright centers.

**2.2 Focusing Technique (The "Safe" Method)**
1.  **Start Low:** Always click the Scanning (4x) objective into place.
2.  **Stage Up:** Use the *Coarse Adjustment Knob* to raise the stage fully while looking from the side (not through eyepieces) to avoid crushing the slide.
3.  **Focus Down:** Look through the oculars. Slowly turn the Coarse knob to lower the stage until the image appears.
4.  **Sharpen:** Use the *Fine Adjustment Knob* for clarity.
5.  **Parfocal Capability:** Good microscopes stay in focus when switching lenses. Rotate to 10x, then 40x, using *only* the Fine knob.

**2.3 Oil Immersion (100x)**
*   **Why Oil?** Light refracts (bends) as it leaves the glass slide and enters the air, causing lost data. Immersion oil has the same refractive index as glass, creating a continuous path for light into the lens.
*   **Procedure:**
    1.  Focus on 40x.
    2.  Rotate nosepiece halfway between 40x and 100x.
    3.  Place a drop of Type A Immersion Oil on the slide.
    4.  Click 100x lens *into* the oil.
    5.  Adjust fine focus. **NEVER** go back to 40x once oil is on the slide.

**CHAPTER 3: MAINTENANCE & TROUBLESHOOTING**

*   **Cleaning:** Use only Lint-Free Lens Paper. Kimwipes or tissues will scratch the lens coating.
*   **Storage:** Wrap cord, lower stage, cover with dust jacket.
*   **Troubleshooting:**
    *   *Black Field:* Check if light is on or nosepiece is clicked in place.
    *   *Blurry edges:* Clean the objective lens (oil residue is common on the 40x).
    *   *Floaters:* Rotate the eyepiece. If the dirt rotates, it's on the ocular lens.
        `,
        quiz: [
          { question: "What is the total magnification when using the High Dry (40x) objective?", options: ["40x", "100x", "400x", "1000x"], correctAnswer: 2, explanation: "Total magnification is Ocular (10x) multiplied by Objective (40x) = 400x." },
          { question: "Why is immersion oil used with the 100x objective?", options: ["To lubricate the slide", "To prevent refractive light loss", "To clean the lens", "To kill bacteria"], correctAnswer: 1, explanation: "Oil has the same refractive index as glass, preventing light from bending away from the lens aperture." },
          { question: "Which knob should NEVER be used with high power objectives?", options: ["Fine Adjustment", "Coarse Adjustment", "Mechanical Stage Knob", "Diaphragm Control"], correctAnswer: 1, explanation: "Using the Coarse Adjustment on high power can drive the long lens through the glass slide, breaking both." },
          { question: "If your image has high contrast but low resolution, what should you adjust?", options: ["Open the Iris Diaphragm", "Close the Iris Diaphragm", "Lower the Stage", "Change the Eyepiece"], correctAnswer: 0, explanation: "Opening the diaphragm allows more light cone entry, increasing resolution but lowering contrast." }
        ]
      },
      {
        id: "fund-vitals-practical",
        title: "Clinical Practical: Mastering Vital Signs",
        readTime: "25 Hours",
        tags: ["Freshman", "Clinical", "Skills", "Assessment"],
        videoUrl: "https://www.youtube.com/embed/gYM3s7q_9IQ",
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Vital+Signs+Equipment",
        content: `
**CHAPTER 1: THE PHYSIOLOGY OF VITALS**
Vital signs (TPR-BP) provide a snapshot of the body's hemodynamic and metabolic status. They are the first step in any clinical assessment.

**1.1 Temperature**
*   **Regulation:** Hypothalamus acts as the thermostat.
*   **Heat Production:** Metabolism (BMR), Shivering, Thyroxine.
*   **Heat Loss:** Radiation, Conduction, Convection, Evaporation (Sweating).
*   **Sites & Accuracy:**
    *   *Rectal:* Core temp (Most accurate). Normal ~37.5°C (99.5°F).
    *   *Oral:* Convenient. Affected by hot/cold drinks (wait 15-30 mins). Normal ~37.0°C (98.6°F).
    *   *Axillary:* Safest, least accurate. Normal ~36.5°C (97.7°F).
    *   *Tympanic:* Fast, reflects core (carotid blood supply).

**1.2 Pulse (Heart Rate)**
*   **Mechanism:** Shock wave generated by left ventricular contraction traveling along arteries.
*   **Sites:**
    *   *Radial:* Wrist (Routine).
    *   *Carotid:* Neck (CPR/Emergency).
    *   *Apical:* 5th Intercostal Space, Mid-Clavicular Line (PMI). Use stethoscope.
*   **Assessment:** Rate (60-100 bpm), Rhythm (Regular/Irregular), Amplitude (0 Absent, 1+ Weak, 2+ Normal, 3+ Bounding).
*   **Pulse Deficit:** Difference between Apical and Radial rates. Indicates inefficient contractions (e.g., Atrial Fibrillation).

**1.3 Respiration**
*   **Control:** Medulla Oblongata (CO2 levels drive breathing in healthy people; O2 levels drive it in COPD "Hypoxic Drive").
*   **Assessment:** Rate (12-20 bpm), Depth (Shallow/Deep), Rhythm.
*   **Technique:** **Do not tell the patient.** Count immediately after pulse check while keeping hand on wrist.

**1.4 Blood Pressure**
*   **Definition:** Force of blood against arterial walls. *BP = Cardiac Output × Peripheral Resistance*.
*   **Korotkoff Sounds:**
    *   *Phase I:* First tapping sound (Systolic).
    *   *Phase II/III:* Swishing/Thumping.
    *   *Phase IV:* Muffling.
    *   *Phase V:* Silence (Diastolic).
*   **Common Errors:**
    *   *Cuff too small:* False HIGH reading.
    *   *Cuff too large:* False LOW reading.
    *   *Arm unsupported:* False HIGH (isometric muscle contraction).
    *   *Deflating too fast:* Inaccurate reading.

**CHAPTER 2: ORTHOSTATIC VITALS**
Used to detect hypovolemia or autonomic dysfunction.
1.  Measure BP/HR while patient is supine (wait 5 mins).
2.  Measure immediately upon standing (at 1 and 3 mins).
3.  **Positive Result:** Drop in Systolic >20 mmHg OR Diastolic >10 mmHg OR Heart Rate increase >20 bpm.

**CHAPTER 3: PAIN (THE 5TH VITAL SIGN)**
*   **PQRST Assessment:**
    *   **P**rovocation: What makes it worse/better?
    *   **Q**uality: Sharp, dull, burning?
    *   **R**egion/Radiation: Where is it? Does it travel?
    *   **S**everity: 0-10 scale.
    *   **T**iming: Constant or intermittent?
        `,
        quiz: [
          { question: "A cuff that is too narrow (small) for the patient's arm will result in:", options: ["False Low BP", "False High BP", "Accurate BP", "No reading"], correctAnswer: 1, explanation: "A narrow cuff requires more pressure to compress the artery, leading to a falsely elevated reading." },
          { question: "Where is the Apical Pulse located?", options: ["2nd Intercostal Space, Right Sternal Border", "5th Intercostal Space, Mid-Clavicular Line", "Wrist", "Carotid Artery"], correctAnswer: 1, explanation: "The Point of Maximal Impulse (PMI) or Apical pulse is at the apex of the heart, 5th ICS, MCL." },
          { question: "What is a Pulse Deficit?", options: ["Low heart rate", "High heart rate", "Difference between Apical and Radial rates", "Difference between Systolic and Diastolic BP"], correctAnswer: 2, explanation: "It indicates that some heart contractions are too weak to generate a palpable peripheral pulse." },
          { question: "Which part of the brain controls respiratory drive based on CO2 levels?", options: ["Cerebellum", "Frontal Lobe", "Medulla Oblongata", "Hippocampus"], correctAnswer: 2, explanation: "The respiratory center in the Medulla monitors blood pH and CO2 to regulate breathing rate." }
        ]
      }
    ]
  },

  // --- YEAR 2: SOPHOMORE (Med-Surg & Pharm) ---
  {
    id: "soph-medsurg",
    title: "Year 2: Medical-Surgical Nursing I & II",
    description: "Advanced pathophysiology, nursing interventions, pharmacology, and procedural skills for the adult patient.",
    color: "bg-blue-700",
    yearLevel: "Sophomore",
    topics: [
      {
        id: "skin-wound-care",
        title: "Skin Integrity and Wound Care (Chapter 30)",
        readTime: "60 Hours",
        tags: ["Wounds", "MedSurg", "Clinical", "Assessment"],
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Wound+Healing+Stages",
        content: `
**SCIENTIFIC KNOWLEDGE BASE: NORMAL INTEGUMENT**
The skin is the body's largest organ, comprising 15% of total body weight. It receives one-third of circulating blood volume.
*   **Epidermis:** Outer layer, avascular. Stratum corneum (outermost) protects against dehydration and bacteria.
*   **Dermis:** Middle layer. Contains collagen (tensile strength), fibroblasts (collagen synthesis), blood vessels, and nerves.
*   **Subcutaneous Layer:** Adipose tissue, blood vessels. Provides insulation and cushioning.

**Skin Changes Associated with Ageing:**
*   **Decreased Sensory Perception:** Risk of injury without awareness.
*   **Increased Dryness:** Decreased sebaceous activity.
*   **Thinner Skin:** Reduced collagen/elastin. Risk of tears.
*   **Flattened Dermal-Epidermal Junction:** Increased risk of skin tearing.

**PHASES OF WOUND HEALING**
1.  **Haemostasis:** Vasoconstriction, platelet plug formation, clotting cascade.
2.  **Inflammation (0-3 days):** Vasodilation, capillary permeability. Neutrophils and Macrophages clean the wound. Signs: Redness, heat, swelling, pain.
3.  **Proliferation (2-24 days):** Granulation tissue formation (beefy red, fragile capillary beds), contraction, epithelialization.
4.  **Maturation (24 days to 1 year):** Collagen remodeling. Scar tissue gains strength (only 80% of original strength).

**MODES OF WOUND HEALING**
*   **Primary Intention:** Clean surgical incision, edges approximated (sutured/stapled). Minimal tissue loss. Heals quickly.
*   **Delayed Primary Intention:** Wound left open due to infection/foreign body, then closed later.
*   **Secondary Intention:** Extensive tissue loss (pressure ulcer, open wound). Heals by granulation from the bottom up. Slower, more scarring.

**COMPLICATIONS OF WOUND HEALING**
*   **Dehiscence:** Partial or total separation of wound layers (usually 3-11 days post-op). "Something gave way."
*   **Evisceration:** Total separation with protrusion of visceral organs. **Medical Emergency.** Cover with sterile saline-soaked gauze.
*   **Fistula:** Abnormal passage between two organs or organ and outside.
*   **Infection:** Purulent drainage, malodour, fever, induration.
*   **Hypergranulation:** Granulation tissue grows above skin level.
*   **Keloid:** Overgrowth of scar tissue beyond wound boundaries.

**PRESSURE INJURIES (STAGING)**
*   **Stage 1:** Non-blanchable erythema of intact skin.
*   **Stage 2:** Partial-thickness skin loss (exposed dermis). Pink/red bed or intact blister. No slough.
*   **Stage 3:** Full-thickness skin loss. Fat visible. Slough/eschar may be present. Undermining possible.
*   **Stage 4:** Full-thickness loss with exposed **Bone, Tendon, or Muscle**.
*   **Unstageable:** Base covered by slough/eschar (depth unknown).
*   **Suspected Deep Tissue Injury:** Purple/maroon localized area of discoloured intact skin or blood-filled blister.

**LEG ULCERS**
*   **Venous Leg Ulcers:**
    *   *Cause:* Venous hypertension, valve incompetence.
    *   *Location:* Lower leg (gaiter region), above ankle.
    *   *Appearance:* Shallow, irregular edges, beefy red/granulation, heavy exudate.
    *   *Skin:* Haemosiderin staining (brown), oedema, eczema.
    *   *Tx:* Compression therapy (if arterial flow is adequate).
*   **Arterial Leg Ulcers:**
    *   *Cause:* Peripheral Arterial Disease (PAD), atherosclerosis.
    *   *Location:* Toes, feet, shin, pressure points.
    *   *Appearance:* Punched-out, deep, pale/necrotic base, minimal exudate.
    *   *Skin:* Pale, shiny, hairless, cold feet. Weak/absent pulses. Intermittent claudication.
    *   *Tx:* Revascularization. **No compression.**
*   **Diabetic Foot Ulcers:**
    *   *Cause:* Neuropathy (loss of sensation) + Ischaemia.
    *   *Location:* Plantar surface of foot, metatarsal heads, heels.
    *   *Appearance:* Calloused edge, deep.
    *   *Tx:* Off-loading pressure, glucose control.

**WOUND MANAGEMENT PRINCIPLES (TIME)**
*   **T**issue: Debridement (remove necrotic tissue).
*   **I**nfection/Inflammation: Control bacterial burden.
*   **M**oisture: Balance (not too wet, not too dry).
*   **E**dge: Promote epithelial advancement.
        `,
        quiz: [
          { question: "A patient has a wound with full-thickness tissue loss where bone and tendon are visible. How is this staged?", options: ["Stage 2", "Stage 3", "Stage 4", "Unstageable"], correctAnswer: 2, explanation: "Stage 4 pressure injuries involve full-thickness loss with exposed bone, tendon, or muscle." },
          { question: "Which type of leg ulcer is characterized by a 'punched-out' appearance, pale base, and severe pain especially at night?", options: ["Venous", "Arterial", "Diabetic", "Pressure"], correctAnswer: 1, explanation: "Arterial ulcers are caused by ischemia. They appear punched-out, have little exudate, and are very painful (claudication/rest pain)." },
          { question: "What is the primary intervention for a Stage 1 pressure injury?", options: ["Debridement", "Antibiotics", "Relieve pressure", "Apply heat"], correctAnswer: 2, explanation: "The primary cause is pressure. Relieving the pressure prevents progression to skin breakdown." },
          { question: "During which phase of wound healing does granulation tissue form?", options: ["Haemostasis", "Inflammation", "Proliferation", "Maturation"], correctAnswer: 2, explanation: "The proliferation phase involves angiogenesis, collagen deposition, granulation tissue formation, and epithelialization." }
        ]
      },
      {
        id: "prac-iv-insertion",
        title: "Clinical Practical: Peripheral IV Cannulation",
        readTime: "40 Hours",
        tags: ["Sophomore", "Clinical", "Invasive", "Procedures"],
        videoUrl: "https://www.youtube.com/embed/Rk0Xj7D72GY", 
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=IV+Catheter+Gauge+Chart",
        content: `
**CHAPTER 1: VASCULAR ANATOMY & SELECTION**

**1.1 Anatomy of the Upper Extremity**
*   **Digital Veins:** Fingers. Last resort. Painful, small caliber.
*   **Metacarpal Veins:** Hand dorsum. Good for short term. Avoid in elderly (thin skin).
*   **Cephalic Vein:** "The Intern's Friend". Runs along the radial (thumb) side of the forearm. Usually straight and large.
*   **Basilic Vein:** Ulnar (pinky) side. Large but often rolls. Complication: Proximity to brachial artery and nerve in the antecubital fossa.
*   **Ante-Cubital (AC):** Cephalic/Basilic/Median Cubital. Great for emergencies (large bore), bad for mobility (kinks when arm bends).

**1.2 Gauge Selection**
*   **14G/16G (Orange/Grey):** Massive trauma, rapid blood transfusion, major surgery.
*   **18G (Green):** Standard for blood products, CT contrast, surgery.
*   **20G (Pink):** Most common for adults. Fluids, meds, maintenance.
*   **22G (Blue):** Elderly, difficult veins, slow infusion.
*   **24G (Yellow):** Pediatrics, neonates, very fragile veins.

**CHAPTER 2: THE PROCEDURE**

**2.1 Preparation**
1.  **Check Order:** Verify patient, solution, rate.
2.  **Prime Line:** Flush air out of extension set with saline. *Air embolism risk.*
3.  **Tourniquet:** Apply 4-6 inches above site. Tight enough to impede venous return, loose enough to maintain arterial pulse (check radial pulse).

**2.2 Insertion Technique**
1.  **Cleanse:** Chlorhexidine (preferred) or Alcohol. Friction rub 30s. Allow to **DRY** completely.
2.  **Anchor:** Use non-dominant thumb to pull skin taut *below* the site. Prevents "rolling".
3.  **Approach:** Bevel UP. Angle 15-30 degrees.
4.  **The Flash:** Once blood appears in the chamber (Flashback), you are in the vein.
5.  **Drop & Advance:** Lower angle to almost flush with skin. Advance the *catheter* (plastic) off the needle (stylet). **DO NOT** re-advance the needle (catheter shear risk).
6.  **Tamponade:** Release tourniquet. Press on vein proximal to catheter tip. Retract needle.
7.  **Flush:** Attach saline lock. Flush. Check for swelling (infiltration) or pain.
8.  **Secure:** Tegaderm (transparent dressing) over the hub. Tape "Chevron" style.

**CHAPTER 3: COMPLICATIONS & MANAGEMENT**

**3.1 Infiltration**
*   *Definition:* Non-vesicant fluid leaks into tissue.
*   *Signs:* Coolness, pallor, swelling, slow flow.
*   *Action:* Stop infusion, remove IV, elevate arm, warm/cold compress.

**3.2 Extravasation**
*   *Definition:* Vesicant (irritating) fluid leaks (e.g., Chemo, Dopamine, Calcium).
*   *Signs:* Blistering, necrosis, burning pain.
*   *Action:* **EMERGENCY.** Stop infusion. Aspirate drug if possible. Inject antidote (e.g., Phentolamine for vasopressors).

**3.3 Phlebitis**
*   *Definition:* Inflammation of the vein.
*   *Signs:* Red streak (cord-like vein), warmth, tenderness.
*   *Scale:* Grade 0 (No symptoms) to Grade 4 (Purulent drainage, palpable cord >1 inch).
*   *Action:* Remove IV, warm compress.

**3.4 Air Embolism**
*   *Signs:* Dyspnea, chest pain, hypotension, cyanosis.
*   *Action:* Clamp line. Place patient in **Trendelenburg on Left Side** (traps air in right atrium). Administer O2. Call code.
        `,
        quiz: [
          { question: "Which IV gauge is most appropriate for rapid blood transfusion in a trauma patient?", options: ["24G (Yellow)", "22G (Blue)", "20G (Pink)", "16G (Grey)"], correctAnswer: 3, explanation: "Large bore catheters (14G-16G) allow rapid flow rates necessary for volume resuscitation and blood products." },
          { question: "You observe a red streak tracking up the patient's arm from the IV site. The skin is warm. This is:", options: ["Infiltration", "Phlebitis", "Fluid Overload", "Air Embolism"], correctAnswer: 1, explanation: "Phlebitis is inflammation of the vein, characterized by redness (erythema), a palpable cord, and warmth." },
          { question: "If you suspect an air embolism, how should you position the patient?", options: ["High Fowler's", "Supine", "Trendelenburg on Left Side", "Prone"], correctAnswer: 2, explanation: "Left lateral Trendelenburg helps trap the air bubble in the apex of the right ventricle/atrium, preventing it from moving to the lungs." },
          { question: "When advancing the IV catheter, what should you do immediately after seeing the 'flash' of blood?", options: ["Pull the needle out", "Lower the angle and advance slightly", "Inflate the tourniquet", "Flush with saline"], correctAnswer: 1, explanation: "You must lower the angle to ensure the needle doesn't puncture the back wall, then advance slightly to ensure the plastic catheter tip enters the vein before sliding it off." }
        ]
      },
      {
        id: "pharm-comprehensive",
        title: "Clinical Pharmacology: Cardiac & Endocrine Systems",
        readTime: "60 Hours",
        tags: ["Sophomore", "Pharmacology", "Meds", "Safety"],
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Drug+Class+Pyramid",
        content: `
**CHAPTER 1: ANTI-HYPERTENSIVES**
"ABCD" approach to hypertension management.

**1.1 ACE Inhibitors (-pril)**
*   *Examples:* Lisinopril, Enalapril.
*   *Mechanism:* Blocks Angiotensin Converting Enzyme. Prevents Angiotensin I -> II (a potent vasoconstrictor). Prevents Aldosterone release (stops Na+/Water retention).
*   *Key Side Effects:*
    1.  **Dry Cough:** Build-up of Bradykinin.
    2.  **Angioedema:** Swelling of lips/tongue/airway. Medical Emergency.
    3.  **Hyperkalemia:** Aldosterone inhibition leads to K+ retention.
*   *Nursing:* Monitor BP (First-dose hypotension), K+ levels, Renal function.

**1.2 Beta Blockers (-olol)**
*   *Examples:* Metoprolol (Cardioselective B1), Propranolol (Non-selective B1/B2).
*   *Mechanism:* Blocks Beta receptors. Decreases Heart Rate (Chronotropic), Contractility (Inotropic), and Conduction speed (Dromotropic).
*   *Key Side Effects:* Bradycardia, Heart Block, Bronchoconstriction (Non-selective).
*   *Nursing:* **Hold if HR < 60 or SBP < 100.** Caution in Asthmatics (Use cardioselective). Masks hypoglycemia symptoms in diabetics.

**1.3 Calcium Channel Blockers (CCB)**
*   *Examples:* Amlodipine (Vessels), Diltiazem/Verapamil (Heart).
*   *Mechanism:* Blocks Ca+ influx. Relaxes smooth muscle (vasodilation) and slows heart conduction.
*   *Side Effects:* Peripheral edema, constipation, gingival hyperplasia.
*   *Nursing:* No Grapefruit Juice (increases toxicity).

**1.4 Diuretics**
*   *Loop (Furosemide/Lasix):* Acts on Loop of Henle. Most potent.
    *   *Risk:* Hypokalemia, Ototoxicity (tinnitus if pushed too fast IV).
*   *Thiazide (HCTZ):* Distal tubule. First line for HTN.
*   *Potassium-Sparing (Spironolactone):* Blocks aldosterone. Risk of Hyperkalemia.

**CHAPTER 2: CARDIAC GLYCOSIDES (DIGOXIN)**
*   *Mechanism:* Positive Inotrope (↑ squeeze), Negative Chronotrope (↓ rate).
*   *Therapeutic Index:* Narrow (0.5 - 2.0 ng/mL).
*   *Toxicity:* Anorexia, Nausea/Vomiting, **Visual halos (yellow/green)**.
*   *Antidote:* Digibind (Digoxin Immune Fab).
*   *Critical Link:* **Hypokalemia** increases risk of Digoxin toxicity. Always check K+ before giving.

**CHAPTER 3: ANTI-DIABETICS (INSULIN)**
High Alert Medications. "Log" implies rapid acting.

**3.1 Rapid Acting (Lispro, Aspart)**
*   *Onset:* 15 min. *Peak:* 1 hr. *Duration:* 3 hrs.
*   *Rule:* "See food" before giving. Only give if meal is in front of patient.

**3.2 Short Acting (Regular - Humulin R)**
*   *Onset:* 30 min. *Peak:* 2-4 hrs.
*   *Rule:* The **only** insulin that can be given IV (for DKA).

**3.3 Intermediate (NPH)**
*   *Onset:* 2 hrs. *Peak:* 4-12 hrs. *Duration:* 14+ hrs.
*   *Rule:* Cloudy. Can mix with Regular. "Clear before Cloudy" (Draw up Regular first).

**3.4 Long Acting (Glargine/Lantus)**
*   *Onset:* 1 hr. *Peak:* **NONE**. *Duration:* 24 hrs.
*   *Rule:* Do not mix with any other insulin. Give at bedtime.

**CHAPTER 4: ANTICOAGULANTS**
*   **Heparin:** Fast acting. Monitor **PTT**. Antidote: Protamine Sulfate.
*   **Warfarin (Coumadin):** Slow acting (days). Monitor **PT/INR** (Target 2-3). Antidote: Vitamin K. Diet: Consistent green leafy veggies.
        `,
        quiz: [
          { question: "Which finding would cause the nurse to hold a dose of Digoxin?", options: ["BP 120/80", "Apical Pulse 54 bpm", "Potassium 4.0 mEq/L", "Respiratory Rate 18"], correctAnswer: 1, explanation: "Digoxin slows the heart rate. It is standard practice to hold the drug if the apical pulse is less than 60 bpm." },
          { question: "A patient on Lisinopril develops a dry, hacking cough. What is the cause?", options: ["Fluid overload", "Bradykinin accumulation", "Pneumonia", "Allergic reaction"], correctAnswer: 1, explanation: "ACE inhibitors prevent the breakdown of bradykinin, which accumulates in the lungs causing a cough." },
          { question: "Which insulin can be administered Intravenously (IV)?", options: ["NPH", "Glargine", "Regular", "Lispro"], correctAnswer: 2, explanation: "Regular insulin is the only formulation approved for IV use, commonly used to treat Diabetic Ketoacidosis (DKA)." },
          { question: "What is the antidote for Heparin overdose?", options: ["Vitamin K", "Protamine Sulfate", "Flumazenil", "Naloxone"], correctAnswer: 1, explanation: "Protamine Sulfate neutralizes Heparin. Vitamin K is for Warfarin. Naloxone is for Opioids." }
        ]
      }
    ]
  },

  // --- YEAR 3: JUNIOR (Specialties) ---
  {
    id: "jun-ob-peds",
    title: "Year 3: OB/GYN & Pediatrics",
    description: "Specialized care for childbearing families and children from infancy through adolescence.",
    color: "bg-pink-600",
    yearLevel: "Junior",
    topics: [
      {
        id: "prac-leopold",
        title: "Obstetrics: Leopold's Maneuvers & Fetal Monitoring",
        readTime: "35 Hours",
        tags: ["Junior", "OB", "Skills", "Maternity"],
        videoUrl: "https://www.youtube.com/embed/84Z9qZqfXyM",
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=Fetal+Heart+Rate+Patterns",
        content: `
**CHAPTER 1: LEOPOLD'S MANEUVERS**
Systematic palpation of the gravid uterus to determine fetal presentation and position.

**1.1 Preparation**
*   Ask patient to empty bladder (comfort and accuracy).
*   Position: Supine with a small pillow under right hip (prevents Supine Hypotension Syndrome / Vena Cava compression).
*   Warm hands.

**1.2 The Four Maneuvers**
1.  **Fundal Grip (Superior):** Palpate the top of the uterus (fundus).
    *   *Soft, irregular, non-ballotable:* Breech (Buttocks).
    *   *Hard, round, movable:* Head (Vertex).
2.  **Umbilical Grip (Lateral):** Hands on sides of uterus.
    *   *Smooth, hard resistance:* Fetal Back (Best location for FHR monitor).
    *   *Small irregularities/knobs:* Small parts (arms/legs).
3.  **Pawlik's Grip (Inferior):** Thumb and fingers just above symphysis pubis.
    *   Tests for **Engagement**. If the presenting part moves, it is not engaged (floating). If fixed, it is engaged.
4.  **Pelvic Grip:** Face the patient's feet. Slide hands down towards groin.
    *   Determines the **Cephalic Prominence** (extension vs flexion of head).

**CHAPTER 2: ELECTRONIC FETAL MONITORING (EFM)**

**2.1 Baseline FHR**
*   **Normal:** 110 - 160 bpm.
*   **Tachycardia:** >160 (Maternal fever, infection, dehydration).
*   **Bradycardia:** <110 (Hypoxia, cord compression).

**2.2 Variability**
The "squiggliness" of the line. Indicates intact CNS.
*   *Absent:* Flat line. Bad.
*   *Moderate:* 6-25 bpm fluctuation. Normal/Good.

**2.3 Decelerations (VEAL CHOP)**
*   **V**ariable Decels -> **C**ord Compression.
    *   *Look:* V or W shape. Abrupt drop.
    *   *Intervention:* Reposition mom (Side-lying/Knee-chest).
*   **E**arly Decels -> **H**ead Compression.
    *   *Look:* Mirrors the contraction (U shape). Starts with contraction, ends with it.
    *   *Intervention:* None. Just document. Sign of labor progress.
*   **A**ccelerations -> **O**kay (Oxygenated).
    *   *Look:* Increase of 15 bpm for 15 secs. Great sign.
*   **L**ate Decels -> **P**lacental Insufficiency.
    *   *Look:* Starts *after* the peak of contraction. Returns to baseline *after* contraction ends.
    *   *Intervention:* **LION Pit.**
        1.  **L**eft Side.
        2.  **I**V Fluids (Bolus).
        3.  **O**xygen (10L Face mask).
        4.  **N**otify Provider.
        5.  Stop **Pit**ocin.

**CHAPTER 3: STAGES OF LABOR**
1.  **Stage 1:** Cervix dilates 0-10 cm.
    *   *Latent:* 0-3cm.
    *   *Active:* 4-7cm (Epidural time).
    *   *Transition:* 8-10cm (Irritable, "I can't do this").
2.  **Stage 2:** Pushing to Delivery of Baby.
3.  **Stage 3:** Delivery of Placenta. (Risk of hemorrhage).
4.  **Stage 4:** Recovery (First 4 hours).
        `,
        quiz: [
          { question: "During Leopold's maneuvers, you feel a smooth, hard surface on the mother's left side. What is this?", options: ["Fetal Arms/Legs", "Fetal Back", "Fetal Head", "Placenta"], correctAnswer: 1, explanation: "The smooth, resistant surface represents the fetal back, which is the optimal location for placing the fetal heart rate monitor." },
          { question: "You observe Late Decelerations on the monitor. What is the priority nursing action?", options: ["Document findings", "Prepare for C-section", "Turn mother to left side", "Increase Pitocin"], correctAnswer: 2, explanation: "Late decels indicate placental insufficiency. Turning the mother improves perfusion. Stop Pitocin immediately to reduce stress on the fetus." },
          { question: "What does the mnemonic VEAL CHOP help you remember?", options: ["Stages of labor", "Types of decelerations and their causes", "Vaccination schedule", "APGAR scoring"], correctAnswer: 1, explanation: "Variable-Cord, Early-Head, Acceleration-Ok, Late-Placental." },
          { question: "Which stage of labor involves the delivery of the placenta?", options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"], correctAnswer: 2, explanation: "Stage 3 is the period from the birth of the baby until the placenta is expelled." }
        ]
      },
      {
        id: "peds-growth",
        title: "Pediatrics: Growth, Development & Congenital Defects",
        readTime: "50 Hours",
        tags: ["Junior", "Peds", "Development", "Theory"],
        content: `
**CHAPTER 1: DEVELOPMENTAL MILESTONES (Erikson & Piaget)**

**1.1 Infant (0-12 Months)**
*   **Erikson:** Trust vs. Mistrust. Needs consistent care.
*   **Physical:** Weight doubles by 6 mos, triples by 1 year. Posterior fontanel closes 2-3 mos. Anterior closes 12-18 mos.
*   **Milestones:**
    *   2 mos: Lifts head, smiles.
    *   4 mos: Rolls over.
    *   6 mos: Sits with support, solid foods (Iron-fortified rice cereal first).
    *   8 mos: Stranger anxiety peaks.
    *   9 mos: Pincer grasp (Cheerios).
    *   12 mos: Walks, 3-5 words.

**1.2 Toddler (1-3 Years)**
*   **Erikson:** Autonomy vs. Shame/Doubt. "No!", "Mine!".
*   **Play:** Parallel Play (plays next to, not with).
*   **Toilet Training:** 18-24 months (needs myelination of spinal cord).
*   **Safety:** Choking hazards (grapes, hotdogs, coins). Burns. Drowning.

**1.3 Preschool (3-6 Years)**
*   **Erikson:** Initiative vs. Guilt. Wants to help.
*   **Thinking:** Magical thinking, Animism (dolls are real).
*   **Play:** Associative (interactive but unorganized).

**1.4 School Age (6-12 Years)**
*   **Erikson:** Industry vs. Inferiority. Achievement, rules, school.
*   **Play:** Cooperative (teams, rules).

**1.5 Adolescent (12-18 Years)**
*   **Erikson:** Identity vs. Role Confusion. Peer group is everything.
*   **Risk:** "Personal Fable" (It won't happen to me). Suicide, Accidents, Drugs.

**CHAPTER 2: CONGENITAL HEART DEFECTS**
"TRouBLe" approach.

**2.1 Cyanotic Defects (The T's - Trouble)**
Right-to-Left Shunt. Blood bypasses lungs. Baby is Blue.
*   **Tetralogy of Fallot (PROVe):**
    1.  **P**ulmonary Stenosis.
    2.  **R**ight Ventricular Hypertrophy.
    3.  **O**verriding Aorta.
    4.  **V**SD.
    *   *Tet Spell:* Baby turns blue when crying. **Intervention:** Knee-to-Chest position (increases systemic resistance, forcing blood into lungs).
*   **Transposition of Great Arteries:** Aorta and Pulmonary Artery switched. Incompatible with life unless PDA/VSD exists.

**2.2 Acyanotic Defects (No T's - No Trouble)**
Left-to-Right Shunt. Lungs get too much blood. Baby is Pink but may have HF.
*   **VSD (Ventricular Septal Defect):** Hole between ventricles. Harsh murmur.
*   **PDA (Patent Ductus Arteriosus):** Machine-like murmur. Treat with Indomethacin.
*   **Coarctation of Aorta:** Narrowing. High BP in arms, Low BP in legs. Bounding radial pulses, weak femoral pulses.

**CHAPTER 3: RESPIRATORY EMERGENCIES**
*   **Epiglottitis:** Bacterial (Hib). **Medical Emergency.**
    *   *Signs:* Drooling, Dysphagia, Dysphonia, Distressed (Tripod position).
    *   *Action:* **NEVER** inspect throat with tongue blade (can cause spasm/occlusion). Prepare for intubation.
*   **Croup (Laryngotracheobronchitis):** Viral.
    *   *Signs:* Barking seal cough, stridor.
    *   *Action:* Cool mist, steroids, racemic epinephrine.
*   **Cystic Fibrosis:** Genetic (Autosomal Recessive). Thick mucus blocks lungs/pancreas.
    *   *Tx:* Chest PT, Pancreatic Enzymes (with *every* meal), High Calorie/Protein diet. Salt supplements.
        `,
        quiz: [
          { question: "A 4-year-old child perceives her doll as having feelings and being alive. This is an example of:", options: ["Object Permanence", "Animism", "Abstract Thinking", "Conservation"], correctAnswer: 1, explanation: "Animism is characteristic of the Pre-Operational stage (Preschool), where children attribute life to inanimate objects." },
          { question: "In Tetralogy of Fallot, what is the immediate nursing intervention for a 'Tet Spell' (cyanosis during crying)?", options: ["Administer Epinephrine", "Place in Knee-Chest position", "Start CPR", "Give fluids"], correctAnswer: 1, explanation: "Knee-Chest position kinks the femoral arteries, increasing systemic vascular resistance. This forces blood from the left ventricle back into the pulmonary artery to get oxygenated." },
          { question: "Which finding is characteristic of Coarctation of the Aorta?", options: ["Cyanosis at birth", "Machine-like murmur", "High BP in arms, Low BP in legs", "Drooling and stridor"], correctAnswer: 2, explanation: "The narrowing of the aorta usually happens after the arch, causing high pressure before the narrowing (head/arms) and low pressure after (legs)." },
          { question: "At what age does an infant typically double their birth weight?", options: ["3 months", "6 months", "9 months", "12 months"], correctAnswer: 1, explanation: "Infants double birth weight by 6 months and triple it by 1 year." }
        ]
      }
    ]
  },

  // --- YEAR 4: SENIOR (Critical Care & Leadership) ---
  {
    id: "sen-crit",
    title: "Year 4: Critical Care & Emergency",
    description: "High-acuity nursing involving ACLS, ventilator management, shock states, and trauma.",
    color: "bg-red-700",
    yearLevel: "Senior",
    topics: [
      {
        id: "prac-acls-mega",
        title: "ACLS Protocol: Cardiac Arrest Management",
        readTime: "55 Hours",
        tags: ["Senior", "Emergency", "Simulation", "Cardiology"],
        videoUrl: "https://www.youtube.com/embed/DfP4P9t8G_E", 
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=H%27s+and+T%27s+Chart",
        content: `
**CHAPTER 1: BLS FOUNDATION**
High-quality CPR is the only intervention that saves lives consistently.
1.  **Assess:** Unresponsive? No breathing? No pulse (check carotid < 10s)?
2.  **Compressions:**
    *   Rate: 100-120 bpm.
    *   Depth: 2-2.4 inches (adults).
    *   Recoil: Allow FULL chest recoil.
    *   Ratio: 30:2 (no advanced airway). Continuous with breath every 6s (with advanced airway).
3.  **Defibrillation:** Early defibrillation is key for VF/pVT.

**CHAPTER 2: RHYTHM RECOGNITION & ALGORITHMS**

**2.1 Shockable Rhythms**
*   **V-Fib (Ventricular Fibrillation):** Chaotic quivering. No pulse.
*   **pVT (Pulseless Ventricular Tachycardia):** Organized, fast, wide complex. No pulse.
*   **The Left Branch Algorithm:**
    1.  **SHOCK** (Biphasic 120-200J).
    2.  CPR 2 mins. IV/IO Access.
    3.  Check Rhythm -> **SHOCK**.
    4.  CPR 2 mins. **Epinephrine 1mg** IV push (every 3-5 min).
    5.  Check Rhythm -> **SHOCK**.
    6.  CPR 2 mins. **Amiodarone 300mg** IV (Refractory VF). Second dose 150mg.

**2.2 Non-Shockable Rhythms**
*   **Asystole:** Flat line. confirm in 2 leads.
*   **PEA (Pulseless Electrical Activity):** Any rhythm (even sinus) but NO PULSE felt.
*   **The Right Branch Algorithm:**
    1.  **CPR** immediately.
    2.  **Epinephrine 1mg** IV ASAP.
    3.  Identify Causes (H's & T's).
    4.  **NEVER SHOCK** Asystole/PEA.

**CHAPTER 3: THE H's AND T's (Reversible Causes)**
You must fix the cause to save the PEA patient.
1.  **Hypovolemia:** Most common. Give Fluids.
2.  **Hypoxia:** Intubate/Ventilate.
3.  **Hydrogen Ion (Acidosis):** Bicarbonate (if preexisting metabolic acidosis).
4.  **Hypo/Hyperkalemia:** Insulin/Glucose or Calcium Gluconate (for HyperK). Magnesium (for HypoK).
5.  **Hypothermia:** Warm them up. "Not dead until warm and dead."
6.  **Tension Pneumothorax:** Deviated trachea, absent breath sounds. Needle Decompression.
7.  **Tamponade (Cardiac):** Muffled heart sounds, JVD. Pericardiocentesis.
8.  **Toxins:** Drug overdose (Narcan for opioids, Glucagon for Beta Blockers).
9.  **Thrombosis (Pulmonary - PE):** tPA.
10. **Thrombosis (Coronary - MI):** Cath lab.

**CHAPTER 4: POST-CARDIAC ARREST CARE (ROSC)**
Return of Spontaneous Circulation.
1.  **Airway:** Keep SpO2 > 94%. PETCO2 35-40.
2.  **Blood Pressure:** Vasopressors (Norepinephrine) to keep MAP > 65 mmHg.
3.  **Targeted Temperature Management (TTM):** If comatose, cool to 32-36°C for 24 hrs to protect brain.
        `,
        quiz: [
          { question: "Which of the following rhythms should be DEFIBRILLATED (Shocked)?", options: ["Asystole", "Ventricular Fibrillation", "Sinus Tachycardia", "Pulseless Electrical Activity"], correctAnswer: 1, explanation: "V-Fib and Pulseless V-Tach are the only shockable rhythms. Asystole and PEA are treated with CPR and Epinephrine." },
          { question: "What is the first drug administered in a cardiac arrest code?", options: ["Amiodarone 300mg", "Atropine 0.5mg", "Epinephrine 1mg", "Lidocaine 1mg/kg"], correctAnswer: 2, explanation: "Epinephrine 1mg is given every 3-5 minutes to maintain perfusion pressure via vasoconstriction." },
          { question: "A patient has a rhythm on the monitor but no palpable pulse. This is known as:", options: ["Sinus Arrest", "PEA (Pulseless Electrical Activity)", "Third Degree Block", "V-Fib"], correctAnswer: 1, explanation: "PEA is the dissociation between the heart's electrical activity and mechanical contraction. Always treat the patient, not the monitor." },
          { question: "Which reversible cause (H's & T's) presents with distended neck veins (JVD) and muffled heart sounds?", options: ["Hypovolemia", "Cardiac Tamponade", "Hyperkalemia", "Toxins"], correctAnswer: 1, explanation: "These are signs of Beck's Triad, indicating fluid in the pericardial sac compressing the heart (Tamponade)." }
        ]
      },
      {
        id: "theory-vent",
        title: "Mechanical Ventilation & ABG Analysis",
        readTime: "40 Hours",
        tags: ["Senior", "ICU", "Respiratory", "Theory"],
        imageUrl: "https://placehold.co/800x400/e2e8f0/1e293b?text=ABG+Interpretation+Grid",
        content: `
**CHAPTER 1: ARTERIAL BLOOD GAS (ABG) INTERPRETATION**
The "ROME" Method: Respiratory Opposite, Metabolic Equal.

**1.1 Normal Values**
*   pH: 7.35 - 7.45
*   PaCO2 (Acid): 35 - 45 mmHg
*   HCO3 (Base): 22 - 26 mEq/L
*   PaO2: 80 - 100 mmHg

**1.2 Analysis Steps**
1.  **Check pH:** Acidosis (<7.35) or Alkalosis (>7.45)?
2.  **Check CO2:** Is it driving the pH? (High CO2 = Acid). If pH and CO2 move in *Opposite* directions, it's Respiratory.
3.  **Check HCO3:** Is it driving the pH? (Low HCO3 = Acid). If pH and HCO3 move in *Equal* directions, it's Metabolic.
4.  **Compensation:**
    *   *Uncompensated:* pH is abnormal, one value (CO2 or HCO3) is abnormal, the other is normal.
    *   *Partially Compensated:* All 3 are abnormal.
    *   *Fully Compensated:* pH is normal, but CO2 and HCO3 are both abnormal.

**CHAPTER 2: VENTILATOR MODES**

**2.1 Settings**
*   **Tidal Volume (TV):** Volume per breath. Usually 6-8 ml/kg of ideal body weight.
*   **FiO2:** % Oxygen (21% room air to 100%).
*   **PEEP (Positive End Expiratory Pressure):** Pressure left in lungs to keep alveoli open. Normal 5. High PEEP improves oxygenation but decreases Cardiac Output (compresses heart).

**2.2 Common Modes**
*   **AC (Assist-Control):** Patient can trigger breath, but machine delivers full set volume. *Risk:* Hyperventilation -> Respiratory Alkalosis.
*   **SIMV (Synchronized Intermittent Mandatory Ventilation):** Machine gives set rate. Patient can breathe own breaths in between at their own tiny volume. Used for weaning.
*   **PSV (Pressure Support):** Patient does all the work (starts/stops breath). Machine just pushes air in to overcome tube resistance. Final weaning mode.

**CHAPTER 3: VENTILATOR ALARMS**
"HOLD" Mnemonic.
*   **H**igh Pressure Alarm = **O**bstruction.
    *   Kinked tube.
    *   Water in tube.
    *   Mucus plug (Suction!).
    *   Biting tube (Sedate/Insert bite block).
    *   Pneumothorax.
*   **L**ow Pressure Alarm = **D**isconnection.
    *   Tubing came apart.
    *   Cuff leak (Patient can talk).
    *   Extubation.

**CHAPTER 4: VAP (Ventilator Associated Pneumonia) BUNDLE**
Prevention is key.
1.  Head of Bed 30-45 degrees.
2.  Daily "Sedation Vacation" (assess readiness to wean).
3.  Peptic Ulcer Prophylaxis (PPI).
4.  DVT Prophylaxis.
5.  Oral Care with Chlorhexidine daily.
        `,
        quiz: [
          { question: "Interpret this ABG: pH 7.25, PaCO2 60, HCO3 24.", options: ["Metabolic Acidosis", "Respiratory Acidosis", "Metabolic Alkalosis", "Respiratory Alkalosis"], correctAnswer: 1, explanation: "pH is Acidic (<7.35). PaCO2 is High/Acidic (>45). They match (Respiratory). HCO3 is normal (Uncompensated)." },
          { question: "A High Pressure alarm sounds on the ventilator. What is a potential cause?", options: ["Tubing disconnection", "Cuff leak", "Patient biting the tube", "Extubation"], correctAnswer: 2, explanation: "High pressure indicates resistance to airflow (Obstruction). Biting, kinks, or secretions cause this." },
          { question: "What is the primary complication of high PEEP levels?", options: ["Hypertension", "Decreased Cardiac Output", "Increased Urine Output", "Hyperthermia"], correctAnswer: 1, explanation: "High intrathoracic pressure from PEEP compresses the vena cava, reducing venous return to the heart, causing hypotension and low cardiac output." },
          { question: "Which ventilator mode allows the patient to breathe spontaneously between mandatory breaths?", options: ["AC (Assist Control)", "CMV (Continuous Mechanical Ventilation)", "SIMV", "CPAP"], correctAnswer: 2, explanation: "SIMV synchronizes with the patient but allows them to pull their own tidal volume in between machine breaths, exercising respiratory muscles." }
        ]
      }
    ]
  }
];