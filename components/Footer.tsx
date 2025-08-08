import React from 'react';
import { colors, spacing, typography } from './theme';

const Footer: React.FC = () => {
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
    <footer style={{
      marginTop: isMobile ? spacing.xl : spacing.xxl,
      padding: isMobile ? `${spacing.lg} ${spacing.sm}` : `${spacing.xl} ${spacing.md}`,
      backgroundColor: colors.primary,
      color: 'white',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: spacing.md,
      }}>
        
        <div style={{ fontSize: typography.fontSize.sm, opacity: 0.8 }}>
          © {new Date().getFullYear()} 户外徒步路线地图 - 探索自然，享受徒步
        </div>
        
        <div style={{ fontSize: typography.fontSize.xs, opacity: 0.7, marginTop: spacing.xs }}>
          本网站提供的路线信息仅供参考，请根据实际情况和天气状况做好充分准备
        </div>
      </div>
    </footer>
  );
};

export default Footer;