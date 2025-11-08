import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section1Props {
  heading: string;
  content: string;
  images: string[];
  links: { text: string; href: string }[];
  id: string;
  businessType: string;
  targetAudience: string;
}

const Section1: React.FC<Section1Props> = ({
  heading,
  content,
  images,
  links,
  id,
  businessType,
  targetAudience,
}) => {
  return (
    <div className="bg-brand-3 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cinzel font-bold text-brand-2 mb-6">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="card bg-white shadow-lg">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://via.placeholder.com/150`}
                    alt="Attorney"
                    className="w-20 h-20 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-cinzel font-bold text-brand-2">
                      Attorney {index + 1}
                    </h3>
                    <p className="text-brand-5">Bar Admissions, Credentials</p>
                  </div>
                </div>
                <p className="text-brand-2 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec ultricies lacus, nisl nec ultricies lacus.
                </p>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-primary btn-sm">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;