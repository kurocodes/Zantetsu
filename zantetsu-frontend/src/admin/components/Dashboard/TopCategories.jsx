import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function TopCategories() {
  const total = categoryData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm h-full px-4 pt-4 pb-6 flex flex-col max-sm:gap-4 justify-between">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-bgLight/90">Top Categories</h2>
        <span className="text-xs font-medium text-bgLight/50">See All</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-[200px] h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                innerRadius={85}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                cornerRadius={2}
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`Cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs text-bgLight/50">Total Sales</p>
            <p className="text-xl text-bgLight/90 font-medium">
              ${total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full space-y-4">
        {categoryData.map((categrory, idx) => (
          <div key={idx} className="flex justify-between text-xs">
            <div className="flex items-center gap-2 text-bgLight/70">
              <span className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: categrory.color }}></span>
              {categrory.name}
            </div>
            <p className="font-medium text-bgLight/90">${categrory.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const categoryData = [
  { name: "Electronics", value: 1200000, color: "hsl(354,70%,50%,1)" },
  { name: "Fashion", value: 950000, color: "hsl(354,70%,50%,0.7)" },
  { name: "Home & Kitchen", value: 750000, color: "hsl(354,70%,50%,0.4)" },
  {
    name: "Beauty & Personal Care",
    value: 500000,
    color: "hsl(354,70%,50%,0.1)",
  },
];
