import React from "react";

export default function CategoryBadge({ category, subCategory}) {
  return (
    <div className="flex gap-2">
      <span className="bg-bgMuted text-bgLight text-xs px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="bg-bgMuted text-bgLight text-xs px-3 py-1 rounded-full">
        {subCategory}
      </span>
    </div>
  );
}
