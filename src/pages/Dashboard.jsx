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
    <div className="space-y-8">

      <div className="rounded-[10px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,0.30)]">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

          <div>

            <p className="text-emerald-100 text-sm uppercase tracking-[0.3em]">

              Welcome Back

            </p>

            <h1 className="text-4xl font-bold mt-3">

              Good Evening, Anshu 👋

            </h1>

            <p className="mt-3 text-emerald-100 max-w-xl leading-7">

              Track your expenses, monitor your budgets and gain
              insights into your financial health from one place.

            </p>

          </div>

          <button className="group bg-white text-emerald-700 rounded-2xl px-6 py-4 font-semibold flex items-center gap-3 hover:shadow-xl transition-all duration-300">

            View Reports

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

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

        <div className="col-span-12 xl:col-span-4 space-y-7">

          <Analytics />

          <DailyChart />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;