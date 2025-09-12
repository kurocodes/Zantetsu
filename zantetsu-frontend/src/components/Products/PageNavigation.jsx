import { icons } from "../../assets/assets";

export default function PageNavigation({
  hasPreviousPage,
  hasNextPage,
  currentPage,
  handlePageChange,
}) {
  return (
    <div className="flex justify-between items-center mt-5">
      {/* Previous Page */}
      <PageNavButton
        handlePageChange={handlePageChange}
        dir={-1}
        show={hasPreviousPage}
      />

      {/* Page Numbers */}
      <div className="space-x-2">
        {hasPreviousPage && (
          <span className="bg-bgMuted text-white px-3 py-[6px] leading-none rounded-full">
            {currentPage - 1}
          </span>
        )}
        <span className="font-bold bg-highlight text-white px-3 py-[6px] leading-none rounded-full">
          {currentPage || 1}
        </span>
        {hasNextPage && (
          <span className="bg-bgMuted text-white px-3 py-[6px] leading-none rounded-full">
            {currentPage + 1}
          </span>
        )}
      </div>

      {/* Next Page */}
      <PageNavButton
        handlePageChange={handlePageChange}
        dir={1}
        show={hasNextPage}
      />
    </div>
  );
}

function PageNavButton({ handlePageChange, dir, show }) {
  return (
    <button
      disabled={!show}
      className={`${pageNavBtnStyle} ${
        !show ? "opacity-0" : "opacity-100 cursor-pointer"
      }`}
      onClick={() => handlePageChange(dir)}
    >
      {dir === 1 ? (
        <icons.IoIosArrowForward className={pageNavBtnIconStyle} />
      ) : (
        <icons.IoIosArrowBack className={pageNavBtnIconStyle} />
      )}
    </button>
  );
}

const pageNavBtnStyle =
  "group bg-accentGold text-2xl p-2 rounded-lg hover:bg-highlight hover:text-bgLight transition duration-200";
const pageNavBtnIconStyle = "group-hover:scale-120 transition-all duration-200";
