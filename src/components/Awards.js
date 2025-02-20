import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const awardsList = [
      {img: 'tops_olympiad.png', type: 'image'},
      {heading: 'Perfect Scores', type: 'text', description: '22 students achieved a perfect score of 100/100, showcasing their mastery and dedication.'},
      {img: 'tops_results.png', type: 'image'},
      {heading: 'Gargi Awards', type: 'text', description: 'Over 300 students have been honored with the Gargi Award for exceptional academic performance and merit.'},
      {heading: 'Indira Priyadarshini Awards', type: 'text', description: '10+ students have been awarded the prestigious Indira Priyadarshini Award, accompanied by prize money of ₹1,00,000 and a scooty, in recognition of their exceptional talents and achievements.'},
      {heading: 'Create Toppers', type: 'text', description: 'Toppers across Science, Arts, and Commerce streams, setting benchmarks for academic excellence.'},
      {heading: 'Outstanding Results', type: 'text', description: 'Consistently delivering 100% results, with every student securing a minimum of 70% marks.'},
      {heading: 'State-Level Selections', type: 'text', description: 'Over 100 students represented the school in state-level competitions across major sports, including cricket, basketball, athletics, and shooting.'},
      {heading: 'SOF Olympiad Excellence', type: 'text', description: 'Students achieved 1st, 2nd, and 3rd International Ranks in the prestigious SOF Olympiad Exams, reflecting their global competitiveness.'}
    ]
    setAwards(awardsList);   
    const resultList = ['result1.jpg', '12_class_results1.jpg', '12_class_results2.jpg', '12_class_results3.jpg']
    setResults(resultList);   
  }, []);

  return (
    <div className='awards_sec'>
      <div className='awards_box'>
        <div className='awards_heading'>
          <span>Achievements</span>
        </div>
        <div className='award_body'>
          {awards && awards.map((val, i)=>{
            return  <div key={`award_card${i}`} className='award_item'>
                      <div className='award_card_box'>
                        <div className='award_card'>
                          <div className='award_card_body'>
                            {val.type==='text'?(
                              <div>
                                <p className='award_heading'>{val.heading}</p>
                                <p className='award_desc'>{val.description}</p>
                              </div>                              
                            ):(
                                <img src={`/images/used/${val.img}`} alt='result' className='award_image' />
                            )}
                            {/* <p className='award_heading'>{val.heading}</p>
                            <p className='award_desc'>{val.description}</p> */}
                          </div>                  
                        </div>
                        {/* <div className='award_logo_box'>

                        </div> */}
                      </div>
                    </div>
          })}          
        </div>
      </div>
      <div className='result_section'>
        Our Results
      </div>
      <div className='crousel_box'>
        <div className='crousel_body'>
           <Carousel data-bs-theme="dark" interval={3000} controls={true}>       
             {results.length && results.map((val, i)=>{
               return <Carousel.Item key={`crousel${i}`}>
                         <img
                           className="d-block w-100 poster_img"
                           src={`/images/results/${val}`}
                           alt="First slide"
                         />
                      </Carousel.Item>
             })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Awards
