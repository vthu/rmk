import React from 'react';
import PropTypes from 'prop-types';

const Image= ({ src, size='M' }) => {
    let width = null;
    switch(size) {
        case 'XXS':
            width = 30;
            break;
        case 'XS':
            width = 50;
            break;
        case 'S':
            width = 150;
            break;
        case 'M':
            width = 250;
            break;
        case 'L':
            width = 350;
            break;
        default:
            width = 250;
    }
    return (
        <div>
            <img src={src} width={width} />
        </div>
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string
}

export { Image }