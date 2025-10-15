import { icons } from "../../assets/assets";
import ActiveUsers from "../components/Dashboard/ActiveUsers";
import ConversionRate from "../components/Dashboard/ConversionRate";
import DashboardStatCard from "../components/Dashboard/DashboardStatCard";
import MonthlyTargetCard from "../components/Dashboard/MonthlyTargetCard";
import RevenueAnalyticsChart from "../components/Dashboard/RevenueAnalyticsChart";
import TopCategories from "../components/Dashboard/TopCategories";
import TrafficSource from "../components/Dashboard/TrafficSource";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 auto-rows-max items-start gap-4 font-body">
      {dashboardStats.map((stat) => (
        <DashboardStatCard key={stat.title} {...stat} />
      ))}
      <div className="row-span-3 h-full"><TopCategories /></div>
      <div className="col-span-2 row-span-2 h-full">
        <RevenueAnalyticsChart />
      </div>
      <div className="row-span-2 h-full">
        <MonthlyTargetCard />
      </div>
      <div className="row-span-2 h-full">
        <ActiveUsers />
      </div>
      <div className="col-span-2 row-span-2 h-full">
        <ConversionRate />
      </div>
      <div className="row-span-2 h-full">
        <TrafficSource />
      </div>
    </div>
  );
}

const dashboardStats = [
  {
    title: "Total Sales",
    value: "$983,412",
    change: "+3.34%",
    changeLabel: "vs last week",
    icon: icons.PiCurrencyCircleDollar,
    highlight: true,
  },
  {
    title: "Total Orders",
    value: "58,375",
    change: "-2.89%",
    changeLabel: "vs last week",
    icon: icons.LuShoppingCart,
    highlight: false,
  },
  {
    title: "Total Visitors",
    value: "237,782",
    change: "+8.02%",
    changeLabel: "vs last week",
    icon: icons.LuCircleUserRound,
    highlight: false,
  },
];
