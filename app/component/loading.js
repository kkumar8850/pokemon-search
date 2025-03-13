import React from 'react'

const Loading = () => {
    return (
        <div className='mt-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4'>
            {
                [0,1,2,3,4,5,6,7].map(i=> (
                    <div key={`skeleton-${i}`} className='h-[250px] w-full bg-[#ccc] rounded-lg'></div>
                ))
            }
        </div>
    )
}

export default Loading;