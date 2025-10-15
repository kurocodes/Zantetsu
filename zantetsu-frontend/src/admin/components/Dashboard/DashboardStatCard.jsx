export default function DashboardStatCard({
  title,
  value,
  change,
  changeLabel = "vs last week",
  icon: Icon,
  highlight = false,
}) {
  const isPositive = change?.startsWith("+");
  const changeColor = isPositive ? "text-green-500" : "text-red-300";

  return (
    <div
      className={`w-full rounded-md p-4 text-bgLight space-y-4 ${
        highlight ? "bg-[hsl(0,0%,23%)]" : "bg-[hsl(0,0%,13%)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-bgLight/70">{title}</span>
        <span
          className={`p-1.5 rounded ${
            highlight ? "bg-highlight" : "bg-[hsl(0,0%,23%)] text-bgLight/70"
          }`}
        >
          <Icon className="text-xl" />
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl">{value}</span>
        <div className="flex flex-col text-right">
          <span className={`${changeColor} font-medium text-xs`}>{change}</span>
          <span className="text-bgLight/50 text-[10px]">{changeLabel}</span>
        </div>
      </div>
    </div>
  );
}
