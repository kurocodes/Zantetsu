import { icons } from "../../assets/assets";
import { useFilters } from "../../context/FiltersContext";
import { Filter } from "./Filter";
import { PriceFilter } from "./PriceFilter";
import { SortFilter } from "./SortFilter";
import { motion } from "motion/react";

export default function FilterSection({ productCount, isDrawer = false, ...props }) {
  const { filterDrawerOpen, setFilterDrawerOpen } = useFilters();

  return (
    <motion.aside
      className={`${
        isDrawer
          ? "fixed md:hidden bottom-0 z-10 bg-bgSoft shadow-[0_0_10px_rgba(255,255,255,0.1)] w-full max-h-[90vh] overflow-y-auto px-10 py-5 rounded-t-4xl flex flex-col"
          : "hidden sticky top-20 md:flex flex-col"
      } self-start  text-bgLight`}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 py-4">
          <icons.FilterIcon />
          <span>Filter & Sort</span>
        </div>

        {isDrawer && (
          <span onClick={() => setFilterDrawerOpen(false)}>
            <icons.IoClose className="text-2xl" />
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <Filter
          label="Category"
          filterKey="productType"
          options={["Action Figure", "Keychain", "Katana", "Poster"]}
        />
        <Filter
          label="Anime"
          filterKey="anime"
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
            {productCount}
          </span>
        </div>
      </div>
    </motion.aside>
  );
}
