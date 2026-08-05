import { useState } from "react";
import { X } from "lucide-react";
import { useCreateTransaction } from "../hooks/useTransactions";
import toast from "react-hot-toast";

function AddTransactionForm({ open, onClose, categories = [] }) {
  const createTransaction = useCreateTransaction();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    paymentMethod: "Cash",
    note: "",
    date: new Date().toISOString().slice(0, 10),
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTransaction.mutateAsync({
        ...form,
        amount: Number(form.amount),
      });

      toast.success("Transaction Added Successfully");
      
      onClose();

      setForm({
        title: "",
        amount: "",
        type: "expense",
        category: "",
        paymentMethod: "Cash",
        note: "",
        date: new Date().toISOString().slice(0, 10),
      });
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Failed to create transaction");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold dark:text-white">
            Add Transaction
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="Netflix"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="999"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="expense">Expense</option>

                <option value="income">Income</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="">Select Category</option>

                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Payment Method
              </label>

              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option>Cash</option>

                <option>UPI</option>

                <option>Credit Card</option>

                <option>Debit Card</option>

                <option>Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold dark:text-white">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Note
            </label>

            <textarea
              rows={4}
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Optional note..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={createTransaction.isPending}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {createTransaction.isPending ? "Saving..." : "Save Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionForm;
