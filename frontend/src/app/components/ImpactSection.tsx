import { motion } from 'motion/react';
import { Users, BookOpen, Trees, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Village Elders',
    description: 'Contributing their wisdom'
  },
  {
    icon: BookOpen,
    value: '2,000+',
    label: 'Stories Preserved',
    description: 'From across India'
  },
  {
    icon: Trees,
    value: '50+',
    label: 'Regions Covered',
    description: 'Diverse cultural practices'
  },
  {
    icon: Award,
    value: '10,000+',
    label: 'Lives Impacted',
    description: 'Learning sustainable practices'
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-32" style={{ backgroundColor: '#F5EFE6' }}>
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
            Our Growing Impact
          </h2>
          <p style={{ color: '#7A5C42', fontSize: '1.125rem' }}>
            Building a sustainable legacy together
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#ffffff' }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-md"
                style={{ background: 'linear-gradient(135deg, #81B29A, #3A5A40)' }}
              >
                <stat.icon className="w-8 h-8" style={{ color: '#F5EFE6' }} />
              </motion.div>
              
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Merriweather, serif',
                  fontSize: '2.5rem',
                  color: '#3A5A40'
                }}
              >
                {stat.value}
              </h3>
              
              <p 
                className="mb-1"
                style={{ 
                  color: '#7A5C42',
                  fontFamily: 'Merriweather, serif'
                }}
              >
                {stat.label}
              </p>
              
              <p style={{ color: '#81B29A', fontSize: '0.9rem' }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-2xl"
          style={{ 
            backgroundColor: '#ffffff',
            border: '2px solid #81B29A'
          }}
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2,
              delay: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="italic mb-4"
            style={{ 
              color: '#3A5A40',
              fontSize: '1.25rem',
              lineHeight: '1.8',
              fontFamily: 'Merriweather, serif'
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              "The wisdom of yesterday
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              is the sustainability of tomorrow"
            </motion.span>
          </motion.p>
          <p style={{ color: '#7A5C42' }}>
            Every story preserved, every practice documented, and every tradition celebrated contributes to a more sustainable and culturally rich future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}