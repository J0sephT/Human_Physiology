import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LearnPage from './components/LearnPage';
import GamePage from './components/GamePage';
import ModelPredictionPage from './components/ModelPredictionPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/model-prediction" element={<ModelPredictionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;