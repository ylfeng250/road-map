import React from 'react';
import type { Route } from '../types';
import { colors, spacing, borderRadius, typography, animation } from './theme';

// 图标组件
const LocationIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill={colors.primary} />
  </svg>
);

const DistanceIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 5.5C13.5 5.5 9 9.5 9 13C9 14.9 10.6 16.5 12.5 16.5C14.4 16.5 16 14.9 16 13C16 9.5 13.5 5.5 13.5 5.5ZM15.5 13.5C15.5 14.6 14.6 15.5 13.5 15.5C12.4 15.5 11.5 14.6 11.5 13.5C11.5 12.4 12.4 11.5 13.5 11.5C14.6 11.5 15.5 12.4 15.5 13.5Z" fill={colors.primary} />
    <path d="M13 1L4 5V11C4 16.55 7.84 21.74 13 23C18.16 21.74 22 16.55 22 11V5L13 1ZM20 11C20 15.52 16.94 19.69 13 20.93C9.06 19.69 6 15.52 6 11V6.3L13 3.19L20 6.3V11Z" fill={colors.primary} />
  </svg>
);

const AscentIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 5.5C13.5 5.5 9 9.5 9 13C9 14.9 10.6 16.5 12.5 16.5C14.4 16.5 16 14.9 16 13C16 9.5 13.5 5.5 13.5 5.5ZM15.5 13.5C15.5 14.6 14.6 15.5 13.5 15.5C12.4 15.5 11.5 14.6 11.5 13.5C11.5 12.4 12.4 11.5 13.5 11.5C14.6 11.5 15.5 12.4 15.5 13.5Z" fill={colors.primary} />
    <path d="M13 1L4 5V11C4 16.55 7.84 21.74 13 23C18.16 21.74 22 16.55 22 11V5L13 1ZM20 11C20 15.52 16.94 19.69 13 20.93C9.06 19.69 6 15.52 6 11V6.3L13 3.19L20 6.3V11Z" fill={colors.primary} />
  </svg>
);

const HighlightIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill={colors.secondary} />
  </svg>
);

interface RouteCardProps {
  route: Route;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  // 使用媒体查询检测是否为移动设备
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // 检测屏幕宽度
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px 是常见的平板断点
    };
    
    // 初始检测
    checkMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    
    // 清理监听器
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      style={{
        background: colors.cardBg,
        borderRadius: borderRadius.lg,
        boxShadow: colors.elevation.medium,
        padding: isMobile ? spacing.md : spacing.lg,
        width: isMobile ? '100%' : '320px',
        maxWidth: '100%',
        border: `1px solid ${colors.border}`,
        transition: animation.transition.normal,
        overflow: 'hidden',
        position: 'relative',
      }}
      className="route-card"
    >
      {/* 城市和区域标签 */}
      <div style={{
        position: 'absolute',
        top: isMobile ? spacing.sm : spacing.md,
        right: isMobile ? spacing.sm : spacing.md,
        display: 'flex',
        gap: spacing.xs,
        flexWrap: 'wrap',
        maxWidth: isMobile ? '120px' : 'auto',
        justifyContent: 'flex-end',
      }}>
        <div style={{
          background: colors.secondary,
          color: colors.text.primary,
          padding: `${spacing.xs} ${spacing.sm}`,
          borderRadius: borderRadius.md,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
        }}>
          {route.city}
        </div>
        <div style={{
          background: colors.accent,
          color: colors.text.primary,
          padding: `${spacing.xs} ${spacing.sm}`,
          borderRadius: borderRadius.md,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
        }}>
          {route.area}
        </div>
      </div>

      {/* 路线名称 */}
      <h3 style={{ 
        margin: `0 0 ${spacing.md} 0`, 
        color: colors.primary,
        fontSize: isMobile ? typography.fontSize.lg : typography.fontSize.xl,
        fontWeight: typography.fontWeight.bold,
        paddingRight: isMobile ? '80px' : '120px', // 为城市和区域标签留出空间
        wordBreak: 'break-word', // 确保长词可以换行
      }}>
        {route.name}
      </h3>

      {/* 路线信息 */}
      <div style={{ marginBottom: spacing.sm, display: 'flex', alignItems: 'center', gap: spacing.xs }}>
        <DistanceIcon />
        <span style={{ color: colors.text.secondary }}><strong>距离：</strong>{route.distance}</span>
      </div>

      <div style={{ marginBottom: spacing.sm, display: 'flex', alignItems: 'center', gap: spacing.xs }}>
        <AscentIcon />
        <span style={{ color: colors.text.secondary }}><strong>爬升：</strong>{route.ascent}</span>
      </div>

      {/* 亮点 */}
      {route.highlights.length > 0 && (
        <div style={{ marginTop: spacing.md }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs, marginBottom: spacing.xs }}>
            <HighlightIcon />
            <strong style={{ color: colors.text.primary }}>亮点：</strong>
          </div>
          <ul style={{ 
            paddingLeft: spacing.xl, 
            margin: 0,
            color: colors.text.secondary,
            fontSize: typography.fontSize.sm,
            lineHeight: typography.lineHeight.loose,
          }}>
            {route.highlights.map((hl, i) => (
              <li key={i}>{hl}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RouteCard;