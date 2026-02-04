import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">About Us</h1>
        <p className="text-xl text-gray-700 mb-6">Transtropical Infrastructures is a leading provider of global standard solutions across multiple sectors.</p>
        <p className="text-lg text-gray-600 mb-6">With decades of experience in technical excellence and sustainable development, we deliver innovative solutions tailored to our clients' needs.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
            <p className="text-gray-700">To deliver world-class infrastructure solutions that drive sustainable growth and innovation.</p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-900">Our Vision</h3>
            <p className="text-gray-700">To be the trusted partner for infrastructure development across all sectors globally.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
