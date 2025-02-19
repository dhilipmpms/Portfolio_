import React from 'react';
import { Code2, Database, Cloud, Shield, Terminal, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    icon: Code2,
    items: ['Python', 'C++', 'TypeScript', 'Java'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Frameworks',
    icon: Globe,
    items: ['Django', 'React', 'Node.js', 'Express'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    category: 'Cloud',
    icon: Cloud,
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Security',
    icon: Shield,
    items: ['Penetration Testing', 'Network Security', 'Cryptography', 'Security Auditing'],
    color: 'from-red-500 to-pink-500'
  },
  {
    category: 'DevOps',
    icon: Terminal,
    items: ['Linux', 'Git', 'CI/CD', 'Shell Scripting'],
    color: 'from-indigo-500 to-purple-500'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} mr-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>

                <div className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="text-gray-300 mb-1">{item}</div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} skill-progress`}
                          style={{
                            width: `${85 + Math.random() * 15}%`,
                            animationDelay: `${(index * 4 + itemIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 