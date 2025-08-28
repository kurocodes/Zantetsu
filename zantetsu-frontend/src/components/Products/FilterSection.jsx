import { icons } from "../../assets/assets";
import { Filter } from "./Filter";
import { PriceFilter } from "./PriceFilter";
import { SortFilter } from "./SortFilter";

export default function FilterSection() {
  return (
    <aside className="hidden sticky top-20 self-start lg:flex flex-col text-bgLight">
      <div className="flex items-center gap-2 py-4">
        <icons.FilterIcon />
        <span>Filter & Sort</span>
      </div>

      <div className="flex flex-col">
        <Filter
          label="Category"
          options={["Action Figures", "Keychains", "Katanas", "Posters"]}
        />
        <Filter
          label="Anime"
          options={[
            "Naruto",
            "Bleach",
            "One Piece",
            "Demon Slayer",
            "Dragon Ball Z",
          ]}
        />

        <PriceFilter />
        <SortFilter />

        <div className="group flex items-center justify-between gap-2 py-4 border-t-2 border-bgMuted cursor-pointer">
          <span>Number of Products</span>
          <span className="bg-accentGold text-bgDark font-medium px-2 rounded-full">
            0
          </span>
        </div>
      </div>
    </aside>
  );
}
