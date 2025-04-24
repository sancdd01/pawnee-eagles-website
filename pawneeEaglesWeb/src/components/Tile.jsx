import React from 'react'

const Tile = ({title}) => {
  return (
    <div className='w-52 h-42 md:w-50 md:h-40 lg:w-52 lg:h-42 bg-white p-4 shadow-md rounded-lg flex items-center justify-center text-center'>
      <h3 className='text-lg font-semibold'>{title}</h3>
    </div>
  )
}

export default Tile
