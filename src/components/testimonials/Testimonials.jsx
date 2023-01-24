import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, ut quisquam non reprehenderit quaerat provident? Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, fugit magnam labore doloremque in cum.'
  },
  {
    avatar: AVTR2,
    name: 'Shatte Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, ut quisquam non reprehenderit quaerat provident? Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, fugit magnam labore doloremque in cum.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, ut quisquam non reprehenderit quaerat provident? Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, fugit magnam labore doloremque in cum.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem, ut quisquam non reprehenderit quaerat provident? Exercitationem ratione blanditiis, beatae nemo eos porro temporibus, fugit magnam labore doloremque in cum.'
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
              <img src={avatar} />
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