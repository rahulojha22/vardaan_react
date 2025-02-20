import React, { useEffect, useState } from 'react'

const About = () => {
  const [management, setManagement] = useState([]);

  useEffect(() => {
      const managementList = [
        {name: 'Mr. Sunder Lal Jain', designation: 'Chairman', image: 'sundarlal.jpg', description: 'Education is the foundation of a progressive society. At The Vardaan - Mahaveer Group of Schools, we believe in nurturing young minds with knowledge, discipline, and values that shape them into responsible global citizens. Our vision is to create an institution where learning is not just about academics but also about character, ethics, and innovation. With over two decades of excellence, we continue to strive for holistic development and academic brilliance for every student who walks through our doors.'},
        {name: 'Mr. Vikas Jain', designation: 'Patron', image: 'vikas.jpg', description: 'True education goes beyond books—it inspires curiosity, fosters creativity, and instills a passion for lifelong learning. At Vardaan, we have built an environment where students are encouraged to think independently, challenge the status quo, and develop leadership skills that will guide them through life. Our commitment is to provide world-class education while preserving the cultural and moral ethos that defines our community.'},
        {name: 'Mr. Saurabh Jain', designation: 'Director', image: 'saurabh.jpg', description: 'Our vision is to create a dynamic learning experience that prepares students for the challenges of tomorrow. With an evolving curriculum, state-of-the-art infrastructure, and a dedicated faculty, Vardaan stands at the forefront of modern education. We take pride in our ability to blend academic rigor with practical exposure, ensuring that our students emerge as well-rounded individuals ready to make meaningful contributions to society.'},
        {name: 'Mrs. Rashmi Jain', designation: 'Principal', image: 'rashmi.jpg', description: 'At Vardaan, we believe in empowering students with the right blend of knowledge, skills, and values. Our thematic and integrated approach to education ensures that learning is engaging, relevant, and future-focused. Every child has unique potential, and our mission is to nurture that individuality while fostering a spirit of collaboration, discipline, and innovation. As educators, our greatest joy is seeing our students excel not just in academics but in all aspects of life.'}
      ]
      setManagement(managementList);      
    }, []);

  return (
    <div>
      <div className='subpages_heading'>About us</div>
      <div className='subpages_body'>
        <p><b>The Vardaan - Mahaveer Group of Schools</b> spans Dungarpur, Udaipur, Rishabhdeo, and Chawand, and operates under the prestigious Bhagwan Mahaveer Shiksha & Vikas Samiti, established on <b>16th April 2000</b>. Over the past two decades, we have become a beacon of academic excellence and moral education, earning a reputation as one of Southern Rajasthan's leading K-12 institutions.</p>
        <p>At Vardaan, we nurture not just academic brilliance but also strong ethical and moral values, fostering inclusivity and secularism. Our students are equipped to thrive as global citizens and life-long achievers. This ethos is reflected in our thematic and integrated approach to education, meticulously designed after years of research to deliver a comprehensive and engaging curriculum.</p>
        <p>We proudly offer dual-board education, adhering to both the <b>Central Board of Secondary Education (CBSE)</b> and the <b>Rajasthan Board of Secondary Education (RBSE)</b>, catering to the diverse academic needs of our students.</p>
        <p><b>Key Highlights:</b></p>
        <ol>
          <li><b>25+ Years of Educational Excellence:</b> A legacy built on trust, innovation, and impactful learning.</li>
          <li><b>Strong Faculty Backbone:</b> A team of over 1000 highly qualified educators dedicated to student success.</li>
          <li><b>Award-Winning Institution:</b> Recognized as the Most Promising Institute in Southern Rajasthan, reflecting our commitment to quality education.</li>
          <li><b>Comprehensive Learning Ecosystem:</b> Cutting-edge infrastructure and a research-based curriculum designed to create confident, capable, and compassionate leaders.</li>
        </ol>
        <p>At The Vardaan - Mahaveer Group of Schools, we don't just educate; we empower, inspire, and transform lives. Join us in creating a brighter future!</p>
      </div>
      <div className='mgt_sec'>
        <div className='mgt_top_heading'>Our Management</div>
        {management && management.map((val, i)=>{
          if(i%2===0){
            return <div key={`mgt_card${i}`} className='mgt_item1'>
                      <div className='mgt_img_box'>
                        <img src={`/images/used/${val.image}`} alt='mgt_image' className='mgt_img' />
                      </div>
                      <div className='mgt_box'>
                        <p className='mgt_heading'>{val.name} - {val.designation}</p>
                        <p className='mgt_desc'>{val.description}</p>
                      </div>
                  </div>
          }else{
            return <div key={`mgt_card${i}`} className='mgt_item2' style={{ justifyContent: 'flex-end' }}>
                    <div className='mgt_box'>
                      <p className='mgt_heading'>{val.name} - {val.designation}</p>
                      <p className='mgt_desc'>{val.description}</p>
                    </div>
                    <div className='mgt_img_box'>
                      <img src={`/images/used/${val.image}`} alt='mgt_image' className='mgt_img' />
                    </div>
                </div>
          }
        })}
      </div>
    </div>
  )
}

export default About
