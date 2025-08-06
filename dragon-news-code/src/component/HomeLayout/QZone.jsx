import React from 'react';
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"


const QZone = () => {
    return (
        <div className='bg-base-200 '>
            <h2 className='font-bold p-3 mb-5'>Q-Zone</h2>
            <div className='space-y-3'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;