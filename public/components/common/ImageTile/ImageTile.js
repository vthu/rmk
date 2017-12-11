import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Image/Image';


const ImageTile = ({ headerText = '', footerText = '', imageURL, imageSize = 'M' }) => {
  let width;
  switch(imageSize) {
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
  width += 50
  return (
    <div style={{ maxWidth: width }} className="imageTile">
      <p className="headerText">{headerText}</p>
      <Image src={imageURL} size={imageSize} />
      <p className="footerText">{footerText}</p>
    </div>
  );
};

ImageTile.PropTypes = {
  headerText: PropTypes.string,
  footerText: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  imageSize: PropTypes.imageSize
}

export { ImageTile };