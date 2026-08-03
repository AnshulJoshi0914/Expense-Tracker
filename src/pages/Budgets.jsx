import { Plus, Search, Wallet } from "lucide-react";
import { useMemo, useState } from "react";

function Budgets() {
  const budgets = [
    {
      id: 1,
      category: "Food",
      spent: 8200,
      limit: 12000,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      emoji: "🍔",
    },
    {
      id: 2,
      category: "Shopping",
      spent: 2800,
      limit: 6000,
      color: "from-violet-500 to-fuchsia-500",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      emoji: "🛍️",
    },
    {
      id: 3,
      category: "Transport",
      spent: 4500,
      limit: 5000,
      color: "from-sky-500 to-cyan-500",
      bg: "bg-sky-50 dark:bg-sky-900/20",
      emoji: "🚕",
    },
    {
      id: 4,
      category: "Housing",
      spent: 21000,
      limit: 40000,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      emoji: "🏠",
    },
    {
      id: 5,
      category: "Entertainment",
      spent: 3600,
      limit: 7000,
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50 dark:bg-pink-900/20",
      emoji: "🎬",
    },
    {
      id: 6,
      category: "Health",
      spent: 1200,
      limit: 4000,
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      emoji: "💊",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredBudgets = useMemo(() => {
    return budgets.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">

      <div className="rounded-[10px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,.25)]">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">

              Budget Planner

            </p>

            <h1 className="mt-3 text-4xl font-bold">

              Control Your Spending 💰

            </h1>

            <p className="mt-3 max-w-xl leading-7 text-emerald-100">

              Monitor category-wise spending and stay within your monthly budget.

            </p>

          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700 shadow-lg transition hover:scale-105 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">

            <Plus size={20} />

            Create Budget

          </button>

        </div>

      </div>

      <div className="flex flex-col justify-between gap-4 md:flex-row">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search category..."
            className="w-72 rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

        </div>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

        {filteredBudgets.map((budget) => {
          const percent = Math.min(
            (budget.spent / budget.limit) * 100,
            100
          );

          const remaining = budget.limit - budget.spent;

          return (
            <div
              key={budget.id}
              className="group overflow-hidden rounded-[15px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className={`flex h-16 w-16 items-center justify-center rounded-3xl text-3xl ${budget.bg}`}>

                    {budget.emoji}

                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">

                      {budget.category}

                    </h2>

                    <p className="text-sm text-slate-500 dark:text-slate-400">

                      Monthly Budget

                    </p>

                  </div>

                </div>

                <Wallet
                  className="text-slate-300 dark:text-slate-600"
                  size={26}
                />

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">

                  <span>

                    ₹{budget.spent.toLocaleString()}

                  </span>

                  <span>

                    ₹{budget.limit.toLocaleString()}

                  </span>

                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">

                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${budget.color}`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <span className="font-semibold text-slate-700 dark:text-slate-300">

                    {percent.toFixed(0)}% Used

                  </span>

                  <span
                    className={`font-bold ${
                      remaining >= 0
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >

                    {remaining >= 0
                      ? `₹${remaining.toLocaleString()} Left`
                      : `₹${Math.abs(remaining).toLocaleString()} Over`}

                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Budgets;