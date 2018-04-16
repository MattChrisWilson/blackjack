import React from 'react';
import PropTypes from 'prop-types';

/** Outputs a card to the screen */
const Card = (props) => {
    return <div>Card</div>
}

Card.propTypes = {
    /** The name of the card, must relate to an SVG ID otherwise defaults to the back of a card */
    name: PropTypes.string.isRequired,
}

Card.defaultProps = {
    name: 'back',
}

export default Card