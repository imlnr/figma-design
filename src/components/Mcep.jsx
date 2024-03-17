import React from 'react'

const Mcep = ({ img, num, type }) => {
    return (
        <div className='grid grid-cols-2 '>
            <img className='m-auto w-12' src={img} alt={img} />
            <div className='m-0 p-0'>
                <h2 className='text-lg md:text-3xl font-semibold'>{num}</h2>
                <p className='text-sm md:text-md'>{type}</p>
            </div>
        </div>

    )
}

export default Mcep