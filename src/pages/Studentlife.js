import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Studentlife = () => {
    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);
    const [images, setImages] = useState([]);
    const [img, setImg] = useState(0);
    const src = "https://images.vardaanschool.org";  

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
      <div className='subpages_heading1'>
        <div className='subpages_heading'>
          Student Life
        </div>
      </div>      
      <div className='subpages_body'>
        <div className='cmng_sn'>
          Coming Soon
        </div>
        {/* <div className='st_life_body'>
            <div className='st_life_card'>
                <img src={`${src}/national/_DSC0854.JPG`} alt='event_image' width={'100%'} loading='lazy' />
                <div className='st_life_footer'>
                    Comming Soon
                </div>
            </div>
        </div> */}
        {/* <div className='event_body'>
          {events.length && events.map((val, i)=>{
              return <div key={`event_${i}`} className='event_card' onClick={()=>handleShow(i)}>
                        <div className='thumbnail_box'>
                          <img src={`${src}/national/_DSC0854.JPG`} alt='event_image' className='event_image1' loading='lazy' />
                          <img src={`${src}/national/_MG_8381.JPG`} alt='event_image' className='event_image2' loading='lazy' />
                          <img src={`${src}/national/DSC_0200.JPG`} alt='event_image' className='event_image3' loading='lazy' />
                        </div>
                        <div className='event_name'>
                          {val.eventName}
                        </div>                             
                     </div>
          })}
        </div> */}
      </div>
        {/* <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className='modal_image_box'>
              <div className='modal_left_btn' onClick={()=>changeImage(-1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-left.png" alt="circled-left" loading='lazy'/></div>
              <img src={`${src}/national/${images[img]}`} alt='event_image' className='modal_event_image' loading='lazy'/>
              <div className='modal_right_btn' onClick={()=>changeImage(1)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/circled-right.png" alt="circled-right" loading='lazy'/></div>
            </div>
          </Modal.Body>
        </Modal> */}
    </div>
  )
}

export default Studentlife
