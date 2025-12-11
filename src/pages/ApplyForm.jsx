import React from 'react'

export default function ApplyForm() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-300" role="navigation" aria-label="Application page navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity" aria-label="Go to homepage">
            <img 
              src="/hackclaflin-logo-only.png" 
              alt="HackClaflin 2026 Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-xl md:text-2xl font-bold text-gray-900">
              HackClaflin 2026
            </div>
          </a>
          <a 
            href="/"
            className="px-4 py-2 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Return to homepage"
          >
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Form Container */}
      <div className="relative w-full bg-white" style={{ height: 'calc(100vh - 73px)' }}>
        <iframe 
          src="https://tally.so/r/wv76z4" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0" 
          title="2026 Hacker Application Form"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          allow="clipboard-write"
          aria-label="HackClaflin 2026 Hacker Application Form"
        />
      </div>
    </div>
  )
}

