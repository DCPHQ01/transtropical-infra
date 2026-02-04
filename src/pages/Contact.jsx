import React from 'react'

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Contact Us</h1>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-600" placeholder="Your name" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-600" placeholder="Your email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-600 h-32" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact