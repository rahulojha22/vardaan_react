import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [img, setImg] = useState(0);
  const src = "/images";  

  useEffect(()=>{
    let eventList = [
      {eventName: 'Independence & Republic Day', dir: 'national', eventImages: ['_DSC0854.JPG', '_DSC0857.JPG', '_MG_8381.JPG', '_MG_8430.JPG', 'DSC_0200.JPG']},
      {eventName: 'Fancy Dress', dir: 'fancydress', eventImages: []},
      {eventName: 'Janmasthmi', dir: 'janmasthmi', eventImages: []},
      {eventName: 'Kids Activity', dir: 'kidsactivity', eventImages: []},
      {eventName: 'Scout', dir: 'scout', eventImages: []},
      {eventName: 'Sports', dir: 'sports', eventImages: []},
      {eventName: 'Summer Camp', dir: 'summercamp', eventImages: []},
      {eventName: 'Outdoor Activity', dir: 'outdoor', eventImages: []}
    ];
    setEvents(eventList);
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = (imgIndex) => {
    setImages(events[imgIndex].eventImages);
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
      <div className='subpages_heading'>
        Events & Activities
      </div>
      <div className='subpages_body'>
        <div className='event_body'>
          {events.length && events.map((val, i)=>{
              return <div key={`event_${i}`} className='event_card' onClick={()=>handleShow(i)}>
                        <div className='thumbnail_box'>
                          <img src={`${src}/national/_DSC0854.JPG`} alt='event_image' className='event_image1'/>
                          <img src={`${src}/national/_MG_8381.JPG`} alt='event_image' className='event_image2'/>
                          <img src={`${src}/national/DSC_0200.JPG`} alt='event_image' className='event_image3'/>
                        </div>
                        <div className='event_name'>
                          {val.eventName}
                        </div>                             
                     </div>
          })}
        </div>
      </div>
        <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className='modal_image_box'>
              <div className='modal_left_btn' onClick={()=>changeImage(-1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-left.png" alt="circled-left"/></div>
              <img src={`${src}/national/${images[img]}`} alt='event_image' className='modal_event_image'/>
              <div className='modal_right_btn' onClick={()=>changeImage(1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-right.png" alt="circled-right"/></div>
            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Events
