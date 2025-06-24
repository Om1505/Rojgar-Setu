import React from 'react'
import { LuUserPlus } from "react-icons/lu"
import { VscTasklist } from "react-icons/vsc"
import { BiSolidLike } from "react-icons/bi"
import { MdOutlineManageSearch } from "react-icons/md"  // New icon for "Review Applications"
import "../home.css"

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <h3 className="how-it-works-title">How does it work?</h3>
      <div className="how-it-works-container">
        <div className="how-card">
          <div className="how-icon"><LuUserPlus /></div>
          <h4 className="how-step-title">Create an Account</h4>
          <p className="how-step-description">
            Create a free account as a job seeker or employer. Get your profile up and running in just minutes to start applying for jobs or posting openings. Personalize your profile to showcase your skills or hiring needs.
          </p>
        </div>
        <div className="how-card">
          <div className="how-icon"><VscTasklist /></div>
          <h4 className="how-step-title">Search Openings</h4>
          <p className="how-step-description">
            Employers can share detailed job listings, while job seekers can explore a wide range of available opportunities. Use smart filters to quickly find jobs that align with your skills.
          </p>
        </div>
        <div className="how-card">
          <div className="how-icon"><BiSolidLike /></div>
          <h4 className="how-step-title">Hire or Get Hired</h4>
          <p className="how-step-description">
            Employers can easily shortlist candidates and send job offers. Job seekers can review these offers and choose roles that best fit their career aspirations.
          </p>
        </div>
        <div className="how-card">
          <div className="how-icon"><MdOutlineManageSearch /></div>
          <h4 className="how-step-title">Review Applications</h4>
          <p className="how-step-description">
            Employers can view and manage applications submitted for their job listings. Quickly assess candidates and take action to move the hiring process forward.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
