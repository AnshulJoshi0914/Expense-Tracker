import {
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

function Analytics() {
  const categoryData = [
    {
      name: "Housing",
      value: 1450,
      color: "#10B981",
    },
    {
      name: "Food",
      value: 412,
      color: "#06B6D4",
    },
    {
      name: "Transport",
      value: 268,
      color: "#EAB308",
    },
    {
      name: "Utilities",
      value: 194,
      color: "#EF4444",
    },
    {
      name: "Leisure",
      value: 132,
      color: "#8B5CF6",
    },
  ];

  const total = categoryData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">

      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">

              Analytics

            </p>

            <h2 className="mt-2 text-4xl font-bold">

              ${total.toLocaleString()}

            </h2>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

            <TrendingUp size={28} />

          </div>

        </div>

        <div className="mt-5 flex items-center gap-2 text-sm">

          <ArrowUpRight size={16} />

          <span>+12.6% compared to last month</span>

        </div>

      </div>

      <div className="p-6">

        <div className="flex h-3 overflow-hidden rounded-full bg-slate-100">

          {categoryData.map((item) => (
            <div
              key={item.name}
              style={{
                width: `${(item.value / total) * 100}%`,
                background: item.color,
              }}
            />
          ))}

        </div>

        <div className="mt-7 space-y-5">

          {categoryData.map((item) => (

            <div
              key={item.name}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-3">

                <div
                  className="h-3.5 w-3.5 rounded-full"
                  style={{
                    background: item.color,
                  }}
                />

                <span className="font-medium text-slate-700">

                  {item.name}

                </span>

              </div>

              <div className="text-right">

                <p className="font-bold text-slate-800">

                  ${item.value}

                </p>

                <p className="text-xs text-slate-400">

                  {(
                    (item.value / total) *
                    100
                  ).toFixed(0)}
                  %

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Analytics;