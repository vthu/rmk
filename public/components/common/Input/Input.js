import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '../Image/Image';

const Input = ({ type='text', placeholder, icon, refe }) => (
    <div className="inputContainer">
        {
            icon ? <Image size="XS" src={icon} /> : null
        }
        <input className="input" type={type} placeholder={placeholder} ref={refe} />
    </div>
)

Input.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    refe: PropTypes.func.isRequired
};

export { Input };