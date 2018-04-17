import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CardGroup = (props) => {
    const lastChildIdx = props.children.length-1;

    return <div>{
        React.Children.map(props.children, (child, idx) => {
            const classes = classnames({
                'onTop': (idx > 0),
            });
            const left = (-100 * idx);

            if(props.dealer && idx === lastChildIdx) {
                return React.cloneElement(child, {
                  name: 'back',
                  classes,
                  shiftLeft: left,
                });
            }

            return React.cloneElement(child, { classes, shiftLeft: left, });
        })
    }</div>;
}

CardGroup.propTypes = {
    dealer: PropTypes.bool.isRequired,
}

CardGroup.defaultProps = {
    dealer: false,
}

export default CardGroup;