import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)

	return (
		<div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
			<h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
			<p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
			<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-5 px-3 sm:px-0'>
				{doctors.slice(0, 10).map((item, index) => (
					<div
						key={index}
						className='group border border-[#C9D8FF] rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer'
						onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
					>
						<div className='relative bg-[#EAEFFF]'>
							<img className='w-full h-32 sm:h-36 object-cover' src={item.image} alt={item.name} />
							<div className='absolute top-1.5 left-1.5'>
								<span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${item.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
									{item.available ? 'Available' : 'Not available'}
								</span>
							</div>
						</div>
						<div className='p-2.5 sm:p-3'>
							<div className='flex items-start justify-between gap-1 mb-1'>
								<p className='text-[#262626] text-xs sm:text-sm font-medium line-clamp-1 flex-1'>{item.name}</p>
								<div className='flex items-center gap-0.5 text-[#F59E0B] flex-shrink-0'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
										<path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z" />
									</svg>
									<span className='text-[10px] text-[#6B7280]'>4.9</span>
								</div>
							</div>
							<p className='text-[#5C5C5C] text-[10px] sm:text-xs mb-2 line-clamp-1'>{item.speciality}</p>
							<div className='flex items-center justify-between gap-2'>
								<div className='text-[10px] text-[#6B7280]'>
									Fee: <span className='font-medium text-[#374151]'>${item.fees}</span>
								</div>
								<button
									onClick={(e) => { e.stopPropagation(); navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
									className='text-[10px] px-2 py-1 rounded-full bg-[#EAEFFF] text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0'
								>
									Book
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-primary hover:text-white transition-colors'>View all doctors</button>
		</div>

	)
}

export default TopDoctors