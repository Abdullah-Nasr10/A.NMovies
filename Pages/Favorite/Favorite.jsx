import "./Favorite.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../src/store/slices/favoriteSlice.js";
import NoResult from "../../components/Content/NoResult/NoResult.jsx";
import { IoHeartCircle as Heart } from "react-icons/io5";

function Favorite() {
  const favoritList = useSelector((state) => state.favorite.favoritList);
  const dispatch = useDispatch();
  const isFavoritExist = (item) => {
    return favoritList.some((mov) => mov.movId === item.movId);
  };

  const handleFavoritList = (item) => {
    dispatch(removeFavorite(item.movId));
  };

  return (
    <>
      <div className="container mt-5">
        {favoritList.length > 0 ? (
          <>
            {favoritList.map((item) => (
              <div className="row favoriteCard mb-4" key={item.movId}>
                {/* ------------------imag-poster-------------------- */}
                <div className="col-12 col-md-4 col-lg-2 p-0">
                  <img src={item.poster} alt="Poster" className=" w-100" />
                </div>
                {/* ------------------moveieDetails-------------------- */}
                <div className="col-12 col-md-8 col-lg-10 p-4">
                  {/* ---------vote--------- */}
                  <div className="row center">
                    <div className="col-1 p-0">
                      <div
                        className="vote center rounded-circle text-white "
                        style={{
                          "--percent": item.movVote / 100,
                          "--votColor": item.votColor,
                        }}
                        title="Vote"
                      >
                        {item.movVote}
                        <sup>%</sup>
                      </div>
                    </div>
                    {/* ------------Title------------ */}
                    <div className="col-11 p-0">
                      <h4 className="title mb-0 fw-bold">{item.movTitle}</h4>
                      <p className="date mb-0  fw-normal">{item.movDate}</p>
                    </div>
                  </div>
                  {/* --------movType------------- */}
                  <span className="movType d-inline-block  mt-3">
                    {item.movType}
                  </span>
                  {/* --------overView------------- */}
                  <p className="mt-4">{item.movOverview}</p>
                  {/* ----------------favoriteHeart----------- */}
                  <div className="row">
                    <div className="col-2 d-flex align-items-center">
                      <Heart
                        className={`fs-2 me-2 heartIcon ${
                          isFavoritExist(item) ? "fillRed" : ""
                        }`}
                        onClick={() => {
                          handleFavoritList(item);
                        }}
                      />
                      <span>Favorite</span>
                    </div>
                  </div>
                  {/* ---------------------------------- */}
                  {!item.oldMov && (
                    <div className="newMov center">
                      <div className="text fs-5 fw-bold">New</div>
                    </div>
                  )}
                  {/* ---------------------------------- */}
                </div>
              </div>
            ))}
          </>
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
}

export default Favorite;
