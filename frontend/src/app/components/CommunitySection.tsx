import { motion } from "motion/react";
import { Users, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CommunitySection() {
  const scrollToContribute = () => {
    const el = document.getElementById("contribute");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="community" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599668234-68f52db62425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Community planting tree together"
                className="w-full h-auto"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(129,178,154,0.3), rgba(58,90,64,0.5))",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-[#81B29A]" />
              <h2
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#3A5A40",
                }}
              >
                Join Our Community
              </h2>
            </div>

            <div className="space-y-4 mb-8 text-[#7A5C42] leading-8">
              <p>
                Folk Sage is more than a platform—it's a growing community of
                knowledge keepers, learners, and cultural enthusiasts united by a
                common purpose.
              </p>
              <p>
                Whether you're an elder with stories to share, a researcher
                documenting traditions, or someone curious about their roots,
                there's a place for you here.
              </p>
              <p>
                Together, we plant the seeds of wisdom that will grow into a
                forest of knowledge for generations to come.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* 🔥 Share button scrolls to contribute form */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContribute}
                className="px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#E07A5F",
                  color: "#F5EFE6",
                }}
              >
                <Heart className="w-5 h-5" />
                Share Your Village Wisdom
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full transition-all duration-300"
                style={{
                  border: "2px solid #3A5A40",
                  color: "#3A5A40",
                  backgroundColor: "transparent",
                }}
              >
                Become a Volunteer
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
