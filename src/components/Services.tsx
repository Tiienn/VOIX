import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Voice Agents",
      description: "Intelligent conversational AI that handles customer inquiries, bookings, and support with natural language processing and human-like responses.",
      features: [
        "24/7 Customer Support",
        "Multi-language Support",
        "Natural Voice Synthesis",
        "Context-Aware Conversations"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Customer Support Automation",
      description: "Streamline your support operations with AI-powered ticket routing, automated responses, and intelligent escalation systems.",
      features: [
        "Automated Ticket Routing",
        "Smart Response Generation",
        "Escalation Management",
        "Performance Analytics"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Lead Generation AI",
      description: "Capture and qualify leads automatically with intelligent conversation flows that identify prospects and schedule appointments.",
      features: [
        "Automated Lead Qualification",
        "Appointment Scheduling",
        "CRM Integration",
        "Conversion Optimization"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI implementations designed specifically for your business needs, industry requirements, and workflow integration.",
      features: [
        "Custom Model Training",
        "API Integration",
        "Workflow Automation",
        "Dedicated Support"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI-powered services designed to transform your business operations, 
            enhance customer experience, and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Implementation Process
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A proven methodology to ensure successful AI integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Discovery
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Analyze your business needs and identify optimization opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Design
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Create custom AI solutions tailored to your specific requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Deploy
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Seamless integration with your existing systems and workflows
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Optimize
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous monitoring and improvement for maximum performance
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can streamline your operations and boost your growth.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
