export function ProductCardSkeleton({ imgHeight }) {
  return (
    <div className="bg-bgMuted rounded-2xl shadow-md p-3 animate-pulse">
      <div className={`bg-bgSoft w-full rounded-md mb-4 ${imgHeight}`}></div>
      <div className="h-6 bg-bgSoft rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-bgSoft rounded w-1/2 mb-4"></div>
      <div className="flex gap-2">
        <div className="h-10 w-12 bg-bgSoft rounded-lg"></div>
        <div className="h-10 bg-bgSoft rounded w-full"></div>
      </div>
    </div>
  );
}
