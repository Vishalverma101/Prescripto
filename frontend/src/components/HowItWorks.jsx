import React from 'react'
import { assets } from '../assets/assets'

const HowItWorks = () => {
	const steps = [
		{
			title: 'Search & Discover',
			desc: 'Find specialists, clinics, and services tailored to your needs.',
			icon: assets.search_icon || assets.info_icon,
			colors: 'from-[#EAF2FF] to-[#F6F9FF]',
		},
		{
			title: 'Book Instantly',
			desc: 'Choose a time that works and confirm in a tap.',
			icon: assets.verified_icon,
			colors: 'from-[#EAF8FF] to-[#F2FBFF]',
		},
		{
			title: 'Consult & Care',
			desc: 'Join video visits or in‑person appointments and track recovery.',
			icon: assets.chats_icon,
			colors: 'from-[#F7EEFF] to-[#FBF7FF]',
		},
	]

	return (
		<div className='my-16 md:mx-10'>
			<div className='text-center mb-10'>
				<h2 className='text-3xl font-semibold text-[#262626]'>How Prescripto Works</h2>
				<p className='text-sm text-[#5C5C5C] mt-2'>Get care in minutes with a few simple steps</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
				{steps.map((s, idx) => (
					<div
						key={idx}
						className='group border border-[#E0E7FF] rounded-2xl p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
					>
						<div className={`w-full h-28 rounded-xl bg-gradient-to-br ${s.colors} flex items-center justify-center overflow-hidden`}>
							<div className='w-16 h-16 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110'>
								<img src={s.icon} alt={s.title} className='w-8 h-8' />
							</div>
						</div>
						<h3 className='mt-4 text-lg font-medium text-[#262626]'>{s.title}</h3>
						<p className='text-sm text-[#5C5C5C] mt-1'>{s.desc}</p>
						<div className='mt-4 flex items-center gap-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity'>
							Learn more
							<span className='inline-block w-4 h-4'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M7.22 14.28a.75.75 0 0 1 0-1.06L10.44 10 7.22 6.78a.75.75 0 1 1 1.06-1.06l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
								</svg>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default HowItWorks


