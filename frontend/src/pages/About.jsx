import React from 'react'
import { assets, doctors } from '../assets/assets'

const About = () => {
  return (
    <div className='my-8 md:mx-10'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          About <span className='text-primary'>Us</span>
        </h1>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
          Your trusted partner in managing healthcare needs conveniently and efficiently
        </p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-12 mb-16'>
        <div className='md:w-1/2'>
          <div className='rounded-2xl overflow-hidden shadow-lg'>
            <img className='w-full h-auto' src={assets.about_image} alt='About Prescripto' />
          </div>
        </div>
        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-3xl font-bold text-gray-900'>Welcome to Prescripto</h2>
          <p className='text-gray-600 leading-relaxed'>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className='text-gray-600 leading-relaxed'>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <div className='pt-4'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Our Vision</h3>
            <p className='text-gray-600 leading-relaxed'>
              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-10'>
          Our Core Values
        </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden relative group'>
            <div className='absolute top-0 left-0 w-full h-40 opacity-20 group-hover:opacity-30 transition-all duration-300 overflow-hidden rounded-t-xl'>
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' 
                src={assets.header_img} 
                alt='Mission'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </div>
            <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10'>
              <svg className='w-7 h-7 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3 relative z-10'>Our Mission</h3>
            <p className='text-gray-600 leading-relaxed relative z-10'>
              To make quality healthcare affordable and accessible for everyone. We empower users with accurate, comprehensive information to make better healthcare decisions.
            </p>
          </div>
          <div className='bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden relative group'>
            <div className='absolute top-0 left-0 w-full h-40 opacity-20 group-hover:opacity-30 transition-all duration-300 overflow-hidden rounded-t-xl'>
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' 
                src={assets.appointment_img} 
                alt='Vision'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </div>
            <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10'>
              <svg className='w-7 h-7 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3 relative z-10'>Our Vision</h3>
            <p className='text-gray-600 leading-relaxed relative z-10'>
              To create a seamless healthcare experience for every user. We bridge the gap between patients and healthcare providers, making quality care accessible when you need it.
            </p>
          </div>
          <div className='bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden relative group'>
            <div className='absolute top-0 left-0 w-full h-40 opacity-20 group-hover:opacity-30 transition-all duration-300 overflow-hidden rounded-t-xl'>
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' 
                src={assets.contact_image} 
                alt='Commitment'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </div>
            <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10'>
              <svg className='w-7 h-7 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3 relative z-10'>Our Commitment</h3>
            <p className='text-gray-600 leading-relaxed relative z-10'>
              We are committed to excellence in healthcare technology, continuously enhancing our platform with the latest advancements to deliver superior service.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-10'>
          Why Choose Us
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='border border-gray-200 rounded-xl p-8 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group overflow-hidden relative'>
            <div className='absolute top-0 right-0 w-40 h-40 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 rounded-full overflow-hidden'>
              <img 
                className='w-full h-full object-cover rounded-full group-hover:scale-125 transition-transform duration-300' 
                src={assets.header_img} 
                alt='Efficiency'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.2) contrast(1.1) saturate(1.1)' }}
              />
            </div>
            <div className='mb-4 relative z-10'>
              <svg className='w-10 h-10 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3 relative z-10'>Efficiency</h3>
            <p className='text-gray-600 group-hover:text-white/90 leading-relaxed relative z-10'>
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>
          <div className='border border-gray-200 rounded-xl p-8 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group overflow-hidden relative'>
            <div className='absolute top-0 right-0 w-40 h-40 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 rounded-full overflow-hidden'>
              <img 
                className='w-full h-full object-cover rounded-full group-hover:scale-125 transition-transform duration-300' 
                src={assets.appointment_img} 
                alt='Convenience'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.2) contrast(1.1) saturate(1.1)' }}
              />
            </div>
            <div className='mb-4 relative z-10'>
              <svg className='w-10 h-10 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3 relative z-10'>Convenience</h3>
            <p className='text-gray-600 group-hover:text-white/90 leading-relaxed relative z-10'>
              Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>
          <div className='border border-gray-200 rounded-xl p-8 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group overflow-hidden relative'>
            <div className='absolute top-0 right-0 w-40 h-40 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 rounded-full overflow-hidden'>
              <img 
                className='w-full h-full object-cover rounded-full group-hover:scale-125 transition-transform duration-300' 
                src={assets.contact_image} 
                alt='Personalization'
                onError={(e) => { e.target.style.display = 'none' }}
                style={{ filter: 'brightness(1.2) contrast(1.1) saturate(1.1)' }}
              />
            </div>
            <div className='mb-4 relative z-10'>
              <svg className='w-10 h-10 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-3 relative z-10'>Personalization</h3>
            <p className='text-gray-600 group-hover:text-white/90 leading-relaxed relative z-10'>
              Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='mb-16'>
        <div
          className='rounded-2xl px-6 sm:px-10 md:px-16 py-12 text-white'
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
            boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
          }}
        >
          <h2 className='text-3xl font-bold text-center mb-10'>Our Impact</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
            <div>
              <div className='text-4xl md:text-5xl font-black mb-2' style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                100+
              </div>
              <div className='text-white/90 font-medium text-sm md:text-base'>Trusted Doctors</div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-black mb-2' style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                25K+
              </div>
              <div className='text-white/90 font-medium text-sm md:text-base'>Appointments</div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-black mb-2' style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                4.9/5
              </div>
              <div className='text-white/90 font-medium text-sm md:text-base'>Patient Rating</div>
            </div>
            <div>
              <div className='text-4xl md:text-5xl font-black mb-2' style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                50+
              </div>
              <div className='text-white/90 font-medium text-sm md:text-base'>Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className='mb-16'>
        <div className='bg-gray-50 rounded-2xl p-8 md:p-12'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>Our Story</h2>
          <div className='flex flex-col lg:flex-row gap-8 items-center'>
            <div className='lg:w-1/2'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='rounded-xl overflow-hidden shadow-lg bg-gray-200 group cursor-pointer'>
                  <img 
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                    src={assets.header_img} 
                    alt='Healthcare team'
                    onError={(e) => { e.target.style.display = 'none' }}
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-lg bg-gray-200 group cursor-pointer'>
                  <img 
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                    src={assets.appointment_img} 
                    alt='Medical technology'
                    onError={(e) => { e.target.style.display = 'none' }}
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-lg bg-gray-200 group cursor-pointer'>
                  <img 
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                    src={assets.contact_image} 
                    alt='Patient care'
                    onError={(e) => { e.target.style.display = 'none' }}
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                </div>
                <div className='rounded-xl overflow-hidden shadow-lg bg-gray-200 group cursor-pointer'>
                  <img 
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                    src={assets.about_image} 
                    alt='Appointment booking'
                    onError={(e) => { e.target.style.display = 'none' }}
                    style={{ filter: 'brightness(1.05) contrast(1.05)' }}
                  />
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 max-w-2xl space-y-4 text-gray-600 leading-relaxed'>
              <p>
                Prescripto was founded with a simple yet powerful mission: to make healthcare accessible and convenient for everyone. We recognized that scheduling doctor appointments and managing health records were often time-consuming and frustrating processes.
              </p>
              <p>
                Today, we've grown into a trusted platform connecting thousands of patients with qualified healthcare professionals. Our commitment to innovation and user-centric design has made us a leader in digital healthcare solutions.
              </p>
              <p>
                We continue to evolve, adding new features and expanding our network to serve more communities. Every day, we work towards our vision of making quality healthcare just a click away.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 text-center mb-10'>
          Meet Our Expert Doctors
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {doctors.slice(0, 5).map((doctor, idx) => (
            <div key={doctor._id} className='text-center group'>
              <div className='rounded-full overflow-hidden mb-4 mx-auto w-32 h-32 border-4 border-gray-200 group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-xl bg-gray-200 cursor-pointer'>
                <img 
                  className='w-full h-full object-cover group-hover:scale-125 transition-transform duration-300' 
                  src={doctor.image} 
                  alt={doctor.name}
                  onError={(e) => { e.target.style.display = 'none' }}
                  style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                />
              </div>
              <h4 className='font-semibold text-gray-900'>{doctor.name}</h4>
              <p className='text-sm text-gray-600'>{doctor.speciality}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='text-center mb-8 relative overflow-hidden rounded-2xl p-12 group' style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(245, 158, 11, 0.05) 100%)',
      }}>
        <div className='absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity duration-300'>
          <img 
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
            src={assets.header_img} 
            alt='Background'
            onError={(e) => { e.target.style.display = 'none' }}
            style={{ filter: 'brightness(1.1) contrast(1.05)' }}
          />
        </div>
        <div className='relative z-10'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Ready to Experience Better Healthcare?
          </h2>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied patients who trust Prescripto for their healthcare needs
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='/doctors'
              className='px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg'
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
              }}
            >
              Find a Doctor
            </a>
            <a
              href='/contact'
              className='px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105'
              style={{
                borderColor: '#8B5CF6',
                color: '#8B5CF6',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
