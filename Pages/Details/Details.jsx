import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../src/store/slices/movieDetailsSlice";
import { fetchCredits } from "../../src/store/slices/creditsSlice";
import Loader from "../../components/Content/Loader/Loader";
import "./Details.css";
import NoResult from "../../components/Content/NoResult/NoResult";

function Details() {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const { movie, loading: movieLoading } = useSelector(
    (state) => state.movieDetails
  );
  const { cast, loading: creditsLoading } = useSelector(
    (state) => state.credits
  );
  // #########################################################################
  useEffect(() => {
    dispatch(fetchMovieDetails({ type, id }));
    dispatch(fetchCredits({ type, id }));
  }, [dispatch, type, id]);

  if (movieLoading || creditsLoading) return <Loader />;
  if (!movie) return <NoResult />;

  // ###############################################################################
  const backgroundPoster = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : "https://t3.ftcdn.net/jpg/09/68/64/82/360_F_968648260_97v6FNQWP3alhvyfLWtQTWGcrWZvAr1C.jpg";
  // -------data-------
  const poster = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300/" + movie.poster_path
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9-1titRqYpIO0AZKctuUE7v7Jtnc_n9pDA&s";

  const movTitle = movie.title || movie.name;
  const movVote = Math.floor(movie.vote_average * 10) || 0;
  let votColor;

  if (movVote >= 70) {
    votColor = "#21CF79";
  } else if (movVote >= 50 && movVote < 70) {
    votColor = "#D2D531";
  } else {
    votColor = "#DB2360";
  }

  const date = new Date(
    movie.first_air_date || movie.release_date || "2000-05-19"
  );
  const year = date.getFullYear();

  //   #############################################################################

  return (
    <>
      {/* ===================Header-Movie-Details-start=========================== */}
      <div
        className="movieDetails"
        style={{ "--backgroundPoster": `url(${backgroundPoster})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <img src={poster} alt="" className="rounded-4 w-100" />
            </div>
            <div className="col-12 col-md-6 col-lg-9 pt-4 pb-4">
              {/* ------------------------------------- */}
              <h2 className="movTile fw-bolder">
                {movTitle}{" "}
                <span style={{ color: "#D2D2D7", fontWeight: 500 }}>
                  ({year})
                </span>
              </h2>
              {/* ------------------------------------- */}
              <span className="movType">{type}</span>
              {/* ------------------------------------- */}
              <div className="d-flex mt-4 mb-4">
                <div
                  className="vote center rounded-circle text-white "
                  style={{ "--percent": movVote / 100, "--votColor": votColor }}
                  title="Vote"
                >
                  {movVote}
                  <sup>%</sup>
                </div>
                <span className="ms-2 fs-4 fw-medium center">User Score</span>
              </div>
              {/* ----------------------------------------- */}
              <em style={{ color: "#D2D2D7" }}>{movie.tagline}</em>
              {/* ----------------------------------------- */}
              <h4 className="mt-2">Overview</h4>
              <p style={{ color: "#D2D2D7" }} className="fs-6 ">
                {movie.overview}
              </p>
              {/* ----------------------------------------- */}
              <div className="row">
                {movie?.created_by?.map((auth, index) => (
                  <div className="col" key={index}>
                    <h5 className=" fw-bold fs-6">{auth.name}</h5>
                    <p className="fw-light fs-6" style={{ color: "#D2D2D7" }}>
                      Creator
                    </p>
                  </div>
                ))}
              </div>
              {/* ----------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
      {/* ===================Header-Movie-Details-End=========================== */}

      <div className="Cast">
        <div className="container">
          <h2>Cast</h2>
          <div className="castList row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 mt-4">
            {cast.slice(0, 10).map((actor) => (
              <div className="col" key={actor.id}>
                <div className="actorCard ">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
                    }
                    alt={actor.name}
                    className=" w-100"
                  />
                  <div className="actorNameCaractar">
                    <p className="fs-5  fw-semibold mb-0">{actor.name}</p>
                    <small>as {actor.character}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ############################################################################## */}
    </>
  );
}

export default Details;
