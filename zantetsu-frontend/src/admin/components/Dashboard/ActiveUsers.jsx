import { icons } from "../../../assets/assets";

export default function ActiveUsers() {
  return (
    <div className="bg-[hsl(0,0%,13%)] rounded-md shadow-sm h-full p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg text-bgLight/90">Active User</h2>
        <icons.BsThreeDots className="text-bgLight/50" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl text-bgLight font-medium">2,758</h3>
          <span className="text-bgLight/50 text-[10px]">Users</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-green-500 bg-green-900/20 w-fit px-1 py-0.5 rounded">
            +8.02%
          </span>
          <span className="text-bgLight/50 text-[10px]">from last month</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-bgLight/70">{item.name}</span>
              <span className="text-bgLight/70 font-medium">{item.value}%</span>
            </div>
            <div className="w-full h-2 rounded-[2px] bg-[hsl(354,70%,50%,0.1)]">
              <span
                className="h-full block rounded-[2px] bg-[hsl(354,70%,50%,1)]"
                style={{ width: `${item.value}%` }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  { name: "United States", value: 36 },
  { name: "United Kingdo", value: 24 },
  { name: "India", value: 17.5 },
  { name: "Russia", value: 15 },
];
