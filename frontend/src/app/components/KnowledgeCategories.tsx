import { motion } from 'motion/react';
import { Sprout, Leaf, Music, Palette, Recycle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    icon: Sprout,
    title: 'Traditional Agriculture',
    description: 'Ancient farming techniques and sustainable crop practices passed down through generations.',
    image: 'https://images.unsplash.com/photo-1763809678213-97186cb95ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFncmljdWx0dXJlJTIwZmllbGRzfGVufDF8fHx8MTc2NzA4MTczNHww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'linear-gradient(135deg, #81B29A 0%, #3A5A40 100%)'
  },
  {
    icon: Leaf,
    title: 'Herbal & Home Remedies',
    description: 'Natural healing methods and medicinal plant knowledge from village healers.',
    image: 'https://images.unsplash.com/photo-1659328376647-52ec39d1a5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtZWRpY2luZSUyMHBsYW50c3xlbnwxfHx8fDE3NjY5OTYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'linear-gradient(135deg, #A8DADC 0%, #81B29A 100%)'
  },
  {
    icon: Music,
    title: 'Folk Arts & Stories',
    description: 'Traditional songs, dances, and oral histories that carry cultural identity.',
    image: 'https://images.unsplash.com/photo-1606722575380-fd7ec1c76afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xrJTIwYXJ0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNjcwODE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'linear-gradient(135deg, #E07A5F 0%, #7A5C42 100%)'
  },
  {
    icon: Palette,
    title: 'Rural Crafts & Skills',
    description: 'Artisanal craftsmanship and handmade techniques unique to each region.',
    image: 'https://images.unsplash.com/photo-1765706836698-e94f87232cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGNyYWZ0cyUyMGhhbmRtYWRlfGVufDF8fHx8MTc2NzA4MTczNXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'linear-gradient(135deg, #7A5C42 0%, #3A5A40 100%)'
  },
  {
    icon: Recycle,
    title: 'Sustainable Living',
    description: 'Eco-friendly practices and zero-waste lifestyles from rural communities.',
    image: 'https://images.unsplash.com/photo-1661328992824-1c1920893d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxpdmluZyUyMG5hdHVyZXxlbnwxfHx8fDE3NjcwNzM0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'linear-gradient(135deg, #81B29A 0%, #A8DADC 100%)'
  }
];

export function KnowledgeCategories() {
  return (
    <section id="knowledge" className="py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
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
            Wisdom Categories
          </h2>
          <p style={{ color: '#7A5C42', fontSize: '1.125rem' }}>
            Explore the diverse knowledge preserved from villages across India
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ backgroundColor: '#F5EFE6' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: category.gradient, opacity: 0.7 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
                  style={{ background: category.gradient }}
                >
                  <category.icon className="w-7 h-7" style={{ color: '#F5EFE6' }} />
                </div>
                
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: 'Merriweather, serif',
                    color: '#3A5A40'
                  }}
                >
                  {category.title}
                </h3>
                
                <p style={{ color: '#7A5C42', lineHeight: '1.6' }}>
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}