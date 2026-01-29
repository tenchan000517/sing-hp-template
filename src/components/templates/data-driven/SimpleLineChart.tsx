"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface LineChartData {
  [key: string]: string | number;
}

interface LineConfig {
  dataKey: string;
  color: string;
  name: string;
}

interface SimpleLineChartProps {
  data: LineChartData[];
  lines: LineConfig[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

export default function SimpleLineChart({
  data,
  lines,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = true,
}: SimpleLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />}
        <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        {showLegend && <Legend />}
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.color}
            strokeWidth={2}
            dot={{ fill: line.color, strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            name={line.name}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
