"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Brain, Play, Pause } from 'lucide-react';

const flashcards = [
  { 
    term: 'Regular Sinus Rhythm', 
    definition: "Sinus rhythm is also known as regular sinus rhythm (RSR) or normal sinus rhythm (NSR) - is the most common adult rhythm with rates between 60-100/minute. The QRS is most often narrow with upright P waves in Lead II. Treatment: It has various drugs such as the use of antiarrhythmic drugs (quinidine, disopyramide, propafenone, flecainide, metoprolol, amiodarone, dofetilide, dronedarone and sotalol), which function as sodium channel blockers and thus are effective in reducing the frequency of atrial fibrillation. Recommendations: It is advisable not to exceed the dose or take antiarrhythmic drugs without a doctor's prescription, as this increases the risk of adverse events and proarrhythmic effects as well as the risk of stroke which in turn increases the mortality rate",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729042456/Regular_Sinus_Rhythm_qhcmwm.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729041518/Sinus_rhythm_yqbit1.3gp'
  },
  { 
    term: 'Sinus Bradycardia', 
    definition: "Sinus bradycardia with rates greater than 50/minute may be well tolerated by healthy adults. Athletes may routinely be in sinus bradycardia due to an optimal cardiac stroke volume that requires less heart rate to yield acceptable cardiac output. Sinus bradycardia may also be produced with vagal stimulation or due to sick sinus syndrome. Expect a narrow QRS with upright P waves in lead II. Treatment: It should be based on more than one parameter, considering heart rate as well as symptoms and underlying conditions. There are different treatments such as pharmacological (Shensong Yangxin, atropine, isoproterenol, dopamine, dobutamine, and epinephrine) or device-based (pacemaker). Recommendations: Perform continuous monitoring of both heart rate as well as underlying symptoms such as sleep apnea, hypothyroidism, hypothermia, anorexia. In the same way, lead a healthy lifestyle avoiding excess salts, sugars, and fats as well as harmful substances, and increasing the amounts of vegetables, legumes, and whole grains in the diet.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Bradycardia_y7rnu5.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048785/Sinu_bradycardia_fia9b4.3gp'
  },
  { 
    term: 'Sinus Tachycardia', 
    definition: "Sinus Tachycardia most often results from increased sympathetic stimulation (i.e. due to pain, fever, increased oxygen demand, and/or hypovolemia). It usually has a narrow QRS. The rate is often limited to below 150 / minute. Treatment: 3 treatments: pharmacological, surgical and therapy. Pharmacological treatments include beta-adrenergic blockers, calcium channel blockers and ivabradine. Sinus node modification and Catheter Ablation are other treatments, but these are minimally invasive. Finally, therapy treatment consists of CBT (Cognitive Behavioral Therapy). Although non-pharmaceutical type treatments may involve side effects, lack of efficiency or even complications. Recommendations: Keeping stress levels under control since a high level of stress could trigger arrhythmias. Besides, blood pressure and cholesterol should be kept under control, and this is achieved by regular physical activity and maintaining a healthy diet.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Tachycardia_t9oi6o.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048785/Sinus_tachycardia_ftmmad.3gp'
  },
  { 
    term: 'Sinus Arrhythmia', 
    definition: "Sinus Arrhythmia is most often a benign rhythm, common in children and less common with older adults. The irregular pattern of this rhythm fluctuates with inspiration (HR increases) and expiration (HR decreases). A narrow QRS and upright P waves in Lead II is expected. Treatment: It is typically benign and does not require treatment in most cases. Recommendations: No specific action is usually necessary. Maintaining a healthy lifestyle with regular exercise, stress management, and avoiding excessive caffeine or stimulants. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Sinus_Arrythmia_mcppcl.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048784/Sinus_arrhythmia_kibcv0.3gp'
  },
  { 
    term: 'Sinus Exit Block', 
    definition: "Sinus exit block (sinoatrial block) results from blocked sinus impulses - impulses not getting through to depolarize the atria. While the sinus is firing on schedule, the tissue around the SA node is not carrying the impulse. The seriousness of this dysrhythmia is related to the frequency and duration of the blocks. Note that each pause is equal to a multiple of previous P-P intervals. Treatment: If it is asymptomatic no treatment may be needed. In more severe or symptomatic cases, addressing underlying conditions (e.g., ischemia, electrolyte imbalances) is essential. Pacemaker implantation may be considered if the block leads to significant bradycardia or syncope.  Recommendations: Regular monitoring of heart function is advised, and any contributing factors, such as medication adjustments or treating underlying heart disease, should be managed to prevent recurrence",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Exit_Block_nmwear.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048785/Sinus_exit_block_tku1lr.3gp'
  },
  { 
    term: 'Sinus Arrest', 
    definition: "Sinus Arrest (a.k.a. sinus pause) occurs when the SA node fails to fire. The resulting pause is often NOT equal to the multiple of P-P intervals seen in Sinus Exit Block. Instead, often an escape pacemaker such as the AV junction will assume control of the heart. Again, like Sinus Exit Block, treatment is related to the frequency and duration of the periods of sinus arrest. Treatment: In mild cases, treatment may not be required. If it leads to symptomatic bradycardia or syncope, the underlying cause must be identified and treated. A pacemaker may be necessary for recurrent or prolonged episodes.  Recommendations: Continuous cardiac monitoring is recommended, along with lifestyle changes to manage risk factors like hypertension or coronary artery disease. If medications are contributing to sinus arrest, a review and adjustment of therapy may be needed. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Sinus_Arrest_eiaqof.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048785/Sinus_arrest_d7sg2q.3gp'
  },
  { 
    term: 'NSR with Premature Atrial Complexes', 
    definition: "Premature Atrial Complexes or PAC result from irritability to the atria resulting in increased automaticity of atrial tissue. Since the atria initiate an impulse earlier than expected from the SA node, this is a premature complex. Expect narrow QRS and flattenned, notched, peaked or biphasic P waves for the PAC. Treatment: In asymptomatic patients, treatment is generally not required as PACs are often benign. For symptomatic individuals or those experiencing frequent PACs, beta-blockers may be prescribed to help reduce the frequency of the complexes and alleviate symptoms. If PACs are frequent and lead to more serious arrhythmias, further evaluation and consideration of antiarrhythmic medications or catheter ablation may be warranted. Addressing any underlying conditions, such as hypertension or electrolyte imbalances, is also important in managing PACs. Recommendations: This disease does not usually require specific intervention since it is usually asymptomatic and is considered benign. However, it is essential to perform periodic electrocardiograms and evaluate associated symptoms. The best “treatment” is periodic evaluation with the supervision of a cardiologist. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/NSR_with_Premature_Atrial_Complexes_vicxrh.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048784/NSR_WITH_PAC_jtm5sx.3gp'
  },
  { 
    term: 'Supraventricular Tachycardia', 
    definition: "Supraventricular tachycardia is an ominous rhythm with rates often between 170-230 per minute. The telltale sign of supraventricular tachycardia is the narrow QRS which defines its supraventricular origin and its regular, rapid pattern. This rhythm is most likely not sinus tachycardia due to its very fast rate. For those who are at rest, narrow QRS tachycardias over 150 / minute are most often supraventricular tachycardia. Treatment: In mild cases, observation and modification of triggering factors such as stress and caffeine consumption are recommended; in persistent cases, the use of vagal maneuvers (carotid sinus massage or breathing techniques) is suggested; and in case these measures are not effective, the physician may prescribe antiarrhythmic drugs to control the heart rate or prevent future episodes.  Recommendations: Keeping a record of the person episodes, noting values of frequency, duration and triggers that may contribute to the crisis, such as stress, lack of sleep or consumption of caffeine and alcohol, to find factors that help to avoid future episodes. In addition to adopting a healthy lifestyle that includes a balanced diet, regular exercise and stress management techniques such as meditation or yoga. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Supraventricular_Tachycardia_tdt2i0.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048785/SVT_fblfby.3gp'
  },
  { 
    term: 'Atrial Fibrillation', 
    definition: "Atrial fibrillation is a chaotic rhythm with recognizable QRS complexes. The chaotic rhythm pattern and the absence of P waves are the hallmarks of this dysrhythmia.The chaotic baseline - known as fibrillatory waves - is quickly seen. Note: 1) atrial kick is lost here; and 2) the risk of thrombus formation is particularly significant after 48 hours. Treatment: It is managed through lifestyle changes, medications, and procedures. Lifestyle modifications include maintaining a healthy weight, quitting smoking, limiting alcohol, managing stress, and following a heart-healthy diet. Medications such as beta blockers, calcium channel blockers, and blood thinners help regulate heart rate and prevent blood clots or strokes. In severe cases, procedures like electrical cardioversion, catheter ablation, or pacemaker implantation may be necessary. Surgical options, like the Maze procedure, can be considered during other heart surgeries. Recommendations: To reduce the risk of AFib, healthcare providers recommend heart-healthy lifestyle changes, including physical activity, controlling blood sugar, managing stress, and avoiding alcohol, smoking, illegal drugs, and stimulants. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Atrial_Fibrillation_d0n7j9.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048784/Atrial_Fibrillation_auy3ah.3gp'
  },
  { 
    term: 'Atrial Flutter', 
    definition: "Atrial flutter results from the development of a reentry circuit within the atria generating a loop that discharges impulses at a flutter rate of 250-350 / minute. Most often the AV junction passes every second (rate = 150, called a 2:1 response) or every fourth impulse (rate = 75, called a 4:1 response) through to the ventricles. Atrial flutter is readily identified by the sawtooth baseline. Treatment: It involves rate control, rhythm control, prevention of recurrence, and anticoagulation to reduce the risk of stroke. Frequency control with drugs. Rhythm control with cardioversion, drugs, or ablation  Prevention of thromboembolism. Treatment of atrial flutter focuses on controlling ventricular frequency and rhythm and preventing thromboembolisms. Recommendations: Regular monitoring and management of underlying heart conditions such as blood pressure and blood sugar control, doing exercise and getting a heart-healthy diet are some recommendations that health provider usually gives. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Atrial_Flutter_c41emv.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048784/Atrial_flutter_wouky0.3gp'
  },
  { 
    term: 'Paced Atrial rhythm', 
    definition: "Atrial paced rhythm (or paced atrial rhythm) results from the electronic pacing of an atrium. Note the vertical spike before the P wave. An electronic pacemaker lead repeatedly generates a small but sufficient current to begin depolarization of the atria…and the resulting P wave. Treatment: Pacemaker Implantation the device delivers electrical impulses to stimulate the atria when the heart's natural pacemaker fails. Single-Chamber Atrial Pacemaker (isolated to the atria) or dual-Chamber Pacemaker. Medication to Support Pacemaker Function programing and motoring the pacemaker. Recommendations: Atrial flutter such as regular monitoring and management of underlying heart conditions such as blood pressure and blood sugar control, doing exercise and getting a heart-healthy diet. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Paced_Atrial_rhythm_bjcxbs.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729048784/Paced_Atrial_orqtrz.3gp'
  },
  { 
    term: 'NSR with First Degree AV Block', 
    definition: "First degree AV block results from a prolonged transmission of the electrical impulse through the AV junction (AV node and the Bundle of His). The significant finding of this rhythm is a prolonged PR interval of more than .20 seconds. The underlying rhythm should be identified and named prior to claiming a first degree AV block. For example, this rhythm is a normal sinus rhythm WITH a first degree AV block. Treatment: It is generally benign and asymptomatic, regular monitoring with electrocardiograms is important to detect any changes in cardiac conduction. No treatment is needed unless symptoms appear. In symptomatic cases, treatment options may include lifestyle adjustments, managing risk factors like hypertension or diabetes, and, in more complex situations, additional medications or interventions. Recommendations: Patients should maintain a healthy lifestyle, including a balanced diet rich in fruits, vegetables, and whole grains, low in saturated fats and sodium. Regular physical activity, avoiding tobacco and alcohol.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/NSR_with_First_Degree_AV_Block_g3srdj.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051287/NSR_with_1_AV_block_jogvjl.mp3'
  },
  { 
    term: 'Second Degree AV Block Type I', 
    definition: "Second degree AV block Type I (Wenckebach or Mobitz Type I) results from a cyclical and progressive conduction delay through the AV junction. The ECG presents with a cyclical lengthening of the PR interval followed by a dropped QRS - a P wave not partnered with a QRS. The QRS complexes yield an irregular rhythm. Second degree AV block Type I may be caused by enhanced vagal tone, myocardial ischemia or the effects of drugs such as calcium-channel blockers, digitalis and beta- blockers. Treatment is generally unnecessary in asymptomatic patients. If symptoms occur, options include addressing underlying causes by correcting electrolyte imbalances and adjusting medications that affect AV conduction (e.g., beta-blockers, digoxin, calcium channel blockers). In acute cases with significant bradycardia, atropine can be used temporarily to improve AV conduction. In rare cases of severe, symptomatic bradycardia that doesn't respond to temporary treatments, a temporary or permanent pacemaker may be needed. Recommendations include regular cardiology follow-ups, annual ECGs, and avoiding dehydration and electrolyte imbalances. Any exercise-related symptoms should be reported to a doctor. Patients should seek emergency care if they experience dizziness or fainting.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Second_Degree_AV_Block_Type_I_a0u3sj.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051281/2_AV_block_type_I_khbrkx.mp3'
  },
  { 
    term: 'Second Degree AV Block Type II', 
    definition: "Second Degree AV Block Type II is typically caused by an intermittent block (interrupted supraventricular impulse) below the AV node. One or more QRS complexes are dropped with PR intervals that do not change (fixed PR interval). This irregular rhythm requires close monitoring: 1) low cardiac output is likely when multiple dropped QRS complexes occur; and 2) this rhythm can progress to complete heart block (third degree AVB). Treatment requires active intervention. A permanent pacemaker is the usual treatment, even for asymptomatic patients, due to the high risk of progression to complete block. In acute cases of severe bradycardia or instability, atropine or isoproterenol may be used temporarily before pacemaker placement. If the block is caused by a reversible condition, such as myocardial infarction or medication, those should be addressed. Recommendations are regular pacemaker checks, reviewing medications that slow AV conduction (e.g., beta-blockers), and monitoring for signs of worsening heart block. Cardiac rehabilitation may assist patients with pacemakers in returning to safe activity.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Second_Degree_AV_Block_Type_II_f2p6us.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051281/2_AV_block_type_ll_rrgwk5.mp3'
  },
  { 
    term: 'Second Degree AV Block with 2:1 Conduction', 
    definition: "Second Degree AV Block with 2:1 conduction is a special case of second degree AV block with each alternative P wave NOT paired with a QRS complex. The PR interval remains constant. This rhythm requires close monitoring due to risks of: 1) low cardiac output associated with a slow heart rate; and 2) the potential to progress to third degree AV block. Treatment involves monitoring symptoms, adjusting medications that may worsen the block, and considering a pacemaker if significant symptoms like fainting, dizziness, or bradycardia occur. Recommendations include avoiding medications that slow heart rate and addressing underlying conditions like electrolyte imbalances or heart disease. Pacemaker implantation is often recommended in symptomatic or advanced cases.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Second_Degree_AV_Block_with_21_Conduction_rppvis.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051281/2_AV_block_2.1_conduction_geaqd0.mp3'
  },
  { 
    term: 'Third Degree AV Block', 
    definition: "Third degree AV block (complete heart block) is often an ominous rhythm requiring close monitoring for hemodynamic compromise, progression to ventricular standstill or asystole and other lethal dysrhythmias. Significant characteristics of this rhythm are: 1) lonely P waves - P wave without an accompanied QRS complex; and 2) chaotic PR intervals. A narrow QRS denotes a higher junctional block while a wide QRS points more towards a sub-nodal block high in the bundle branches. Treatment usually requires pacing, with transcutaneous pacing first and a permanent pacemaker in most cases, as medications like dopamine and atropine are typically ineffective. Recommendations include following medical advice, attending regular check-ups, avoiding strong magnetic fields, informing healthcare providers about the pacemaker, staying active while avoiding contact sports, and wearing a medical alert bracelet for emergencies. Regular pacemaker checks are essential.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Third_Degree_AV_Block_moiew9.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051281/3_AV_block_btiira.mp3'
  },
  { 
    term: 'Premature Junctional Complex (PJC)', 
    definition: "A PJC arises from an irritable focus within the AV junction. Characteristics of a PJC include: 1) an absent or inverted P wave in lead II; 2) a shortened PR interval - less than .12 seconds; and 3) the complex comes early or premature. Treatment involves adjusting or discontinuing digitalis if necessary, managing digitalis toxicity, and addressing underlying conditions like heart failure. Lifestyle changes, such as quitting smoking and reducing alcohol or caffeine, are also recommended, along with regular monitoring by a healthcare provider. Recommendations are maintaining a healthy lifestyle with limited alcohol and caffeine, quitting smoking, and following a heart-healthy diet rich in fruits, vegetables, and whole grains. Regular exercise, stress management, and adherence to prescribed medications to preventing PJCs.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Premature_Junctional_Complex_PJC_lhspbg.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051289/NSR_with_PJC_welvv0.mp3'
  },
  { 
    term: 'Junctional Rhythm', 
    definition: "Junctional rhythm - also called junctional escape rhythm - originates from the AV junction (AV node and Bundle of His). The expected pacemaker rate of the AV junction is 40-60 / minute. In lead II, a junctional rhythm presents with inverted or absent P waves. Note: an absent P wave in junctional rhythm is also associated with loss of atrial kick. If it occurs after heart surgery, providers may correct electrolyte imbalances, address fever, or prescribe medications to slow the heart rate. Other options include using amiodarone to restore normal rhythm, catheter ablation or cryoablation to eliminate abnormal tissue, and overdrive atrial pacing with an external pacemaker. Treatment is tailored to each patient's needs and condition severity. Recommendations include administering medications like magnesium, propranolol, and dexmedetomidine before or during surgery to reduce the risk of junctional tachycardia and improve outcomes. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Junctional_Rhythm_yz0fwu.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051286/junctional_rhythm_mlecae.mp3'
  },
  { 
    term: 'Accelerated Junctional', 
    definition: 'Accelerated junctional rhythm results from enhanced automaticity, increased sympathetic nervous system activity (catecholamines) or ischemia. Key features of this rhythm include a rate between 60- 100 / minute, inverted or absent P waves (in lead II), shortened PR interval, and QRS complexes that are usually narrow. Treatment includes administering atropine for bradycardia and calcium channel blockers if the rhythm is triggered by anxiety. Electrophysiological interventions, such as catheter ablation or permanent pacemaker placement, may be used for persistent symptoms that medications cannot control. Recommendations include seeking medical evaluation for recurrent symptoms like chest pain, dizziness, and fainting, and maintaining regular contact with a healthcare provider to monitor cardiac activity. Referral to a cardiologist may be necessary for further evaluation. ',
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Accelerated_Junctional_skda9h.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051282/Accelerated-Junctional-_uluyxl.mp3'
  },
  { 
    term: 'Junctional Tachycardia', 
    definition: "Junctional tachycardia results from enhanced automaticity, increased sympathetic activity (catecholamines) and ischemia. Key features of this rhythm include a rate over 100 / minute, inverted or absent P waves (in lead II), shortened PR interval, and QRS complexes that are usually narrow. Note the inverted P wave buried in each QRS complex displayed here in this ECG. Treatment involves amiodarone to reduce heart rate, while catheter ablation or external pacemakers may be necessary, especially after heart surgeries like valve replacement. However, electrophysiological interventions can have side effects, including abnormal heart rhythms, which may lead to the consideration of a pacemaker. Recommendations include monitoring and managing symptoms like palpitations, dizziness, and fainting to control the underlying condition causing the arrhythmia. After catheter ablation, patients should check the catheter insertion site for swelling or bleeding and seek follow-up with a cardiologist if these issues arise.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/Junctional_Tachycardia_swmaxc.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051287/Junctional-Tachycardia-_jwlbzo.mp3'
  },
  { 
    term: 'Wandering Pacemaker', 
    definition: "A wandering pacemaker rhythm is a supraventricular rhythm with varying locations of impulse formation resulting in three or more different P waves. With a narrow QRS complex, the absence of a P wave qualifies as one type of P wave. In the rhythm above, note the P waves from the sinus node, the atria and the junction. Treatment is usually not required for asymptomatic patients. If digoxin toxicity is suspected, the medication dosage or therapy may need adjustment. In cases of noticeable symptoms like fainting or dizziness, treatment includes medication for symptom relief or pacemaker placement if there is sinus node damage. Recommendations include referring symptomatic patients to a cardiologist for accurate diagnosis. Patients should be educated about the benign nature of the arrhythmia, and if symptoms occur, lifestyle modifications and a follow-up schedule for heart examinations should be implemented.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Wandering_Pacemaker_hppdav.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051853/Wandering-Pacemaker-_x7fxar.mp3'
  },
  { 
    term: 'Sinus Rhythm with Premature Ventricular Complex', 
    definition: "Premature ventricular complexes (PVC) often represent increased ventricular automaticity or reentry phenonomen. The presence of PVCs may be benign but can indicate irritable ventricles. PVCs arrive earlier than expected and is usually wide (.12 seconds or more). Note that the T wave often points in an opposite direction from the QRS complex. A PVC every second complex is called ventricular bigeminy...every 3rd - ventricular trigeminy. Treatment does not require intervention. In symptomatic cases or with frequent PVCs, beta-blockers or calcium channel blockers may be prescribed to alleviate symptoms. If PVCs lead to significant heart dysfunction, catheter ablation might be considered. Recommendations include lifestyle modifications such as reducing caffeine and alcohol intake and managing stress to prevent PVC triggers. Regular follow-ups with a healthcare provider are also beneficial for monitoring the condition.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Rhythm_with_Premature_Ventricular_Complex_enis6r.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051347/NSR-with-PVC_ecsbqo.mp3'
  },
  { 
    term: 'Idioventricular Rhythm (IVR)', 
    definition: "Idioventricular rhythm (IVR) occurs when the SA and AV nodes are either NOT firing or firing slower than the ventricular pacemaker rate. A common ventricular pacemaker rate is 20-40 / minute, a rate that is often not sufficient to sustain an adequate cardiac output. Treatment typically does not require intervention if the patient is stable. However, if it occurs with myocardial infarction or bradycardia, addressing the underlying cause is essential. Medications like atropine or temporary pacing may be needed if symptoms or instability arise. Recommendations include continuous monitoring, especially in patients with acute myocardial infarction. Supportive care and management of contributing factors, such as electrolyte imbalances or ischemia, are also advised. ",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Idioventricular_Rhythm_IVR_rvodja.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051286/IVR_hlqggp.mp3'
  },
  { 
    term: 'Accelerated Idioventricular Rhythm (AIVR)', 
    definition: "Accelerated idioventricular rhythm (AIVR) is a ventricular rhythm occuring at a rate between 41- 100 / minute - faster than typical pacemaker rates expected of the ventricles (20-40 / minute) and less than what is considered a tachycardia (>100 / minute). Enhanced automaticity - possibly due to hypoxia or abundant sympathetic stimulation - increases rate of ventricular electrical impulses. Note that this rhythm is often unstable and can move quickly to either asystole or ventricular tachycardia (VT). Treatment typically does not require intervention, as it is often self-limiting. However, if symptoms or hemodynamic instability occur, atropine or temporary pacing may be used. Recommendations include monitoring the patient for underlying ischemia or myocardial reperfusion. Given that AIVR is generally benign, reassurance and observation are usually the preferred approach.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Accelerated_Idioventricular_Rhythm_AIVR_kes5le.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051282/AIVR_b4pznj.mp3'
  },
  { 
    term: 'Ventricular Tachycardia', 
    definition: "Ventricular tachycardia (VT) often results in hemodynamic compromise (due to minimal ventricular filling time and the absence of atrial kick). What makes this rhythm more ominous is its tendency to transition into ventricular fibrillation. Causes of VT include myocardial ischemia, a PVC landing on a T wave (R-on-T ), cardiac drug toxicity and electrolyte imbalance. Non-sustained VT (a group of 3 or more PVCs) is a run of VT. It is treated in emergencies with CPR, electrical defibrillation, or IV medications. For non-emergency situations, treatments include radiofrequency catheter ablation to eliminate abnormal tissue, implantable cardioverter-defibrillators (ICD) for heart rhythm regulation, and medications to control heart rate, though these may have side effects. Recommendations for managing ventricular tachycardia involve an interprofessional team, including cardiologists, nurses, endocrinologists, and pharmacists. Patients should avoid strenuous exercise, maintain a heart-healthy lifestyle, and quit smoking. Adherence to medications and regular follow-ups with healthcare providers are crucial for optimal outcomes.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Ventricular_Tachycardia_f4ceha.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051853/ventricular-tachycardia-_ujclkp.mp3'
  },
  { 
    term: 'Ventricular Fibrillation', 
    definition: "Ventricular fibrillation (VFib) is a chaotic rhythm originating in the ventricles, resulting in no cardiac output. Coarse VFib is noted when the amplitude (height) of the rhythm is equal to or more than 3 mm. Fine VFib is less than 3 mm in height and signifies less electrical energy within the myocardium less opportunity for a successful defibrillation. It is a life-threatening emergency that requires immediate action: call 911, start CPR, and use an AED if available, as early defibrillation greatly improves survival chances. Survivors are at higher risk of recurrence and may need antiarrhythmic medications, an implanted defibrillator (ICD), or procedures like ablation to prevent future episodes. Recommendations for preventing heart issues include adopting a heart-healthy diet rich in fruits, vegetables, and lean proteins while avoiding salt, sugars, and saturated fats. Regular physical activity, quitting smoking, and limiting alcohol intake are essential. Additionally, regular checkups, medication adherence, managing blood pressure and cholesterol, and maintaining good sleep habits.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Ventricular_Fibrillation_avj5mm.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051853/ventricular-fibrillation-_khjp8t.mp3'
  },
  { 
    term: 'Paced Ventricular Rhythm', 
    definition: "Ventricular paced rhythm (or paced ventricular rhythm) results from the electronic pacing of a ventricle. Note the vertical spike before the QRS complex. An electronic pacemaker lead repeatedly generates a small but sufficient current to begin depolarization of the ventricle…and the resulting QRS complex. To alleviate symptoms, pacemakers may need reprogramming or the addition of an atrial lead. Patients undergoing pacemaker or lead implantation require 24-hour hospitalization and monitoring, along with prophylactic IV antibiotics like cefazolin or vancomycin. In some cases, hysteresis programming may help minimize pacing activity. Recommendations include a low-salt diet for heart failure and a high-salt diet for those with autonomic insufficiency. Patients should engage in tolerated activities and prioritize hydration. To prevent pacemaker syndrome, appropriate atrial pacing and baseline echocardiographic studies are advised. Long-term monitoring should involve follow-up visits for wound checks and regular pacemaker interrogations.",
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Paced_Ventricular_Rhythm_vjaiy8.png',
    audio: 'https://res.cloudinary.com/du2r9bzoq/video/upload/v1729051852/paced-ventricular-_xdtukg.mp3'
  },

];

