import React from 'react';
import { colors, spacing, typography, animation } from './theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header style={{
      textAlign: 'center',
      marginBottom: spacing.xxl,
      padding: `${spacing.xl} ${spacing.md}`,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}99 100%)`,
      color: 'white',
      boxShadow: colors.elevation.medium,
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      <h1 style={{
        fontSize: typography.fontSize.xxl,
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
          fontSize: typography.fontSize.md,
          marginTop: spacing.md,
          opacity: 0.9,
          maxWidth: '600px',
          margin: `${spacing.md} auto 0`,
        }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;