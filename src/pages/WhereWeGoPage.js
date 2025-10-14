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
import nirman from '../assets/membercompanies/nirman.png';
import halogen from '../assets/membercompanies/halogen.png';
import unitedhealth from '../assets/membercompanies/unitedhealth.png';
import ibm from '../assets/membercompanies/ibm.png';
import tcaventure from '../assets/membercompanies/tcaventure.png';
import gcp from '../assets/membercompanies/gcp.png';
import boeing from '../assets/membercompanies/boeing.png';
import aws from '../assets/membercompanies/aws.png';
import sap from '../assets/membercompanies/sap.png';
import mdb from '../assets/membercompanies/mdb.png';
import deloitte from '../assets/membercompanies/deloitte.png';

const WhereWeGoPage = React.forwardRef((props, ref) => {
  const companyLogos = [
    { logo: microsoft, link: 'https://www.microsoft.com/en-us/'},
    { logo: lvlupventures, link: 'https://www.lvlup.vc/'},
    { logo: profitrecovery, link: 'https://prpllc.com/'},
    { logo: tjbrothers, link: 'https://www.tjbrothers.com/'},
    { logo: bombellii, link: 'https://web.virtualinternships.com/company-profile/bombellii-ventures-2e771e2c'},
    { logo: redwoodCollective, link: 'https://www.redwoodcollective.net/'},
    { logo: nirman, link: "https://www.nirman.vc/"},
    { logo: halogen, link: "https://halogenvc.com/"},
    { logo: unitedhealth, link: "https://www.unitedhealthgroup.com/"},
    { logo: ibm, link: "https://www.ibm.com/us-en"},
    { logo: tcaventure, link: "https://tcaventuregroup.com/"},
    { logo: gcp, link: "https://www.gcpcapital.com/"},
    { logo: boeing, link: "https://www.boeing.com/"},
    { logo: aws, link: "https://aws.amazon.com/what-is-aws/?trk=d3b0f617-ecd4-42db-b5c2-23a90ee8907b&sc_channel=ps&ef_id=CjwKCAjwxrLHBhA2EiwAu9EdMxwQSpv1IUMcphf5i1a738D1alUFXnAdoBTpT6LKmrNtCvu2ZfKJphoCuE4QAvD_BwE:G:s&s_kwcid=AL!4422!3!651751059777!e!!g!!amazon%20web%20services!19852662197!145019195737&gad_campaignid=19852662197&gbraid=0AAAAADjHtp93dHzxl7xdZrsmSdyNw983n&gclid=CjwKCAjwxrLHBhA2EiwAu9EdMxwQSpv1IUMcphf5i1a738D1alUFXnAdoBTpT6LKmrNtCvu2ZfKJphoCuE4QAvD_BwE"},
    { logo: sap, link: "https://www.sap.com/index.html"},
    { logo: mdb, link: "https://www.mdb.com/"},
    { logo: deloitte, link: "https://www.deloitte.com/us/en.html"}
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
