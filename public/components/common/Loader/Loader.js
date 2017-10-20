import React from 'react';
import { Image } from '../Image/Image';

const Loader = ({ size = 'XXS' }) => (
    <div>
        <Image src="assets/img/loading.gif" size={size} />
    </div>
);

export { Loader };