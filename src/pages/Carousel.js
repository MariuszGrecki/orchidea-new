import React, {useState} from 'react';
import {CarouselData} from './CarouselData';

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const lastSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slider">
            <p className="last__photo" onClick={lastSlide}>-</p>
            {CarouselData.map((el, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <img src={el.image} alt='team image' className="slider__image"/>
                        )}
                    </div>
                )
            })}
                <p className="next__photo" onClick={nextSlide}>+</p>
                </div>
                );
            };

export default Carousel;