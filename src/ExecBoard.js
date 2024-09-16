import React from 'react';
  
  const ExecTeam = () => {
    const execMembers = [
      { name: 'Mihika Guntur', position: 'President', image: '/mihika.png' },
      { name: 'Divija Mudumbai', position: 'Co-Exec Vice President', image: './divija.png' },
      { name: 'Hussain Mahuvawala', position: 'Co-Exec Vice President', image: './hussain.png' },
      { name: 'Ayaan Dhir', position: 'VP of Professional Development', image: './ayaan.jpg' },
      { name: 'Meghana Burugupalli', position: 'VP of Technology', image: './meghana.jpg' },
      { name: 'Christian Mccormick', position: 'VP of External Affairs', image: './christian.png' },
      { name: 'Ritika Ramnani', position: 'Co-VP of Marketing', image: './ritika.jpg' },
      { name: 'Sheryl Gupta', position: 'Co-VP of Marketing', image: './sheryl.jpg' },
      { name: 'Sudaay Chaloo', position: 'VP of Internal Affairs', image: './sudaay.jpeg' },
      { name: 'Matt Ayabe', position: 'VP of Engagement', image: './matt.jpg' },
      { name: 'Kyle King', position: 'VP of Finance', image: './kyle.jpg' }
    ];
  
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Executive Board</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {execMembers.map((member, index) => (
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
  
  export default ExecTeam;
