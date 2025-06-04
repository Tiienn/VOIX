import React from 'react'

const About: React.FC = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former AI researcher at Google with 10+ years in machine learning and natural language processing.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "Ex-Amazon engineer specializing in scalable AI infrastructure and voice technology systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      description: "PhD in Computer Science from MIT, published researcher in conversational AI and speech recognition.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI technology, constantly exploring new ways to solve complex business challenges.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Customer Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real, measurable business outcomes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Ethical AI",
      description: "We believe in responsible AI development that respects privacy, promotes fairness, and enhances human capabilities.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      description: "We stay at the forefront of AI advancement, continuously learning and adapting to provide cutting-edge solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">VOIX</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a team of AI experts, engineers, and innovators dedicated to transforming 
            how businesses interact with their customers through intelligent voice technology.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Founded in 2021, VOIX emerged from a simple observation: businesses were struggling 
                to provide consistent, high-quality customer service at scale. Traditional solutions 
                were either too expensive, too rigid, or simply couldn't handle the complexity of 
                human conversation.
              </p>
              <p>
                Our founders, with backgrounds from leading tech companies and research institutions, 
                saw an opportunity to leverage advances in AI and natural language processing to 
                create something truly revolutionary.
              </p>
              <p>
                Today, we're proud to serve over 500 businesses worldwide, from startups to Fortune 
                500 companies, helping them deliver exceptional customer experiences while reducing 
                costs and improving efficiency.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
                  <div className="text-gray-700 dark:text-gray-300">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10M+</div>
                  <div className="text-gray-700 dark:text-gray-300">Conversations Handled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">99.9%</div>
                  <div className="text-gray-700 dark:text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">24/7</div>
                  <div className="text-gray-700 dark:text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experienced leaders driving innovation in AI and voice technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center card-hover">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how VOIX can transform your customer interactions and drive your business forward.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
