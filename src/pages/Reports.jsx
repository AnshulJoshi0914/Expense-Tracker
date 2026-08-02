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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-slate-300">
              Financial Reports
            </p>

            <h1 className="text-4xl font-bold mt-3">Business Insights 📊</h1>

            <p className="mt-3 max-w-xl text-slate-300 leading-7">
              Visualize your income, expenses, savings and spending trends with
              interactive analytics.
            </p>
          </div>

          <button className="group rounded-2xl bg-white text-slate-900 px-6 py-4 font-semibold flex items-center gap-3 hover:shadow-xl transition">
            Export PDF
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50"></div>

          <div className="relative flex justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                Income
              </p>

              <h2 className="mt-4 text-4xl font-bold">₹4,18,000</h2>
            </div>

            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
              <TrendingUp size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-rose-50"></div>

          <div className="relative flex justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                Expense
              </p>

              <h2 className="mt-4 text-4xl font-bold">₹2,45,000</h2>
            </div>

            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white">
              <TrendingDown size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-50"></div>

          <div className="relative flex justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                Savings
              </p>

              <h2 className="mt-4 text-4xl font-bold">₹1,73,000</h2>
            </div>

            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white">
              <Wallet size={30} />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-50"></div>

          <div className="relative flex justify-between">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                Cash Flow
              </p>

              <h2 className="mt-4 text-4xl font-bold">+₹54,000</h2>
            </div>

            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
              <IndianRupee size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Monthly Expense Trend
            </h2>

            <p className="mt-1 text-slate-500">
              Expense growth over the last 7 months
            </p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" />

              <XAxis
                dataKey="month"
                tick={{ fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

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

        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Income vs Expense
            </h2>

            <p className="mt-1 text-slate-500">Compare monthly cash flow</p>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={monthlyExpenses}>
              <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" />

              <XAxis
                dataKey="month"
                tick={{ fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: "#64748B" }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Legend />

              <Bar dataKey="income" fill="#3B82F6" radius={[10, 10, 0, 0]} />

              <Bar dataKey="expense" fill="#10B981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)]">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Expense Distribution
          </h2>

          <p className="mt-1 text-slate-500">Spending by category</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-5">
            {categoryExpense.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: COLORS[index],
                    }}
                  />

                  <span className="font-semibold text-slate-700">
                    {item.name}
                  </span>
                </div>

                <span className="font-bold text-slate-800">₹{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
