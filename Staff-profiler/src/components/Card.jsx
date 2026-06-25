import React from 'react'
import { Building2 } from 'lucide-react';

const Card = () => {
  return (
    <div className="child">
        <div className="top">
            <span>available</span>
            <span>$55/hr</span>
        </div>

        <div className="mid">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            <p>Wade wilson</p>
            <p>UI/UX designer</p>
            <p><Building2 />Epic Coders</p>
            <div className="tags">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p className="discription">
              Wade is a 32 year old UI/UX designer, with an impressive porfolio behind him.
            </p>

            <button>VIEW PROFILE</button>
        </div>
    </div>
  )
}

export default Card
