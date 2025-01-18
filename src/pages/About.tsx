import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {/* Passionate about creating Responsive and functional digital experiences */}
            Passionate about creating responsive digital experiences and exploring the power of Artificial Intelligence.
             
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="src\pages\sanjay-pic.jpg"
              alt="Profile"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hi, I'm Sanjay Nalamasa</h2>
            <p className="text-muted-foreground">
              With over 1.5 years of experience in web development I specialize in creating
              modern and efficient web applications and love to grow in AI. My passion lies in transforming complex
              problems into simple Good and intuitive solutions.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Java'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
               <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button> 
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;