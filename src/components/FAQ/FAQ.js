import React from 'react';
import Container from '../Container/Container';
import {faq} from '../../data/dataStore';
import styles from './FAQ.scss';
import Hero from './../Hero/Hero';

const FAQ = () => (
  <Container>
    <div className={styles.image}>
      <Hero image={faq.image}></Hero>
    </div>
    <div className={styles.description}>
      <h2 className={styles.title}>{faq.title}</h2>
      {faq.text}
    </div>
  </Container>
);

export default FAQ;