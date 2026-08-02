import { categoryData } from "../data/analytics";

function Analytics() {

  const total = categoryData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

      <h2 className="font-bold text-2xl">
        Analytics
      </h2>

      <p className="text-gray-500 text-sm mt-1">
        Spend by Category
      </p>

      <h1 className="text-5xl font-bold mt-5">
        ${total.toLocaleString()}
      </h1>

      {/* Progress */}

      <div className="flex h-3 rounded-full overflow-hidden mt-6">

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

      {/* Legend */}

      <div className="mt-8 space-y-4">

        {categoryData.map((item) => (

          <div
            key={item.name}
            className="flex justify-between items-center"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <span className="text-gray-700">

                {item.name}

              </span>

            </div>

            <span className="font-semibold">

              ${item.value}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Analytics;