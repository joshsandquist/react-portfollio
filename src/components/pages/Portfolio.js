import React from 'react'
import QuizSite from '../../images/Quiz-site.png'
import FlexFeasts from '../../images/FlexFeasts.png'
import PlayersParadise from '../../images/PlayersParadise.png'
import EmpTracker from '../../images/Employee-Tracker.png'
import SVGLogo from '../../images/SVG-Logo.png'
import ComingSoon from '../../images/ComingSoon.avif'

const Portfolio = () =>{
    const portfolioItems = [
        {
          title: 'FlexFeasts',
          image: FlexFeasts,
          githubUrl: 'https://github.com/alexiaValen/flex-feasts',
          appUrl: 'https://flex-feasts.herokuapp.com/',
        },
        {
          title: 'Players Paradise',
          image: PlayersParadise,
          githubUrl: 'https://github.com/MarkellDrake/Players-paradise',
          appUrl: 'https://markelldrake.github.io/Players-paradise/',
        },
        {
          title: 'Employee Tracker',
          image: EmpTracker,
          githubUrl: 'https://github.com/joshsandquist/Employee-Tracker',
          appUrl: 'https://drive.google.com/file/d/107DuyxyOJmbXVW0vv3W0BXAHge77muVk/view',
        },
        {
          title: 'Quiz App',
          image: QuizSite,
          githubUrl: 'https://github.com/joshsandquist/Quiz-website',
          appUrl: 'https://joshsandquist.github.io/Quiz-website/',
        },
        {
          title: 'Logo Generator',
          image: SVGLogo,
          githubUrl: 'https://github.com/joshsandquist/SVG-Logo-Maker',
          appUrl: 'https://drive.google.com/file/d/128vqw1q_yXA3q3E9S9LoB5GzWlfNZ9F7/view',
        },
        {
          title: 'Coming Soon',
          image: ComingSoon,
          githubUrl: 'https://github.com/joshsandquist',
          appUrl: 'https://github.com/joshsandquist',
        },
  
      ];
      //Mapping over portfolioItems array to create a card for each instance. Can add or delete items from the array as needed.
      return (
        <div className="portfolioPage">
          <h2>Portfolio</h2>
          <div className="portfolio-container">
            {portfolioItems.map((item, index) => (
              <div className="portfolio-card" key={index}>
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <h3>{item.title}</h3>
                <div className="portfolio-buttons">
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={item.appUrl} target="_blank" rel="noopener noreferrer">
                    Application
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

  export default Portfolio