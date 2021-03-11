import React from 'react';
import Basia from "../scss/elements/images/kasia.JPG"

const Kasia = () => {
    return (
        <div className="flowers">
            <div className="flowers__image">
                <img  src={Basia} className="flowers__kasia" alt="kwiatek Basia"/>
            </div>
            <div className="flowers__body">
                <h1 className="flowers__title">Basia</h1>
                <h2 className="flowers__desk">______</h2>
                <h3 className="flowers__text">Brrr moje kwiatuszki nie lubią zimna</h3>
            </div>
        </div>
    );
};

export default Kasia;