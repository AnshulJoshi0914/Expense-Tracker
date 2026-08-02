import {
  Wallet,
  PiggyBank,
  DollarSign,
  CalendarDays,
} from "lucide-react";

import StatCard from "../components/StatCard";

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

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
            positive={item.positive}
            icon={item.icon}
          />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;