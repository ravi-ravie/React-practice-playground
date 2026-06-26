import React from 'react'
import { Building2 , User } from 'lucide-react';

const iconMap = {
  user : User,
  building2 : Building2
}

const Card = ({profile}) => {
  const Icon = iconMap[profile.icon]
  
  return (
    <div className="child">
        <div className="top">
            {profile.available && <span className='status'>{profile.available}</span>}
            <span>{profile.pay}</span>
        </div>

        <div className="mid">
            <img src={profile.img} alt=""  />
            <p className='user'>{profile.name}</p>
            <p className='post'>{profile.post}</p>
            <p className='employment'><Icon size={12}/>{profile.employment}</p>
            <div className="tags">
              <span>{profile.skill[0]}</span>
              <span>{profile.skill[1]}</span>
              <span>{profile.skill[2]}</span>
              <span className='more'>+{profile.skill.length-3}</span>
            </div>

            <p className="discription">
              {profile.description}
            </p>
        </div>
        <div className="bottom">
            <button>VIEW PROFILE</button>
        </div>
    </div>
  )
}

export default Card
