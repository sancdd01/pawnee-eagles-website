  import React from 'react'
  import MainSection from '../container/MainSection'
  import TilesSection from '../container/TilesSection'
  import Navbar from '../container/Navbar'
  import TeamSlideshow from '../components/TeamSlideshow'

  const Home = () => {
    return (
      <div 
        className="min-h-screen bg-cover bg-center flex justify-center items-start"
        style={{ backgroundImage: "url('/background.png')" }}
      >


        {/* Overlay Card */}
        <div className="my-12 max-w-screen-md w-full rounded-lg shadow-2xl bg-white bg-opacity-90 overflow-hidden">
          
          {/* Navbar inside overlay */}
          <Navbar className="z-10 relative bg-transparent" />

          {/* Top section with background image and overlay */}
          <div className="relative h-[600px] overflow-hidden rounded-b-lg">
            {/* Team Photo background */}
            <img 
              src="/team2.png" 
              alt="Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 ">
              
              {/* Top: centered title */}
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold rock-salt-regular mb-2">Pawnee Eagles</h2>
                <p className="text-lg">Welcome to the official page of the Pawnee Eagles Little League team!</p>
              </div>

              {/* Bottom Right Menu */}
              <div className="flex justify-end">
                <div className="w-full max-w-xs bg-[#eedfbe] rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-semibold text-center text-blue-900 mb-2">Team League Menu</h3>
                <MainSection />
              </div>
              </div>
            </div>
          </div>

          {/* Bottom content - tiles section */}
          <div className="mt-0 px-6 pb-6 bg-[#eedfbe] rounded-lg shadow-lg">
            <TilesSection />
          </div>
        </div>
      </div>
    )
  }

  export default Home
