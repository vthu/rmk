import React from 'react';


const Selector = ({ data, refe }) => {

    return (
        <div className="selectorContainer">
            <select ref={refe}>
                {
                    data ?
                    data.map(({ key, value }) =>  <option key={key} value={value}>{key}</option>)
                    : null
                }
            </select>
        </div>
    )

}

export { Selector }