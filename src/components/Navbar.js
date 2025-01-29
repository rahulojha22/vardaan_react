import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pages, setPages] = useState([]);

  const [scrolled, setScrolled] = useState(false);

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
      {name: 'Our Management', route: '/management'},
      {name: 'Events', route: '/events'},
      {name: 'Results', route: '/results'}
    ]
    setPages(pagesList);    
  }, []);

  return (
    <div className={`navbar_box ${scrolled ? "navbar_bg2" : "navbar_bg1"}`}>      
      <div>        
      </div>
      {pages.length && pages.map((val, i)=>{
        return <div key={`page-${i}`} className='page_item'>
                  {/* <div className='page_link'>{val.name}</div> */}
                  <Link className='page_link' to={val.route}>{val.name}</Link>                                             
                </div>
      })}
    </div>
  )
}

export default Navbar
