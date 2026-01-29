"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SimpleLineChart from "./SimpleLineChart";
import SimpleBarChart from "./SimpleBarChart";
import SectionTitle from "@/components/common/SectionTitle";

interface GrowthDataSeries {
  year: number;
  value: number;
}

interface GrowthChartProps {
  title?: string;
  subtitle?: string;
  revenue: GrowthDataSeries[];
  employees: GrowthDataSeries[];
  projects: GrowthDataSeries[];
}

type ChartType = "revenue" | "employees" | "projects";

const chartConfig = {
  revenue: {
    label: "売上高（億円）",
    color: "#1565C0",
    unit: "億円",
  },
  employees: {
    label: "社員数（名）",
    color: "#2E7D32",
    unit: "名",
  },
  projects: {
    label: "年間プロジェクト数",
    color: "#F57C00",
    unit: "件",
  },
};

export default function GrowthChart({
  title = "成長の軌跡",
  subtitle = "データで見る当社の成長",
  revenue,
  employees,
  projects,
}: GrowthChartProps) {
  const [activeChart, setActiveChart] = useState<ChartType>("revenue");

  const getChartData = () => {
    const data = { revenue, employees, projects }[activeChart];
    return data.map((item) => ({
      year: item.year.toString(),
      value: item.value,
    }));
  };

  const barData = getChartData().map((item) => ({
    name: item.year,
    value: item.value,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Chart Type Selector */}
          <div className="flex justify-center gap-2 mb-8">
            {(Object.keys(chartConfig) as ChartType[]).map((type) => (
              <button
                key={type}
                onClick={() => setActiveChart(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeChart === type
                    ? "bg-primary text-white shadow-md"
                    : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary"
                }`}
              >
                {chartConfig[type].label}
              </button>
            ))}
          </div>

          {/* Chart Container */}
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="chart-container"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-text-primary">
                {chartConfig[activeChart].label}
              </h3>
              <span className="text-sm text-text-muted">
                過去6年間の推移
              </span>
            </div>

            {/* Line Chart for Desktop */}
            <div className="hidden md:block">
              <SimpleLineChart
                data={getChartData()}
                lines={[
                  {
                    dataKey: "value",
                    color: chartConfig[activeChart].color,
                    name: chartConfig[activeChart].label,
                  },
                ]}
                xAxisKey="year"
                height={350}
                showLegend={false}
              />
            </div>

            {/* Bar Chart for Mobile */}
            <div className="md:hidden">
              <SimpleBarChart
                data={barData}
                height={300}
                color={chartConfig[activeChart].color}
              />
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-sm text-text-muted">開始時</p>
                <p className="text-xl font-bold text-text-primary">
                  {getChartData()[0]?.value}
                  <span className="text-sm font-normal text-text-muted ml-1">
                    {chartConfig[activeChart].unit}
                  </span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted">現在</p>
                <p className="text-xl font-bold text-primary">
                  {getChartData()[getChartData().length - 1]?.value}
                  <span className="text-sm font-normal text-text-muted ml-1">
                    {chartConfig[activeChart].unit}
                  </span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted">成長率</p>
                <p className="text-xl font-bold text-green-600">
                  +{Math.round(
                    ((getChartData()[getChartData().length - 1]?.value -
                      getChartData()[0]?.value) /
                      getChartData()[0]?.value) *
                      100
                  )}%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
