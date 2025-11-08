import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeroProps {
  heading: string;
  subheading: string;
  fullText: string;
  cta: Array<{
    html: string;
    links: Array<{ text: string; href: string }>;
  }>;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  fullText,
  cta,
  backgroundImage,
}) => {
  return (
    <div
      className="hero min-h-[75vh] bg-brand-3"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={backgroundImage}
          alt="Divorce Attorney"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div className="mr-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-1">
            {heading}
          </h1>
          <p className="py-6 text-xl lg:text-2xl text-brand-2">{subheading}</p>
          <div className="space-y-4">
            <a
              href="#"
              className="btn btn-primary btn-lg normal-case"
            >
              Free Consultation
            </a>
            <a
              href="#"
              className="btn btn-outline btn-lg normal-case"
            >
              Learn More
            </a>
          </div>
          <div className="pt-8 text-brand-2 text-sm">
            <p>{fullText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;