import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DotGridBackground } from '../components/ui/DotGridBackground'

import './App.css'

import { LandingPage } from './LandingPage'
import { TeamGenerator } from './TeamGenerator'

function App() {
  return (
    <BrowserRouter>
      <DotGridBackground />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team-generator" element={<TeamGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App