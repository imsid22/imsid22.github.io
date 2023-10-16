import React from 'react'
import workImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-gray-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of the projects I have worked on</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${workImg})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            REACT JS APPLICATION
                        </span>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>                                
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Projects