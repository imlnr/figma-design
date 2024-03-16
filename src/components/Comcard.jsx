import React from 'react'

const Comcard = ({ val, head, para }) => {
    return (
        <div className='h-64 w-72 shadow-lg m-auto flex flex-col items-center justify-center px-6 gap-3 text-center'>
            <img src={val} alt={val} />
            <h1 className='text-2xl font-semibold'>{head}</h1>
            <p>{para}</p>
        </div>

    )
}

export default Comcard