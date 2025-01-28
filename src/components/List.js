import React, { useEffect, useState } from 'react'

const List = () => {
  const [list, setList] = useState([]);
    
  useEffect(() => {
    const list = [
      {name: 'Vardaan Sr Sec School', address: 'Ratanpur Road, Navadera', mo_no: '9799145119', image: 'vardaan_sr.JPG'},
      {name: 'Vardaan Kids School', address: 'Sindhi Colony, New Colony', mo_no: '7062600101', image: 'vardaan_kids.JPG'},
      // {name: 'Navankur Academy', address: 'Ramdev Chowk, Shivaji Nagar, Housing Board', mo_no: '9509687045', image: 'hat.png'},
      // {name: 'Adarsh Vidhya Mandir Sr Sec School', address: 'Green Park Colony, Sadar Thana', mo_no: '9119103083', image: 'hat.png'}
    ]
    setList(list);    
  }, []);

  return (
    <div>
      <div className='list_upper_sec'>
        <div className='list_upper_body'>
        </div>
        <div className='list_lower_body'>
          <div className='list_bottom_sec'>
            <div className='list_lower_box'>
              <p className='list_heading'>Vardaan Group of Schools</p>
              <h2 className='list_description'>Pan Dungarpur Presence: Choose a school near you</h2>
              <div className='list_box'>
              {list.length && list.map((val, i)=>{
                return <span key={`list${i}`}>{val.name} {i<list.length-1?'|':''} </span>
              })}
              </div>
              <div className='list_cards'>
                {list.length && list.map((val, i)=>{
                  return <div key={`list-${i}`} className='list_item'>
                          <div className='list_card'>
                            <img className='list_img' src='https://presidencyschools.org/wp-content/uploads/2022/11/PSNLO-Feature-Image.webp' />
                            <div className='list_card_body'>
                              <p className='list_card_heading'>{val.name}</p>
                              <p className='list_card_desc'>{val.address}</p>                              
                            </div>
                            <div className='list_card_footer'>
                              <p className='list_card_contact'>Contact: {val.mo_no}</p>
                            </div>
                          </div>                            
                          </div>
                })}
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default List
