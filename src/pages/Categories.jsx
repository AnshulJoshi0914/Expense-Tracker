import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Utensils,
  Car,
  House,
  ShoppingBag,
  Film,
  HeartPulse,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useCategories } from "../hooks/useCategories";
function Categories() {
  const { data, isLoading, error } = useCategories();

  const categories = data?.categories || [];

  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    return categories.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [categories, search]);
  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl font-semibold">
        Loading Categories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-red-500">
        Failed to load categories.
      </div>
    );
  }
  

  return (
    <div className="space-y-8">
      <div className="rounded-[10px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,.18)]">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Categories
            </p>

            <h1 className="mt-3 text-4xl font-bold">Organize Expenses 🏷️</h1>

            <p className="mt-3 max-w-xl leading-7 text-slate-300">
              Keep your finances organized by managing expense categories.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-105 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <Plus size={20} />
            Add Category
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">

          <input
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition-all focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((category) => (
          <div
            key={category._id}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-100/20" />

            <div className="relative flex justify-between">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg"
              >
               <ShoppingBag size={30} />
              </div>

              <div className="flex gap-2">
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <Pencil size={18} />
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition hover:bg-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/40">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="relative mt-7">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                {category.name}
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                0 Transactions
              </p>
            </div>

            <div className="relative mt-7 flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 dark:bg-slate-800">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Total Spent
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-800 dark:text-white">
                  ₹0
                </h3>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
