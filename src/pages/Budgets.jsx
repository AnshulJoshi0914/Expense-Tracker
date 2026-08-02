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
      bg: "bg-emerald-50",
      emoji: "🍔",
    },
    {
      id: 2,
      category: "Shopping",
      spent: 2800,
      limit: 6000,
      color: "from-violet-500 to-fuchsia-500",
      bg: "bg-violet-50",
      emoji: "🛍️",
    },
    {
      id: 3,
      category: "Transport",
      spent: 4500,
      limit: 5000,
      color: "from-sky-500 to-cyan-500",
      bg: "bg-sky-50",
      emoji: "🚕",
    },
    {
      id: 4,
      category: "Housing",
      spent: 21000,
      limit: 40000,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      emoji: "🏠",
    },
    {
      id: 5,
      category: "Entertainment",
      spent: 3600,
      limit: 7000,
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      emoji: "🎬",
    },
    {
      id: 6,
      category: "Health",
      spent: 1200,
      limit: 4000,
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-50",
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

      <div className="rounded-[10px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white p-8 shadow-[0_20px_50px_rgba(16,185,129,.25)]">

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-emerald-100">

              Budget Planner

            </p>

            <h1 className="text-4xl font-bold mt-3">

              Control Your Spending 💰

            </h1>

            <p className="mt-3 max-w-xl text-emerald-100 leading-7">

              Monitor category-wise spending and stay within your monthly budget.

            </p>

          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white text-emerald-700 font-semibold px-6 py-4 shadow-lg hover:scale-105 transition">

            <Plus size={20} />

            Create Budget

          </button>

        </div>

      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search category..."
            className="w-72 rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
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
              className="group overflow-hidden rounded-[15px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)]"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <div className={`h-16 w-16 rounded-3xl ${budget.bg} flex items-center justify-center text-3xl`}>

                    {budget.emoji}

                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-slate-800">

                      {budget.category}

                    </h2>

                    <p className="text-sm text-slate-500">

                      Monthly Budget

                    </p>

                  </div>

                </div>

                <Wallet className="text-slate-300" size={26} />

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-sm text-slate-500">

                  <span>

                    ₹{budget.spent.toLocaleString()}

                  </span>

                  <span>

                    ₹{budget.limit.toLocaleString()}

                  </span>

                </div>

                <div className="mt-3 h-3 rounded-full bg-slate-100 overflow-hidden">

                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${budget.color}`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

                <div className="mt-6 flex justify-between items-center">

                  <span className="font-semibold text-slate-700">

                    {percent.toFixed(0)}% Used

                  </span>

                  <span
                    className={`font-bold ${
                      remaining >= 0
                        ? "text-emerald-600"
                        : "text-red-500"
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