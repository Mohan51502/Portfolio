import React from 'react';
import Profile from "../../assets/hiimage.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI Designer", "Technical Support Engineer", ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="home section grid">
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      /> 
      <Fade className='zIndex'>
        <img src='https://i.etsystatic.com/15809011/r/il/06dba3/3191137306/il_1140xN.3191137306_4j2h.jpg' alt="" className='home__img' />
      </Fade>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm MOHANRAJ</span><br />
            <p className='type'>{text}
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor='var(--first-color)'
              />
            </p>
          </h1>
          <p className="home__description">
          As a highly skilled WMS consultant specializing in JDA Discrete, I pride myself on my open-minded, goal-oriented approach. I thrive on challenges and am adaptable to learning new technologies. My stress tolerance ensures I remain focused and productive even in high-pressure situations.

Currently fascinated with IT programming, I have knowledge of HTML, CSS, JavaScript, Git, Node JS, SQL, PL/SQL, Mongo DB, JDA Discrete, JDA Integrator, MOCA.

          </p>
          <Link to="/about" className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home