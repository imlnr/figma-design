import React from 'react'

const Mcep = ({ img, num, type }) => {
    return (
        <div className='grid grid-cols-2'>
            <img className='m-auto h-12 w-12' src={img} alt={img} />
            <div>
                <h2 className='text-2xl md:text-3xl font-semibold'>{num}</h2>
                <p className='text-md'>{type}</p>
            </div>
        </div>
    )
}

export default Mcep