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

            if(props.hide && idx === lastChildIdx) {
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
    /** Should the most recent card be hidden? */
    hide: PropTypes.bool.isRequired,
}

CardGroup.defaultProps = {
    hide: false,
}

export default CardGroup;