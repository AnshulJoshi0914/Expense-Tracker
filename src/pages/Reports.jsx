import {
  Download,
  TrendingDown,
  TrendingUp,
  Wallet,
  IndianRupee,
} from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  monthlyExpenses,
  categoryExpense,
} from "../data/reports";

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

function Reports() {
  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">

            Reports

          </h1>

          <p className="text-gray-500 mt-1">

            Financial insights & analytics

          </p>

        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">

          <Download size={18} />

          Export Report

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl border shadow-sm p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500">

                Income

              </p>

              <h2 className="text-3xl font-bold mt-2">

                ₹4,18,000

              </h2>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex justify-center items-center">

              <TrendingUp className="text-emerald-600"/>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border shadow-sm p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500">

                Expense

              </p>

              <h2 className="text-3xl font-bold mt-2">

                ₹2,45,000

              </h2>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-red-100 flex justify-center items-center">

              <TrendingDown className="text-red-500"/>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border shadow-sm p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500">

                Savings

              </p>

              <h2 className="text-3xl font-bold mt-2">

                ₹1,73,000

              </h2>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex justify-center items-center">

              <Wallet className="text-blue-600"/>

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border shadow-sm p-6">

          <div className="flex justify-between">

            <div>

              <p className="text-gray-500">

                Cash Flow

              </p>

              <h2 className="text-3xl font-bold mt-2">

                +₹54,000

              </h2>

            </div>

            <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex justify-center items-center">

              <IndianRupee className="text-yellow-600"/>

            </div>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <h2 className="text-xl font-bold mb-5">

            Monthly Expense Trend

          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <LineChart data={monthlyExpenses}>

              <CartesianGrid strokeDasharray="4 4"/>

              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>

              <Line
                dataKey="expense"
                stroke="#10B981"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border p-6">

          <h2 className="text-xl font-bold mb-5">

            Income vs Expense

          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={monthlyExpenses}>

              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>

              <Bar
                dataKey="income"
                fill="#3B82F6"
                radius={[8,8,0,0]}
              />

              <Bar
                dataKey="expense"
                fill="#10B981"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-sm border p-6">

        <h2 className="text-xl font-bold mb-6">

          Expense Distribution

        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <PieChart>

            <Pie
              data={categoryExpense}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >

              {categoryExpense.map((entry,index)=>(
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

            </Pie>

            <Tooltip/>

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Reports;