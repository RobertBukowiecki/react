import React from "react";
import styles from "./Column.scss";
import PropTypes from "prop-types";
import Card from "../Card/Card.js";
import Icon from "../Icon/Icon";
import { settings } from "../../data/dataStore";
import Creator from "../Creator/Creator";

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCards: PropTypes.func,
    id: PropTypes.string,
  };

  addCard(title) {
    console.log("card added");
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }

  render() {
    console.log("propsy", this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {this.props.cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Column;
