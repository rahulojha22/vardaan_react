import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pages, setPages] = useState([]);

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  useEffect(() => {
    const pagesList = [
      {name: 'Home', route: '/home'},
      {name: 'About Us', route: '/about-us'},
      // {name: 'Our Management', route: '/management'},
      {name: 'Events', route: '/events'},
      {name: 'Results', route: '/results'}
    ]
    setPages(pagesList);    
  }, []);

  return (
    <div className={`navbar_box ${scrolled ? "navbar_bg2" : "navbar_bg1"}`}>      
      <div className='nav_logo'>
        <img src='/images/used/vardaan_logo1.PNG' alt='logo' className='vardaan_n_logo'/>        
      </div>
      <div className='link_box'>
        {pages.length && pages.map((val, i)=>{
          return <div key={`page-${i}`} className='page_item'>
                    {/* <div className='page_link'>{val.name}</div> */}
                    <Link className='page_link' to={val.route}>{val.name}</Link>                                             
                  </div>
        })}
      </div>
      <div className='link_box1'>
        <div onClick={() => setIsOpen(!isOpen)}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="30" height="4" fill="black"/>
            <rect y="13" width="30" height="4" fill="black"/>
            <rect y="21" width="30" height="4" fill="black"/>
          </svg>
        </div>   
        <div className={`collapsible ${isOpen ? "open" : ""}`}>
          {pages.length && pages.map((val, i)=>{
            return <div key={`page1-${i}`} className='page_item'>
                      <Link className='page_link' to={val.route}>{val.name}</Link>                                             
                    </div>
          })}
        </div>     
      </div>
    </div>
  )
}

export default Navbar
