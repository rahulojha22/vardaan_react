import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const About = () => {
  const src = "https://images.vardaanschool.org/about"; 
  const images = [
    "/about1.JPG",
    "/about2.JPG",
    "/about3.jpg",
    "/about4.jpg",
    "/about5.jpg",
    "/about6.png",
    "/about7.jpg",
    "/about8.jpg",
    "/about9.jpg",
    "/about10.jpg",
    "/about11.JPG",
    "/about12.jpg",
    "/about13.jpg",
    "/about14.JPG",
    "/about15.jpg",
    "/about16.JPG",
    "/about17.jpg",
    "/about18.JPG",
    "/about19.JPG",
    "/about20.JPG",
    "/about21.JPG",
    "/about22.jpg",
    "/about23.jpg",
    "/about24.jpg",
    "/about25.jpeg",
    "/about26.jpeg",
    "/about27.jpeg",
    "/about28.jpeg",
    "/about29.jpg",
    "/about30.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup function
  }, [images.length]);

  return (
    <>
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
          <div className='abt_img_box'>
            {/* <img key={index} src={src+images[index]} alt="about" className="slide-image" loading='lazy' /> */}
              <div className="slider-container">
                <div className="slide-wrapper">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={`${src}${img}`}
                      alt="about"
                      className={`slide-image ${i === index ? "active" : ""}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
          </div>
        </div>        
      </div>
      <div className='abt_img_box1'>
          {/* <img className='about_img' src='https://images.vardaanschool.org/used/about.jpg' alt='about' /> */}
          {/* <img key={index} src={src+images[index]} alt="about" className="slide-image" loading='lazy' /> */}
          <div className="slider-container">
            <div className="slide-wrapper">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={`${src}${img}`}
                  alt="about"
                  className={`slide-image ${i === index ? "active" : ""}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default About
