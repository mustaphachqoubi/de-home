import React from 'react'

const Footer = () => {
  return (
    <div className='bg-sky-700 md:flex justify-between p-8'>
        <div className='p-6'>
            <h3 className='text-white font-bold text-xl tracking-wide'>De'Home</h3>
            <ul className='text-slate-300 text-sm leading-loose mt-2'>
                <li className="cursor-pointer hover:text-slate-400">Help you to find your dream's apartment</li>
                <li className="cursor-pointer hover:text-slate-400">Something</li>
                <li className="cursor-pointer hover:text-slate-400">dehome.com</li>
            </ul>
        </div>

        <div className='p-6'>
            <h3 className='text-white font-bold text-xl tracking-wide'>Support</h3>
            <ul className='text-slate-300 text-sm leading-loose mt-2'>
                <li className="cursor-pointer hover:text-slate-400">Account Information</li>
                <li className="cursor-pointer hover:text-slate-400">Support Center</li>
                <li className="cursor-pointer hover:text-slate-400">support@gmail.com</li>
            </ul>
        </div>

        <div className='p-6'>
            <h3 className='text-white font-bold text-xl tracking-wide'>About</h3>
            <ul className='text-slate-300 text-sm leading-loose mt-2'>
                <li className="cursor-pointer hover:text-slate-400">About Us</li>
                <li className="cursor-pointer hover:text-slate-400">Features</li>
            </ul>
        </div>

        <div className='p-6'>
            <h3 className='text-white font-bold text-xl tracking-wide'>Company</h3>
            <ul className='text-slate-300 text-sm leading-loose mt-2'>
                <li className="cursor-pointer hover:text-slate-400">How we work</li>
                <li className="cursor-pointer hover:text-slate-400">Capital</li>
            </ul>
        </div>

        <div className='p-6'>
            <h3 className='text-white font-bold text-xl tracking-wide'>Contact Us</h3>
            <ul className='text-slate-300 text-sm leading-loose mt-2'>
                <li className="cursor-pointer hover:text-slate-400">Phone : +2345633356</li>
                <li className="cursor-pointer hover:text-slate-400">Email : name@gmail.com</li>
                <li className="cursor-pointer hover:text-slate-400">Adress : Rabat-agdal, morocco</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer