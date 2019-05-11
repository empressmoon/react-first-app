import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className = {styles.component}>
    <h2 className = {styles.title}>Things to do</h2>
    <img src = "https://i.postimg.cc/NFx9qKTD/space.png" className = {styles.image} />
  </header>
);

export default Hero;
