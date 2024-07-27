
import './App.css'
import { useState } from 'react'

import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './pages/Navbar'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {


  return (
    <>

      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage studentName="Daniel"/>}/>
        <Route path="/projects" element={<ProjectsPage/>}></Route>
        <Route path="/projects/:projectId" element={<ProjectDetailsPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
