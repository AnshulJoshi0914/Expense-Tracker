import {
  Wallet,
  PiggyBank,
  DollarSign,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import StatCard from "../components/StatCard";
import ExpenseTable from "../components/ExpenseTable";
import Analytics from "../components/Analytics";
import DailyChart from "../components/DailyChart";

function Dashboard() {
  const stats = [
    {
      title: "Total Spent",
      value: "$2,456.10",
      change: "+8.2% vs last month",
      positive: true,
      icon: Wallet,
    },
    {
      title: "Income",
      value: "$4,180.00",
      change: "+1.4% vs last month",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "Saved",
      value: "$1,723.90",
      change: "-3.1% vs last month",
      positive: false,
      icon: PiggyBank,
    },
    {
      title: "Avg Per Day",
      value: "$79.23",
      change: "-5.6% vs last month",
      positive: false,
      icon: CalendarDays,
    },
  ];

  return (
    <div className="space-y-8 transition-colors duration-300">

      <div className="rounded-[10px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,0.30)]">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">

              Welcome Back

            </p>

            <h1 className="mt-3 text-4xl font-bold">

              Good Evening, Anshu 👋

            </h1>

            <p className="mt-3 max-w-xl leading-7 text-emerald-100">

              Track your expenses, monitor your budgets and gain
              insights into your financial health from one place.

            </p>

          </div>

          <button className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700 transition-all duration-300 hover:shadow-xl">

            View Reports

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
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

          <ExpenseTable />

        </div>

        <div className="col-span-12 space-y-7 xl:col-span-4">

          <Analytics />

          <DailyChart />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;