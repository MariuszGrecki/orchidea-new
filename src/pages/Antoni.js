import React from 'react';
import Anton  from '../../src/scss/elements/images/antoni.jpeg'
const Antoni = () => {
    return (
        <div className="flowers">
            <div className="flowers__image">
                <img src={Anton} className="flowers__antoni" alt="kwiatek Antoni"/>
            </div>
            <div className="flowers__body">
                <h1 className="flowers__title">Antoni</h1>
                <h2 className="flowers__desk">______</h2>
                <h3 className="flowers__text">Mam 3 miesiące i nie lubię przeciagów</h3>
            </div>
        </div>
    );
};

export default Antoni;