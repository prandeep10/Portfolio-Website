import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectsSection.css';
import { Link } from 'react-router-dom';
import p1 from './projects/1.png';
import p2 from './projects/2.png';
import p3 from './projects/3.png';
import p4 from './projects/4.png';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
        className="carousel"
      >
          <Link to="https://www.fufugadi.com">
          <img src={p1} alt="Project 1" />
          </Link>

          <Link to="https://edc.aec.ac.in">
          <img src={p2} alt="Project 2" />
          </Link>

          <Link to="https://prandeep10.github.io/cakestore/">
          <img src={p3} alt="Project 3" />
         </Link>

          <Link to="http://www.myaec.in">
          <img src={p4} alt="Project 4" />
         </Link>

      </Carousel>
    </section>
  );
};

export default ProjectsSection;
