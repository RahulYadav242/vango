import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function HomePage() {
  const { authUser } = useAuthStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find your perfect
              <span className="block text-yellow-300">van adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore India's most beautiful destinations with our premium van rentals. 
              From mountain peaks to coastal beaches, your next adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/vans" 
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover-lift transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Vans
              </Link>
              {!authUser && (
                <Link 
                  to="/signup" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Become a Host
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-300/20 rounded-full animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vango?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make van travel simple, safe, and unforgettable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover-lift transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified & Safe</h3>
              <p className="text-gray-600">
                All our vans are thoroughly inspected and verified for safety. Your peace of mind is our priority.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover-lift transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available round the clock to help you with any questions or issues.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover-lift transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Locations</h3>
              <p className="text-gray-600">
                Discover hidden gems and popular destinations across India with our curated van routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-orange-100">Premium Vans</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-orange-100">Destinations</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to start your adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of travelers who have discovered the joy of van life with Vango.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/vans" 
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 hover-lift transition-all duration-300 shadow-lg"
              >
                Browse All Vans
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
