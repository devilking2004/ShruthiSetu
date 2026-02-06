import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Knowledge", id: "knowledge" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Regions", id: "regions" },
    { label: "Community", id: "community" },
    { label: "Impact", id: "impact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 shadow-lg" : "py-5"
        }`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(58, 90, 64, 0.95)"
            : "rgba(58, 90, 64, 0.15)",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(5px)",
        }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Logo isScrolled={isScrolled} size="small" />
            </button>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                >
                  <span
                    className="transition-all duration-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: isScrolled ? "#F5EFE6" : "#3A5A40",
                    }}
                  >
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#81B29A] group-hover:w-full transition-all duration-300" />
                </button>
              ))}

              {/* ✅ FIXED Contribute button */}
              <button
                onClick={() => scrollToSection("contribute")}
                className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: isScrolled ? "#81B29A" : "#3A5A40",
                  color: "#F5EFE6",
                }}
              >
                Contribute
              </button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{
                color: isScrolled ? "#F5EFE6" : "#3A5A40",
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="fixed top-0 right-0 bottom-0 w-full sm:w-80 z-40 lg:hidden bg-[#3A5A40]">
            <nav className="flex flex-col gap-2 p-6 mt-20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-6 py-4 text-white"
                >
                  {item.label}
                </button>
              ))}

              {/* ✅ FIXED Mobile Contribute */}
              <button
                onClick={() => scrollToSection("contribute")}
                className="mt-4 px-6 py-4 rounded-full bg-[#81B29A] text-white"
              >
                Contribute
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
