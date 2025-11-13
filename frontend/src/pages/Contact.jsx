import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className='relative overflow-hidden'>
      {/* Background Gradient */}
      <div 
        className='absolute inset-0 -z-10'
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(245, 158, 11, 0.05) 100%)',
        }}
      ></div>

      <div className='my-8 md:mx-10 relative z-10'>
        {/* Hero Section with Split Design */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center'>
          {/* Left Side - Text */}
          <div className='space-y-6'>
            <div>
              <span className='text-primary font-bold text-sm uppercase tracking-wider mb-2 block'>Get in Touch</span>
              <h1 className='text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight'>
                Let's Start a
                <span className='block' style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Conversation</span>
              </h1>
              <p className='text-gray-600 text-lg leading-relaxed'>
                Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className='flex flex-wrap gap-6 pt-4'>
              <a href='tel:+0000000000' className='flex items-center gap-3 group'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300'>
                  <svg className='w-6 h-6 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Call us</p>
                  <p className='font-semibold text-gray-900'>(000) 000-0000</p>
                </div>
              </a>
              <a href='mailto:development@gmail.com' className='flex items-center gap-3 group'>
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300'>
                  <svg className='w-6 h-6 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Email us</p>
                  <p className='font-semibold text-gray-900'>development@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Image with Overlay */}
          <div className='relative'>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
              <img 
                className='w-full h-[400px] object-cover' 
                src={assets.contact_image} 
                alt='Contact us' 
              />
              <div 
                className='absolute inset-0'
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(245, 158, 11, 0.2) 100%)',
                }}
              ></div>
              {/* Floating Info Cards */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>Visit us</p>
                      <p className='font-semibold text-gray-900 text-sm'>54709 MP Nagar, Zone-1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Form and Info Side by Side */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12'>
          {/* Contact Form - Takes 3 columns */}
          <div className='lg:col-span-3'>
            <div 
              className='rounded-3xl p-8 shadow-xl relative overflow-hidden'
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
                border: '1px solid rgba(139, 92, 246, 0.1)',
              }}
            >
              {/* Decorative gradient blob */}
              <div 
                className='absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20'
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                }}
              ></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center' style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                  }}>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' />
                    </svg>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900'>Send us a Message</h2>
                    <p className='text-sm text-gray-500'>We'll get back to you within 24 hours</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className='space-y-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white'
                        placeholder='John Doe'
                      />
                    </div>

                    <div>
                      <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white'
                        placeholder='john@example.com'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                      <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white'
                        placeholder='+1 (555) 000-0000'
                      />
                    </div>

                    <div>
                      <label htmlFor='subject' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Subject *
                      </label>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white'
                        placeholder='How can we help?'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Message *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none bg-white'
                      placeholder='Tell us more about your inquiry...'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-2'
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                      boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
                    }}
                  >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Takes 2 columns */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Office Hours Card */}
            <div 
              className='rounded-2xl p-6 relative overflow-hidden'
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)',
              }}
            >
              <div className='relative z-10 text-white'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold'>Business Hours</h3>
                </div>
                <div className='space-y-2 text-white/90'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span className='font-semibold'>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span className='font-semibold'>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span className='font-semibold'>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className='bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>Quick Links</h3>
              <div className='space-y-3'>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'>
                  <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors'>
                    <svg className='w-4 h-4 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                    </svg>
                  </div>
                  <span className='font-medium text-gray-700'>FAQs</span>
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'>
                  <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors'>
                    <svg className='w-4 h-4 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <span className='font-medium text-gray-700'>Support Center</span>
                </a>
                <a href='#' className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group'>
                  <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors'>
                    <svg className='w-4 h-4 text-primary group-hover:text-white transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <span className='font-medium text-gray-700'>Careers</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className='bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>Follow Us</h3>
              <div className='flex gap-3'>
                {/* Facebook */}
                <a
                  href='#'
                  className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group'
                  aria-label='Facebook'
                >
                  <svg className='w-5 h-5 text-primary group-hover:text-white transition-colors' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href='#'
                  className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group'
                  aria-label='Twitter'
                >
                  <svg className='w-5 h-5 text-primary group-hover:text-white transition-colors' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href='#'
                  className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group'
                  aria-label='LinkedIn'
                >
                  <svg className='w-5 h-5 text-primary group-hover:text-white transition-colors' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href='#'
                  className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group'
                  aria-label='Instagram'
                >
                  <svg className='w-5 h-5 text-primary group-hover:text-white transition-colors' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
