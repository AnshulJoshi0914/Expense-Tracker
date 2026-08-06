import { Plus, Search, Wallet } from "lucide-react";
import { useMemo, useState } from "react";
import {
  useBudgets,
  useCreateBudget,
  useUpdateBudget,
  useDeleteBudget,
} from "../hooks/useBudgets";

import toast from "react-hot-toast";
function Budgets() {
  const { data, isLoading, error } = useBudgets();
  const createBudget = useCreateBudget();
  const updateBudget = useUpdateBudget();
  const deleteBudget = useDeleteBudget();
  const budgets = data?.budgets || [];

  const [search, setSearch] = useState("");

  const filteredBudgets = useMemo(() => {
    return budgets.filter((item) =>
      item.category?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [budgets, search]);

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl">
        Loading Budgets...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-red-500">
        Failed to load budgets.
      </div>
    );
  }
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
              Monitor category-wise spending and stay within your monthly
              budget.
            </p>
          </div>

          <button
            onClick={async () => {
              const category = prompt("Category ID");
              const limitAmount = prompt("Budget Amount");

              if (!category || !limitAmount) return;

              try {
                await createBudget.mutateAsync({
                  category,
                  limitAmount: Number(limitAmount),
                });

                toast.success("Budget Created");
              } catch (err) {
                toast.error(err.response?.data?.message || "Failed");
              }
            }}
            className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700"
          >
            <Plus size={20} />
            Create Budget
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="relative">
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
            ((budget.spent || 0) / budget.limitAmount) * 100,
            100,
          );

          const remaining = budget.limitAmount - (budget.spent || 0);

          return (
            <div
              key={budget._id}
              className="group overflow-hidden rounded-[15px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl text-3xl ${budget.bg}`}
                  >
                    {budget.emoji}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                      {budget.category?.name}
                    </h2>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Monthly Budget
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={async () => {
                      const limitAmount = prompt(
                        "Update Budget",
                        budget.limitAmount,
                      );

                      if (!limitAmount) return;

                      try {
                        await updateBudget.mutateAsync({
                          id: budget._id,
                          budget: {
                            limitAmount: Number(limitAmount),
                          },
                        });

                        toast.success("Budget Updated");
                      } catch (err) {
                        toast.error(
                          err.response?.data?.message || "Update failed",
                        );
                      }
                    }}
                    className="rounded-xl bg-slate-100 p-2 hover:bg-slate-200"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={async () => {
                      if (!window.confirm("Delete this budget?")) return;

                      try {
                        await deleteBudget.mutateAsync(budget._id);
                        toast.success("Budget Deleted");
                      } catch (err) {
                        toast.error(
                          err.response?.data?.message || "Delete failed",
                        );
                      }
                    }}
                    className="rounded-xl bg-red-100 p-2 text-red-600 hover:bg-red-200"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>₹{budget.spent.toLocaleString()}</span>

                  <span>₹{budget.limitAmount.toLocaleString()}</span>
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
