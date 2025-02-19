import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden glass p-2">
                  <img
                    src="./img/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-6 animate-fade-in">
              <p className="text-lg text-gray-300">
                {/* Hi! I'm a passionate Full Stack Developer with a keen interest in cybersecurity and cloud computing. Currently pursuing my Master's in Computer Science, I love building secure and scalable applications that make a difference. */}
                I’m a second-year MSc student in software engineering with a strong foundation in Python and Django for backend development. Proficient in HTML, CSS, Git, and GitHub, I thrive on solving problems efficiently. As a full-time Linux user, I contribute to open-source communities and use Bash for automation. Passionate about exploring new technologies, I aim to contribute to innovative projects.              </p>
              
              <p className="text-lg text-gray-300">
                With experience in both frontend and backend development, I specialize in creating robust applications using modern technologies. I'm constantly learning and exploring new technologies to stay at the forefront of the ever-evolving tech landscape.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Education</h3>
                <div className="glass rounded-lg p-4">
                  <p className="font-medium">Master of Science in Software Engineering </p>
                  <p className="text-gray-400">Annamalai University • 2025 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
