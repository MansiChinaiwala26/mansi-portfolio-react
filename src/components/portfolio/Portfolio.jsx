import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React-Weather App',
    github: 'https://github.com/MansiChinaiwala26',
    demo: 'https://mansichinaiwala-weatherapp.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React-Recipe App',
    github: 'https://github.com/MansiChinaiwala26',
    demo: 'https://mansichinaiwala-recipeapp.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Javascript-Developer Tracking System ',
    github: 'https://github.com/MansiChinaiwala26',
    demo: 'https://developertrackingsystem.netlify.app'
  },
  //{
    //id: 4,
    //image: IMG4,
    //title: 'Search Engine V2',
    //github: 'https://github.com',
   // demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  //}
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='https://github.com/MansiChinaiwala26'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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