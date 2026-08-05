import { Funnel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ExpenseTable({ transactions = [] }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

      <div className="flex items-center justify-between border-b border-slate-100 px-7 py-6 dark:border-slate-800">

        <div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">

            Recent Transactions

          </h2>

          <p className="mt-1 text-slate-500 dark:text-slate-400">

            Your latest activity

          </p>

        </div>

        <button className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700 transition-all hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">

          <Funnel size={18} />

          Filter

        </button>

      </div>

      <div className="p-4">

        {transactions.length === 0 ? (

          <div className="py-10 text-center text-slate-500 dark:text-slate-400">

            No Transactions Yet

          </div>

        ) : (

          transactions.map((transaction) => (

            <div
              key={transaction._id}
              className="flex items-center justify-between rounded-2xl p-4 transition hover:bg-slate-50 dark:hover:bg-slate-800"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-bold text-white">

                  {transaction.title?.charAt(0).toUpperCase()}

                </div>

                <div>

                  <h3 className="font-semibold text-slate-800 dark:text-white">

                    {transaction.title}

                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                    {transaction.paymentMethod} •{" "}
                    {new Date(transaction.date).toLocaleDateString()}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">

                  {transaction.category?.name || "Other"}

                </span>

                <span
                  className={`min-w-[110px] text-right text-lg font-bold ${
                    transaction.type === "income"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >

                  {transaction.type === "income" ? "+" : "-"}₹
                  {transaction.amount}

                </span>

              </div>

            </div>

          ))

        )}

      </div>

      <div className="border-t border-slate-100 px-7 py-5 dark:border-slate-800">

        <Link
          to="/transactions"
          className="group flex items-center gap-2 font-semibold text-emerald-600 hover:gap-3 dark:text-emerald-400"
        >

          View All Transactions

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />

        </Link>

      </div>

    </div>
  );
}

export default ExpenseTable;