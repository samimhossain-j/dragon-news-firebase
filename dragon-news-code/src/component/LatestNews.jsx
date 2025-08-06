import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-3 bg-base-200'>
            <p className='text-base-100 bg-secondary px-4 py-2'>Update</p>
            <Marquee className='flex gap-5 ' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Bangladesh win the 2nd oneday mathch aginst SreeLanka </p>
                <p className='font-bold'>Denmark is the peaceful country </p>
                <p className='font-bold'>The madarest value of the session   </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;