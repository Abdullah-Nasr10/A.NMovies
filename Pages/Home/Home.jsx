import "./Home.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BsBoxArrowUpRight as Show } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
//----------------------
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "../../components/Content/Card/Card";
import Loader from "../../components/Content/Loader/Loader";

// ===========================================================

function Home() {
  const [isOverlayShow, setIsOverlayShow] = useState(false);
  const navigateDetails = useNavigate();
  const trending = useSelector((store) => store.trending.data);
  console.log("trending: ", trending);
  const isLoading = useSelector((store) => store.trending.isLoading);

  if (isLoading) {
    return <Loader />;
  }
  // =======data========
  function backgroundPoster(mov) {
    const backgroundPoster = mov.backdrop_path
      ? `https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`
      : "https://t3.ftcdn.net/jpg/09/68/64/82/360_F_968648260_97v6FNQWP3alhvyfLWtQTWGcrWZvAr1C.jpg";
    return backgroundPoster;
  }

  return (
    <>
      {/* ======================Swiper-Header-Start========================== */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper mt-3 text-center"
      >
        {trending.slice(0, 10)?.map((mov) => (
          <SwiperSlide>
            <div
              className="homePosterContainer"
              onMouseEnter={() => setIsOverlayShow(1)}
              onMouseLeave={() => setIsOverlayShow(0)}
            >
              <img src={backgroundPoster(mov)} />
              <div
                className="homePosterOverlay center flex-column"
                style={{
                  transform: `scaleX(${isOverlayShow ? 1 : 0})`,
                  transition: "0.2s",
                }}
              >
                <h3>Trending</h3>
                <Show
                  className="show fs-2"
                  onClick={() =>
                    navigateDetails(`/details/${mov.media_type}/${mov.id}`)
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ======================Swiper-Header-End============================ */}
      {!isLoading && (
        <div className="homeIntroBanner mt-5 d-flex align-items-center">
          <div className="container fs-2">
            <h1>Welcome.</h1>
            Millions of movies, TV shows and people to discover. Explore now.
          </div>
        </div>
      )}
      {/* ======================Swiper-Card-Start============================ */}
      <div className="container cardSwiper">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
          className="mySwiper mt-5 pb-5"
        >
          {trending?.map((mov) => (
            <SwiperSlide>
              <Card mov={mov} key={mov.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ======================Swiper-Card-End============================== */}
    </>
  );
}

export default Home;
