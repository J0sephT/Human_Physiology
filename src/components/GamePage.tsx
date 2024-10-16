"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, AlertCircle, Brain, Award } from 'lucide-react';


const questions = [
  {
    // Atrial Flutter 1
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Atrial_Flutter_c41emv.png',
    options: ['Sinus Arrhythmia ', 'NSR with First Degree AV Block', 'Atrial Flutter', 'Second Degree AV Block Type II ', 'Wandering Pacemaker', 'Idioventricular Rhythm'],
    correctAnswer: 'Atrial Flutter'
  },

  //Sinus Tachycardia 2
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Tachycardia_t9oi6o.png',
    options: ['Supraventricular Tachycardia', 'Atrial Fibrillation', 'Junctional Tachycardia ', 'Accelerated Idioventricular Rhythm', 'Sinus Tachycardia', 'Ventricular Tachycardia'],
    correctAnswer: 'Sinus Tachycardia'
  },

  //Junctional Tachycardia 3
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/Junctional_Tachycardia_swmaxc.png',
    options: ['Junctional Tachycardia', 'Ventricular Fibrillation', 'Paced Ventricular Rhythm', 'Atrial Fibrillation', 'Accelerated Junctional ', 'Premature Junctional Complex'],
    correctAnswer: 'Junctional Tachycardia'
  },
  //NSR with Premature Atrial Complexes 4
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/NSR_with_Premature_Atrial_Complexes_vicxrh.png',
    options: ['Regular Sinus Rhythm', 'NSR with First Degree AV Block', 'Sinus Arrhythmia', 'None', 'Premature Junctional Complex', 'NSR with Premature Atrial Complexes'],
    correctAnswer: 'NSR with Premature Atrial Complexes'
  },
  
  
  //Accelerated Idioventricular Rhythm 5
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Accelerated_Idioventricular_Rhythm_AIVR_kes5le.png',
    options: ['Paced Ventricular Rhythm', 'NSR with Second Degree AV Block', 'Sinus Rhythm', 'Accelerated Idioventricular Rhythm', 'Idioventricular Rhythm', 'Sinus Rhythm with Premature Ventricular Complex'],
    correctAnswer: 'Accelerated Idioventricular Rhythm'
  },

 
  //Premature Junctional Complex 6
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Premature_Junctional_Complex_PJC_lhspbg.png',
    options: ['Premature Junctional Complex', 'Third Degree AV Block', 'Paced Atrial rhythm', 'Sinus Rythm', 'NSR with Second Degree AV Block', 'Sinus Bradycardia'],
    correctAnswer: 'Premature Junctional Complex'
  },

  //Second Degree AV Block Type I 7
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Second_Degree_AV_Block_Type_I_a0u3sj.png',
    options: ['Second Degree AV Block Type II', 'First Degree AV Block', 'Second Degree AV Block Type I', 'Sinus Tachycardia', 'Sinus Arrest', 'Atrial Flutter'],
    correctAnswer: 'Second Degree AV Block Type I'
  },

   //Ventricular Fibrillation 8
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Ventricular_Fibrillation_avj5mm.png',
    options: ['Wandering Pacemaker', 'Ventricular Fibrillation', 'Junctional Rhythm', 'Sinus Exit Block', 'Sinus Arrest', 'Regular Sinus Rhythm'],
    correctAnswer: 'Ventricular Fibrillation'
  },

   //Atrial Fibrillation 9
   {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Atrial_Fibrillation_d0n7j9.png',
    options: ['Premature Junctional Complex', 'Ventricular Fibrillation', 'Wandering Pacemaker', 'Atrial Fibrillation', 'Paced Ventricular Rhythm', 'Junctional Rhythm'],
    correctAnswer: 'Atrial Fibrillation'
  },



   //Sinus Arrhythmia 10
   {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Sinus_Arrythmia_mcppcl.png',
    options: ['Sinus Bradycardia', 'Sinus Arrest', 'Sinus Exit Block', 'Paced Atrial rhythm', 'Sinus Arrhythmia', 'Second Degree AV Block Type I'],
    correctAnswer: 'Sinus Arrhythmia'
  },  

   //Paced Ventricular Rhythm  11
   {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Paced_Ventricular_Rhythm_vjaiy8.png',
    options: ['Accelerated Idioventricular Rhythm', 'Paced Ventricular Rhythm', 'Wandering Pacemaker', 'Idioventricular Rhythm', 'Accelerated Junctional', 'NRS with First Degree AV Block'],
    correctAnswer: 'Paced Ventricular Rhythm'
  },  



   //Sinus Bradycardia  12
   {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Bradycardia_y7rnu5.png',
    options: ['Sinus Tachycardia', 'Sinus Arrhythmia', 'Sinus Exit Block', 'Second Degree AV Block Type II', 'Sinus Bradycardia', 'Paced Atrial rhythm'],
    correctAnswer: 'Sinus Bradycardia'
  },  


   //Third Degree AV Block  13
   {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Third_Degree_AV_Block_moiew9.png',
    options: ['Paced Atrial rhythm', 'Third Degree AV Block', 'Sinus Exit Block', 'NSR with First Degree AV Block', 'Wandering Pacemaker', 'Second Degree AV Block Type II'],
    correctAnswer: 'Third Degree AV Block'
  },  


  //Wandering Pacemaker 14
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Wandering_Pacemaker_hppdav.png',
    options: ['Atrial Fibrillation', 'Sinus Arrhythmia', 'NSR with Premature Atrial Complexes', 'Wandering Pacemaker', 'Paced Atrial rhythm', 'Premature Junctional Complex'],
    correctAnswer: 'Wandering Pacemaker'
  },  

  

  //Sinus Rhythm with Premature Ventricular Complex  15
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Rhythm_with_Premature_Ventricular_Complex_enis6r.png',
    options: ['Second Degree AV Block Type II', 'Paced Atrial rhythm', 'Paced Ventricular Rhythm', 'Sinus Arrest', 'Sinus Bradycardia', 'Sinus Rhythm with Premature Ventricular Complex'],
    correctAnswer: 'Sinus Rhythm with Premature Ventricular Complex'
  },  


  //Junctional Rhythm  16
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Junctional_Rhythm_yz0fwu.png',
    options: ['Third Degree AV Block', 'Second Degree AV Block with 2:1 Conduction', 'Junctional Rhythm', 'Second Degree AV Block Type I', 'Sinus Bradycardia', 'Sinus Exit Block'],
    correctAnswer: 'Junctional Rhythm'
  },  


  //Sinus Exit Block 17
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Sinus_Exit_Block_nmwear.png',
    options: ['Sinus Exit Block', 'Sinus Bradycardia', 'Paced Atrial rhythm', 'Second Degree AV Block with 2:1 Conduction', 'Third Degree AV Block', 'Idioventricular Rhythm'],
    correctAnswer: 'Sinus Exit Block'
  },  


  //Sinus Arrest 18
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Sinus_Arrest_eiaqof.png',
    options: ['Sinus Bradycardia', 'Sinus Tachycardia', 'Sinus Arrest', 'Sinus Exit Block', 'NSR with First Degree AV Block', 'Junctional Rhythm'],
    correctAnswer: 'Sinus Arrest'
  },  


  //Second Degree AV Block Type II 19
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Second_Degree_AV_Block_Type_II_f2p6us.png',
    options: ['Second Degree AV Block Type I', 'Paced Atrial rhythm', 'Sinus Arrest', 'Sinus Arrhythmia', 'Third Degree AV Block', 'Second Degree AV Block Type II'],
    correctAnswer: 'Second Degree AV Block Type II'
  },  


  //NSR with First Degree AV Block  20
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047698/NSR_with_First_Degree_AV_Block_g3srdj.png',
    options: ['Second Degree AV Block Type II', 'NSR with First Degree AV Block', 'Atrial Flutter', 'Second Degree AV Block with 2:1 Conduction', 'Junctional Rhythm', 'Junctional Tachycardia'],
    correctAnswer: 'NSR with First Degree AV Block '
  },  


  //Accelerated Junctional   21
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Accelerated_Junctional_skda9h.png',
    options: ['Idioventricular Rhythm', 'Accelerated Idioventricular Rhythm', 'Paced Ventricular Rhythm', 'Accelerated Junctional', 'Junctional Rhythm', 'Premature Junctional Complex'],
    correctAnswer: 'Accelerated Junctional'
  },  


  //Ventricular Tachycardia  22
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Ventricular_Tachycardia_f4ceha.png',
    options: ['Sinus Tachycardia', 'Supraventricular Tachycardia', 'Junctional Tachycardia', 'Accelerated Junctional', 'Ventricular Tachycardia', 'Paced Ventricular Rhythm '],
    correctAnswer: 'Ventricular Tachycardia'
  },  


  //Second Degree AV Block with 2:1 Conduction  23
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Second_Degree_AV_Block_with_21_Conduction_rppvis.png',
    options: ['Second Degree AV Block with 2:1 Conduction', 'Sinus Exit Block', 'Second Degree AV Block Type I', 'Third Degree AV Block', 'Junctional Rhythm', 'Ventricular Fibrillation'],
    correctAnswer: 'Second Degree AV Block with 2:1 Conduction'
  },  



  //Paced Atrial rhythm  24
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047692/Paced_Atrial_rhythm_bjcxbs.png',
    options: ['Second Degree AV Block Type II', 'Paced Atrial rhythm', 'Sinus Rhythm with PVC', 'Atrial Flutter', 'Sinus Arrest', 'Sinus Arrhythmia'],
    correctAnswer: 'Paced Atrial rhythm'
  },  

  //Idioventricular Rhythm  25
  {
    image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047697/Idioventricular_Rhythm_IVR_rvodja.png',
    options: ['Sinus Arrhythmia', 'NSR with PAC', 'Idioventricular Rhythm', 'Atrial Fibrillation', 'PJC', 'Accelerated Junctional'],
    correctAnswer: 'Idioventricular Rhythm'
  },  



    //Regular Sinus Rhythm  26
    {
      image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729042456/Regular_Sinus_Rhythm_qhcmwm.png',
      options: ['Sinus Arrhythmia', 'Regular Sinus Rhythm', 'Atrial Flutter', 'Accelerated Junctional', 'Wandering Pacemaker', 'Idioventricular Rhythm'],
      correctAnswer: 'Regular Sinus Rhythm'
    },  
  
    //Supraventricular Tachycardia 27
    {
      image: 'https://res.cloudinary.com/du2r9bzoq/image/upload/v1729047693/Supraventricular_Tachycardia_tdt2i0.png',
      options: ['Atrial Fibrillation', 'Junctional Tachycardia', 'Ventricular Tachycardia', 'Supraventricular Tachycardia', 'Paced Ventricular Rhythm', 'Ventricular Fibrillation'],
      correctAnswer: 'Supraventricular Tachycardia'
    },  


    
  // Add more questions here to reach a total of 27
];

