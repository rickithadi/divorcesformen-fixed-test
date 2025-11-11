import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
            Meet Attorney Alan Rosenthal
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Watch Attorney Alan Rosenthal explain how he protects men's rights in divorce proceedings. 
            With over 25 years of experience, he understands the unique challenges men face and 
            provides aggressive, compassionate representation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-law-blue to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Video Header */}
            <div className="bg-gradient-to-r from-law-navy to-law-blue px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Divorce for Men - Legal Consultation
                  </h3>
                  <p className="text-blue-100">
                    Understanding Your Rights and Legal Options
                  </p>
                </div>
              </div>
            </div>

            {/* Video Iframe */}
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MGPhZUJJPLw?rel=0&showinfo=0&modestbranding=1"
                title="Divorce for Men - Attorney Alan Rosenthal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Footer */}
            <div className="p-8 bg-slate-50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-law-navy mb-4">
                    Ready to Discuss Your Case?
                  </h4>
                  <p className="text-slate-600 mb-6">
                    After watching the video, take the next step. Contact us today for a confidential 
                    consultation to discuss your specific situation and legal options.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>25+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Free Consultation</span>
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:(727)347-2299"
                      className="btn btn-primary bg-law-blue hover:bg-law-navy border-law-blue hover:border-law-navy text-white px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call (727) 347-2299
                    </a>
                    <a
                      href="/free-consultation"
                      className="btn btn-outline border-law-blue text-law-blue hover:bg-law-blue hover:text-white px-6 py-3 text-lg font-semibold rounded-full transition-all duration-200"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    Available 24/7 • Confidential • No Obligation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-law-blue to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-law-navy mb-2">Expert Legal Knowledge</h3>
            <p className="text-slate-600">Specialized expertise in Florida family law and men's rights in divorce proceedings.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-law-blue to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-law-navy mb-2">Personal Attention</h3>
            <p className="text-slate-600">Direct access to Attorney Rosenthal with personalized strategies for your unique situation.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-law-blue to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-law-navy mb-2">Proven Results</h3>
            <p className="text-slate-600">Track record of successful outcomes protecting fathers' rights and financial interests.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;