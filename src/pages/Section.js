import React from 'react';

import Weather from "./Weather";

const Section = () => {
    return (
        <div>
            <h1 className="section__title">Witamy na stronie poświęconej orchideom.</h1>
            <h2 className="section__text">Na naszej stronie przedstawiamy orchidee znajdujące się w naszym domu oraz
                dzielimy się wskazówkami
                odnośnie ich uprawy. Zachęcamy Państwa do dzielenia się wiedzą oraz doświadczeniem o naszych ukochanych
                roślinkach.</h2>
            <div className="section__second">
                <div className="section__inSecond1">
                    <h1 className="section__title__second">Naszym roślinkom zawsze sprzyja pogoda</h1>
                    <div className="section__image"></div>
                </div>
                <div className="section__inSecond2">
                    <h2 className="section__title__second">Pogodę dla siebie możesz sprawdzić tutaj:</h2>
                    <div>{<Weather/>}</div>
                </div>
            </div>
        </div>
    );
};

export default Section;