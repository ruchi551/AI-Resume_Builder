import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-6 mb-2'>
      <h2 className='text-3xl sm:text-4xl font-800 text-slate-900 tracking-tight' style={{ fontWeight: 800 }}>{title}</h2>
      <p className='mt-3 max-w-2xl mx-auto text-slate-500 text-base leading-relaxed'>{description}</p>
    </div>
  )
}

export default Title
