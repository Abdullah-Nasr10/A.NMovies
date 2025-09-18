import { useEffect, useState } from "react";
import Card from "../../components/Content/Card/Card";
import Loader from "../../components/Content/Loader/Loader";
import NoResult from "../../components/Content/NoResult/NoResult";
import PaginationMoveis from "../../components/Content/Pagination/Pagination";
import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesData } from "../../src/store/slices/moviesSlice";

function Movies() {
  const movies = useSelector((store) => store.movies.data);
  const isLoading = useSelector((store) => store.movies.isLoading);
  const error = useSelector((store) => store.movies.error);
  const totalPage = useSelector((store) => store.movies.totalPage);
  const [page, setPage] = useState(1);
  //   console.log(isLoading);
  const dispatch = useDispatch();
  // ============================useEffect-Start=========================
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMoviesData(page));
    }, 1500);
  }, [page, dispatch]);
  // ============================useEffect-End=========================

  console.log("movies: ", movies);
  if (error) {
    return (
      <>
        <NoResult />
        <div>{error}</div>
      </>
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mt-5">
      <h3>Movies</h3>
      <div className="cardsContainer row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-3 mt-3">
        {movies?.map((mov) => (
          <Card mov={mov} key={mov.id} />
        ))}
      </div>
      <div className="paginationContainer center">
        <PaginationMoveis page={page} setPage={setPage} total={totalPage} />
      </div>
    </div>
  );
}

export default Movies;
