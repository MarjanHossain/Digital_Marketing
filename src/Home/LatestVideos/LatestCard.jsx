import React from 'react';

const LatestCard = ({ cardData }) => {
    const { name, image, link } = cardData;
    return (

        <div className='shadow-lg lg:px-1 py-3 lg:mb-10  mx-1   '>
            {/* //!===========Updated Link here ============ */}

            <a href='/'>
                <img className='lg:h-[310px] h-[240px] rounded  w-full' src={image} alt="" />
            </a>
            <h1>{name}</h1>
        </div>
    );
};

export default LatestCard;