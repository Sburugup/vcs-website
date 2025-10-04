import React from 'react';
import { StyledTitle, StyledSubheading } from '../components/ui/StyledComponents';

const WhatWeDoPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="min-h-screen bg-purple-900 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <StyledTitle>What We Do</StyledTitle>
      </div>
      <div className="mb-12">
        <StyledSubheading>Strategies</StyledSubheading>
        <ul className="list-disc list-outside text-xl mt-4 pl-5 space-y-4">
          <li>Education and Training: Offer comprehensive workshops, seminars, and simulations to
          teach students the fundamentals of venture capital and startup investment.</li>
          <li>Partnership Development: Build strong relationships with local venture capital firms,
          investors, and industry professionals to provide valuable insights and opportunities for
          our members.</li>            
          <li>Practical Experience: Facilitate hands-on projects and internships that allow students to
          apply their knowledge in real-world scenarios.</li>
          <li>Inclusive Growth: Establish a two-tier committee system to include both experienced
          members and newcomers, ensuring continuous learning and development for all
          participants.</li>
        </ul>
      </div>
      <div>
        <StyledSubheading>Goals</StyledSubheading>
        <ul className="list-disc list-outside text-xl mt-4 pl-5 space-y-4">
          <li>Educate at least 30 students quarterly on venture capital and investment strategies.</li>
          <li>Form partnerships with at least 5 local venture capital firms and industry experts.</li>
          <li>Conduct 4-7 educational workshops and practical simulations each quarter.</li>
          <li>Develop a pipeline of talent through our Learning Development Team, transitioning them
          to the Executive Board as they gain experience.</li>
        </ul>
      </div>
    </div>
  </div>
));

export default WhatWeDoPage;
