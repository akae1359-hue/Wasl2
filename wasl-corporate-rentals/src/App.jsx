import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import components
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDiscovery from './components/PropertyDiscovery'
import CorporateApplication from './components/CorporateApplication'
import LeasingIntake from './components/LeasingIntake'
import ManagerApproval from './components/ManagerApproval'
import ContractsEjari from './components/ContractsEjari'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discovery" element={<PropertyDiscovery />} />
          <Route path="/application" element={<CorporateApplication />} />
          <Route path="/intake" element={<LeasingIntake />} />
          <Route path="/approval" element={<ManagerApproval />} />
          <Route path="/contracts" element={<ContractsEjari />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
