import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCards: PropTypes.func,
    id: PropTypes.string,
  };


  render() {
    const {cards} = this.props;
    console.log('propsy', this.props);
    const {title, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        {<div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        /* <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div> */}
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Column;
