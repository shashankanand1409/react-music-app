import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import bgImage from './assets/music-sheet-bg.svg'
import Dashboard from './components/dashboard';
import SongSheet from './components/songsheet';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/song/:id" element={<SongSheet />} />
        <Route path="/create" element={<SongSheet />} />
      </Routes>
    </Router>
  )
}
