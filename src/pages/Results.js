import React, { useEffect, useState } from 'react'

const Results = () => {
  const [results, setResults] = useState([]);
      
  useEffect(() => {
    const resultList = ['result1.jpg', 'result2.jpg', 'result3.jpg', '12_class_results1.jpg', '12_class_results2.jpg', '12_class_results3.jpg']
    setResults(resultList);    
  }, []);

  return (
    <div>
      <div className='subpages_heading1'>
        <img className='sub_heading_img' src='/images/used/result_heading.png' alt='about' />
        <img className='sub_heading_img_mob' src='/images/used/result_heading_mob.png' alt='about' />
      </div>
      <div className='subpages_body'>
        <div className='result_body'>
          {results.length && results.map((val, i)=>{
            return <div className={`result_img ${(i===1||i===2)?'rslt_img1':'rslt_img2'}`}>
                      <img src={`/images/results/${val}`} alt='result' width={'100%'} />
                   </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Results
