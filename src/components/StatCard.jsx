import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}) {
  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-slate-200/70 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-50 transition-all duration-500 group-hover:scale-125"></div>

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            {title}
          </p>

          <h2 className="mt-5 text-[2.4rem] font-bold tracking-tight text-slate-800">
            {value}
          </h2>

          <div
            className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
              positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-500"
            }`}
          >
            {positive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}

            {change}
          </div>

        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">

          <Icon size={30} strokeWidth={2.2} />

        </div>

      </div>

    </div>
  );
}

export default StatCard;