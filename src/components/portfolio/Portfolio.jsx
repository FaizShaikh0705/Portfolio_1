import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/resumebuilder123.jpg'
import IMG2 from '../../assets/arkstudio123.jpg'
import IMG3 from '../../assets/stopwatch123.jpg'
import IMG4 from '../../assets/seedkaro123.jpg'
import IMG5 from '../../assets/imgtotext123.jpg'
import IMG6 from '../../assets/stackweb123.jpg'



// =======Generating Portfolio Items from Array using map method=====



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Resume-Builder',
    github: 'https://github.com/FaizShaikh0705/Resume-Builder',
    demo: 'https://github.com/FaizShaikh0705/Resume-Builder'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ARK Studio',
    github: 'https://github.com/FaizShaikh0705/Html-Css-Project3',
    demo: 'https://faizshaikh0705.github.io/Html-Css-Project3/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Stop-Watch-Project',
    github: 'https://github.com/FaizShaikh0705/Stop-Watch-Project',
    demo: 'https://faizshaikh0705.github.io/Stop-Watch-Project/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Seedkaro Website',
    github: 'https://github.com/FaizShaikh0705/Html-Css-Bootstap-project4',
    demo: 'https://faizshaikh0705.github.io/Html-Css-Bootstap-project4/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'image_to_text_convertor',
    github: 'https://github.com/FaizShaikh0705/image_to_text_convertor',
    demo: 'https://github.com/FaizShaikh0705/image_to_text_convertor'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Stack Website',
    github: 'https://github.com/FaizShaikh0705/compitition-website',
    demo: 'https://faizshaikh0705.github.io/compitition-website/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target='_blank'>Github</a>
            <a href={demo} className="btn btn-primary" target='_blank'>View Project</a>
            </div>
          </article>
          )
        })
       }
        </div>
    </section>
  )
}

export default Portfolio


// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG2} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG3} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="https://github.com/FaizShaikh0705/Stop-Watch-Project" className="btn" target='_blank'>Github</a>
//           <a href="https://faizshaikh0705.github.io/Stop-Watch-Project/" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG4} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG5} alt="" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>

//         <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={IMG6} alt="" />
//           </div>
//          <h3>This is a portfolio item title</h3>
//          <div className="portfolio__item-cta">
//           <a href="" className="btn" target='_blank'>Github</a>
//           <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
//           </div>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Portfolio