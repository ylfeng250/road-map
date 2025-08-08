// 定义应用的主题颜色和样式常量

// 主色调 - 自然色系
export const colors = {
  primary: '#3a8c5f', // 森林绿
  secondary: '#f0c869', // 暖黄色
  accent: '#e76f51', // 红土色
  background: '#f8f9fa', // 浅灰背景
  cardBg: '#ffffff', // 卡片背景
  text: {
    primary: '#2d3748', // 主文本
    secondary: '#718096', // 次要文本
    light: '#a0aec0', // 浅色文本
  },
  border: '#e2e8f0', // 边框色
  success: '#48bb78', // 成功色
  warning: '#f6ad55', // 警告色
  danger: '#f56565', // 危险色
  elevation: {
    low: '0 2px 4px rgba(0,0,0,0.05)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    high: '0 10px 15px rgba(0,0,0,0.1)'
  }
};

// 响应式断点
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

// 间距和尺寸
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
};

// 字体
export const typography = {
  fontFamily: "'Noto Sans SC', 'Helvetica Neue', Arial, sans-serif",
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    loose: 1.75
  }
};

// 动画
export const animation = {
  transition: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  }
};

// 圆角
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  round: '50%'
};