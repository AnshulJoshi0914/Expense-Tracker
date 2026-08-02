import { useMemo, useState } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Clock4,
  Wallet,
  ArrowRight,
  Search,
  Download,
} from "lucide-react";

function Transactions() {
  const stats = [
    {
      title: "Income",
      value: "$3,200",
      icon: ArrowUpCircle,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Expenses",
      value: "$420",
      icon: ArrowDownCircle,
      color: "from-rose-500 to-red-500",
      bg: "bg-rose-50",
    },
    {
      title: "Pending",
      value: "2",
      icon: Clock4,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
    },
    {
      title: "Balance",
      value: "$2,780",
      icon: Wallet,
      color: "from-sky-500 to-indigo-500",
      bg: "bg-sky-50",
    },
  ];

  const transactions = [
    {
      id: 1,
      title: "Netflix",
      category: "Entertainment",
      payment: "Visa •••• 4582",
      date: "02 Aug 2026",
      amount: -19.99,
      status: "Completed",
    },
    {
      id: 2,
      title: "Salary",
      category: "Income",
      payment: "Bank Transfer",
      date: "01 Aug 2026",
      amount: 3200,
      status: "Completed",
    },
    {
      id: 3,
      title: "Amazon",
      category: "Shopping",
      payment: "UPI",
      date: "31 Jul 2026",
      amount: -214.35,
      status: "Completed",
    },
    {
      id: 4,
      title: "Electricity Bill",
      category: "Utilities",
      payment: "Credit Card",
      date: "30 Jul 2026",
      amount: -96.7,
      status: "Pending",
    },
    {
      id: 5,
      title: "McDonald's",
      category: "Food",
      payment: "Cash",
      date: "29 Jul 2026",
      amount: -12.5,
      status: "Completed",
    },
    {
      id: 6,
      title: "Uber",
      category: "Transport",
      payment: "UPI",
      date: "28 Jul 2026",
      amount: -17.3,
      status: "Completed",
    },
    {
      id: 7,
      title: "Spotify",
      category: "Entertainment",
      payment: "Debit Card",
      date: "27 Jul 2026",
      amount: -9.99,
      status: "Completed",
    },
    {
      id: 8,
      title: "Gym Membership",
      category: "Health",
      payment: "Debit Card",
      date: "26 Jul 2026",
      amount: -49.99,
      status: "Pending",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filtered = useMemo(() => {
    return transactions.filter((item) => {
      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const filterMatch = filter === "All" || item.status === filter;

      return searchMatch && filterMatch;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filtered.length / perPage);

  const current = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-8">
      <div className="rounded-[10px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 shadow-[0_20px_50px_rgba(15,23,42,.18)]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-slate-300">
              Transactions
            </p>

            <h1 className="text-4xl font-bold mt-3">Manage Your Expenses 💳</h1>

            <p className="text-slate-300 mt-3 max-w-xl leading-7">
              Review every transaction, monitor payments and keep complete
              control over your spending.
            </p>
          </div>

          <button className="group bg-white text-slate-900 rounded-2xl px-6 py-4 font-semibold flex items-center gap-3">
            Export Report
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[10px]rounded border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.06)]"
            >
              <div
                className={`absolute -top-10 -right-10 h-36 w-36 rounded-full ${item.bg}`}
              />

              <div className="relative flex justify-between">
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-4 text-4xl font-bold text-slate-800">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`h-16 w-16 rounded-3xl bg-gradient-to-br ${item.color} flex justify-center items-center text-white`}
                >
                  <Icon size={30} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="-rounded-[10px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,.06)] overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-4 p-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Recent Transactions
            </h2>

            <p className="text-slate-500 mt-1">
              Showing {current.length} of {filtered.length} transactions
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search transaction..."
                className="w-64 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>

            <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 font-semibold text-white">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-500">
                  Merchant
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-500">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-500">
                  Payment
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-slate-500">
                  Amount
                </th>

                <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {current.length ? (
                current.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white">
                          {item.title.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {item.title}
                          </h3>

                          <p className="text-sm text-slate-500">#{item.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-slate-600">{item.payment}</td>

                    <td className="px-6 py-5 text-slate-600">{item.date}</td>

                    <td
                      className={`px-6 py-5 text-right font-bold ${
                        item.amount > 0 ? "text-emerald-600" : "text-rose-500"
                      }`}
                    >
                      {item.amount > 0 ? "+" : "-"}$
                      {Math.abs(item.amount).toFixed(2)}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-slate-500">
                    No Transactions Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 p-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-xl border border-slate-200 px-5 py-2 disabled:opacity-40"
          >
            Previous
          </button>

          <span className="font-medium text-slate-600">
            Page {page} of {totalPages || 1}
          </span>

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage(page + 1)}
            className="rounded-xl border border-slate-200 px-5 py-2 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