const LearnPage: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsFlipped(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentCard]);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-blue-200 text-purple-800 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-purple-600">Learn Medical Terminology</h2>
        <p className="text-lg text-purple-700">Click on the card to reveal the definition</p>
      </motion.div>
      
      <motion.div
        className="mb-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }}
      >
        <Brain className="w-16 h-16 text-purple-500" />
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img 
            src={flashcards[currentCard].image} 
            alt={`Illustration for ${flashcards[currentCard].term}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleAudio}
            className="mt-4 bg-blue-200 hover:bg-blue-300 text-purple-700 px-4 py-2 rounded-full flex items-center justify-center w-full transition-colors duration-300"
          >
            {isPlaying ? <Pause className="mr-2" size={20} /> : <Play className="mr-2" size={20} />}
            {isPlaying ? 'Pause Audio' : 'Play Audio'}
          </motion.button>
          <audio ref={audioRef} src={flashcards[currentCard].audio} onEnded={() => setIsPlaying(false)} />
        </div>
        <div className="w-full md:w-2/3 perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-300 to-blue-200 rounded-xl shadow-lg cursor-pointer overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front side - Term */}
                <div 
                  className="absolute inset-0 flex items-center justify-center p-6 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold text-center text-purple-800">
                    {flashcards[currentCard].term}
                  </h3>
                </div>
                
                {/* Back side - Definition */}
                <div 
                  className="absolute inset-0 flex items-center justify-center p-6 backface-hidden overflow-y-auto"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-lg sm:text-xl text-purple-800">
                    {flashcards[currentCard].definition}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full max-w-6xl bg-purple-200 h-2 rounded-full mb-6">
        <div 
          className="bg-blue-400 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between w-full max-w-6xl">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevCard}
          className="bg-blue-200 hover:bg-blue-300 text-purple-700 px-4 py-2 rounded-full flex items-center transition-colors duration-300"
        >
          <ChevronLeft className="mr-2" />
          Previous
        </motion.button>
        <span className="text-lg font-semibold text-purple-600">
          {currentCard + 1} / {flashcards.length}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextCard}
          className="bg-blue-200 hover:bg-blue-300 text-purple-700 px-4 py-2 rounded-full flex items-center transition-colors duration-300"
        >
          Next
          <ChevronRight className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default LearnPage;