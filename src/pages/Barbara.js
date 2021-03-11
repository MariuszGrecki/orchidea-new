import React from 'react';
import Barbar from "../scss/elements/images/barbara.jpg"

const Barbara = () => {
    return (
        <div className="flowers">
            <div className="flowers__image">
                <img src={Barbar} className="flowers__barbara" alt="kwiatek Barbara"/>
            </div>
            <div className="flowers__body">
                <h1 className="flowers__title">Barbara</h1>
                <h2 className="flowers__desk">______</h2>
                <h3 className="flowers__text">Lubię spędzać dni na słonecznym parapecie</h3>
            </div>
        </div>
    );
};

export default Barbara;