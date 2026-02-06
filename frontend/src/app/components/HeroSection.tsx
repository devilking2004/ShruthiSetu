import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToContribute = () => {
    const el = document.getElementById("contribute");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1715408450679-4511620ca78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Indian village at sunrise"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(245,239,230,0.85) 0%, rgba(129,178,154,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="mb-6 px-4"
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1.2",
              color: "#3A5A40",
            }}
          >
            Preserving the Wisdom of Our Roots
          </h1>

          <p
            className="max-w-3xl mx-auto mb-12 px-4"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              lineHeight: "1.7",
              color: "#7A5C42",
            }}
          >
            A digital bridge between generations, safeguarding indigenous
            knowledge for a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Explore button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#81B29A",
                color: "#F5EFE6",
              }}
            >
              Explore Village Wisdom
            </motion.button>

            {/* 🔥 Contribute Knowledge scrolls to form */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContribute}
              className="px-8 py-4 rounded-full transition-all duration-300"
              style={{
                border: "2px solid #7A5C42",
                color: "#7A5C42",
                backgroundColor: "transparent",
              }}
            >
              Contribute Knowledge
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
