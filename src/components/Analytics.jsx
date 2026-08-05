import {
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const colors = [
  "#10B981",
  "#06B6D4",
  "#EAB308",
  "#EF4444",
  "#8B5CF6",
  "#3B82F6",
  "#F97316",
];

function Analytics({ analytics = [] }) {
  const total = analytics.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">

              Analytics

            </p>

            <h2 className="mt-2 text-4xl font-bold">

              ₹{total.toLocaleString()}

            </h2>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

            <TrendingUp size={28} />

          </div>

        </div>

        <div className="mt-5 flex items-center gap-2 text-sm">

          <ArrowUpRight size={16} />

          <span>Expense by Category</span>

        </div>

      </div>

      <div className="p-6">

        {analytics.length === 0 ? (

          <div className="py-6 text-center text-slate-500 dark:text-slate-400">

            No Analytics Available

          </div>

        ) : (

          <>
            <div className="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">

              {analytics.map((item, index) => (
                <div
                  key={item.category}
                  style={{
                    width: `${(item.amount / total) * 100}%`,
                    background: colors[index % colors.length],
                  }}
                />
              ))}

            </div>

            <div className="mt-7 space-y-5">

              {analytics.map((item, index) => (

                <div
                  key={item.category}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="h-3.5 w-3.5 rounded-full"
                      style={{
                        background:
                          colors[index % colors.length],
                      }}
                    />

                    <span className="font-medium text-slate-700 dark:text-slate-200">

                      {item.category}

                    </span>

                  </div>

                  <div className="text-right">

                    <p className="font-bold text-slate-800 dark:text-white">

                      ₹{item.amount}

                    </p>

                    <p className="text-xs text-slate-400">

                      {(
                        (item.amount / total) *
                        100
                      ).toFixed(0)}
                      %

                    </p>

                  </div>

                </div>

              ))}

            </div>
          </>

        )}

      </div>

    </div>
  );
}

export default Analytics;