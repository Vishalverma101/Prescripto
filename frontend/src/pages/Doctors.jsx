import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState('all')
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    let filtered = doctors

    // Filter by speciality
    if (speciality) {
      filtered = filtered.filter(doc => doc.speciality === speciality)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(doc =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.speciality.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by availability
    if (availabilityFilter === 'available') {
      filtered = filtered.filter(doc => doc.available)
    } else if (availabilityFilter === 'unavailable') {
      filtered = filtered.filter(doc => !doc.available)
    }

    setFilterDoc(filtered)
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality, searchQuery, availabilityFilter])

  const handleSpecialityClick = (spec) => {
    if (speciality === spec) {
      navigate('/doctors')
    } else {
      navigate(`/doctors/${spec}`)
    }
    setShowFilter(false)
  }

  return (
    <div className='my-8 md:mx-10'>
      {/* Header Section */}
      <div className='mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
          {speciality ? `${speciality} Doctors` : 'All Doctors'}
        </h1>
        <p className='text-gray-600'>
          {filterDoc.length} {filterDoc.length === 1 ? 'doctor' : 'doctors'} found
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className='mb-6 flex flex-col sm:flex-row gap-4'>
        <div className='flex-1 relative'>
          <input
            type='text'
            placeholder='Search doctors by name or speciality...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          />
          <svg
            className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className='sm:hidden px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors'
        >
          Filters
        </button>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Filter Sidebar */}
        <div
          className={`lg:w-64 flex-shrink-0 ${
            showFilter ? 'block' : 'hidden lg:block'
          }`}
        >
          <div
            className='bg-white border border-gray-200 rounded-2xl p-6 sticky top-24'
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          >
            <h2 className='text-lg font-bold text-gray-900 mb-4'>Filters</h2>

            {/* Availability Filter */}
            <div className='mb-6'>
              <h3 className='text-sm font-semibold text-gray-700 mb-3'>Availability</h3>
              <div className='space-y-2'>
                <button
                  onClick={() => setAvailabilityFilter('all')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    availabilityFilter === 'all'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Doctors
                </button>
                <button
                  onClick={() => setAvailabilityFilter('available')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    availabilityFilter === 'available'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Available Now
                </button>
                <button
                  onClick={() => setAvailabilityFilter('unavailable')}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    availabilityFilter === 'unavailable'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Unavailable
                </button>
              </div>
            </div>

            {/* Speciality Filter */}
            <div>
              <h3 className='text-sm font-semibold text-gray-700 mb-3'>Speciality</h3>
              <div className='space-y-2'>
                <button
                  onClick={() => handleSpecialityClick(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    !speciality
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Specialities
                </button>
                {specialityData.map((spec, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSpecialityClick(spec.speciality)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                      speciality === spec.speciality
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <img src={spec.image} alt={spec.speciality} className='w-5 h-5' />
                    {spec.speciality}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className='flex-1'>
          {filterDoc.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {filterDoc.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/appointment/${item._id}`)
                    scrollTo(0, 0)
                  }}
                  className='group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <div className='relative bg-gray-100'>
                    <img
                      className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                      src={item.image}
                      alt={item.name}
                    />
                    <div className='absolute top-3 left-3'>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          item.available
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                  <div className='p-4'>
                    <div className='flex items-start justify-between mb-2'>
                      <p className='text-gray-900 text-base font-semibold line-clamp-1 flex-1'>
                        {item.name}
                      </p>
                      <div className='flex items-center gap-1 text-yellow-400 flex-shrink-0 ml-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='w-4 h-4'
                        >
                          <path d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z' />
                        </svg>
                        <span className='text-xs text-gray-600'>4.9</span>
                      </div>
                    </div>
                    <p className='text-gray-600 text-sm mb-3 line-clamp-1'>{item.speciality}</p>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm text-gray-700'>
                        Fee: <span className='font-semibold text-gray-900'>${item.fees}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/appointment/${item._id}`)
                          scrollTo(0, 0)
                        }}
                        className='text-xs px-4 py-1.5 rounded-full font-medium transition-all duration-300'
                        style={{
                          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                          color: 'white',
                          boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.5)'
                          e.currentTarget.style.transform = 'scale(1.05)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(139, 92, 246, 0.3)'
                          e.currentTarget.style.transform = 'scale(1)'
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-20'>
              <svg
                className='mx-auto h-24 w-24 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <h3 className='mt-4 text-lg font-semibold text-gray-900'>No doctors found</h3>
              <p className='mt-2 text-sm text-gray-600'>
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors