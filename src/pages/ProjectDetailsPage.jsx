import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../projects-data.json'

function ProjectDetailsPage() {

    const {projectId} = useParams()

    const foundProject = projects.find((oneProject)=>{
        return projectId===oneProject._id
    })

  return (
    <div>
        <h1>Project Details Page</h1>
        <h2>{foundProject.name}</h2>
        <p>{foundProject.year}</p>
        <p>{foundProject.technologies}</p>
      
    </div>
  )
}

export default ProjectDetailsPage