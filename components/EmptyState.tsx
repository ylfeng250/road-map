import React from 'react';
import { colors, spacing, typography } from './theme';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = '没有找到匹配的路线' }) => {
  return (
    <div style={{
      padding: spacing.xl,
      textAlign: 'center',
      backgroundColor: colors.cardBg,
      borderRadius: '12px',
      boxShadow: colors.elevation.low,
      margin: `${spacing.xl} auto`,
      maxWidth: '500px',
    }}>
      <div style={{
        fontSize: '48px',
        marginBottom: spacing.md,
      }}>
        🏔️
      </div>
      <h3 style={{
        color: colors.text.primary,
        marginBottom: spacing.md,
        fontWeight: typography.fontWeight.medium,
      }}>
        {message}
      </h3>
      <p style={{
        color: colors.text.secondary,
        fontSize: typography.fontSize.md,
      }}>
        尝试调整筛选条件，或者浏览其他路线选项
      </p>
    </div>
  );
};

export default EmptyState;