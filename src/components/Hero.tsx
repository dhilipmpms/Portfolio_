import React from 'react';
import { Github as GitHub, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="relative group">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass p-2 transition-transform duration-500 ease-out transform group-hover:scale-105">
              <img
                src="public/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />
          </div>

          <div className="text-center w-full max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dhilip
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & FOSS Enthusiast
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <a href="https://github.com/dhilipmpms" target="_blank" rel="noopener noreferrer" 
                 className="p-2 glass rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <GitHub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 glass rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://dhilipmpms@gmail.com"
                 className="p-2 glass rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <a href="/resume.pdf" download
               className="inline-flex items-center px-6 py-3 glass rounded-full hover:bg-purple-500/20 transition-all duration-300 group">
              <FileText className="w-5 h-5 mr-2" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;