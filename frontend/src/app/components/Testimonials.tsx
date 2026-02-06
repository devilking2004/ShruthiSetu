import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Ramesh Patel',
    location: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1662971640032-ed60396966a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBlbGRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzA4MTczNnww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'This knowledge is our life. Now it will live forever. My grandchildren can learn the farming methods I learned from my father.'
  },
  {
    name: 'Lakshmi Devi',
    location: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1662971640032-ed60396966a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBlbGRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzA4MTczNnww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The herbal remedies my grandmother taught me are now preserved for the whole village. This is a blessing for our community.'
  },
  {
    name: 'Krishna Sharma',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1662971640032-ed60396966a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBlbGRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzA4MTczNnww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Our folk songs tell the stories of our ancestors. Folk Sage ensures these melodies will never be forgotten.'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#F5EFE6' }}>
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
            Voices of the Elders
          </h2>
          <p style={{ color: '#7A5C42', fontSize: '1.125rem' }}>
            Hear from those whose wisdom we preserve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              style={{ 
                backgroundColor: '#ffffff',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%237A5C42" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}
            >
              {/* Quote Icon */}
              <Quote 
                className="absolute top-4 right-4 w-12 h-12 opacity-20" 
                style={{ color: '#81B29A' }}
              />

              {/* Portrait */}
              <div className="flex flex-col items-center mb-6">
                <div 
                  className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-md"
                  style={{ border: '3px solid #81B29A' }}
                >
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 
                  className="mb-1"
                  style={{
                    fontFamily: 'Merriweather, serif',
                    color: '#3A5A40'
                  }}
                >
                  {testimonial.name}
                </h3>
                
                <p style={{ color: '#81B29A', fontSize: '0.9rem' }}>
                  {testimonial.location}
                </p>
              </div>

              {/* Quote */}
              <p 
                className="italic leading-relaxed"
                style={{ 
                  color: '#7A5C42',
                  lineHeight: '1.8'
                }}
              >
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
