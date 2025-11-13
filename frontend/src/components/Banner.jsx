import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='my-20 md:mx-10' style={{ perspective: '1000px' }}>
            <div 
                className='relative overflow-hidden flex flex-col md:flex-row items-center gap-8 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-16 py-12 text-white'
                style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                    boxShadow: '0 25px 80px rgba(139, 92, 246, 0.4), 0 10px 40px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'rotateY(-2deg) rotateX(1deg)',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* 3D Depth layers */}
                <div 
                    className='absolute inset-0 rounded-3xl'
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        transform: 'translateZ(20px)',
                        pointerEvents: 'none'
                    }}
                ></div>
                
                {/* Decorative 3D orbs */}
                <div 
                    className='pointer-events-none absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-60'
                    style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                        transform: 'translateZ(-50px)',
                    }}
                ></div>
                <div 
                    className='pointer-events-none absolute -bottom-48 -right-40 w-96 h-96 rounded-full blur-3xl opacity-50'
                    style={{
                        background: 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)',
                        transform: 'translateZ(-30px)',
                    }}
                ></div>
                
                {/* ------- Left Side ------- */}
                <div className='flex-1 relative z-10' style={{ transform: 'translateZ(30px)' }}>
                    <div className='flex flex-wrap items-center gap-3 mb-5'>
                        <span 
                            className='px-5 py-2 rounded-2xl text-white text-xs font-bold'
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                                transform: 'translateZ(10px)',
                            }}
                        >
                            ⚡ Instant booking
                        </span>
                        <span 
                            className='px-5 py-2 rounded-2xl text-white text-xs font-bold'
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                                transform: 'translateZ(10px)',
                            }}
                        >
                            🏥 No wait at clinic
                        </span>
                        <span 
                            className='px-5 py-2 rounded-2xl text-white text-xs font-bold'
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)',
                                transform: 'translateZ(10px)',
                            }}
                        >
                            🔒 Secure e‑prescriptions
                        </span>
                    </div>
                    <h3 
                        className='text-[36px] md:text-[48px] lg:text-[60px] font-black leading-tight tracking-tight mb-3'
                        style={{
                            textShadow: '0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.2), 0 0 40px rgba(255,255,255,0.1)',
                            transform: 'translateZ(20px)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Book Appointment
                    </h3>
                    <p 
                        className='text-xl md:text-2xl text-white/95 mb-8 font-semibold'
                        style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            transform: 'translateZ(15px)',
                        }}
                    >
                        With 100+ Trusted Doctors
                    </p>

                    {/* Trust indicators with 3D effect */}
                    <div className='flex items-center gap-6 mb-10' style={{ transform: 'translateZ(25px)' }}>
                        <div 
                            className='p-3 rounded-2xl'
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                            }}
                        >
                            <img className='w-24 md:w-28' src={assets.group_profiles} alt="trusted users" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2 text-base font-bold'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0L7.06 7.012l-4.522.35c-.833.065-1.171 1.103-.536 1.65l3.44 2.962-1.036 4.39c-.191.812.691 1.456 1.405 1.02L10 15.347l4.189 2.037c.714.437 1.596-.208 1.405-1.02l-1.036-4.39 3.44-2.962c.635-.547.297-1.585-.536-1.65l-4.522-.35-2.072-4.128Z" /></svg>
                                <span>4.9/5 Rating</span>
                            </div>
                            <div className='flex items-center gap-2 text-sm text-white/95 font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-7.5 9.5a.75.75 0 0 1-1.127.06l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.868 2.867 6.98-8.84a.75.75 0 0 1 1.076-.079Z" clipRule="evenodd" /></svg>
                                <span>Verified Doctors</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center gap-4' style={{ transform: 'translateZ(30px)' }}>
                        <button
                            onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                            className='px-10 py-5 rounded-2xl text-base md:text-lg font-bold text-purple-600 hover:scale-105 transition-all duration-300'
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.9)',
                                border: '1px solid rgba(255,255,255,0.5)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)';
                                e.currentTarget.style.transform = 'translateZ(40px) scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.9)';
                                e.currentTarget.style.transform = 'translateZ(30px) scale(1)';
                            }}
                        >
                            Create account
                        </button>
                        <a 
                            href='/doctors' 
                            className='px-10 py-5 rounded-2xl text-base md:text-lg font-bold border-2 hover:scale-105 transition-all duration-300'
                            style={{
                                borderColor: 'rgba(255,255,255,0.5)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)';
                                e.currentTarget.style.transform = 'translateZ(35px) scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)';
                                e.currentTarget.style.transform = 'translateZ(30px) scale(1)';
                            }}
                        >
                            Browse doctors
                        </a>
                    </div>
                </div>

                {/* ------- Right Side ------- */}
                <div className='md:w-1/2 lg:w-[420px] relative z-10' style={{ transform: 'translateZ(40px) rotateY(5deg)' }}>
                    <div 
                        className='relative rounded-3xl overflow-hidden'
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                            transform: 'translateZ(20px)',
                        }}
                    >
                        <img className='w-full h-auto object-cover' src={assets.appointment_img} alt="appointment" style={{ mixBlendMode: 'overlay' }} />
                        {/* Gradient overlay */}
                        <div 
                            className='absolute inset-0'
                            style={{
                                background: 'linear-gradient(to top, rgba(139,92,246,0.3) 0%, transparent 50%)',
                            }}
                        ></div>
                    </div>
                    {/* Floating 3D stat chips */}
                    <div className='hidden md:flex absolute -bottom-8 left-6 gap-4' style={{ transform: 'translateZ(50px)' }}>
                        <div 
                            className='px-5 py-3 rounded-2xl text-purple-600 text-sm font-black backdrop-blur-sm'
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)',
                                border: '2px solid rgba(255,255,255,0.5)',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
                                transform: 'rotateY(-10deg) rotateX(5deg)',
                            }}
                        >
                            📊 25K+ Bookings
                        </div>
                        <div 
                            className='px-5 py-3 rounded-2xl text-purple-600 text-sm font-black backdrop-blur-sm'
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)',
                                border: '2px solid rgba(255,255,255,0.5)',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
                                transform: 'rotateY(10deg) rotateX(-5deg)',
                            }}
                        >
                            ⭐ 4.9/5 Rating
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner