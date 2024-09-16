import React from 'react';

const Interns = () => {
  const internMembers = [
    { name: "Roshan Raj", position: "Tech Intern", image: "/roshan.jpeg" },
  ];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Interns</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {internMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.image} alt={member.name} className="h-40 w-40 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-xl text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interns;
