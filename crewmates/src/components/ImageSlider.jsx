import { useState, useEffect } from "react";
import { SlidesData } from '../data/SlidesData.js';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ onImageSelect }) => {
    // Init: useState to keep track of current image index
    const [curIndex, setCurIndex] = useState(0);

    // Function: Update current image index position
    const handleClick = (isNext) => {
        // Conditions: Update index representing current card
        if (isNext) {
            setCurIndex(curIndex => (curIndex + 1) % SlidesData.length) // 3 % 3 == 0 (Wrap back to first card in deck)
        } else {
            setCurIndex(curIndex => ((curIndex - 1) + SlidesData.length) % SlidesData.length) // 0 - 1 == -1 + 3 % 3 == 2 (Wrap back to last card in deck)
        }
    };

    // Effect: Notify parent component (PetForm.jsx) of selected pet image
    useEffect(() => {
        // Condition: Ensure onImageSelect callback was passed in
        if (onImageSelect) {
            onImageSelect(SlidesData[curIndex].image);
            // Debug: console.log("Pet image set to:", SlidesData[curIndex].image)
        }
    }, [curIndex, onImageSelect]);

    return (
        <div className="slider-container">
            <FaArrowAltCircleLeft className='left-arrow' onClick={() => handleClick(false)}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={() => handleClick(true)}/>
            {SlidesData &&
                SlidesData.map((slide, index) => {
                    return (
                        <div className={index === curIndex ? 'slide-active' : 'slide'} key={index}>
                            {index === curIndex && (
                                <img src={slide.image} alt='pet image' className="slider-image"/>
                            )}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ImageSlider;