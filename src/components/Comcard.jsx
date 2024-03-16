import React from 'react';

const Comcard = ({ val, head, para }) => {
    return (
        <div className='w-full md:w-auto shadow-lg flex flex-col items-center justify-center px-6 py-4 gap-3 text-center'>
            <img src={val} alt={val} className='max-w-full' />
            <h1 className='text-xl md:text-2xl font-semibold'>{head}</h1>
            <p>{para}</p>
        </div>
    );
};

export default Comcard;
