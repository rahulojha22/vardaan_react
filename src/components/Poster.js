import React, { useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

const Poster = () => {
  useEffect(() => {
    // document.addEventListener('DOMContentLoaded', () => {
    //   const video = document.getElementById('school_video');
    //   video.playbackRate = 0.1;
    // });
  });

  return (
    // <Carousel data-bs-theme="dark" interval={3000} controls={true}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 poster_img"
    //       src="/images/vardaan_images/Class_Room/Depak_Painting.jpg"
    //       alt="First slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption> */}
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 poster_img"
    //       src="/images/vardaan_images/Neet_Jee_Banner.jpg"
    //       alt="Second slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption> */}
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 poster_img"
    //       src="/images/vardaan_images/12_class_results.jpg"
    //       alt="Third slide"
    //     />
    //     {/* <Carousel.Caption>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption> */}
    //   </Carousel.Item>
    // </Carousel>
    <div className='poster_sec'>
      <video
        id='school_video'
        className="video_style"
        src="/videos/vardaan_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  )
}

export default Poster
