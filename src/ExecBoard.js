import React from 'react';
  
  const ExecTeam = () => {
    const execMembers = [
      { name: 'Mihika Guntur', position: 'President', imgSrc: './mihika.jpg' },
      { name: 'Divija Mudumbai', position: 'Co-Exec Vice President', imgSrc: './divija.jpg' },
      { name: 'Hussain Mahuvawala', position: 'Co-Exec Vice President', imgSrc: './hussain.jpg' },
      { name: 'Ayaan Dhir', position: 'VP of Professional Development', imgSrc: './ayaan.jpg' },
      { name: 'Meghana Burugupalli', position: 'VP of Technology', imgSrc: './meghana.jpg' },
      { name: 'Christian Mccormick', position: 'VP of External Affairs', imgSrc: './christian.jpg' },
      { name: 'Ritika Ramnani', position: 'Co-VP of Marketing', imgSrc: './ritika.jpg' },
      { name: 'Sheryl Gupta', position: 'Co-VP of Marketing', imgSrc: './sheryl.jpg' },
      { name: 'Sudaay Chaloo', position: 'VP of Internal Affairs', imgSrc: './sudaay.jpg' },
      { name: 'Matt Ayabe', position: 'VP of Engagement', imgSrc: './matt.jpg' },
      { name: 'Kyle King', position: 'VP of Finance', imgSrc: './kyle.jpg' }
    ];
  
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Executive Team</h1>
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
