import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Library Management Project',
    description: 'A full-stack library management system with real-time book tracking, user management, and Excel data integration.',
    image: 'img/library.jpg',
    technologies: ['Django', 'JavaScript', 'Sqlite', 'HTML/CSS'],
    github: 'https://github.com/dhilipmpms/Library_management_system',
    demo: 'https://demo.com'
  },
  {
    title: 'Cybersecurity Dashboard',
    description: 'A simple Android app to  make cybersecurity awareness for people by enabling permission while installing a Application.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    technologies: ['Java',],
    github: 'https://github.com/dhilipmpms/hack.io',
    demo: 'https://dhilipmpms.github.io/hack.io/'
  },
  {
    title: 'Cloud Management Tool',
    description: 'A comprehensive cloud resource management tool supporting multiple cloud providers.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    technologies: ['TypeScript', 'React', 'AWS SDK', 'Azure SDK'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-purple-500/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm glass rounded-full text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;