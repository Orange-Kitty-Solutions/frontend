'use client';
import React, { useState, MouseEvent, useRef } from 'react';

var setImages = [
        'https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        'https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
];

const ImageSlider: React.FC = () => {
  const isMouseDown = useRef<boolean>(false);
  const [positionMouseOnDown, setPositionMouseOnDown] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);

  const handleMouseDown = (e: MouseEvent) => {
    isMouseDown.current = true;
    setPositionMouseOnDown(e.clientX);
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
    setPrevPercentage(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isMouseDown.current) return;

    const delta = e.clientX - positionMouseOnDown;
    const deltaMax = window.innerWidth / 2;
    const newPercentage = Math.max(Math.min(prevPercentage + (delta / deltaMax) * 100, 0), -100);

    setPercentage(newPercentage);

    const track = document.getElementById("image-track") as HTMLDivElement;
    track.animate({
      transform: `translate(${newPercentage}%, 0%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of Array.from(track.getElementsByClassName("image"))) {
      image.animate({
        objectPosition: `${100 + newPercentage}% center`
      }, { duration: 1200, fill: "forwards" })
    };
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const image = e.currentTarget.closest(".img-container") as HTMLImageElement;
    image.classList.toggle('fullscreen');
    console.log(image.classList)
  };
  
  const listImages = setImages.map((image, index) => (
    <div key={index} className="relative group overflow-hidden img-container">
      <img
        src={image}
        alt={`image-${index}`}
        className="image w-[40vmin] h-[56vmin] object-cover object-center transition-transform duration-300 group-hover:scale-110"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
        <h3 className="text-white text-2xl mb-4">Image {index + 1}</h3>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-md" onClick={handleClick}>Learn More</button>
      </div>
    </div>
  ));


  return (
    <div className='overflow-hidden pb-14 select-none'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      >
      <p className="font-space font-bold text-6xl mb-10 text-center mt-6">Conoce nuestros servicios</p>
      <div
        id="image-track"
        className="flex gap-4 relative left-[50%] w-fit "
      >   
        {listImages}
      </div>
    </div>
  );
};

export default ImageSlider;
 