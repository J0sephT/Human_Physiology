"use client"

import React, { useState } from 'react';
import { Brain, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const questions = [
  { label: 'Heart Rate', options: ['60-100', '< 60', '> 100', 'Variable', '170-230', '150 (2:1), 75 (4:1)', '40-60', '20-40', '41-100', 'None (chaotic)'] },
  { label: 'QRS Complex', options: ['Narrow', 'Narrow or Wide', 'Wide'] },
  { label: 'P Wave', options: ['Upright', 'Flattened/Notched', 'Absent', 'Sawtooth', 'Vertical Spike Before P', 'Inverted/Absent', '3 or more different P waves', 'Upright (Normal Sinus)', 'Vertical Spike Before QRS'] },
  { label: 'Rhythm Type', options: ['Regular', 'Irregular', 'Regular (with pauses)', 'Irregular (with pauses)', 'Regular (with dropped beats)', 'Chaotic'] },
  { label: 'PR Interval', options: ['0.12-0.20 sec', 'Shortened (<0.12 sec)', 'Not measurable', 'Depends on pacemaker', '> 0.20 sec', 'Progressively lengthens', 'Fixed PR Interval', 'Variable'] },
  { label: 'QT Interval', options: ['Normal (0.35-0.44 sec)', 'Prolonged', 'Shortened', 'Depends on pacemaker'] },
  { label: 'Escape Mechanism', options: ['None', 'AV Junction Escape', 'Pacemaker', 'Ventricular Escape', 'Junctional Escape'] },
  { label: 'P-P Interval', options: ['Regular', 'Irregular', 'Regular (with pauses)', 'Irregular (with pauses)', 'Irregular (PAC)', 'Irregular (with dropped beats)', 'Irregular (PJC)', 'Irregular (PVC)', 'Chaotic'] },
  { label: 'RR Interval', options: ['Regular (0.6-1 sec)', 'Prolonged (> 1 sec)', 'Shortened (< 0.6 sec)', 'Varies (increases/decreases)', 'Varies (with pauses)', 'Irregular (with pauses)', 'Irregular (PAC)', 'Very short (< 0.35 sec)', 'Highly irregular', 'Regular (based on flutter rate)', 'Regular (pacemaker rate)', 'Irregular (gradual increase)', 'Irregular (fixed PR with dropped beats)', 'Regular (with dropped beats)', 'Irregular (disassociated)', 'Irregular (PJC)', 'Regular (1-1.5 sec)', 'Regular (slow)', 'Regular (faster)', 'Very short (fast)', 'Chaotic', 'Varies', 'Irregular (PVC)'] },
  { label: 'Atrial/Ventricular Disassociation', options: ['Yes', 'No'] },
];

const ModelPredictionPage: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(0));
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex + 1;
    setAnswers(newAnswers);
  };

  const predictHeartRhythm = () => {
    // This is a simplified version of the prediction logic
    // In a real application, you would use a more sophisticated model
    if (JSON.stringify(answers) === JSON.stringify([1, 1, 1, 1, 1, 1, 1, 1, 1, 2])) {
      setResult('Regular Sinus Rhythm');
    } else if (JSON.stringify(answers) === JSON.stringify([2, 1, 1, 1, 1, 2, 1, 1, 2, 2])) {
      setResult('Sinus Bradycardia');
    } else {
      setResult('The parameters do not correspond to any registered heart affection');
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-purple-600">Heart Rhythm Prediction</h2>
        <Brain size={64} className="text-purple-500 mb-4 mx-auto" />
        <p className="text-lg text-purple-700 max-w-2xl mx-auto">
          Answer the following questions about the ECG parameters to predict the heart rhythm.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-8">
        {questions.map((question, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">{question.label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {question.options.map((option, optionIndex) => (
                <motion.button
                  key={optionIndex}
                  onClick={() => handleAnswer(index, optionIndex)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    answers[index] === optionIndex + 1
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.button
        onClick={predictHeartRhythm}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Predict Heart Rhythm
        <ChevronRight className="ml-2" size={20} />
      </motion.button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-white bg-opacity-70 rounded-lg max-w-4xl backdrop-blur-md text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-purple-600">Prediction Result</h3>
          <p className="text-lg text-purple-800">{result}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ModelPredictionPage;