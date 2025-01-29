import React, { useEffect, useState } from 'react'

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  
    useEffect(() => {
      const facilitiesList = [
        {name: 'Library', image: 'library.jpg'},
        {name: 'Smart Classrooms', image: 'smart_class.jpg'},
        {name: 'Sports Facilities', image: 'sports_facilities.jpg'},
        {name: 'Computer Lab', image: 'computer_lab.jpg'},
        {name: 'GPS enabled Transport', image: 'gps.png'},
        {name: 'CCTV Surveillance', image: 'cctv.jpg'},
        {name: 'State-of-the-art Laboratories', image: 'labs.JPG'}
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
                      <img src={`/images/used/${val.image}`} className='facility_img' alt='facility' />
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
