import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

import { burnRate } from "../data/analytics";

function DailyChart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

      <h2 className="font-bold text-xl">
        Daily Burn Rate
      </h2>

      <p className="text-gray-500 text-sm mb-5">
        Last 12 Days
      </p>

      <ResponsiveContainer
        width="100%"
        height={220}
      >
        <BarChart data={burnRate}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            fill="#10B981"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default DailyChart;