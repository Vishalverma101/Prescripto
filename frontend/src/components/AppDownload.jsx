import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const AppDownload = () => {
	return (
		<div className='md:mx-10 my-12'>
			<div className='flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-[#E0E7FF] bg-[#F6F8FF] px-6 py-8 overflow-hidden'>
				{/* Left: Copy + Badges */}
				<div className='flex-1'>
					<h3 className='text-xl md:text-2xl font-semibold text-[#262626]'>Get the Prescripto app</h3>
					<p className='text-sm text-[#5C5C5C] mt-1'>Book faster, manage appointments, and access e‑prescriptions on the go.</p>
					{/* Send link form */}
					<div className='mt-8'>
						<p className='text-sm md:text-base text-[#1F2937] font-semibold mb-2'>Get the link to download the app</p>
						<AppLinkForm />
					</div>
					<div className='mt-4 flex items-center gap-3'>
						<a href='/#' aria-label='Download on the App Store' className='inline-block'>
							<img
								className='block h-10 w-auto'
								alt='App Store'
								loading='lazy'
								src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
							/>
						</a>
						<a href='/#' aria-label='Get it on Google Play' className='inline-block'>
							<img
								className='block h-10 w-auto object-contain'
								style={{ maxWidth: '140px' }}
								alt='Google Play'
								loading='lazy'
								src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
							/>
						</a>
					</div>
				</div>
				{/* Right: Phone mock */}
				<div className='md:w-1/3'>
					<div className='relative'>
						<img
							src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop'
							alt='mobile app preview'
							className='w-full h-56 md:h-64 object-cover rounded-xl shadow-md'
						/>
						<div className='absolute bottom-3 right-3 w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur rounded-full border border-[#E0E7FF] flex items-center justify-center shadow-lg'>
							<img src={assets.logo} alt='Prescripto logo' className='w-9 h-9 md:w-10 md:h-10 object-contain' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppDownload

// Inline form component: request app link by mobile number
const AppLinkForm = () => {
	const [countryCode, setCountryCode] = useState('+91')
	const [localPhone, setLocalPhone] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)

	const isValidPhone = (full) => {
		const trimmed = full.replace(/\s+/g, '')
		return /^\+\d{10,15}$/.test(trimmed)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const digitsOnly = localPhone.replace(/\D/g, '')
		const full = `${countryCode}${digitsOnly}`
		if (!isValidPhone(full)) {
			toast.error('Please enter a valid mobile number')
			return
		}
		try {
			setIsSubmitting(true)
			// Simulate API call
			await new Promise((res) => setTimeout(res, 800))
			toast.success('Download link sent to your mobile number')
			setLocalPhone('')
		} catch (err) {
			toast.error('Something went wrong. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='flex items-stretch gap-2'>
			<div className='flex items-stretch gap-2 flex-1'>
				<div className='w-28'>
					<select
						aria-label='Country code'
						value={countryCode}
						onChange={(e) => setCountryCode(e.target.value)}
						className='w-full bg-white border border-[#E0E7FF] rounded-lg px-3 py-2 text-sm text-[#1F2937] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'
					>
						<option value='+91'>+91</option>
						<option value='+1'>+1</option>
						<option value='+44'>+44</option>
						<option value='+61'>+61</option>
					</select>
				</div>
				<div className='flex-1'>
					<input
						type='tel'
						inputMode='tel'
						value={localPhone}
						onChange={(e) => setLocalPhone(e.target.value)}
						placeholder='Enter mobile number'
						className='w-full bg-white border border-[#E0E7FF] rounded-lg px-3 py-2 text-sm text-[#1F2937] placeholder:text-[#94A3B8] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'
					/>
				</div>
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				className='px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed'
			>
				{isSubmitting ? 'Sending...' : 'Send SMS'}
			</button>
		</form>
	)
}


