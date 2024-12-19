"use client";
import React, { useState } from "react";
import data from "../../../../lib/data.js";
import ProductDisplay from "../../../../../components/products/ProductDisplay.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PaginationDisplay() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    if (totalPages <= 3) {
      // Show all pages if total is less than or equal to 3
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first three pages
      pages.push(1, 2, 3);

      // Add ellipsis and last page if needed
      if (totalPages > 2) {
        if (currentPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full flex flex-col items-center ">
      {/* Display paginated items */}
      <div className="h-[5993.59px]  gap-[40px] bg-white   xl:h-[2454px] z-10 xl:gap-[60px] 2xl:h-[2204px] md:mt-[20px] xl:mt-[60px] md:h-[3590px] sm:gap-[18px]   w-[327px]   sm:w-[1184px] md:w-full xl:w-[1199px] 2xl:w-[1184px] mt-[20px] grid grid-cols-1 2xl:gap-[31px] md:grid-cols-2 place-items-center xl:grid-cols-3">
        {currentItems.map((el, i) => (
          <div key={i}>
            <ProductDisplay
              id={el.id}
              image={el.image.src}
              values={el.values}
              model={el.model}
              title={el.title}
            />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="mt-4 mb-5 flex gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[36px] h-[36px] bg-[#364436] text-white rounded-full disabled:opacity-50"
        >
          <ArrowBackIcon />
        </button>

        {renderPagination().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => goToPage(page)}
              className={`w-[36px] h-[36px] rounded-full ${
                currentPage === page
                  ? "bg-[#364436] text-white"
                  : "bg-[#D6D6D6] text-black"
              }`}
            >
              {page}
            </button>
          ) : (
            <span
              key={index}
              className="w-[36px] h-[36px] flex items-center justify-center text-black"
            >
              ...
            </span>
          )
        )}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[36px] h-[36px] rounded-full bg-[#364436] text-white disabled:opacity-50"
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default PaginationDisplay;
