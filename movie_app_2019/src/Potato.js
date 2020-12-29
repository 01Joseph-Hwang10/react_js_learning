import React from 'react';
import PropTypes from 'prop-types';


function Potato({ name }){
    return (
        <h3>I love {name}</h3>
    )
}

Potato.propTypes = {
    name: PropTypes.string.isRequired,
    originality: PropTypes.string.isRequired
};

export default Potato;