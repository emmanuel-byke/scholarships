import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { getThreePages } from "../logical/logicalHelper";


export const SectionWithPagination = ({ 
  title, 
  items, 
  page, 
  setPage, 
  itemsPerPage, 
  renderItem,
  className,
  
}) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={`mt-12 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">{title} ({items.length})</h2>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Page {page} of {totalPages}</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-lg p-6 text-center text-slate-500">
          No items found
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderItem(item)}
              </React.Fragment>
            ))}
          </div>

          {totalPages > 1 && (
            <PaginationControls
              currentPage={page}
              totalPages={totalPages}
              onPrev={() => setPage(p => Math.max(1, p - 1))}
              onNext={() => setPage(p => Math.min(totalPages, p + 1))}
              className="mt-8"
            />
          )}
        </>
      )}
    </section>
  );
};



export default function Pagination({ currentPage, totalPages, onPageChange, className }) {
    const NavBtn = ({i}) => (
        <button
            onClick={() => onPageChange(i+1)}
            className={`px-4 py-2 rounded-md ${
                currentPage === i+1 
                    ? 'bg-emerald-500/90 text-white hover:bg-emerald-500'
                    : 'bg-gray-700 text-gray-300 hover:bg-emerald-500/40'
            } transition-colors`}
        >
            {i+1}
        </button>
    );

    const pageRange = getThreePages(currentPage, totalPages)

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-2 rounded-md bg-gray-700 text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors 
                    disabled:opacity-50"
            >
                <ChevronLeft className="w-9 h-9 text-white" />
            </button>
            
            <div className="pr-2"><NavBtn i={0} /></div>
            {Array.from({ length: pageRange.length }, (_, i) => (
                <div key={pageRange[0]+i-1}><NavBtn i={pageRange[0]+i-1} /></div>
            ))}
            {totalPages>1 && <div className="pl-2"><NavBtn i={totalPages-1} /></div>}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-2 rounded-md bg-gray-700 text-gray-300 hover:bg-emerald-500 hover:text-white transition-colors 
                    disabled:opacity-50"
            >
                <ChevronRight className="h-9 w-9 text-white" />
            </button>
        </div>
    );
}

export const PaginationControls = ({ currentPage, totalPages, onPrev, onNext, className }) => (
  <div className={`flex justify-center items-center gap-4 ${className}`}>
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <span className="text-slate-700 text-sm">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
);