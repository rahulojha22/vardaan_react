import React, { useEffect, useState } from 'react'

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  
    useEffect(() => {
      const facilitiesList = [
        {name: 'Library', image: 'library.webp'},
        {name: 'Smart Classrooms', image: 'smart_class.webp'},
        {name: 'Sports Facilities', image: 'sports_facilities.webp'},
        {name: 'Computer Lab', image: 'computer_lab.webp'},
        {name: 'GPS enabled Transport', image: 'gps.webp'},
        {name: 'CCTV Surveillance', image: 'cctv.webp'},
        {name: 'State-of-the-art Laboratories', image: 'labs.webp'}
      ]
      setFacilities(facilitiesList);    
    }, []);

  return (
    <>
      <div className='facilities_sec'>
                
      </div>
      <div className='facilities_bottom'>
        <div className='facilities_bottom_box'>
          <div className='facilities_heading_sec'>
              <p className='facilities_heading'>Best-in-Class Facilities</p>
              {/* <p className='facilities_sub_heading'>Facilities</p> */}
            </div>
            <div className='facilities_body'>
                {facilities && facilities.map((val, i)=>{
                  return <div key={`facilities_card${i}`} className='facilities_card_box'>
                    <div className='facilities_img'>
                      <img src={`https://images.vardaanschool.org/used/${val.image}`} className='facility_img' alt='facility' loading='lazy' />
                    </div>
                    <span className='facilities_name'>{val.name}</span>
                  </div>
                })}
            </div>
            <div className='facilities_description'>
              <span>Empowering Young Minds with Excellence, Ethics, and Innovation – The Perfect Ambiance for Lifelong Learning.</span>
            </div>
          </div>
        </div>        
    </>    
  )
}

export default Facilities
