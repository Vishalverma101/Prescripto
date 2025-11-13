import React from 'react'

const Stats = () => {
	const items = [
		{ value: '100+', label: 'Trusted Doctors' },
		{ value: '25K+', label: 'Appointments Booked' },
		{ value: '4.9/5', label: 'Patient Rating' },
		{ value: '50+', label: 'Cities Covered' },
	]

	const icons = [
		// Doctors - Purple
		(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#8B5CF6" className="w-5 h-5">
				<path d="M10 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z" />
				<path d="M4 13.5A3.5 3.5 0 0 1 7.5 10h5A3.5 3.5 0 0 1 16 13.5V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.5Z" />
			</svg>
		),
		// Appointments - Pink
		(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#EC4899" className="w-5 h-5">
				<path d="M6 2a.75.75 0 0 1 .75.75V4h6.5V2.75a.75.75 0 1 1 1.5 0V4h.5A2.25 2.25 0 0 1 18.5 6.25v9.5A2.25 2.25 0 0 1 16.25 18H3.75A2.25 2.25 0 0 1 1.5 15.75v-9.5A2.25 2.25 0 0 1 3.75 4h.5V2.75A.75.75 0 0 1 5 2.75V4h1V2.75A.75.75 0 0 1 6 2Z" />
				<path d="M3.75 7.5h12.5v8.25a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V7.5Z" />
			</svg>
		),
		// Rating - Orange
		(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F59E0B" className="w-5 h-5">
				<path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z" />
			</svg>
		),
		// Cities - Purple (matching banner start)
		(
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#8B5CF6" className="w-5 h-5">
				<path d="M6.5 2a1.5 1.5 0 0 0-1.5 1.5V18h10V3.5A1.5 1.5 0 0 0 13.5 2h-7Z" />
				<path d="M3 18.75A.75.75 0 0 0 3.75 19.5h12.5a.75.75 0 0 0 0-1.5H3.75A.75.75 0 0 0 3 18.75Z" />
			</svg>
		),
	]

	return (
		<div className='my-8 md:mx-10'>
			<div 
				className='w-full rounded-2xl py-8 px-6'
				style={{
					background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
					boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3), 0 10px 40px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
				}}
			>
				<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
					{items.map((stat, idx) => (
						<div key={idx} className=''>
							<div 
								className='mx-auto mb-3 w-10 h-10 rounded-full backdrop-blur flex items-center justify-center'
								style={{
									background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
									border: '1px solid rgba(255,255,255,0.3)',
									boxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
								}}
							>
								{icons[idx]}
							</div>
							<div 
								className='text-2xl sm:text-3xl font-bold text-white mb-1'
								style={{
									textShadow: '0 2px 8px rgba(0,0,0,0.3)',
								}}
							>
								{stat.value}
							</div>
							<div className='text-xs sm:text-sm text-white/90 mt-1 font-medium'>{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Stats


