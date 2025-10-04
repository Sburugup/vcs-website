import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from 'lucide-react';

// Board Members
import mihikaImg from '../../assets/board/mihika.png';
import mattImg from '../../assets/board/matt.png';
import sudaayImg from '../../assets/board/sudaay.png';
import jasonImg from '../../assets/board/jason.png';
import yashImg from '../../assets/board/yash.png';
import tejasviniImg from '../../assets/board/tejasvini.png';
import andrewImg from '../../assets/board/andrew.png';
import darshanImg from '../../assets/board/darshan.png';
import anirudhImg from '../../assets/board/anirudh.png';
import sanskritiImg from '../../assets/board/sanskriti.png';

const ExecTeam = () => {
  const execMembers = [
    { name: 'Mihika Guntur', position: 'President', image: mihikaImg, linkedin: 'https://www.linkedin.com/in/mihika-guntur/'},
    { name: 'Matt Ayabe', position: 'Vice President', image: mattImg, linkedin: 'https://www.linkedin.com/in/mattayabe'},
    { name: 'Sudaay Chaloo', position: 'VP of Finance', image: sudaayImg, linkedin: 'https://www.linkedin.com/in/sudaaychaloo/'},
    
    { name: 'Jason Nguyen', position: 'VP of Technology', image: jasonImg, linkedin: 'https://https://www.linkedin.com/in/jasonnguyen1331/'}, 
    { name: 'Yash Patel', position: 'VP of Technology', image: yashImg, linkedin: 'https://www.linkedin.com/in/yash-patel-775aaa22a/'}, 
    { name: 'Tejasvini Ramesh', position: 'Co-VP of Marketing', image: tejasviniImg, linkedin: 'https://www.linkedin.com/in/tejasviniramesh/'},

    { name: 'Andrew Do', position: 'Co-VP of Marketing', image: andrewImg, linkedin: 'https://www.linkedin.com/in/andrew-do1/'}, 
    { name: 'Darshan Golccha', position: 'VP of External Affairs', image: darshanImg, linkedin: 'https://www.linkedin.com/in/tecxbro/'},
    { name: 'Anirudh Mandala', position: 'VP of Internal Affairs', image: anirudhImg, linkedin: 'https://www.linkedin.com/in/anirudhkumarmandala/'}, 

    { name: 'Sanskriti Singh', position: 'VP of Professional Development', image: sanskritiImg, linkedin: 'https://www.linkedin.com/in/sanskriti-singh-792a00247/'},
  ];

  return (
    <div className="container mx-auto pt-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Executive Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {execMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={member.image} alt={member.name} className="h-40 w-40 rounded-full mx-auto mb-4 border-4 border-yellow-400" />
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              {member.linkedin && (
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
            </div>
            <p className="text-xl text-yellow-400">{member.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExecTeam;
