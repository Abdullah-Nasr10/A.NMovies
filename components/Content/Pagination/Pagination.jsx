import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
// import "./MoviesCards.css";
function PaginationMoveis({ page, setPage, total }) {
  return (
    <Pagination>
      <Pagination.First
        className="paginationBtn"
        onClick={() => setPage(1)}
        disabled={page === 1}
      />
      <Pagination.Prev
        className="paginationBtn"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      />
      <Pagination.Item className="paginationBtnActive paginationBtn">
        {page}
      </Pagination.Item>

      {/* <Pagination.Ellipsis className="paginationBtn" /> */}
      {/* <Pagination.Item>{page + 10}</Pagination.Item> */}
      <Pagination.Next
        className="paginationBtn"
        onClick={() => setPage(page + 1)}
        disabled={page === total}
      />
      <Pagination.Last
        className="paginationBtn"
        onClick={() => setPage(total)}
        disabled={page === total}
      />
    </Pagination>
  );
}

export default PaginationMoveis;
