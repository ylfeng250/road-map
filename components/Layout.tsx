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
        padding: '0 16px',
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