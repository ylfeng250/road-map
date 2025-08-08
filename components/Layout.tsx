import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { colors } from './theme';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: colors.background,
    }}>
      <Header title={title} subtitle={subtitle} />
      
      <main style={{
        flex: 1,
        padding: isMobile ? '0 8px' : '0 16px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
      }}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;