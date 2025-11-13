import React from 'react'

const Testimonials = () => {
	const testimonials = [
		{
			name: 'Aarav Sharma',
			image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
			rating: 5,
			text:
				'Booking a video consultation took less than a minute. The doctor was professional and helpful. Highly recommend!',
		},
		{
			name: 'Priya Verma',
			image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop',
			rating: 5,
			text:
				'Found a specialist nearby and got an appointment the same day. Super smooth experience from start to finish.',
		},
		{
			name: 'Rahul Mehta',
			image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
			rating: 4.8,
			text:
				'Love the clean interface and reminders. Prescripto keeps my health on track without hassle.',
		},
	]

	return (
		<div className='my-16 md:mx-10'>
			<div className='text-center mb-10'>
				<h2 className='text-3xl font-semibold text-[#262626]'>What Patients Say</h2>
				<p className='text-sm text-[#5C5C5C] mt-2'>Real experiences from our community</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{testimonials.map((t, idx) => (
					<div key={idx} className='group rounded-xl border border-[#C9D8FF] bg-white p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
						<div className='flex items-start gap-3'>
							<div className='relative'>
								<img src={t.image} alt={t.name} className='w-10 h-10 rounded-full object-cover' />
								<span className='absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#5F6FFF" className="w-3.5 h-3.5">
										<path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z" />
									</svg>
								</span>
							</div>
							<div className='flex-1'>
								<p className='text-sm text-[#262626] leading-relaxed'>
									<span className='align-top text-primary/70 mr-1'>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline">
											<path d="M3.5 3A1.5 1.5 0 0 0 2 4.5v6A1.5 1.5 0 0 0 3.5 12H7l2.146 2.146A.5.5 0 0 0 10 14v-2h2.5A1.5 1.5 0 0 0 14 10.5v-6A1.5 1.5 0 0 0 12.5 3h-9Z" />
										</svg>
									</span>
									{t.text}
								</p>
								<div className='mt-3 flex items-center justify-between'>
									<div className='text-sm font-medium text-[#374151]'>{t.name}</div>
									<div className='flex items-center gap-1 text-[#F59E0B]' title='Patient rating'>
										{[0,1,2,3,4].map((i) => (
											<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${i < 4 ? '' : 'opacity-80'}`}>
												<path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z" />
											</svg>
										))}
										<span className='ml-1 text-xs text-[#6B7280]'>{t.rating}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials


