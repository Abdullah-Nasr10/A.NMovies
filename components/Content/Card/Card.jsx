// ===========================================
// import { LuSquareArrowOutUpRight as Show } from "react-icons/lu";
// import MovieDetailsModal from "./MoveiDetailsModal";
// import FavoriteContext from "../../Conext/FavoriteContext.jsx";
import { useState } from "react";
import { LuExpand as Show } from "react-icons/lu";
import { FaRegHeart as Heart } from "react-icons/fa";
import { FaHeart as FillHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../src/store/slices/favoriteSlice";
// ===========================================
import "./Card.css";
function Card({ mov }) {
  // ===================
  // const [isFavorit, setIsFavorit] = useState(false);
  // const [favoritList, setFavoritList] = useState([]);
  const [isOverlayShow, setIsOverlayShow] = useState(false);
  const navigateDetails = useNavigate();
  const dispatch = useDispatch();
  const favoritList = useSelector((state) => state.favorite.favoritList);

  const handleShowOverlay = (isOverlayShow) => {
    setIsOverlayShow(isOverlayShow);
  };

  // ------------data-start-------------
  const movId = mov.id;
  const movOverview = mov.overview;
  const movType = mov.media_type;
  const poster = mov.poster_path
    ? "https://image.tmdb.org/t/p/w300/" + mov.poster_path
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9-1titRqYpIO0AZKctuUE7v7Jtnc_n9pDA&s";

  const movTitle = mov.title || mov.name;
  const movVote = Math.floor(mov.vote_average * 10) || 0;
  let votColor;

  if (movVote >= 70) {
    votColor = "#21CF79";
  } else if (movVote >= 50 && movVote < 70) {
    votColor = "#D2D531";
  } else {
    votColor = "#DB2360";
  }
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(mov.first_air_date || mov.release_date || "2000-05-19");
  const movDate = `${
    months[date.getMonth()]
  } ${date.getDate()},${date.getFullYear()}`;
  let year = new Date().getFullYear();
  const oldMov = year - date.getFullYear();

  // --------------------------data-End---------------------
  const isFavoritExist = favoritList.some((item) => item.movId === movId);
  // ==================handle favorite========================
  const handleFavoritList = () => {
    dispatch(
      toggleFavorite({
        movId,
        movTitle,
        movDate,
        movVote,
        votColor,
        poster,
        movOverview,
        oldMov,
        movType,
      })
    );
  };

  // ###################################################################################
  return (
    <>
      <div className="col">
        <div className="card">
          {!oldMov && <div className="newMovie center">New</div>}

          {/* ====================overLay-Start==================== */}
          <div
            className="image"
            onMouseEnter={() => handleShowOverlay(1)}
            onMouseLeave={() => handleShowOverlay(0)}
          >
            <img src={poster} alt={movTitle} />

            {/* =============btnShow-start========= */}
            <div
              className="showDetails center"
              style={{
                transform: `scaleY(${isOverlayShow ? 1 : 0})`,
                transformOrigin: "bottom",
              }}
            >
              <Show
                className="show"
                onClick={() => navigateDetails(`/details/${movType}/${mov.id}`)}
              />

              {/* -----------------handle-HeartFavorit----------- */}

              {/* <Heart className="favorit" /> */}
              {isFavoritExist ? (
                <FillHeart
                  className="favorit isFavorit"
                  onClick={handleFavoritList}
                />
              ) : (
                <Heart className="favorit" onClick={handleFavoritList} />
              )}
            </div>
            {/* ===============btnShow-End================ */}
            <div
              className="vote center rounded-circle text-white position-absolute"
              style={{ "--percent": movVote / 100, "--votColor": votColor }}
              title="Vote"
            >
              {movVote}
              <sup>%</sup>
            </div>
          </div>
          {/* ====================overLay-End========================= */}
          <h3 className="mt-3 mb-0 movTitle">{movTitle}</h3>
          <p className="text-secondary dateMov">{movDate}</p>
        </div>
      </div>
    </>
  );
  // ###################################################################################
}

export default Card;
