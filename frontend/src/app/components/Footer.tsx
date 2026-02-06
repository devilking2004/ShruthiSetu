import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer 
      className="pt-16 pb-8"
      style={{ 
        backgroundColor: '#3A5A40',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F5EFE6\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo isScrolled={true} size="small" />
            </div>
            <p style={{ color: '#A8DADC', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Bridging traditional wisdom and digital preservation. Safeguarding indigenous knowledge for future generations.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                color: '#F5EFE6',
                fontFamily: 'Merriweather, serif'
              }}
            >
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                color: '#F5EFE6',
                fontFamily: 'Merriweather, serif'
              }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Regional Wisdom
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Stories
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-4"
              style={{ 
                color: '#F5EFE6',
                fontFamily: 'Merriweather, serif'
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: '#81B29A' }} />
                <a 
                  href="mailto:hello@shruthisethu.org"
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  hello@shruthisethu.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: '#81B29A' }} />
                <a 
                  href="tel:+911234567890"
                  className="hover:underline transition-all"
                  style={{ color: '#A8DADC' }}
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#81B29A' }} />
                <span style={{ color: '#A8DADC' }}>
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#81B29A' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: '#F5EFE6' }} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#81B29A' }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" style={{ color: '#F5EFE6' }} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#81B29A' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: '#F5EFE6' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8 text-center"
          style={{ borderTop: '1px solid rgba(245, 239, 230, 0.2)' }}
        >
          <p style={{ color: '#A8DADC', fontSize: '0.9rem' }}>
            © 2026 Shruthi Sethu (ಶ್ರುತಿ ಸೇತು). Preserving wisdom, nurturing roots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}