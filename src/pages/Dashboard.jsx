import {
  PiggyBank,
  DollarSign,
  Wallet,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { useDashboard } from "../hooks/useDashboard";

import StatCard from "../components/StatCard";
import ExpenseTable from "../components/ExpenseTable";
import Analytics from "../components/Analytics";
import DailyChart from "../components/DailyChart";

function Dashboard() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-red-500 text-lg">
        Failed to load dashboard.
      </div>
    );
  }

  const summary = data?.summary || {};

  const stats = [
    {
      title: "Total Expense",
      value: `₹${summary.totalExpense || 0}`,
      change: `${summary.transactionCount || 0} Transactions`,
      positive: false,
      icon: Wallet,
    },
    {
      title: "Income",
      value: `₹${summary.totalIncome || 0}`,
      change: "Current Total",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "Saved",
      value: `₹${summary.totalSavings || 0}`,
      change: "Available Balance",
      positive: true,
      icon: PiggyBank,
    },
    {
      title: "Transactions",
      value: summary.transactionCount || 0,
      change: "All Time",
      positive: true,
      icon: CalendarDays,
    },
  ];

  return (
    <div className="space-y-8">

      <div className="rounded-[10px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,.30)]">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">

              Welcome Back

            </p>

            <h1 className="mt-3 text-4xl font-bold">

              Good Evening 👋

            </h1>

            <p className="mt-3 max-w-xl leading-7 text-emerald-100">

              Track your expenses, monitor budgets and analyze your financial health.

            </p>

          </div>

          <button className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700">

            View Reports

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}

      </div>

      <div className="grid grid-cols-12 gap-7">

        <div className="col-span-12 xl:col-span-8">

          <ExpenseTable
            transactions={data?.recentTransactions || []}
          />

        </div>

        <div className="col-span-12 space-y-7 xl:col-span-4">

          <Analytics
            analytics={data?.categoryAnalytics || []}
          />

          <DailyChart
            dailyData={data?.dailyExpenses || []}
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;