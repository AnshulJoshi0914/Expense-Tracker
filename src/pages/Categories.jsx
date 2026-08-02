import { Plus, Pencil, Trash2, Utensils, Car, House, ShoppingBag, Film, HeartPulse } from "lucide-react";

function Categories() {

  const categories = [
    {
      id: 1,
      name: "Food",
      icon: <Utensils size={22} />,
      color: "bg-cyan-100 text-cyan-700",
      transactions: 42,
    },
    {
      id: 2,
      name: "Transport",
      icon: <Car size={22} />,
      color: "bg-yellow-100 text-yellow-700",
      transactions: 18,
    },
    {
      id: 3,
      name: "Housing",
      icon: <House size={22} />,
      color: "bg-emerald-100 text-emerald-700",
      transactions: 8,
    },
    {
      id: 4,
      name: "Shopping",
      icon: <ShoppingBag size={22} />,
      color: "bg-purple-100 text-purple-700",
      transactions: 24,
    },
    {
      id: 5,
      name: "Entertainment",
      icon: <Film size={22} />,
      color: "bg-red-100 text-red-600",
      transactions: 13,
    },
    {
      id: 6,
      name: "Health",
      icon: <HeartPulse size={22} />,
      color: "bg-pink-100 text-pink-600",
      transactions: 9,
    },
  ];

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">

            Categories

          </h1>

          <p className="text-gray-500 mt-1">

            Organize your expenses

          </p>

        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">

          <Plus size={18} />

          Add Category

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {categories.map((category) => (

          <div
            key={category.id}
            className="bg-white rounded-3xl border shadow-sm p-6 hover:shadow-lg transition-all duration-300"
          >

            <div className="flex justify-between">

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color}`}>

                {category.icon}

              </div>

              <div className="flex gap-2">

                <button className="p-2 rounded-lg hover:bg-gray-100">

                  <Pencil size={18} />

                </button>

                <button className="p-2 rounded-lg hover:bg-red-100 text-red-500">

                  <Trash2 size={18} />

                </button>

              </div>

            </div>

            <h2 className="text-xl font-semibold mt-5">

              {category.name}

            </h2>

            <p className="text-gray-500 mt-2">

              {category.transactions} Transactions

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;