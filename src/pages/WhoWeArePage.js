import React from 'react';
import { StyledTitle, StyledSubheading } from '../components/ui/StyledComponents';

const WhoWeArePage = React.forwardRef((props, ref) => (
  <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <StyledTitle>Who We Are</StyledTitle>
      </div>
      <div className="mb-12">
        <StyledSubheading>Vision</StyledSubheading>
        <p className="text-xl mt-4">
          To become the leading student organization at UCI that bridges the gap between academia and
          the venture capital industry, fostering future leaders in deal-sourcing, investments and
          entrepreneurship.
        </p>
      </div>
      <div>
        <StyledSubheading>Mission</StyledSubheading>
        <p className="text-xl mt-4">
          To educate and empower UCI students by providing practical experience, mentorship,
          collaboration with industry professionals and networking opportunities in the venture capital
          field in Southern California, thereby enhancing their understanding and engagement in the
          private equity ecosystem.
        </p>
      </div>
    </div>
  </div>
));

export default WhoWeArePage;
