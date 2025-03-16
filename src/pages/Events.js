import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [dir, setDir] = useState('');
  const [img, setImg] = useState(0);
  const src = "https://images.vardaanschool.org";  

  useEffect(()=>{
    let eventList = [
      {eventName: 'Independence & Republic Day', dir: 'national', eventImages: ['nl1.webp', 'nl2.webp', 'nl3.webp', 'nl4.webp', 'nl5.webp', 'nl6.webp', 'nl7.webp', 'nl8.webp', 'nl9.webp', 'nl10.webp', 'nl11.webp', 'nl12.webp', 'nl13.webp', 'nl14.webp', 'nl15.webp', 'nl16.webp', 'nl17.webp', 'nl18.webp', 'nl19.webp', 'nl20.webp', 'nl21.webp', 'nl22.webp', 'nl23.webp', 'nl24.webp', 'nl25.webp', 'nl26.webp', 'nl27.webp', 'nl28.webp', 'nl29.webp', 'nl30.webp', 'nl31.webp', 'nl32.webp', 'nl33.webp']},
      {eventName: 'Fancy Dress', dir: 'fancydress', eventImages: ['fd1.webp', 'fd2.webp', 'fd3.webp', 'fd4.png', 'fd5.png', 'fd6.webp', 'fd7.webp', 'fd8.png', 'fd9.webp', 'fd10.webp', 'fd11.webp', 'fd12.webp', 'fd13.webp', 'fd14.png']},
      {eventName: 'Janmasthmi', dir: 'janmasthami', eventImages: ['jm1.webp', 'jm2.webp', 'jm3.webp', 'jm4.webp', 'jm5.webp', 'jm6.webp', 'jm7.webp', 'jm8.webp', 'jm9.webp']},
      {eventName: 'Kids Activity', dir: 'kidsactivity', eventImages: ['ka1.webp', 'ka2.webp', 'ka3.webp', 'ka4.webp', 'ka5.webp', 'ka6.webp', 'ka7.webp', 'ka8.webp', 'ka9.webp', 'ka10.webp', 'ka11.webp', 'ka12.webp', 'ka13.webp', 'ka14.webp', 'ka15.webp', 'ka16.webp', 'ka17.webp', 'ka18.webp', 'ka19.webp']},
      {eventName: 'Scout', dir: 'scout', eventImages: ['sc1.webp', 'sc2.webp', 'sc3.webp', 'sc4.webp', 'sc5.webp']},
      {eventName: 'Sports', dir: 'sports', eventImages: ['sp1.webp', 'sp2.webp', 'sp3.webp', 'sp4.webp', 'sp5.webp', 'sp6.webp', 'sp7.webp', 'sp8.webp', 'sp9.webp', 'sp10.webp', 'sp11.webp', 'sp12.webp', 'sp13.webp', 'sp14.webp', 'sp15.webp', 'sp16.webp', 'sp17.webp', 'sp18.webp']},
      {eventName: 'Summer Camp', dir: 'summercamp', eventImages: ['sc1.webp', 'sc2.webp', 'sc3.webp', 'sc4.webp', 'sc5.webp']},
      {eventName: 'Outdoor Activity', dir: 'outdoor', eventImages: ['oa1.webp', 'oa2.webp', 'oa3.webp', 'oa4.webp', 'oa5.webp', 'oa6.webp', 'oa7.webp', 'oa8.webp', 'oa9.webp', 'oa10.webp', 'oa11.webp', 'oa12.webp', 'oa13.webp', 'oa14.webp']}
    ];
    setEvents(eventList);
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = (imgIndex) => {
    setImages(events[imgIndex].eventImages);
    setDir(events[imgIndex].dir)
    setShow(true);
  };

  const changeImage = (i)=>{
    if(img<=images.length-2 && i===1)
      setImg(img+1);
    if(img>0 && i===-1)
      setImg(img-1);
  }

  return (
    <div>
      <div className='subpages_heading1'>
        <div className='subpages_heading'>
          Events
        </div>
      </div>      
      {/* <div className='subpages_heading1'>
        <img className='sub_heading_img' src='https://images.vardaanschool.org/used/event_heading.png' alt='about' loading='lazy' />
      </div> */}
      <div className='subpages_body'>
        <div className='event_body'>
          {events.length && events.map((val, i)=>{
              return <div key={`event_${i}`} className='event_card' onClick={()=>handleShow(i)}>
                        <div className='thumbnail_box'>
                          <img src={`${src}/${val.dir}/${val.eventImages[0]}`} alt='event_image' className='event_image1' loading='lazy' />
                          <img src={`${src}/${val.dir}/${val.eventImages[1]}`} alt='event_image' className='event_image2' loading='lazy' />
                          <img src={`${src}/${val.dir}/${val.eventImages[2]}`} alt='event_image' className='event_image3' loading='lazy' />
                        </div>
                        <div className='event_name'>
                          {val.eventName} ({val.eventImages.length})
                        </div>                             
                     </div>
          })}
        </div>
      </div>
        <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className='modal_image_box'>
              <div className='modal_left_btn' onClick={()=>changeImage(-1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-left.png" alt="circled-left" loading='lazy' /></div>
              <img src={`${src}/${dir}/${images[img]}`} alt='event_image' className='modal_event_image' loading='lazy'/>
              <div className='modal_right_btn' onClick={()=>changeImage(1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-right.png" alt="circled-right" loading='lazy'/></div>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Events
