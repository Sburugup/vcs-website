import React from 'react';
import { motion } from 'framer-motion';
import { StyledTitle, StyledSubheading } from '../components/ui/StyledComponents';

// Company logos
import microsoft from '../assets/membercompanies/microsoft.png';
import lvlupventures from '../assets/membercompanies/lvlupventures.png';
import profitrecovery from '../assets/membercompanies/profitrecovery.png';
import tjbrothers from '../assets/membercompanies/tjbrothers.png';
import bombellii from '../assets/membercompanies/bombellii.png';
import redwoodCollective from '../assets/membercompanies/redwoodcollective.png';

const WhereWeGoPage = React.forwardRef((props, ref) => {
  const companyLogos = [
    { logo: microsoft, link: 'https://www.microsoft.com/en-us/'},
    { logo: lvlupventures, link: 'https://www.lvlup.vc/'},
    { logo: profitrecovery, link: 'https://prpllc.com/'},
    { logo: tjbrothers, link: 'https://www.tjbrothers.com/'},
    { logo: bombellii, link: 'https://web.virtualinternships.com/company-profile/bombellii-ventures-2e771e2c'},
    { logo: redwoodCollective, link: 'https://www.redwoodcollective.net/'}
  ];

  return (
    <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <StyledTitle>Where We Go</StyledTitle>
        </div>
        <div className="mb-12">
          <StyledSubheading>Our Alumni Success Stories</StyledSubheading>
          <p className="text-xl mt-4 mb-12">
            Our members have gone on to successful careers at top venture capital firms, startups, and technology companies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {companyLogos.map((company, index) => (
              <motion.a
                key={index}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center justify-center h-32"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={company.logo} 
                  alt="Company logo" 
                  className="max-h-24 max-w-full object-contain" 
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default WhereWeGoPage;
