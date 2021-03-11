import React from 'react';
import Carousel from "./Carousel";
import Weather from "./Weather";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {CarouselData} from "./CarouselData";
import WeatherPhoto from "../scss/elements/images/weather7.jpg"

const Section = () => {
    return (
        <div>
            <h1 className="section__title">Witamy na stronie poświęconej orchideom</h1>
            <h2 className="section__desk">______</h2>
            <h3 className="section__text">Na naszej stronie przedstawiamy orchidee znajdujące się w naszym domu oraz
                dzielimy się wskazówkami
                odnośnie ich uprawy. Zachęcamy Państwa do dzielenia się wiedzą oraz doświadczeniem o naszych ukochanych
                roślinkach.</h3>
            <div className="about">
                <div className="section__first">
                    <div className="section__about">
                        <h4 className="about__title">O NAS</h4>
                        <h5 className="section__desk">______</h5>
                        <h6 className="about__text">Jesteśmy miłośnikami kwiatków, którzy starają się o nie dbać z
                            całych sił, dzięki czemu w naszych mieszkaniach jest zawsze zielono i kolorowo, a betonowe
                            ściany które nas otaczają nie są już takie szare.</h6>
                        <Button type="submit" variant="contained" color="primary"
                                className="contact__button"><NavLink to="/Contact">Kontakt </NavLink></Button>
                    </div>
                    <div >
                        {<Carousel slides={CarouselData}/>}
                    </div>
                </div>
            </div>
            <div className="section__second">
                <div className="section__inSecond">
                    <h1 className="section__title__second">Naszym roślinkom zawsze sprzyja pogoda</h1>
                    <h2 className="section__desk">______</h2>
                    <img src={WeatherPhoto}  className="section__image" alt="orchidea"/>
                </div>
                <div className="section__inSecond2">
                    <h1 className="section__title__second">Pogodę dla siebie możesz sprawdzić tutaj</h1>
                    <h2 className="section__desk">______</h2>
                    <div>{<Weather/>}</div>
                </div>
            </div>
        </div>
    );
};

export default Section;