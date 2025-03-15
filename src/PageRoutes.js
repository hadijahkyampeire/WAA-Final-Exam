import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sections from './components/Sections';
import SectionDetails from './components/SectionDetails';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sections" replace />}/>
      <Route path="/sections" element={<Sections />} />
      <Route path="/sections/:id" element={<SectionDetails />} />
    </Routes>
  )
}

export default PageRoutes