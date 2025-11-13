import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const RelatedDoctors = ({ speciality, docId }) => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    return (
        <div className='bg-white rounded-xl shadow-md p-6'>
            <h2 className='text-xl font-bold text-gray-900 mb-4'>Related Doctors</h2>
            {relDoc.length > 0 ? (
                <div className='space-y-3'>
                    {relDoc.slice(0, 4).map((item, index) => (
                        <div
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                            className='flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group'
                            key={index}
                        >
                            <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 border-gray-100 group-hover:border-blue-300 transition-colors'>
                                <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <div className='flex items-center gap-2 mb-1'>
                                    <p className='text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors'>{item.name}</p>
                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                            </div>
                                <p className='text-xs text-gray-600 mb-1'>{item.speciality}</p>
                                <span className={`text-xs font-medium ${item.available ? 'text-green-600' : 'text-gray-500'}`}>
                                    {item.available ? 'Available' : 'Not Available'}
                                </span>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <p className='text-sm text-gray-500 text-center py-4'>No related doctors found</p>
            )}
        </div>
    )
}

export default RelatedDoctors