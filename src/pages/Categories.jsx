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

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Food",
      icon: <Utensils size={30} />,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      transactions: 42,
      spent: "₹8,420",
    },
    {
      id: 2,
      name: "Transport",
      icon: <Car size={30} />,
      color: "from-sky-500 to-cyan-500",
      bg: "bg-sky-50",
      transactions: 18,
      spent: "₹3,150",
    },
    {
      id: 3,
      name: "Housing",
      icon: <House size={30} />,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      transactions: 8,
      spent: "₹21,000",
    },
    {
      id: 4,
      name: "Shopping",
      icon: <ShoppingBag size={30} />,
      color: "from-violet-500 to-fuchsia-500",
      bg: "bg-violet-50",
      transactions: 24,
      spent: "₹6,800",
    },
    {
      id: 5,
      name: "Entertainment",
      icon: <Film size={30} />,
      color: "from-rose-500 to-pink-500",
      bg: "bg-rose-50",
      transactions: 13,
      spent: "₹2,450",
    },
    {
      id: 6,
      name: "Health",
      icon: <HeartPulse size={30} />,
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-50",
      transactions: 9,
      spent: "₹1,250",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return categories.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">

      <div className="rounded-[10px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,.18)]">

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-slate-300">

              Categories

            </p>

            <h1 className="text-4xl font-bold mt-3">

              Organize Expenses 🏷️

            </h1>

            <p className="mt-3 max-w-xl text-slate-300 leading-7">

              Keep your finances organized by managing expense categories.

            </p>

          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 hover:scale-105 transition">

            <Plus size={20} />

            Add Category

          </button>

        </div>

      </div>

      <div className="flex justify-between items-center">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
          />

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

        {filtered.map((category) => (

          <div
            key={category.id}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.12)]"
          >

            <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full ${category.bg}`}></div>

            <div className="relative flex justify-between">

              <div className={`h-16 w-16 rounded-3xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg`}>

                {category.icon}

              </div>

              <div className="flex gap-2">

                <button className="h-11 w-11 rounded-2xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">

                  <Pencil size={18} />

                </button>

                <button className="h-11 w-11 rounded-2xl bg-rose-100 text-rose-600 hover:bg-rose-200 transition flex items-center justify-center">

                  <Trash2 size={18} />

                </button>

              </div>

            </div>

            <div className="relative mt-7">

              <h2 className="text-2xl font-bold text-slate-800">

                {category.name}

              </h2>

              <p className="mt-2 text-slate-500">

                {category.transactions} Transactions

              </p>

            </div>

            <div className="relative mt-7 flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4">

              <div>

                <p className="text-sm text-slate-500">

                  Total Spent

                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-800">

                  {category.spent}

                </h3>

              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">

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