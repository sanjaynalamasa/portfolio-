import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-muted-foreground">
              {/* Building digital experiences with passion and precision. */}
              I am a passionate developer always seeking to learn grow and evolve with every challenge I face.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Works</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Machine Learning</li>
              <li className="text-muted-foreground">Data Science</li>
              <li className="text-muted-foreground">Development</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/sanjaynalamasa" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/sanjay_nalamasa" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/sanjay-nalamasa/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:sanjaynalamasa07@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
           
            <p> Built by Sanjay Nalamasa 💻 for design of tomorrow bro.</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;