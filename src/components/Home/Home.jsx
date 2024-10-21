/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import '../Home/Home.css'; 
import image1 from '../../assets/img1 (2).jfif';
import image2 from '../../assets/img2-.jfif';
import image3 from '../../assets/catalysing-web-app-dev.png';
import image4 from '../../assets/img4-.png';
import image5 from '../../assets/img5-.jfif';
import image6 from '../../assets/img6-.jfif';
import image7 from '../../assets/img7.jfif';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default function Home() {
    const images = [
        image1,image2,image7,image6,image5,image4,image3];
    
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleImagesLoaded = () => {
        setIsLoading(false); 
    };
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };
    const closeLightbox = () => {
        setIsOpen(false);
    };
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        goToNext();
    } else if (e.key === 'ArrowLeft') {
        goToPrevious();
    }
    };
    return (
        <>
        {isLoading ? <LoadingScreen onImagesLoaded={handleImagesLoaded}/> :<> 
        <div className="home-container">
            <h1 className='p-4 font-bold font-serif text-center text-blue-950 text-4xl'> Responsive Image Gallery with Lightbox</h1>
        <div className="gallery">
        {images.map((src, index) => (
            <LazyLoad className="gallery-item" key={index} style={{ gridArea: `item${index + 1}` }}>
                <img src={src} alt={`Gallery ${index}`} loading="lazy" onClick={() => openLightbox(index)}/>
            </LazyLoad>
        ))}
        </div>
        {isOpen && (
                    <div className="rtl modal" onClick={closeLightbox} onKeyDown={handleKeyDown} tabIndex={0}>
                        <span className="close" onClick={closeLightbox}><i className="fa-sharp fa-solid fa-xmark text-white"></i></span>
                        <div className="modal-content">
                            <div className="mySlides">
                                <img src={images[currentIndex]} alt={`Lightbox ${currentIndex}`} />
                            </div>
                            <a className="rtl prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}><i className="fa-solid fa-arrow-left text-white"></i></a>
                            <a className="rtl next " onClick={(e) => { e.stopPropagation(); goToNext(); }}><i className="fa-solid fa-arrow-right text-white"></i></a>
                        </div>
                    </div>
                )}
            </div>
        </>
        }
        </>
    );
    };
