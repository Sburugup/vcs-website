import React from 'react';
import { StyledTitle, StyledSubheading } from '../components/ui/StyledComponents';

const WhoWeArePage = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-transparent text-slate-900 py-14 md:py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <StyledTitle>Who We Are</StyledTitle>
      </div>
      <section className="mb-12">
        <StyledSubheading>Vision</StyledSubheading>
        <p className="text-xl mt-4 max-w-[72ch] text-slate-700 leading-relaxed">
          To become the leading student organization at UCI that bridges the gap between academia and
          the venture capital industry, fostering future leaders in deal-sourcing, investments and
          entrepreneurship.
        </p>
      </section>
      <section className="pt-10 border-t border-slate-200">
        <StyledSubheading>Mission</StyledSubheading>
        <p className="text-xl mt-4 max-w-[72ch] text-slate-700 leading-relaxed">
          To educate and empower UCI students by providing practical experience, mentorship,
          collaboration with industry professionals and networking opportunities in the venture capital
          field in Southern California, thereby enhancing their understanding and engagement in the
          private equity ecosystem.
        </p>
      </section>
    </div>
  </div>
));

export default WhoWeArePage;
