import React, { useEffect, useState } from 'react'

const Pedagogy = () => {
  const [pedagogy, setPedagogy] = useState([]);
  
    useEffect(() => {
      const pedagogyList = [
        {heading: 'Comprehensive Guidance', description: 'We provide personalized attention to every student, fostering their academic, emotional, and social growth. Our expert faculty and counselors ensure that each child receives the guidance they need to unlock their true potential and navigate life with confidence.', image: 'guidance.JPG'},
        {heading: 'A World of Opportunities', description: 'At The Vardaan Group of Schools, education goes beyond textbooks. With diverse extracurricular programs, state-of-the-art facilities, and platforms like Olympiads, sports championships, and cultural events, we empower students to explore their passions and talents.', image: 'opportunity.JPG'},
        {heading: 'Schools that Excel in Every Way', description: 'We are committed to holistic development through a 360-degree approach—academic rigor, moral education, skill-building, and innovation. Our curriculum, infrastructure, and values-driven ethos ensure students excel in every facet of life, preparing them to be leaders of tomorrow.', image: 'excel.JPG'}
      ]
      setPedagogy(pedagogyList);    
    }, []);

  return (
    <div className='pedagogy_sec'>
      <p className='pedagogy_heading'>Our Pedagogy</p>
      <p className='pedagogy_heading'>Three Simple Approaches</p>
      <div className='pedagogy_cards'>
        {pedagogy.length && pedagogy.map((val, i)=>{
          return <div key={`pedagogy_card${i}`} className='pedagogy_card'>
                    <img className='pedagogy_img' src={`/images/used/${val.image}`} />
                    <div className='pedagogy_card_body'>
                      <p className='pedagogy_card_heading'>{val.heading}</p>
                      <p className='pedagogy_card_desc'>{val.description}</p>
                    </div>
                  </div> 
        })}
      </div>
    </div>
  )
}

export default Pedagogy
