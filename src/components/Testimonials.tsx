import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  case: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Michael R.",
      location: "St. Petersburg, FL",
      rating: 5,
      text: "Alan Rosenthal fought tirelessly for my parental rights. His compassionate approach made all the difference during the most difficult time of my life. I got fair custody and my kids are thriving.",
      case: "Child Custody"
    },
    {
      name: "David L.",
      location: "Tampa, FL",
      rating: 5,
      text: "Professional, aggressive when needed, but always accessible. Alan's expertise in men's divorce issues saved me thousands in alimony and protected my assets. Highly recommend!",
      case: "Divorce & Property Division"
    },
    {
      name: "James W.",
      location: "Clearwater, FL",
      rating: 5,
      text: "After my ex violated our custody agreement repeatedly, Alan helped me with contempt proceedings. His dedication and knowledge of family law got results quickly.",
      case: "Contempt Proceedings"
    },
    {
      name: "Robert S.",
      location: "Pinellas Park, FL",
      rating: 5,
      text: "Outstanding attorney who truly understands what men go through in divorce. Alan's 25+ years of experience showed in every aspect of my case. Worth every penny.",
      case: "Contested Divorce"
    },
    {
      name: "Steven M.",
      location: "St. Petersburg, FL",
      rating: 5,
      text: "Alan helped me establish paternity and secure my rights as a father. His guidance through the legal process was invaluable. Professional and results-driven.",
      case: "Paternity Action"
    },
    {
      name: "Christopher T.",
      location: "Tampa Bay Area",
      rating: 5,
      text: "When I needed to modify child support due to job loss, Alan worked with me to present a strong case. His understanding of men's financial challenges is exceptional.",
      case: "Support Modification"
    }
  ];

  const trustSignals = [
    {
      icon: (
        <svg className="w-12 h-12 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      title: "25+ Years",
      subtitle: "Experience Since 1998"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Specialized",
      subtitle: "Focus on Men's Rights"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Tampa Bay",
      subtitle: "Local Expertise"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Available 24/7",
      subtitle: "When You Need Us"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Trust Signals */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-law-navy text-center mb-16">
            Why Choose Rosenthal Law Group?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-200"
              >
                <div className="flex justify-center mb-4">
                  {signal.icon}
                </div>
                <h3 className="text-2xl font-bold text-law-navy mb-2">
                  {signal.title}
                </h3>
                <p className="text-slate-600 font-medium">
                  {signal.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-law-navy mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from men who trusted us to protect their rights and secure their future. 
              Read how our compassionate, aggressive, and dedicated approach made the difference.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-law-blue to-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-law-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-law-blue text-white text-xs px-3 py-1 rounded-full font-medium">
                        {testimonial.case}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-law-navy mb-6">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let us put our 25+ years of experience to work for you. Contact us today for 
            a free consultation and learn how we can protect your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(727)347-2299"
              className="btn btn-primary bg-law-blue hover:bg-law-navy border-law-blue hover:border-law-navy text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (727) 347-2299
            </a>
            <a
              href="/free-consultation"
              className="btn btn-outline border-law-blue text-law-blue hover:bg-law-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;