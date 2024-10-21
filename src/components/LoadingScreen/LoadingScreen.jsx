/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const LoadingScreen = ({ onImagesLoaded }) => {
    
    useEffect(()=>{
        const Loading = () =>{
            setTimeout(()=>{onImagesLoaded , 2000})
        };
        Loading();
        }, [onImagesLoaded]);
    return (
        <div className='min-h-96 flex items-center justify-center my-24'>
            <i className='fas fa-spinner fa-spin fa-5x text-blue-800'></i>
        </div>
    );
};

export default LoadingScreen;