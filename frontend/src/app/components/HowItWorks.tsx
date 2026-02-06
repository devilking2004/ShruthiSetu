import { motion } from 'motion/react';
import { Mic, Video, Database, FolderOpen, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Village elders share wisdom',
    description: 'Community members and elders share their knowledge through interviews'
  },
  {
    icon: Video,
    title: 'Audio/video recorded',
    description: 'Stories and practices are carefully documented'
  },
  {
    icon: Database,
    title: 'Knowledge digitized',
    description: 'Content is transcribed and digitally preserved'
  },
  {
    icon: FolderOpen,
    title: 'Categorized and stored',
    description: 'Organized by region, topic, and cultural context'
  },
  {
    icon: Share2,
    title: 'Shared with generations',
    description: 'Made accessible to communities worldwide'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Merriweather, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#3A5A40'
            }}
          >
            How Shruthi Sethu Works
          </h2>
          <p style={{ color: '#7A5C42', fontSize: '1.125rem' }}>
            A simple process to preserve invaluable knowledge
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
              style={{ 
                background: 'linear-gradient(to right, #81B29A, #3A5A40)',
                opacity: 0.3
              }}
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10"
                      style={{ 
                        background: 'linear-gradient(135deg, #81B29A, #3A5A40)',
                        border: '4px solid #F5EFE6'
                      }}
                    >
                      <step.icon className="w-10 h-10" style={{ color: '#F5EFE6' }} />
                    </motion.div>
                    
                    <h3 
                      className="mb-2"
                      style={{
                        fontFamily: 'Merriweather, serif',
                        color: '#3A5A40'
                      }}
                    >
                      {step.title}
                    </h3>
                    
                    <p style={{ color: '#7A5C42', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #81B29A, #3A5A40)' }}
              >
                <step.icon className="w-8 h-8" style={{ color: '#F5EFE6' }} />
              </div>
              
              <div className="flex-1">
                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'Merriweather, serif',
                    color: '#3A5A40'
                  }}
                >
                  {step.title}
                </h3>
                
                <p style={{ color: '#7A5C42', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}