import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}) {
  return (
    <div
      className="
        bg-white
       rounded-[26px]
        p-6
        shadow-sm
        border
        border-gray-100
        hover:-translate-y-1 hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs uppercase tracking-wider text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2 text-gray-800">
            {value}
          </h2>

          <div
            className={`flex items-center gap-1 mt-3 text-sm font-medium ${
              positive ? "text-emerald-600" : "text-red-500"
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

        <div className="h-12 w-12 rounded-[26px] bg-emerald-50 flex items-center justify-center">

          <Icon
            size={22}
            className="text-emerald-700"
          />

        </div>

      </div>
    </div>
  );
}

export default StatCard;