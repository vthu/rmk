import React from 'react';
import { Image } from '../Image/Image';

const Loader = ({ size = 'XXS', message }) => (
    <div className="iloader">
        <Image src="assets/img/loading.gif" size={size} />
        {
            message ?
            <p>{message}</p>
            :
            null
        }
    </div>
);

export { Loader };