import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const teamPhotos = [
  "/Catch.png",
  "/Batting.png",
  "/Female_Batter.png",
]

const TeamSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? teamPhotos.length  -1 : prevIndex -1)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === teamPhotos.length -1 ? 0 : prevIndex +1)
  }

  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <div className="relative w-3/4 max-w-2xl">
        <img 
          src={teamPhotos[currentIndex]}
          alt={`Team Photo ${currentIndex + 1}`}
          className='w-full h-auto rounded-lg shadow-lg'
        />

        <button onClick={handlePrev} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'>
          <FaArrowLeft size={24} />
        </button>
        <button onClick={handleNext} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'>
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default TeamSlideshow
