import React from 'react'
import ProfilePhoto from '../../images/JoshSandquist.jpg'
const About = () =>{

return (
    <div className='aboutPage'>
        <h2>
            About me
        </h2>

        <img src={ProfilePhoto} alt='Josh Sandquist'></img>

        <p>
        Hello, I'm Josh Sandquist. I'm a Phoenix, Arizona-based full stack web developer with a specialty in MERN Stack, and a passion for designing and implementing creative, efficient solutions for challenging problems. I am currently seeking full-time employment opportunities, and am open to remote, in-person, or hybrid arrangements. My geographical flexibility allows me to consider relocation within the United States.
        </p>
        <p>In 2018, I graduated from the University of Arizona with a degree in Law and Public Policy. While the analytical and problem-solving skills I gained during my studies were valuable, my passion lay elsewhere - in the evolving world of web development. In pursuit of this passion, I recently completed the Full-Stack Web Development Bootcamp at the University of Arizona, reinforcing my technical knowledge and hands-on experience in both front end and back end development.</p>

        <p>My knack for code coupled with my background in policy allows me to approach programming with a unique perspective. I believe that good coding isn't just about getting the job done—it's about creating user-friendly, efficient, and accessible digital environments that make a difference.</p>

        <p>Here, on my portfolio website, you'll find an extensive showcase of my projects, which mirror my dedication to writing clean, maintainable code, and building responsive, user-friendly websites. These projects highlight my ability to create both the face and the functionality of a website, using various technologies such as MongoDB, Express.js, React.js, and Node.js.</p>

        <p>You'll also find my detailed resume which offers a comprehensive look at my skills, experiences, and accomplishments. And of course, a contact page, which I invite you to use to get in touch with me for any inquiries, project collaborations, or job opportunities.</p>

        <p>Thank you for visiting my site, and I look forward to potential future collaborations.</p>
        
    </div>
  )};

  export default About