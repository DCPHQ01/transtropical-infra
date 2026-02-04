import React from 'react'

export default function Projects() {
  const projects = [
    { title: 'Infrastructure Modernization', sector: 'Energy', description: 'Complete infrastructure upgrade for renewable energy sector' },
    { title: 'Digital Transformation', sector: 'Healthcare', description: 'Modern IT infrastructure for healthcare providers' },
    { title: 'Smart City Initiative', sector: 'Urban', description: 'Comprehensive smart city infrastructure deployment' },
    { title: 'Industrial IoT', sector: 'Manufacturing', description: 'Connected infrastructure for industrial operations' },
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Our Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-2 border-gray-200 p-8 rounded-lg hover:border-red-600 transition">
              <div className="text-red-600 font-bold mb-2">{project.sector}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}