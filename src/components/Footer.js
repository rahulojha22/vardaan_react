import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [schools, setSchool] = useState([]);
  
  useEffect(() => {
    const schoolList = [
      {name: 'Vardaan Sr Sec School, Dungarpur', address: 'Ratanpur Road, Navadera, Dungarpur', m_no: '9799145119', location: 'https://maps.app.goo.gl/35oMUmWA2NSqZuon9'},
      {name: 'Vardaan Kids School, Dungarpur', address: 'C-47, Sindhi Colony, New Colony, Dungarpur', m_no: '7062600101', location: 'https://maps.app.goo.gl/ramKY3LwgCH7ks3y8'}
    ]
    setSchool(schoolList);    
  }, []);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className='footer_sec'>
        <div className='footer_box'>
          <div className='footer_left'>
            <div className='footer_item'>
              <p className='item_name'>Address</p>
              <p className='item_description'>Dungarpur Rajasthan-314001, India</p>
            </div>
            <div className='footer_item'>
              <p className='item_name'>Phone</p>
              <p className='item_description'>Tel: 9887281347</p>
            </div>            
          </div>
          <div className='footer_right'>
            <div>
              <p className='school_list_heading'>OUR SCHOOLS</p>
              <div className='school_list'>
                {schools && schools.map((val, i)=>{
                  return <div key={`school${i}`} className='school_item'>
                    <div>{val.name}</div>
                    <div className='ft_add' onClick={()=>handleClick(val.location)}>📍 {val.address}</div>
                    <div>📞 {val.m_no}</div>
                  </div>
                })}
              </div>
            </div>
            <div>

            </div> 
            <div className='social_sec'>
                Follow us on Social:
                <div className='social_icons'>
                  <div className='ft_wtsap_btn' onClick={()=>handleClick("")}>
                    <img src='/images/icons/whatsapp.png' className='yt_icon' />
                    <span className='icon_text'>Whatsapp</span>
                  </div>
                  <div className='ft_fb_btn' onClick={()=>handleClick("")}>
                    <img src='/images/icons/facebook.png' className='yt_icon' />
                    <span className='icon_text'>Facebook</span>
                  </div>
                  <div className='ft_insta_btn' onClick={()=>handleClick("https://www.instagram.com/vardaan_group_of_schools?utm_source=qr")}>
                    <img src='/images/icons/instagram.png' className='yt_icon' />
                    <span className='icon_text'>Instagram</span>
                  </div>
                  <div className='ft_yt_btn' onClick={()=>handleClick("https://www.youtube.com/@vardaanschooldungarpur4830")}>
                    <img src='/images/icons/youtube.png' className='yt_icon' />
                    <span className='icon_text'>Youtube</span>
                  </div>
                </div>
            </div>         
          </div>
        </div>
      </div>
      <div className='clopyright_sec'>© Vardaan Group of Schools. All rights reserved.</div>
    </>
  )
}

export default Footer
