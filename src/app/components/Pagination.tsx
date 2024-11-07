type PaginationProps = {
    currentPage: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, onPageChange }: PaginationProps) => (
    <div className="flex justify-center mt-4">
      {/* Bouton Previous - Masqué si on est sur la première page */}
      {currentPage > 0 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded mr-2"
        >
          Previous
        </button>
      )}
      
      {/* Bouton Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
  
  export default Pagination;
  