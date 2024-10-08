import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-screen h-[125px] flex items-center justify-between'>
      <div className='flex flex-col items-center justify-center'>
        <div className='ml-2 text-md lg:text-xl lg:ml-[10rem]'>Evan Ordona 2024</div>
        <div className='ml-2 text-md lg:text-xl lg:ml-[10rem]'>evanordona21@gmail.com</div>
      </div>
      <div className='flex lg:w-[250px] lg:text-xl justify-evenly text-md w-[150px] lg:mr-[10rem]'>
        Thanks for checking out my portfolio :)

      </div>
    </div>
  )
}

export default Footer