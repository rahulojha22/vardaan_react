import React, { useEffect, useState } from 'react'

const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const schoolInfo = [
      {heading: '25+ Years', description: 'A legacy of enriching young minds and shaping bright futures.', icon: 'experience.png'},
      {heading: 'Highly Qualified Faculty', description: 'Over 1,000 faculty members dedicated to student success.', icon: 'faculty.png'},
      {heading: 'Recognized Excellence', description: 'Proud recipients of the "Most Promising Institute in South Rajasthan" award.', icon: 'recognized.png'},
      {heading: 'Comprehensive Network', description: '10 schools and 2 colleges, fostering education across regions.', icon: 'network.png'}
    ]
    setInfo(schoolInfo);    
  }, []);

  useEffect(() => {
  }, [info]);

  return (
    <div>
      <p className='info_top_heading'>Why Choose Us</p>
      <div className='info_sec'>      
        {info && info.map((val, i)=>{
          return <div key={`info_card${i}`} className='info_card_box'>
                  <div className='info_card'>
                    <div className='info_card_body'>
                      <p className='info_heading'>{val.heading}</p>
                      <p className='info_desc'>{val.description}</p>
                    </div>                  
                  </div>
                  <div className='info_logo_box'>
                    <img src={`/images/icons/${val.icon}`} className='info_logo' />
                  </div>
                </div>
        })}      
      </div>
    </div>
  )
}

export default Info
