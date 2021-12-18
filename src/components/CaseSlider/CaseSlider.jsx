import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from "react-slick";

import CaseCard from '../CaseCard/CaseCard';

function NextButton(props) {
    const { className, onClick } = props;
    return (
        <span
            className={className}
            onClick={onClick}

        >
            <BsArrowRight />
        </span>
    );
}

function PrevButton(props) {
    const { className, onClick } = props;
    return (
        <span
            className={className}
            onClick={onClick}
        >
            <BsArrowLeft />
        </span>
    );
}

const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 899,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const CaseSlider = ({ cases }) => {
    return (
        <Slider {...settings } infinite={cases.length > 3 ? true : false} className='case__slider'>
            {cases.map((item) => (
                <CaseCard data={item} key={item._id} />
            ))}
        </Slider>
    );
};

export default CaseSlider;