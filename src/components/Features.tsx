import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      title: "Advanced Natural Language Processing",
      description: "Our AI understands context, intent, and nuance in human conversation, providing responses that feel natural and helpful.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Real-time Analytics & Insights",
      description: "Monitor performance, track customer satisfaction, and gain actionable insights with comprehensive real-time dashboards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing CRM, helpdesk, and business tools through our robust API and pre-built integrations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, compliance with GDPR, HIPAA, and SOC 2, ensuring your data is always protected.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Multi-Channel Support",
      description: "Deploy across voice calls, web chat, mobile apps, and social media platforms with consistent experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "AI models that improve over time, learning from interactions to provide better responses and outcomes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  const benefits = [
    {
      title: "85% Cost Reduction",
      description: "Reduce operational costs while improving service quality",
      stat: "85%"
    },
    {
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock support",
      stat: "24/7"
    },
    {
      title: "3x Faster Response",
      description: "Instant responses that keep customers engaged",
      stat: "3x"
    },
    {
      title: "99.9% Uptime",
      description: "Reliable service you can count on",
      stat: "99.9%"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="text-gradient">VOIX</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced AI technology combined with enterprise-grade reliability to deliver 
            exceptional customer experiences and business results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Measurable Business Impact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See the difference AI can make for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {benefit.stat}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powered by Cutting-Edge Technology
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built on the latest AI and cloud technologies for maximum performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">GPT-4</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Language Model</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AWS</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cloud Infrastructure</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">WebRTC</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Real-time Communication</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">TensorFlow</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Machine Learning</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kubernetes</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Container Orchestration</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg text-center card-hover">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Redis</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">High-Performance Cache</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
