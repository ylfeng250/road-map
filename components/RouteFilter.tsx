import React from 'react';
import { colors, spacing, borderRadius, typography } from './theme';
import type { Route } from '../types';

interface FilterOption {
  label: string;
  value: string;
}

interface RouteFilterProps {
  routes: Route[];
  onFilterChange: (city: string, area: string, distanceRange: string, ascentRange: string) => void;
}

const RouteFilter: React.FC<RouteFilterProps> = ({ routes, onFilterChange }) => {
  // 提取所有可用的城市选项
  const cityOptions: FilterOption[] = [
    { label: '全部城市', value: '' },
    ...Array.from(new Set(routes.map(route => route.city)))
      .map(city => ({ label: city, value: city } as FilterOption))
  ];

  // 提取所有可用的区域选项
  const areaOptions: FilterOption[] = [
    { label: '全部区域', value: '' },
    ...Array.from(new Set(routes.map(route => route.area)))
      .map(area => ({ label: area, value: area } as FilterOption))
  ];

  // 距离范围选项
  const distanceOptions: FilterOption[] = [
    { label: '全部距离', value: '' },
    { label: '短途 (< 7km)', value: 'short' },
    { label: '中途 (7-9km)', value: 'medium' },
    { label: '长途 (> 9km)', value: 'long' },
  ];

  // 爬升范围选项
  const ascentOptions: FilterOption[] = [
    { label: '全部爬升', value: '' },
    { label: '低强度 (< 400m)', value: 'low' },
    { label: '中强度 (400-600m)', value: 'medium' },
    { label: '高强度 (> 600m)', value: 'high' },
  ];

  const [city, setCity] = React.useState('');
  const [area, setArea] = React.useState('');
  const [distanceRange, setDistanceRange] = React.useState('');
  const [ascentRange, setAscentRange] = React.useState('');

  // 使用媒体查询检测是否为移动设备
  const [isMobile, setIsMobile] = React.useState(false);

  // 当筛选条件变化时通知父组件
  React.useEffect(() => {
    onFilterChange(city, area, distanceRange, ascentRange);
  }, [city, area, distanceRange, ascentRange, onFilterChange]);

  const selectStyle = React.useMemo(() => ({
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.cardBg,
    color: colors.text.primary,
    fontSize: typography.fontSize.sm,
    cursor: 'pointer',
    outline: 'none',
    transition: '0.2s ease',
    width: isMobile ? 'calc(100% - 70px)' : '100%', // 移动端考虑标签宽度
    maxWidth: isMobile ? 'none' : '180px', // 移动端不限制最大宽度
    margin: isMobile ? '0' : '0 auto', // 移动端不需要居中
    display: 'inline-block',
  }), [isMobile]);

  

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

  // 定义 FilterItem 组件
  const FilterItem: React.FC<{
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
    isMobile: boolean;
  }> = ({ label, value, options, onChange, isMobile }) => {
    return (
      <div style={{
        flex: isMobile ? '1 1 auto' : '1 1 0',
        minWidth: isMobile ? 'auto' : '120px',
        width: isMobile ? '100%' : 'auto',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <label style={{
          display: isMobile ? 'inline-block' : 'block',
          marginBottom: isMobile ? 0 : spacing.xs,
          marginRight: isMobile ? spacing.md : 0,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          fontWeight: typography.fontWeight.medium,
          width: isMobile ? '60px' : 'auto',
          textAlign: isMobile ? 'left' : 'center',
        }}>
          {label}
        </label>
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={selectStyle}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: isMobile ? 'nowrap' : 'nowrap',
      gap: isMobile ? spacing.sm : spacing.md,
      marginBottom: spacing.xl,
      justifyContent: 'space-between',
      padding: isMobile ? spacing.sm : spacing.md,
      backgroundColor: colors.background,
      borderRadius: borderRadius.lg,
      boxShadow: colors.elevation.low,
      overflowX: isMobile ? 'visible' : 'auto', // 移动端不需要水平滚动
    }}>
      <FilterItem 
        label="城市" 
        value={city} 
        options={cityOptions} 
        onChange={setCity} 
        isMobile={isMobile} 
      />

      <FilterItem 
        label="区域" 
        value={area} 
        options={areaOptions} 
        onChange={setArea} 
        isMobile={isMobile} 
      />

      <FilterItem
        label="距离" 
        value={distanceRange} 
        options={distanceOptions} 
        onChange={setDistanceRange} 
        isMobile={isMobile} 
      />

      <FilterItem 
        label="爬升" 
        value={ascentRange} 
        options={ascentOptions} 
        onChange={setAscentRange} 
        isMobile={isMobile} 
      />
    </div>
  );
};

export default RouteFilter;