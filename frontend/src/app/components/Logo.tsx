import logoImage from "../../assets/edf44348893d9623e38d6134bd16eb01a14ab4aa.png";


interface LogoProps {
  isScrolled?: boolean;
  size?: 'small' | 'large';
}

export function Logo({ isScrolled = false, size = 'small' }: LogoProps) {
  const iconSize = size === 'small' ? 48 : 72;
  const fontSize = size === 'small' ? 'clamp(1.25rem, 2vw, 1.5rem)' : 'clamp(2rem, 3vw, 2.5rem)';
  const kannadaSize = size === 'small' ? 'clamp(0.7rem, 1.2vw, 0.8rem)' : 'clamp(0.95rem, 1.5vw, 1.15rem)';
  const taglineSize = size === 'small' ? '0' : 'clamp(0.65rem, 1vw, 0.75rem)';

  return (
    <div className="flex items-center gap-3 group">
      {/* Logo Image */}
      <div 
        className="relative rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 overflow-hidden"
        style={{
          width: iconSize,
          height: iconSize,
          backgroundColor: isScrolled ? 'rgba(245, 239, 230, 0.15)' : 'rgba(245, 239, 230, 0.95)',
          border: `2px solid ${isScrolled ? 'rgba(245, 239, 230, 0.3)' : 'rgba(122, 92, 66, 0.2)'}`,
          boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.1)',
          padding: '4px'
        }}
      >
        <img 
          src={logoImage} 
          alt="Shruthi Sethu Logo" 
          className="w-full h-full object-contain transition-all duration-300"
          style={{
            filter: isScrolled ? 'brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
          }}
        />
      </div>
      
      {/* Text content */}
      <div className="flex flex-col gap-0.5">
        {/* Main title: Shruthi Sethu */}
        <div 
          className="flex items-baseline gap-1.5 transition-all duration-300"
          style={{
            fontFamily: 'Merriweather, serif',
            fontSize: fontSize,
            lineHeight: '1.1',
            textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.08)',
            fontWeight: 700
          }}
        >
          <span style={{ color: isScrolled ? '#F5EFE6' : '#7A5C42' }}>
            Shruthi
          </span>
          <span style={{ color: isScrolled ? '#F5EFE6' : '#3A5A40' }}>
            Sethu
          </span>
        </div>
        
        {/* Kannada text */}
        <div 
          className="transition-all duration-300"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: kannadaSize,
            lineHeight: '1.2',
            color: isScrolled ? 'rgba(245, 239, 230, 0.85)' : 'rgba(122, 92, 66, 0.85)',
            letterSpacing: '0.03em',
            fontWeight: 500
          }}
        >
          ಶ್ರುತಿ ಸೇತು
        </div>
        
        {/* Tagline - only shown in large size */}
        {size === 'large' && (
          <div 
            className="mt-1 transition-all duration-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: taglineSize,
              lineHeight: '1.3',
              color: isScrolled ? 'rgba(245, 239, 230, 0.75)' : 'rgba(122, 92, 66, 0.75)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            Bridging Traditional Wisdom<br />and Digital Preservation
          </div>
        )}
      </div>
    </div>
  );
}