import React from 'react';

const Cards = ({ img, text }) => {
    return (
        <div className="relative w-full sm:w-full md:w-full lg:w-2/3 xl:w-2/3">
            <img src={img} alt="img" className="w-full" />
            <div className="absolute top-20 left-10 sm:left-10 md:left-10 sm:top-36 lg:left-10 xl:left-10 w-3/4 h-1/2 flex justify-center items-center">
                <div className="bg-[#F5F7FA] p-4 rounded-lg text-center shadow-lg">
                    <h2 className="text-sm md:text-base   font-semibold mb-4">{text}</h2>
                    <p className="text-lg text-[#4CAF4F]">Read More →</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
