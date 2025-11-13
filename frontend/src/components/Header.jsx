import React from 'react'
import { assets } from '../assets/assets'
import Searchbar from './Searchbar'

const Header = () => {
	return (
		<div className='rounded-2xl bg-white'>
			<div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 px-6 md:px-10 lg:px-20 pt-10 md:pt-14'>
				{/* Left */}
				<div className='md:w-1/2'>
					<h1 className='text-[28px] md:text-[36px] lg:text-[44px] leading-tight font-semibold text-[#1F1F1F]'>
						Your home for health
					</h1>
					<p className='mt-3 text-sm text-[#5C5C5C]'>
						Find doctors, book appointments, and get care online or in‑clinic.
					</p>
					<div className='mt-5'>
						<Searchbar />
					</div>
					<div className='mt-5 flex items-center gap-3'>
						<img className='w-28' src={assets.group_profiles} alt="trusted users" />
						<p className='text-xs text-[#5C5C5C]'>
							Trusted by thousands of patients. Secure, fast, and reliable.
						</p>
					</div>
				</div>

				{/* Right */}
				<div className='md:w-1/2 relative'>
					<div className='bg-primary/10 rounded-2xl'>
						<img className='w-full h-auto rounded-2xl' src={assets.header_img} alt="healthcare" />
					</div>
				</div>
			</div>

			{/* CTA strip */}
			<div className='mt-6 md:mt-8 px-6 md:px-10 lg:px-20 pb-8'>
				<a href='#speciality' className='inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm hover:opacity-95 transition'>
					Book an appointment
					<img className='w-3 invert' src={assets.arrow_icon} alt="arrow" />
				</a>
			</div>
		</div>
	)
}

export default Header