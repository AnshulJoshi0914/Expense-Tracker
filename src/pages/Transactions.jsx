import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDeleteTransaction } from "../hooks/useTransactions";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Clock4,
  Wallet,
  ArrowRight,
  Search,
  Download,
  Pencil,
  Trash2,
} from "lucide-react";
import AddTransactionForm from "../components/AddTransactionForm";
import { useTransactions } from "../hooks/useTransactions";
import { useCategories } from "../hooks/useCategories";
function Transactions() {
  const deleteTransaction = useDeleteTransaction();
  const { data, isLoading } = useTransactions();
  const { data: categoryData } = useCategories();
  const [editingTransaction, setEditingTransaction] = useState(null);
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this transaction?")) return;
    try {
      await deleteTransaction.mutateAsync(id);
      toast.success("Transaction deleted");
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete failed");
    }
  };
  const categories = categoryData?.categories || [];
  const transactions = data?.transactions || [];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const pending = transactions.filter((t) => t.status === "Pending").length;
  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setShowAddModal(true);
  };
  const balance = income - expenses;

  const stats = [
    {
      title: "Income",
      value: `₹${income.toLocaleString()}`,
      icon: ArrowUpCircle,
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "Expenses",
      value: `₹${expenses.toLocaleString()}`,
      icon: ArrowDownCircle,
      color: "from-rose-500 to-red-500",
      bg: "bg-rose-50 dark:bg-rose-900/20",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock4,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      title: "Balance",
      value: `₹${balance.toLocaleString()}`,
      icon: Wallet,
      color: "from-sky-500 to-indigo-500",
      bg: "bg-sky-50 dark:bg-sky-900/20",
    },
  ];

  const perPage = 5;

  const filtered = useMemo(() => {
    return transactions.filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || (item.status || "Completed") === filter;

      return matchesSearch && matchesFilter;
    });
  }, [transactions, search, filter]);

  const totalPages = Math.ceil(filtered.length / perPage);

  const current = filtered.slice((page - 1) * perPage, page * perPage);

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl font-semibold">
        Loading Transactions...
      </div>
    );
  }

  const exportCSV = () => {
    if (transactions.length === 0) {
      toast.error("No transactions to export");
      return;
    }

    const headers = [
      "Title",
      "Category",
      "Amount",
      "Type",
      "Payment Method",
      "Date",
      "Note",
    ];

    const rows = transactions.map((t) => [
      t.title,
      t.category?.name || "",
      t.amount,
      t.type,
      t.paymentMethod,
      new Date(t.date).toLocaleDateString(),
      t.note || "",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "transactions.csv");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    toast.success("Transactions exported successfully!");
  };

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

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              + Add Transaction
            </button>

            <button
              onClick={exportCSV}
              className="group flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition dark:bg-slate-800 dark:text-white"
            >
              Export Report
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-0"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[10px] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div
                className={`absolute -top-10 -right-10 h-36 w-36 rounded-full ${item.bg}`}
              />

              <div className="relative flex justify-between">
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-slate-400 dark:text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-4 text-4xl font-bold text-slate-800 dark:text-white">
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
      <div className="rounded-[10px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,.06)] overflow-hidden dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
        <div className="flex flex-col lg:flex-row justify-between gap-4 p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Recent Transactions
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
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
                className="w-64 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            >
              <option>All</option>

              <option>Completed</option>

              <option>Pending</option>
            </select>

            <button
              onClick={exportCSV}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 font-semibold text-white"
            >
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800 text-black dark:text-white">
              <tr>
                <th text-black dark:text-white className="px-6 py-4 text-left">
                  Title
                </th>

                <th className="px-6 py-4 text-left">Category</th>

                <th className="px-6 py-4 text-left">Payment</th>

                <th className="px-6 py-4 text-left">Date</th>

                <th className="px-6 py-4 text-right">Amount</th>

                <th className="px-6 py-4 text-center">Type</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {current.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-slate-500">
                    No Transactions Found
                  </td>
                </tr>
              ) : (
                current.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white">
                          {item.title?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <h3 className="font-semibold text-slate-800 dark:text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      {item.category?.name || "Other"}
                    </td>

                    <td className="px-6 py-5">{item.paymentMethod}</td>

                    <td className="px-6 py-5">
                      {new Date(item.date).toLocaleDateString()}
                    </td>

                    <td
                      className={`px-6 py-5 text-right font-bold ${
                        item.type === "income"
                          ? "text-emerald-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.type === "income" ? "+" : "-"}₹{item.amount}
                    </td>

                    <td className="px-6 py-5 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.type === "income"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="rounded-xl bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="rounded-xl bg-red-100 p-2 text-red-600 hover:bg-red-200"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 p-6 dark:border-slate-800">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="rounded-xl border border-slate-200 px-5 py-2 transition disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            Previous
          </button>

          <span className="font-medium text-slate-600 dark:text-slate-300">
            Page {page} of {totalPages || 1}
          </span>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-xl border border-slate-200 px-5 py-2 transition disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            Next
          </button>
        </div>
      </div>
      <AddTransactionForm
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingTransaction(null);
        }}
        categories={categories}
        transaction={editingTransaction}
      />
    </div>
  );
}

export default Transactions;
