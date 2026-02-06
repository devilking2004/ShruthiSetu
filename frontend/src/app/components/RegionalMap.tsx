import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const regions = [
  { name: 'North India', practices: 'Wheat farming, Folk songs', top: '20%', left: '45%' },
  { name: 'South India', practices: 'Rice cultivation, Classical arts', top: '65%', left: '50%' },
  { name: 'East India', practices: 'Terracotta crafts, Tribal wisdom', top: '45%', left: '70%' },
  { name: 'West India', practices: 'Textile arts, Desert farming', top: '40%', left: '25%' },
  { name: 'Central India', practices: 'Forest knowledge, Tribal medicine', top: '48%', left: '50%' }
];

export function RegionalMap() {
  return (
    <section id="regions" className="py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
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
            Regional Wisdom Map
          </h2>
          <p style={{ color: '#7A5C42', fontSize: '1.125rem' }}>
            Diverse knowledge from every corner of India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#F5EFE6' }}>
            {/* Map Background */}
            <div className="relative h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546833998-07256bcc76ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMG1hcCUyMGN1bHR1cmV8ZW58MXx8fHwxNzY3MDgxNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="India cultural map"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(129, 178, 154, 0.7), rgba(168, 218, 220, 0.7))'
                }}
              />

              {/* Region Pins */}
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="absolute group cursor-pointer"
                  style={{ top: region.top, left: region.left }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: '#E07A5F' }}
                    >
                      <MapPin className="w-6 h-6" style={{ color: '#F5EFE6' }} />
                    </div>

                    {/* Tooltip */}
                    <div 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                      style={{ backgroundColor: '#ffffff', border: '2px solid #81B29A' }}
                    >
                      <p style={{ color: '#3A5A40', fontFamily: 'Merriweather, serif' }}>
                        {region.name}
                      </p>
                      <p style={{ color: '#7A5C42', fontSize: '0.875rem' }}>
                        {region.practices}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8" style={{ color: '#7A5C42', fontStyle: 'italic' }}>
            Hover over the pins to explore regional knowledge
          </p>
        </motion.div>
      </div>
    </section>
  );
}