import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
} from "recharts";

function DailyChart({ dailyData = [] }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800">

        <div>

          <p className="text-sm uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">

            Spending Trend

          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-800 dark:text-white">

            Daily Expenses

          </h2>

        </div>

        <div className="rounded-2xl bg-emerald-50 px-4 py-2 dark:bg-emerald-900/20">

          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">

            Live Data

          </span>

        </div>

      </div>

      <div className="h-[260px] p-5">

        {dailyData.length === 0 ? (

          <div className="flex h-full items-center justify-center text-slate-500 dark:text-slate-400">

            No Expense Data Available

          </div>

        ) : (

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={dailyData}>

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: 12,
                }}
              />

              <Tooltip
                formatter={(value) => [`₹${value}`, "Expense"]}
                cursor={{ fill: "#1E293B" }}
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  color: "#fff",
                }}
              />

              <Bar
                dataKey="amount"
                radius={[12, 12, 0, 0]}
              >
                {dailyData.map((_, index) => (

                  <Cell
                    key={index}
                    fill={
                      index === dailyData.length - 1
                        ? "#10B981"
                        : "#6EE7B7"
                    }
                  />

                ))}

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
}

export default DailyChart;