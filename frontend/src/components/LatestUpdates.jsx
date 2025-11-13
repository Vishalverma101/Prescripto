import React from 'react'

const LatestUpdates = () => {
	const items = [
		{
			title: 'Managing Seasonal Flu: Doctor Tips',
			tag: 'Wellness',
			image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop',
		},
		{
			title: 'Telehealth Best Practices for First Timers',
			tag: 'Guide',
			image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
		},
		{
			title: 'Understanding Preventive Health Checkups',
			tag: 'Insights',
			image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
		},
		{
			title: 'Healthy Lifestyle: Small Habits, Big Impact',
			tag: 'Lifestyle',
			image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop',
		},
	]

	return (
		<div className='my-16 md:mx-10'>
			<div className='flex items-center justify-between mb-6'>
				<div>
					<h2 className='text-2xl sm:text-3xl font-semibold text-[#262626]'>Latest Health Updates</h2>
					<p className='text-sm text-[#5C5C5C] mt-1'>Curated articles and tips from healthcare experts</p>
				</div>
				<a href='/#' className='hidden sm:inline-block text-primary text-sm hover:underline'>View all</a>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
				{items.map((it, idx) => (
					<div key={idx} className='group border border-[#E0E7FF] rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
						<div className='relative'>
							<img src={it.image} alt={it.title} className='w-full h-36 object-cover' />
							<span className='absolute top-2 left-2 text-[10px] px-2 py-1 rounded-full bg-white/90 text-primary font-medium shadow'>
								{it.tag}
							</span>
						</div>
						<div className='p-4'>
							<h3 className='text-base font-medium text-[#262626] line-clamp-2'>{it.title}</h3>
							<button className='mt-3 text-xs text-primary hover:underline'>Read</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default LatestUpdates


