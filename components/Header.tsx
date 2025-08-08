import React from 'react';
import { colors, spacing, typography, animation } from './theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header style={{
      textAlign: 'center',
      marginBottom: isMobile ? spacing.xl : spacing.xxl,
      padding: isMobile ? `${spacing.lg} ${spacing.sm}` : `${spacing.xl} ${spacing.md}`,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
      color: 'white',
      boxShadow: colors.elevation.medium,
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      <h1 style={{
        fontSize: isMobile ? typography.fontSize.xl : typography.fontSize.xxl,
        fontWeight: typography.fontWeight.bold,
        margin: 0,
        position: 'relative',
        display: 'inline-block',
      }}>
        {title}
        <div style={{
          height: '4px',
          width: '40%',
          background: colors.secondary,
          position: 'absolute',
          bottom: '-8px',
          left: '30%',
          borderRadius: '2px',
        }}></div>
      </h1>
      
      {subtitle && (
        <p style={{
          fontSize: isMobile ? typography.fontSize.sm : typography.fontSize.md,
          marginTop: spacing.md,
          opacity: 0.9,
          maxWidth: '600px',
          margin: `${spacing.md} auto 0`,
          padding: isMobile ? `0 ${spacing.sm}` : 0,
        }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;