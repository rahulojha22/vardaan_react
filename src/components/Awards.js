import React, { useEffect, useState } from 'react'

const Awards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const awardsList = [
      {heading: 'Outstanding Results', description: 'Consistently delivering 100% results, with every student securing a minimum of 70% marks.'},
      {heading: 'Perfect Scores', description: '22 students achieved a perfect score of 100/100, showcasing their mastery and dedication.'},
      {heading: 'SOF Olympiad Excellence', description: 'Students achieved 1st, 2nd, and 3rd International Ranks in the prestigious SOF Olympiad Exams, reflecting their global competitiveness.'},
      {heading: 'Gargi Awards', description: 'Over 300 students have been honored with the Gargi Award for exceptional academic performance and merit.'},
      {heading: 'Indira Priyadarshini Awards', description: '10+ students have been awarded the prestigious Indira Priyadarshini Award, accompanied by prize money of ₹1,00,000 and a scooty, in recognition of their exceptional talents and achievements.'},
      {heading: 'Create Toppers', description: 'Toppers across Science, Arts, and Commerce streams, setting benchmarks for academic excellence.'},
      {heading: 'State-Level Selections', description: 'Over 100 students represented the school in state-level competitions across major sports, including cricket, basketball, athletics, and shooting.'}
    ]
    setAwards(awardsList);    
  }, []);

  function scrollAwards(direction) {
    const container = document.getElementById("awardBody");
    const scrollAmount = 300; // Adjust this for how much to scroll per click
  
    if (direction === "left") {
      container.scrollLeft -= scrollAmount; // Scroll left
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount; // Scroll right
    }
  }

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
                            <p className='award_heading'>{val.heading}</p>
                            <p className='award_desc'>{val.description}</p>
                          </div>                  
                        </div>
                        {/* <div className='award_logo_box'>

                        </div> */}
                      </div>
                    </div>
          })}          
        </div>
        {/* <div className='scroll_btn_sec'>
          <button className="scroll_btn left" onClick={() => scrollAwards("left")}>
            &#8249;
          </button>
          <button className="scroll_btn right" onClick={() => scrollAwards("right")}>
            &#8250;
          </button>
        </div>         */}
      </div>
    </div>
  )
}

export default Awards
