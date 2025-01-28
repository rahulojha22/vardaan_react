import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='about_sec'>
      <div className='about_overlay'>
        <div className='about_school'>
          <p className='about_heading'>About</p>
          <p className='about_name'>VARDAAN GROUP OF SCHOOLS</p>
          <div className='about_desc'>
            <p><b>The Vardaan - Mahaveer Group of Schools</b> spans Dungarpur, Udaipur, Rishabhdeo, and Chawand, and operates under the prestigious Bhagwan Mahaveer Shiksha & Vikas Samiti, established on <b>16th April 2000</b>. Over the past two decades, we have become a beacon of academic excellence and moral education, earning a reputation as one of Southern Rajasthan's leading K-12 institutions.</p>
            <p>At Vardaan, we nurture not just academic brilliance but also strong ethical and moral values, fostering inclusivity and secularism. Our students are equipped to thrive as global citizens and life-long achievers. This ethos is reflected in our thematic and integrated approach to education, meticulously designed after years of research to deliver a comprehensive and engaging curriculum.</p>
            <p>We proudly offer dual-board education, adhering to both the <b>Central Board of Secondary Education (CBSE)</b> and the <b>Rajasthan Board of Secondary Education (RBSE)</b>, catering to the diverse academic needs of our students.</p>
          </div>
          <Link className='about_link' to="/about-us">Read More</Link>
        </div>
        <div className='img_box'>
          <img className='about_img' src='/images/used/mission.JPEG' alt='about' />
        </div>
      </div>      
    </div>
  )
}

export default About
