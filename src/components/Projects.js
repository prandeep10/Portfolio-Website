import React from 'react'
import ProjectsSection from './ProjectsSection'
import p1 from './projects/1.png';
import p2 from './projects/2.png';
import p3 from './projects/3.png';
import p4 from './projects/4.png';

const Projects = () => {
    return (
        <>
            <ProjectsSection />

            <div className='list'>
                <h2>Completed Projects</h2>
                <div className='container'>


                    
                    <a href="https://www.fufugadi.com" target="_blank" rel="noopener noreferrer">
                        <img src={p1}></img>
                        <p>fufugadi.com is a car rental platform, this website is developed in 2023, it consist of a advanced MIS and customized algorithm of FufuGadi.
                        </p>
                    </a>



                    <a href="https://edc.aec.ac.in" target="_blank" rel="noopener noreferrer">
                        <img src={p2}></img>
                        <p>Official Website for E-Cell of Assam Engineering College.
                        </p>
                    </a>



                    <a href="https://prandeep10.github.io/cakestore/" target="_blank" rel="noopener noreferrer">
                        <img src={p3}></img>
                        <p>Readymade template for a cakestore, which have all features of a e-commerce website.
                        </p>
                    </a>



                    <a href="http://www.myaec.in" target="_blank" rel="noopener noreferrer">
                        <img src={p4}></img>
                        <p>SocialMedia platform for students of Assam Engineering College will be released in february.
                        </p>
                    </a>

                </div>


            </div>
        </>
    )
}

export default Projects