import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {

        setDocSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {

            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = [];


            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {

                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => ([...prev, timeSlots]))

        }

    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = docSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctosData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div className='my-8 md:mx-10'>
            {/* Compact Doctor Header */}
            <div 
                className='rounded-xl shadow-md p-4 mb-6 flex items-center gap-4 text-white'
                style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                }}
            >
                <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-white/30'>
                    <img className='w-full h-full object-cover' src={docInfo.image} alt={docInfo.name} />
                </div>
                <div className='flex-1 min-w-0'>
                    <h1 className='text-xl font-bold text-white flex items-center gap-2'>
                        {docInfo.name}
                        <img className='w-5 h-5' src={assets.verified_icon} alt="verified" style={{ filter: 'brightness(0) invert(1)' }} />
                    </h1>
                    <p className='text-sm text-white/90'>{docInfo.degree} - {docInfo.speciality}</p>
                    <div className='flex items-center gap-3 mt-1'>
                        <span 
                            className='text-xs px-2 py-0.5 rounded-full font-semibold text-white'
                            style={{ background: 'rgba(255,255,255,0.2)' }}
                        >
                            {docInfo.experience}
                        </span>
                        <span className='text-sm font-semibold text-white'>{currencySymbol}{docInfo.fees}</span>
                    </div>
                </div>
            </div>

            {/* Main Content - Side by Side */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Left - Booking Section (2 columns) */}
                <div className='lg:col-span-2'>
                    <div className='bg-white rounded-xl shadow-md p-6'>
                        <h2 className='text-xl font-bold text-gray-900 mb-6'>Book Appointment</h2>
                        
                        {/* Date Selection */}
                        <div className='mb-6'>
                            <p className='text-sm font-semibold text-gray-700 mb-3'>Select Date</p>
                            <div className='flex gap-2 overflow-x-auto pb-2'>
                                {docSlots.length && docSlots.map((item, index) => (
                                    <button
                                        onClick={() => setSlotIndex(index)}
                                        key={index}
                                        className={`flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-lg transition-all ${
                                            slotIndex === index
                                                ? 'text-white shadow-md'
                                                : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:border-blue-300 border border-gray-200'
                                        }`}
                                        style={
                                            slotIndex === index
                                                ? {
                                                      background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                                                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                                                  }
                                                : {}
                                        }
                                    >
                                        <span className='text-xs font-medium'>
                                            {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                                        </span>
                                        <span className='text-lg font-bold'>
                                            {item[0] && item[0].datetime.getDate()}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div className='mb-6'>
                            <p className='text-sm font-semibold text-gray-700 mb-3'>Select Time</p>
                            <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2'>
                                {docSlots.length && docSlots[slotIndex].map((item, index) => (
                                    <button
                                        onClick={() => setSlotTime(item.time)}
                                        key={index}
                                        className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                                            item.time === slotTime
                                                ? 'text-white shadow-md'
                                                : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:border-blue-300 border border-gray-200'
                                        }`}
                                        style={
                                            item.time === slotTime
                                                ? {
                                                      background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                                                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                                                  }
                                                : {}
                                        }
                                    >
                                        {item.time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Book Button */}
                        <button
                            onClick={bookAppointment}
                            disabled={!slotTime}
                            className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${
                                slotTime
                                    ? 'hover:opacity-90 shadow-lg hover:shadow-xl'
                                    : 'opacity-50 cursor-not-allowed'
                            }`}
                            style={
                                slotTime
                                    ? {
                                          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                                          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                                      }
                                    : {
                                          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                                      }
                            }
                        >
                            {slotTime ? 'Book Appointment' : 'Select time slot'}
                        </button>

                        {/* Selected Info */}
                        {slotTime && (
                            <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded-lg'>
                                <div className='flex items-center gap-2 text-green-800 text-sm'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                    <span className='font-semibold'>Selected:</span>
                                    <span className='text-xs'>
                                        {daysOfWeek[docSlots[slotIndex][0].datetime.getDay()]}, {docSlots[slotIndex][0].datetime.getDate()} {docSlots[slotIndex][0].datetime.toLocaleDateString('en-US', { month: 'short' })} at {slotTime}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right - Related Doctors (1 column) */}
                <div className='lg:col-span-1'>
                    <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
                </div>
            </div>
        </div>
    ) : null
}

export default Appointment