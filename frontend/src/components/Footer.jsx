import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-justify'>

            <div>
                <img src={assets.logoname} className='mb-1 w-44 ml-20' alt='' />
                <p className='w-auto md:w-1/2 text-gray-600 ml-24'>
                Love Bline Cosmetics is owned by Colline Blue Booc and is a one-person operation. We offer beauty in beautifully designed bottles, helping each individual feel empowered, confident, and enhance the beauty they already possess.
                </p>
            </div>

        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>0912 345 678</li>
                <li>loveblineofficial@gmail.com</li>
            </ul>
        </div>
        </div>

        <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 lovebline.com - All Rights Reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer