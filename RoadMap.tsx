import React, { useEffect, useState, useMemo } from "react";
import type { Route } from "./types";
import Layout from "./components/Layout";
import RouteCard from "./components/RouteCard";
import RouteFilter from "./components/RouteFilter";
import EmptyState from "./components/EmptyState";
import { colors, spacing } from "./components/theme";

const RoadMap: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 筛选条件
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedDistanceRange, setSelectedDistanceRange] = useState("");
  const [selectedAscentRange, setSelectedAscentRange] = useState("");

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 加载路线数据
  useEffect(() => {
    setLoading(true);
    // 根据当前路径判断是否为生产环境
    const isProd = window.location.pathname.includes("/road-map");
    const basePath = isProd ? "/road-map" : "";
    fetch(`${basePath}/routes.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("无法加载路线数据");
        }
        return res.json();
      })
      .then((data) => {
        setRoutes(data.routes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("加载路线数据失败:", err);
        setError("无法加载路线数据，请稍后再试");
        setLoading(false);
      });
  }, []);

  // 处理筛选条件变化
  const handleFilterChange = (
    city: string,
    area: string,
    distanceRange: string,
    ascentRange: string
  ) => {
    setSelectedCity(city);
    setSelectedArea(area);
    setSelectedDistanceRange(distanceRange);
    setSelectedAscentRange(ascentRange);
  };

  // 根据筛选条件过滤路线
  const filteredRoutes = useMemo(() => {
    return routes.filter((route) => {
      // 城市筛选
      if (selectedCity && route.city !== selectedCity) {
        return false;
      }

      // 区域筛选
      if (selectedArea && route.area !== selectedArea) {
        return false;
      }

      // 距离筛选
      if (selectedDistanceRange) {
        const distance = parseFloat(route.distance.replace(/[^\d.]/g, ""));

        if (selectedDistanceRange === "short" && distance >= 7) {
          return false;
        }
        if (
          selectedDistanceRange === "medium" &&
          (distance < 7 || distance > 9)
        ) {
          return false;
        }
        if (selectedDistanceRange === "long" && distance <= 9) {
          return false;
        }
      }

      // 爬升筛选
      if (selectedAscentRange) {
        const ascent = parseFloat(route.ascent.replace(/[^\d.]/g, ""));

        if (selectedAscentRange === "low" && ascent >= 400) {
          return false;
        }
        if (
          selectedAscentRange === "medium" &&
          (ascent < 400 || ascent > 600)
        ) {
          return false;
        }
        if (selectedAscentRange === "high" && ascent <= 600) {
          return false;
        }
      }

      return true;
    });
  }, [
    routes,
    selectedCity,
    selectedArea,
    selectedDistanceRange,
    selectedAscentRange,
  ]);

  // 加载状态
  if (loading) {
    return (
      <Layout
        title="户外徒步路线地图"
        subtitle="探索杭州及周边地区的精选徒步路线"
      >
        <div style={{ textAlign: "center", padding: spacing.xxl }}>
          <div style={{ fontSize: "24px", marginBottom: spacing.md }}>
            加载中...
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: `5px solid ${colors.border}`,
              borderTopColor: colors.primary,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </Layout>
    );
  }

  // 错误状态
  if (error) {
    return (
      <Layout
        title="户外徒步路线地图"
        subtitle="探索杭州及周边地区的精选徒步路线"
      >
        <div
          style={{
            textAlign: "center",
            padding: spacing.xxl,
            color: colors.danger,
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: spacing.md }}>⚠️</div>
          <div style={{ fontSize: "18px" }}>{error}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="户外徒步路线地图"
      subtitle="探索杭州及周边地区的精选徒步路线"
    >
      {/* 筛选器 */}
      <RouteFilter routes={routes} onFilterChange={handleFilterChange} />

      {/* 路线统计 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? spacing.lg : spacing.xl,
          color: colors.text.secondary,
          fontSize: "14px",
          padding: isMobile ? `0 ${spacing.sm}` : 0,
        }}
      >
        共找到{" "}
        <span style={{ fontWeight: "bold", color: colors.primary }}>
          {filteredRoutes.length}
        </span>{" "}
        条路线
      </div>

      {/* 路线列表 */}
      {filteredRoutes.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(auto-fill, minmax(280px, 1fr))"
              : "repeat(auto-fill, minmax(320px, 1fr))",
            gap: isMobile ? spacing.md : spacing.xl,
            justifyItems: "center",
            padding: isMobile ? spacing.sm : 0,
          }}
        >
          {filteredRoutes.map((route, idx) => (
            <RouteCard key={idx} route={route} />
          ))}
        </div>
      ) : (
        <EmptyState message="没有找到匹配的路线" />
      )}
    </Layout>
  );
};

export default RoadMap;
