import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { useCategories } from "../hooks/useCategories";
import {
  useCreateBudget,
  useUpdateBudget,
} from "../hooks/useBudgets";

function AddBudgetForm({
  open,
  onClose,
  budget = null,
}) {
  const { data } = useCategories();

  const createBudget = useCreateBudget();
  const updateBudget = useUpdateBudget();

  const categories = data?.categories || [];

  const [form, setForm] = useState({
    category: "",
    limit: "",
  });

  useEffect(() => {
    if (budget) {
      setForm({
        category: budget.category?._id || "",
        limit: budget.limit || "",
      });
    } else {
      setForm({
        category: "",
        limit: "",
      });
    }
  }, [budget, open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category: form.category,
      limit: Number(form.limit),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    try {
      if (budget) {
        await updateBudget.mutateAsync({
          id: budget._id,
          budget: payload,
        });

        toast.success("Budget Updated");
      } else {
        await createBudget.mutateAsync(payload);

        toast.success("Budget Created");
      }

      onClose();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Operation Failed"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold dark:text-white">
            {budget ? "Edit Budget" : "Create Budget"}
          </h2>

          <button
            onClick={onClose}
            disabled={
              createBudget.isPending ||
              updateBudget.isPending
            }
          >
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

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
              <option value="">
                Select Category
              </option>

              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat._id}
                >
                  {cat.name}
                </option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Budget Limit
            </label>

            <input
              type="number"
              name="limit"
              value={form.limit}
              onChange={handleChange}
              required
              placeholder="10000"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold dark:border-slate-700 dark:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={
                createBudget.isPending ||
                updateBudget.isPending
              }
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-semibold text-white"
            >
              {createBudget.isPending ||
              updateBudget.isPending
                ? "Saving..."
                : budget
                ? "Update Budget"
                : "Create Budget"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddBudgetForm;