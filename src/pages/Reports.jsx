import {
  Download,
  TrendingDown,
  TrendingUp,
  Wallet,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6"];

function Reports() {
  const monthlyExpenses = [
    { month: "Jan", income: 4200, expense: 2600 },
    { month: "Feb", income: 4600, expense: 3100 },
    { month: "Mar", income: 5100, expense: 3400 },
    { month: "Apr", income: 4700, expense: 2950 },
    { month: "May", income: 5500, expense: 3800 },
    { month: "Jun", income: 6100, expense: 4200 },
    { month: "Jul", income: 6800, expense: 4500 },
  ];

  const categoryExpense = [
    { name: "Food", value: 950 },
    { name: "Housing", value: 2100 },
    { name: "Shopping", value: 870 },
    { name: "Transport", value: 520 },
    { name: "Entertainment", value: 760 },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-[10px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,.18)]">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Financial Reports
            </p>

            <h1 className="mt-3 text-4xl font-bold">Business Insights 📊</h1>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Visualize your income, expenses, savings and spending trends with
              interactive analytics.
            </p>
          </div>

          <button className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:shadow-xl dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            Export PDF
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50 dark:bg-emerald-900/20" />

          <div className="relative flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Income
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-800 dark:text-white">
                ₹4,18,000
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
              <TrendingUp size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-rose-50 dark:bg-rose-900/20" />

          <div className="relative flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Expense
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-800 dark:text-white">
                ₹2,45,000
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 to-red-500 text-white">
              <TrendingDown size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-50 dark:bg-sky-900/20" />

          <div className="relative flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Savings
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-800 dark:text-white">
                ₹1,73,000
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
              <Wallet size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-50 dark:bg-amber-900/20" />

          <div className="relative flex justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Cash Flow
              </p>

              <h2 className="mt-4 text-4xl font-bold text-slate-800 dark:text-white">
                +₹54,000
              </h2>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
              <IndianRupee size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
        <div className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Monthly Expense Trend
            </h2>

            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Expense growth over the last 7 months
            </p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="4 4" stroke="#334155" />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#94A3B8",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#94A3B8",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  color: "#fff",
                }}
                labelStyle={{
                  color: "#CBD5E1",
                }}
              />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#10B981"
                strokeWidth={4}
                dot={{
                  r: 5,
                  fill: "#10B981",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Income vs Expense
            </h2>

            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Compare monthly cash flow
            </p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="4 4" stroke="#334155" />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#94A3B8",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill: "#94A3B8",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  color: "#fff",
                }}
                labelStyle={{
                  color: "#CBD5E1",
                }}
              />

              <Legend
                wrapperStyle={{
                  color: "#CBD5E1",
                }}
              />

              <Bar dataKey="income" fill="#3B82F6" radius={[10, 10, 0, 0]} />

              <Bar dataKey="expense" fill="#10B981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>{" "}
      <div className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Expense Distribution
          </h2>

          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Spending by category
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <ResponsiveContainer width="100%" height={360}>
            <PieChart>
              <Pie
                data={categoryExpense}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={70}
                paddingAngle={3}
              >
                {categoryExpense.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  color: "#fff",
                }}
                labelStyle={{
                  color: "#CBD5E1",
                }}
              />

              <Legend
                wrapperStyle={{
                  color: "#CBD5E1",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-5">
            {categoryExpense.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: COLORS[index],
                    }}
                  />

                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {item.name}
                  </span>
                </div>

                <span className="font-bold text-slate-800 dark:text-white">
                  ₹{item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
