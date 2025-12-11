import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Placeholder countdown - update with actual event date
  useEffect(() => {
    const targetDate = new Date('2026-04-17T00:00:00').getTime()
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        })
      }
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [])


  const scheduleDays = [
    {
      title: 'April 17, 2026',
      bullets: [
        'Opening Ceremony & Keynote',
        'Team Formation',
        'Workshop Sessions',
        'Hacking Begins'
      ]
    },
    {
      title: 'April 18, 2026',
      bullets: [
        'Continued Hacking',
        'Mentor Office Hours',
        'Sponsor Challenges',
        'Midnight Snacks & Activities'
      ]
    },
    {
      title: 'April 19, 2026',
      bullets: [
        'Final Demos',
        'Judging Rounds',
        'Closing Ceremony',
        'Awards & Celebration'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Who can participate?',
      answer: 'Students of all backgrounds are welcome! We encourage diversity and beginners. This event is open to HBCU students and students from partner institutions.'
    },
    {
      question: 'Can I bring a team?',
      answer: 'Yes — teams of 2-4 are recommended. You can also register as an individual and we\'ll help you find a team during team formation.'
    },
    {
      question: 'Do I need coding experience?',
      answer: 'No! HackClaflin welcomes beginners. We offer workshops for all skill levels and mentors to help guide you through the process.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, enthusiasm, and an open mind! We\'ll provide meals, snacks, and swag throughout the event.'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-300" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {isScrolled && (
              <a href="#top" className="flex items-center" aria-label="Go to top">
                <img 
                  src="/hackclaflin-logo-only.png" 
                  alt="HackClaflin Logo" 
                  className="h-10 w-auto object-contain mr-4"
                  loading="lazy"
                />
              </a>
            )}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors scroll-smooth" aria-label="Go to About section">ABOUT</a>
              <a href="#prizes" className="text-gray-700 hover:text-gray-900 transition-colors scroll-smooth" aria-label="Go to Prizes section">PRIZES</a>
              <a href="#speakers" className="text-gray-700 hover:text-gray-900 transition-colors scroll-smooth" aria-label="Go to Speakers section">SPEAKERS</a>
              <a href="#schedule" className="text-gray-700 hover:text-gray-900 transition-colors scroll-smooth" aria-label="Go to Schedule section">SCHEDULE</a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors scroll-smooth" aria-label="Go to FAQ section">FAQ</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 bg-white">
            <div className="px-6 py-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-gray-900 transition-colors scroll-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
              <a href="#prizes" className="block text-gray-700 hover:text-gray-900 transition-colors scroll-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>PRIZES</a>
              <a href="#speakers" className="block text-gray-700 hover:text-gray-900 transition-colors scroll-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>SPEAKERS</a>
              <a href="#schedule" className="block text-gray-700 hover:text-gray-900 transition-colors scroll-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>SCHEDULE</a>
              <a href="#faq" className="block text-gray-700 hover:text-gray-900 transition-colors scroll-smooth py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative py-12 flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - HackClaflin Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start"
            >
              <img 
                src="/hackclaflin-logo-only.png" 
                alt="HackClaflin Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </motion.div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-4 text-gray-900">
                HACKCLAFIN
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
                2026 is going to be incredible!!
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Join us for a weekend of Creativity, Community, and Code.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/apply"
                  className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Apply to HackClaflin 2026"
                >
                  Apply to Hack
                </a>
                <a
                  href="/apply/volunteers"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Volunteer for HackClaflin 2026"
                >
                  Volunteer
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl font-semibold text-gray-900 tracking-wide uppercase">
              TIME UNTIL HACKCLAFIN
            </h2>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-gray-200 rounded-3xl p-8 shadow-sm bg-white"
            >
              <div className="grid grid-cols-3 gap-12 items-center">
                {/* Days */}
                <div className="text-center">
                  <motion.div
                    key={countdown.days}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold text-gray-900 mb-3"
                  >
                    {countdown.days}
                  </motion.div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 font-medium">
                    DAYS
                  </div>
                </div>
                
                {/* Hours */}
                <div className="text-center relative">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-gray-400"
                  >
                    •
                  </motion.span>
                  <motion.div
                    key={countdown.hours}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold text-gray-900 mb-3"
                  >
                    {countdown.hours.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 font-medium">
                    HOURS
                  </div>
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-400"
                  >
                    •
                  </motion.span>
                </div>
                
                {/* Minutes */}
                <div className="text-center">
                  <motion.div
                    key={countdown.minutes}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold text-gray-900 mb-3"
                  >
                    {countdown.minutes.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-xs uppercase tracking-wide text-gray-600 font-medium">
                    MINUTES
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-7xl md:text-8xl font-black mb-6 text-gray-900 tracking-tight">ABOUT</h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </motion.div>

          {/* Mission Statement - Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-10 md:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gray-900"></div>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900">Mission Statement</h3>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-5xl font-medium mb-6">
                HackClaflin is Claflin University's premiere student-led hackathon created to inspire innovation, 
                empower student builders, and bring creative problem-solving to our campus and community.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-5xl">
                We exist to help students of all backgrounds turn ideas into reality.
              </p>
            </div>
          </motion.div>

          {/* Our Story & What Makes Us Different - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-gray-300 pl-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                HackClaflin was born from a vision to show that talent, creativity, and innovation thrive everywhere 
                especially HBCUs. Started by passionate students in 2026, HackClaflin aims to give aspiring developers, 
                designers, and creators a platform to learn, explore new technologies, and build meaningful solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-4 border-gray-300 pl-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Makes Us Different</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                HackClaflin stands out as one of the only large-scale hackathons hosted at an HBCU in South Carolina, 
                with a focus on creativity, community impact, diversity in tech, and real-world problem solving. 
                We emphasize mentorship, collaboration, and beginner-friendly support.
              </p>
            </motion.div>
          </div>

          {/* Our Values - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Our Values</h3>
              <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🚀', title: 'Innovation', desc: 'We believe creativity and technology can solve real problems.' },
                { icon: '🤝', title: 'Collaboration', desc: 'Teams grow faster when they build together.' },
                { icon: '🌍', title: 'Inclusion', desc: 'Beginners welcome. All majors welcome. Everyone has a place here.' },
                { icon: '💡', title: 'Learning', desc: 'Workshops, mentors, and hands-on building for all skill levels.' },
                { icon: '🔥', title: 'Impact', desc: 'We encourage projects that uplift communities and change lives.' }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, shadow: 'lg' }}
                  className="p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-gray-400 hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Happens at HackClaflin - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gray-50 rounded-2xl p-10 md:p-12 border-2 border-gray-200">
              <h3 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 text-center">What Happens at HackClaflin</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: '⏰', text: '48 hours of building' },
                  { icon: '🤝', text: 'Networking with mentors' },
                  { icon: '🎓', text: 'Hands-on workshops' },
                  { icon: '🍕', text: 'Free food + snacks' },
                  { icon: '🏆', text: 'Prizes & swag' },
                  { icon: '🎤', text: 'Pitching to judges' },
                  { icon: '🎉', text: 'Closing ceremony' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-lg font-medium text-gray-900">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Who Can Join & Why We Do This - Side by Side */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who Can Join?</h3>
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-900 mb-4">HackClaflin welcomes:</p>
                <div className="space-y-3">
                  {[
                    'Students from any school',
                    'All majors and disciplines',
                    'Beginners with zero coding experience',
                    'Developers, designers, entrepreneurs, and creators'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gray-900 mt-1">✓</span>
                      <span className="text-lg text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why We Do This</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every student deserves the opportunity to explore technology, express their creativity, 
                and discover their potential. HackClaflin is more than a competition, it's a movement to build 
                the next generation of innovators at Claflin University and beyond.
              </p>
            </motion.div>
          </div>

          {/* Flyer Image - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-200 rounded-2xl opacity-50"></div>
              <img 
                src="/hackclaflin-flyers.jpg" 
                alt="HackClaflin Flyers" 
                className="relative w-full max-w-3xl rounded-xl shadow-2xl border-4 border-gray-900"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Call to Action - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gray-900 rounded-2xl p-12 md:p-16"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">Ready to build something unforgettable?</h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium">Join us at HackClaflin 2026.</p>
            <a
              href="/apply"
              className="inline-block px-12 py-5 bg-white text-gray-900 font-bold text-xl hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">PRIZES</h2>
            <p className="text-gray-700 text-lg">Win amazing prizes and opportunities!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-12 rounded-xl border-2 border-gray-400 bg-gray-50">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Prizes Will Be Announced Soon
              </h3>
              <p className="text-gray-700 text-lg mb-2">Stay tuned for exciting prize announcements!</p>
              <p className="text-gray-600 text-sm">We're working on amazing rewards for our participants</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">SPEAKERS</h2>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block p-12 rounded-xl border-2 border-gray-400 bg-gray-50">
                <div className="text-6xl mb-4">🎤</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Speakers Will Be Announced Soon
                </h3>
                <p className="text-gray-700 text-lg mb-2">We're lining up amazing speakers</p>
                <p className="text-gray-600 text-sm">Stay tuned for announcements!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">SCHEDULE</h2>
            <p className="text-gray-700 text-lg">April 17 - 19, 2026</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {scheduleDays.map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 rounded-xl border-2 border-gray-300 bg-gray-50 hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {day.title}
                </h3>
                <ul className="space-y-2">
                  {day.bullets.map((bullet, j) => (
                    <li key={j} className="text-gray-700 flex items-start gap-2">
                      <span className="text-gray-900 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-4 text-gray-900">FAQ</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <img 
              src="/hackclaflin-logo-only.png" 
              alt="HackClaflin 2026 Logo" 
              className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              onError={(e) => e.target.style.display = 'none'}
            />
          </motion.div>
          <p className="text-gray-700 mb-4">
            © 2026 HackClaflin • Built with ❤️ for Panthers
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <a href="mailto:team@hackclaflin.org" className="hover:text-gray-900 transition-colors">
              team@hackclaflin.org
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Site uses accessible colors and keyboard-friendly navigation.
          </p>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-xl border-2 border-gray-300 bg-gray-50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 10).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-lg text-gray-900">{question}</span>
        <span className={`text-gray-700 text-2xl transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          ▼
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
          id={`faq-answer-${question.slice(0, 10).replace(/\s/g, '-')}`}
          role="region"
          aria-labelledby={`faq-question-${question.slice(0, 10).replace(/\s/g, '-')}`}
        >
          <div className="px-6 pb-6 text-gray-700 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </div>
  )
}

