import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern technologies.',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'Passionate about leveraging machine learning to solve real-world problems.',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Data Science',
      description: 'Skilled in transforming raw data into actionable insights.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Digital
              <span className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                {' '}
                Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate developer focused on building Responsive interfaces & experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Works in Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in creating modern and efficient solutions for web, and focus on AI...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;