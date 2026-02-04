import React from 'react'

const Services = () => {
  const services = [
    { title: 'Infrastructure Design', description: 'Expert design and planning for modern infrastructure' },
    { title: 'Consulting', description: 'Strategic consulting to optimize your infrastructure' },
    { title: 'Implementation', description: 'Full implementation and deployment services' },
    { title: 'Maintenance', description: 'Ongoing support and maintenance solutions' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
