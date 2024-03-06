
import React, { useState } from 'react';
import './HorizontalSlider.css';

const HorizontalSlider = ({ items }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleSlide = (direction) => {
    const sliderContainer = document.getElementById('slider-container');
    const sliderItemWidth = sliderContainer.firstChild.offsetWidth;

    if (direction === 'left' && slidePosition < 0) {
      setSlidePosition(slidePosition + sliderItemWidth);
    } else if (direction === 'right' && slidePosition > -(sliderItemWidth * (items.length - 1))) {
      setSlidePosition(slidePosition - sliderItemWidth);
    }
  };

  return (
    <div className="horizontal-slider">
      <div
        id="slider-container"
        className="slider-container"
        style={{ transform: `translateX(${slidePosition}px)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item">
            {/* Customize the content based on your requirements */}
            <img src={item.image} alt={`item-${index}`} />
            <div className="tags">{item.tags.join(', ')}</div>
            <div className="heading">{item.heading}</div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
      <button onClick={() => handleSlide('left')}>Previous</button>
      <button onClick={() => handleSlide('right')}>Next</button>
    </div>
  );
};

export default HorizontalSlider;
