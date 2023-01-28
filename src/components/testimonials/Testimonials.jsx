import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar11.jpeg'
import AVTR2 from '../../assets/avatar22.jpeg'
import AVTR3 from '../../assets/avatar33.jpeg'
import AVTR4 from '../../assets/avatar44.jpeg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const data = [
  {
    avatar: AVTR1,
    name: 'Zubia Ansari',
    review: 'I would highly recommend Mr Faiz Shaikh. We are great to work with. He made website from scratch using React.js and made it responsive for small deivces Our experience with the customer service has been great.It also keep us updated on monthly reports so we know how our site is doing.'
  },
  {
    avatar: AVTR2,
    name: 'Amaan Khan',
    review: 'We have been very happy with our new website! It looks professional and very easy to navigate.It handle things very efficiently and are available for any questions we have. It also keep us updated on monthly reports so we know how our site is doing. I would recommend Him to anyone looking for website design!'
  },
  {
    avatar: AVTR3,
    name: 'Zian Kazi',
    review: 'We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Mr Faiz Shaikh to anyone looking to build a new website.He were also very easy to communicate with and were able to work from concepts rather than needing me to design the website myself.'
  },
  {
    avatar: AVTR4,
    name: 'Aisha Maktabey',
    review: 'My new website is everything that I wanted.What I loved about Him was the fact that he started with a plan and executed it. He took the time to get to know my business before starting the build process which saved me time because I didn’t have to continually make changes.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonails'>
      <h5>Review from clients</h5>
      <h2>Testimonails</h2>

      <Swiper className="container testimonials__container" 
          //install swiper module
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="avtar" />
            </div>
            <h5 className="client__name">{name}</h5>
              <small className="client__review">
               {review}
              </small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials




// const Testimonials = () => {
//   return (
//     <section id='testimonails'>
//       <h5>Review from clients</h5>
//       <h2>Testimonails</h2>

//       <div className="container testimonials__container">
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className="client__name">Amaan Shaikh</h5>
//             <small className="client__review">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Et exercitationem, ut quisquam non reprehenderit quaerat provident? 
//               Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, 
//               fugit magnam labore doloremque in cum.
//             </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className="client__name">Amaan Shaikh</h5>
//             <small className="client__review">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Et exercitationem, ut quisquam non reprehenderit quaerat provident? 
//               Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, 
//               fugit magnam labore doloremque in cum.
//             </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className="client__name">Amaan Shaikh</h5>
//             <small className="client__review">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Et exercitationem, ut quisquam non reprehenderit quaerat provident? 
//               Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, 
//               fugit magnam labore doloremque in cum.
//             </small>
//         </article>

//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="Avatar One" />
//           </div>
//           <h5 className="client__name">Amaan Shaikh</h5>
//             <small className="client__review">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Et exercitationem, ut quisquam non reprehenderit quaerat provident? 
//               Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, 
//               fugit magnam labore doloremque in cum.
//             </small>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Testimonials