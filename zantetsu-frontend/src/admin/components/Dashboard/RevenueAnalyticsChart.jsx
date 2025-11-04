import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { icons } from "../../../assets/assets";

const data = [
  { date: "", revenue: 8500, orders: 4200 },
  { date: "12 Aug", revenue: 8500, orders: 4200 },
  { date: "13 Aug", revenue: 9800, orders: 4800 },
  { date: "14 Aug", revenue: 11200, orders: 5600 },
  { date: "15 Aug", revenue: 12600, orders: 6200 },
  { date: "16 Aug", revenue: 14500, orders: 7200 },
  { date: "17 Aug", revenue: 11800, orders: 5400 },
  { date: "18 Aug", revenue: 10200, orders: 4600 },
  { date: "", revenue: 10200, orders: 4600 },
];

const CustomCursor = ({ points, width, height }) => {
  const { x } = points[0]; // X position of the hovered point
  return (
    <rect
      x={x - 20} // adjust how wide it appears (centered)
      y={0}
      width={40} // total width
      height={height}
      fill="url(#cursorGradient)" // reference to gradient below
      rx={3} // smooth rounded edges (optional)
    />
  );
};

export default function RevenueAnalyticsChart() {
  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg text-bgLight/90">Revenue Analytics</h2>
          <button className="max-xs:hidden flex items-center gap-1 bg-[hsl(0,0%,23%)] hover:bg-[hsl(0,0%,33%)] text-bgLight/70 text-xs px-2.5 py-1 rounded cursor-pointer">
            <span className="mt-0.5">Last 8 Days</span>
            <icons.IoIosArrowDown className="mt-0.5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="border-b-2 w-4 h-0 border-highlight"></div>
            <span className="text-xs text-bgLight/70">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="border-b-2 w-4 h-0 border-highlight border-dashed"></div>
            <span className="text-xs text-bgLight/70">Order</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 0, left: -26, bottom: 0 }}
        >
          <defs>
            <linearGradient id="cursorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="hsl(354, 70%, 50%)"
                stopOpacity={0.4}
              />
              <stop offset="100%" stopColor="hsl(354, 70%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(0,0%,30%)"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fill: "#888", dy: 6 }}
            axisLine={false}
            tickLine={false}
            fontSize={10}
            fontWeight={500}
          />
          <YAxis
            tickFormatter={(v) => `${v / 1000}k`}
            tick={{ fill: "#888", dx: -4 }}
            axisLine={false}
            tickLine={false}
            fontSize={10}
            fontWeight={500}
          />
          <Tooltip content={<CustomToolTip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(354,70%,50%)"
            strokeWidth={2}
            dot={{ r: 0, strokeWidth: 2, fill: "#fff", stroke: "#f97316" }}
            activeDot={{ r: 6 }}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="hsl(354,70%,50%)"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
            name="Order"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomToolTip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[hsl(0,0%,23%,0.8)] text-bgLight/70 px-3 py-2 rounded-lg text-xs space-y-1">
        <p className="text-[10px] text-bgLight/70">{label}</p>
        <div className="flex flex-col gap-[2px]">
          {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex justify-between gap-4">
              <span>{entry.name}</span>
              <span className="font-medium">
                {entry.name === "Revenue" ? `$${entry.value}` : entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
