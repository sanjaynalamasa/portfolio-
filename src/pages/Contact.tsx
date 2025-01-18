import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, MessageSquare, Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">sanjaynalamasa07@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Social Media</h3>
                <p className="text-muted-foreground">Find me on Twitter, LinkedIn, or GitHub</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  {...register('name', { required: true })}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register('message', { required: true })}
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;