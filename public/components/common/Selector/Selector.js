import React from 'react';
import PropTypes from 'prop-types';


const Selector = ({ data=[], refe, onChange, def="Select" }) => {
    return (
        <div className="selectorContainer">
            <select onChange={onChange} ref={refe}>
                <option value="">{def}</option>
                {
                    data.map(({ name, address }) =>  <option key={address} value={address}>{name}</option>)
                }
            </select>
        </div>
    )

}

Selector.propTypes = {
    data: PropTypes.array,
    refe: PropTypes.func.isRequired,
    def: PropTypes.string
}

export { Selector }