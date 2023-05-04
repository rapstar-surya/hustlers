
import React from 'react'
import "./Home.css"
import TrainingPrograms from '../components/TrainingPrograms'
import TrainerSection from '../components/TrainerSection'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='image-container'>
        <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className='image' />
        <div className='image-text'>Welcome to our gym website</div>
      </div>
      <TrainingPrograms/>
      <TrainerSection/>
    </div>
  )
}
