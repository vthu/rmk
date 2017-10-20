import React from 'react';


const Selector = ({ data, refe }) => {
    console.log(data);
    return (
        <div className="selectorContainer">
            <select ref={refe}>
                {
                    data ?
                    data.map(({ name, address }) =>  <option key={address} value={address}>{name}</option>)
                    : null
                }
            </select>
        </div>
    )

}

export { Selector }