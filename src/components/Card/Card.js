import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardGroup from './CardGroup';

/** Outputs a card to the screen */
class Card extends Component {
    static Group = CardGroup;

    render() {
        return <div className={`${this.props.classes} card`} style={{left: this.props.shiftLeft}} ><img src={`../../images/cards/${this.props.name}.svg`} alt={this.props.name} /></div>
    }
}

Card.propTypes = {
    /** The name of the card, must relate to an SVG ID otherwise defaults to the back of a card */
    name: PropTypes.string.isRequired,
    /** An object of classes from the classnames module */
    classes: PropTypes.string.isRequired,
    /** The number of pixels to shift the card relative to its position */
    shiftLeft: PropTypes.number.isRequired,
}

Card.defaultProps = {
    name: 'back',
    classes: '',
    shiftLeft: 0,
}

export default Card