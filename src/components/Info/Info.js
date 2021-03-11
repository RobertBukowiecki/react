import React from 'react';
import Container from '../Container/Container';
import {info} from '../../data/dataStore';
import styles from './info.scss';
import Hero from './../Hero/Hero';

const Info = () => (
  <Container>
    <div className={styles.image}>
      <Hero titleText={info.title} image={info.image}></Hero>
    </div>
    <div className={styles.description}>
      {info.text}
    </div>
  </Container>
);

export default Info;