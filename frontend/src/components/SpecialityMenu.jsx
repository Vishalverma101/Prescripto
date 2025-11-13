import React, { useRef } from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    const scrollRef = useRef(null)
	const colorBySpeciality = {
		'General physician': 'from-[#EAEFFF] to-[#DDE6FF]',
		'Gynecologist': 'from-[#FFE8EF] to-[#FFD9E7]',
		'Dermatologist': 'from-[#E6FFF6] to-[#CCFBEF]',
		'Pediatricians': 'from-[#FFF6E6] to-[#FFECCB]',
		'Neurologist': 'from-[#F4E8FF] to-[#E5D6FF]',
		'Gastroenterologist': 'from-[#E6F9FF] to-[#D6F2FF]',
		'Cardiologist': 'from-[#FFEFE6] to-[#FFD9C7]',
		'Orthopedist': 'from-[#E9FFF0] to-[#D5F7E0]',
		'ENT Specialist': 'from-[#E8F7FF] to-[#D4EEFF]',
		'Ophthalmologist': 'from-[#FFF0F7] to-[#FFD9EB]',
		'Psychiatrist': 'from-[#F4F0FF] to-[#E6E0FF]',
		'Dentist': 'from-[#F2FFFB] to-[#D9FFF3]',
	}

    const scrollByAmount = (amount) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
        }
    }

    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
			<p className='sm:w-1/3 text-center text-sm'>Explore top specialities and book an appointment in seconds.</p>

            <div className='relative w-full mt-2'>
                <button
                    aria-label='Scroll left'
                    onClick={() => scrollByAmount(-320)}
                    className='hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white border border-[#C9D8FF] shadow hover:bg-[#F6F8FF]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                        <path fillRule="evenodd" d="M12.78 15.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L8.06 10l4.72 4.47a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                </button>

                <div
                    ref={scrollRef}
					className='flex gap-4 pt-5 w-full overflow-x-auto scroll-smooth px-1 sm:px-8'
                >
					{specialityData.map((item, index) => (
                        <Link
                            to={`/doctors/${item.speciality}`}
                            onClick={() => scrollTo(0, 0)}
                            key={index}
							className='group flex-shrink-0 w-40 sm:w-44'
                        >
							<div className='border border-[#D9E2FF] rounded-xl p-4 bg-white hover:bg-[#F7FAFF] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/60 text-center'>
								<div className={`mx-auto mb-3 w-16 h-16 rounded-full bg-gradient-to-br ${colorBySpeciality[item.speciality] || 'from-[#EAEFFF] to-[#DDE6FF]'} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
									<img className='w-8 h-8' src={item.image} alt={item.speciality} />
								</div>
								<p className='text-xs sm:text-sm font-medium text-[#262626]'>{item.speciality}</p>
								<div className='mt-3'>
									<span className='inline-block text-[10px] px-2 py-1 rounded-full bg-[#EAEFFF] text-primary group-hover:bg-primary group-hover:text-white transition-colors'>Book now</span>
								</div>
							</div>
                        </Link>
					))}
                </div>

                <button
                    aria-label='Scroll right'
                    onClick={() => scrollByAmount(320)}
                    className='hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white border border-[#C9D8FF] shadow hover:bg-[#F6F8FF]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                        <path fillRule="evenodd" d="M7.22 4.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L11.94 10 7.22 5.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SpecialityMenu