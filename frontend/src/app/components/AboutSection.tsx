import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: '#F5EFE6' }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'Merriweather, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#3A5A40'
              }}
            >
              About Shruthi Sethu
            </h2>
            
            <div className="space-y-4" style={{ color: '#7A5C42', lineHeight: '1.8' }}>
              <p>
                Shruthi Sethu (ಶ್ರುತಿ ಸೇತು) is a heartfelt mission to preserve the invaluable wisdom of our elders and rural communities. The name embodies our purpose: "Shruthi" represents the ancient oral traditions and sacred knowledge, while "Sethu" means bridge—connecting generations through digital preservation.
              </p>
              <p>
                For generations, indigenous knowledge has been passed down through stories, songs, and daily practices. Today, we digitize and safeguard this heritage, ensuring that the sustainable living practices, traditional remedies, and cultural arts of our villages live on for future generations.
              </p>
              <p>
                We believe that the wisdom rooted in our soil holds the answers to many modern challenges. By bridging the gap between tradition and technology, we create a sacred bridge that honors the past while nurturing the future—where ancient sages meet the digital generation.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: '#ffffff' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1674993657201-bb3474f8a0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlciUyMHN0b3J5dGVsbGluZyUyMHRyZWV8ZW58MXx8fHwxNzY3MDgxNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elder telling stories under a tree"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative element */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10"
              style={{ backgroundColor: '#A8DADC', opacity: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}