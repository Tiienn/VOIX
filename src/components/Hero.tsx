import React from 'react'

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your Business with{' '}
              <span className="text-gradient">AI Voice Solutions</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-fade-in animation-delay-200">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize customer interactions with cutting-edge AI voice agents, 
              intelligent automation, and personalized conversational experiences that 
              drive growth and enhance customer satisfaction.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </button>
            <button
              onClick={scrollToServices}
              className="btn-secondary text-lg px-8 py-4"
            >
              Explore Services
            </button>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in animation-delay-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  AI Voice Agents
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Intelligent voice assistants that handle customer inquiries 24/7 with human-like conversations
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Instant Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Streamline operations with automated workflows that reduce costs and increase efficiency
                </p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg card-hover">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced analytics and reporting to optimize performance and customer experience
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-fade-in animation-delay-600 mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Businesses Transformed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Uptime Guarantee
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  AI Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  85%
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Cost Reduction Average
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
