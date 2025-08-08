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

  // 当筛选条件变化时通知父组件
  React.useEffect(() => {
    onFilterChange(city, area, distanceRange, ascentRange);
  }, [city, area, distanceRange, ascentRange, onFilterChange]);

  const selectStyle = {
    padding: `${spacing.sm} ${spacing.md}`,
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.cardBg,
    color: colors.text.primary,
    fontSize: typography.fontSize.sm,
    cursor: 'pointer',
    outline: 'none',
    transition: '0.2s ease',
    width: '100%', // 使下拉框填满容器宽度
    maxWidth: '180px', // 限制最大宽度
    margin: '0 auto', // 在容器中居中
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      gap: spacing.md,
      marginBottom: spacing.xl,
      justifyContent: 'space-between',
      padding: spacing.md,
      backgroundColor: colors.background,
      borderRadius: borderRadius.lg,
      boxShadow: colors.elevation.low,
      overflowX: 'auto', // 允许在小屏幕上滚动
    }}>
      <div style={{
        flex: '1 1 0',
        minWidth: '120px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <label style={{
          display: 'block',
          marginBottom: spacing.xs,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          fontWeight: typography.fontWeight.medium,
        }}>
          城市
        </label>
        <select 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={selectStyle}
        >
          {cityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{
        flex: '1 1 0',
        minWidth: '120px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <label style={{
          display: 'block',
          marginBottom: spacing.xs,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          fontWeight: typography.fontWeight.medium,
        }}>
          区域
        </label>
        <select 
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={selectStyle}
        >
          {areaOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{
        flex: '1 1 0',
        minWidth: '120px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <label style={{
          display: 'block',
          marginBottom: spacing.xs,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          fontWeight: typography.fontWeight.medium,
        }}>
          距离
        </label>
        <select 
          value={distanceRange}
          onChange={(e) => setDistanceRange(e.target.value)}
          style={selectStyle}
        >
          {distanceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{
        flex: '1 1 0',
        minWidth: '120px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <label style={{
          display: 'block',
          marginBottom: spacing.xs,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          fontWeight: typography.fontWeight.medium,
        }}>
          爬升
        </label>
        <select 
          value={ascentRange}
          onChange={(e) => setAscentRange(e.target.value)}
          style={selectStyle}
        >
          {ascentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RouteFilter;