import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
// import { fetchMoviesData } from "../../src/store/slices/moviesSlice";
import { fetchTrending } from "../../src/store/slices/trendingSlice";

// ============================================================
function Layout() {
  const dispatch = useDispatch();

  // ============================useEffect-Start=========================
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTrending());
    }, 1500);
  }, [dispatch]);
  // ============================useEffect-End=========================

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