const GamePage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setMistakes(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setGameOver(false);
  };

  const calculateFinalScore = () => {
    return Math.round((score / questions.length) * 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-blue-200 text-purple-800 p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-purple-600">Medical Terminology Game</h2>
        <p className="text-lg text-purple-700">Test your knowledge of medical terms</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!gameOver ? (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-300 to-blue-200 p-4 text-purple-800">
              <span className="text-lg font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="p-6">
              <img src={questions[currentQuestion].image} alt="Medical Image" className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-purple-200" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`py-3 px-4 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                      selectedAnswer === option
                        ? isCorrect
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-purple-100 text-purple-800 hover:bg-blue-200 hover:text-purple-900'
                    }`}
                    disabled={showFeedback}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-6 p-4 rounded-lg text-center text-lg font-semibold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {isCorrect ? (
                      <p>Correct! Well done.</p>
                    ) : (
                      <p>Incorrect. The correct answer is: {questions[currentQuestion].correctAnswer}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-purple-700">Score: {score}/{questions.length}</p>
                <motion.button
                  onClick={nextQuestion}
                  className="bg-blue-200 hover:bg-blue-300 text-purple-700 px-6 py-2 rounded-full flex items-center transition-colors duration-300"
                  disabled={!showFeedback}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Question
                  <ChevronRight className="ml-2" size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gameOver"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-4 text-purple-500" />
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Game Over!</h3>
            <p className="text-3xl font-bold mb-2 text-purple-600">Your final score: {calculateFinalScore()}/100</p>
            <p className="text-lg mb-2 text-purple-600">Correct answers: {score}/{questions.length}</p>
            <p className="text-lg mb-6 text-purple-600">Mistakes: {mistakes}</p>
            <motion.button
              onClick={restartGame}
              className="bg-blue-200 hover:bg-blue-300 text-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Play Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 p-6 bg-white bg-opacity-70 rounded-lg max-w-4xl backdrop-blur-md"
      >
        <h3 className="text-xl font-semibold mb-2 text-purple-600 flex items-center">
          <Brain className="mr-2" size={24} />
          Did you know?
        </h3>
        <p className="text-purple-800">
          Human Physiology II and Electrophysiology are crucial fields in understanding how our bodies function at a cellular level. 
          Electrophysiology specifically deals with the electrical properties of biological cells and tissues, playing a vital role in 
          neuroscience and cardiology.
        </p>
      </motion.div>
    </div>
  );
};

export default GamePage;