import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ML HUB ',
      description: ' A versatile platform using OpenAI and Groq APIs for AI chat image understanding log analysis text analysis and content moderation.',
      image: 'https://thumbs.dreamstime.com/b/vector-graphic-emblem-hexagon-initials-letter-ml-logo-design-template-vector-graphic-initials-letter-ml-logo-design-template-204621556.jpg',
      tags: ['React', 'Node.js', 'MongoDB',' Python','JavaScript'],
      liveUrl: 'https://cits-project-001.netlify.app/',
      githubUrl: 'https://github.com/sanjaynalamasa/ML-HUB',
    },
    {
      title: 'WANDERLUST - TRAVEL WEBSITE',
      description: 'Developed a travel platform showcasing curated experiences with a responsive user interface',
      image: 'https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Travel-Logo-Graphics-1-36-580x386.jpg',
      tags: [' Node.js', ' Express.js', ' MongoDB', 'EJS'],
      liveUrl: 'https://wanderlust-xgfx.onrender.com/',
      githubUrl: 'https://github.com/sanjaynalamasa',
    },
    {
      title: 'Student Stay - Book Stay Study Repeat.',
      description: 'Find and book affordable student-friendly rooms effortlessly.',
      image: 'https://files.oaiusercontent.com/file-F7e4DSKnzekxZ4D9S3mAC8?se=2025-01-18T16%3A55%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2fe1bebd-70e4-45c0-8223-a169d79a399d.webp&sig=xGXueNhnp4AzKzL6V15aWCQ0E8gYC0YArffpz7d6HHE%3D',
      tags: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
      liveUrl: 'https://studentstay-sanjaynalamasa-sqnc.onrender.com/',
      githubUrl: 'https://github.com/sanjaynalamasa/StudentStay',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;