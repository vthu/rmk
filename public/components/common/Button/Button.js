import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, className }) => (

    <div className={className ? `${className} buttonContainer`: ''}>
        <button onClick={onClick} className="button">{title}</button>
    </div>
)

Button.propTypes = {
    title: PropTypes.string.isRequired
}

export { Button };