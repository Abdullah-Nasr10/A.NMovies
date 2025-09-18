import { useSelector } from "react-redux";
import Loader from "../../components/Content/Loader/Loader";
import NoResult from "../../components/Content/NoResult/NoResult";
import Card from "../../components/Content/Card/Card";
import "./Search.css";

function Search() {
  const data = useSelector((store) => store.search.data);
  const isLoading = useSelector((store) => store.search.isLoading);
  //   const error = useSelector((store) => store.search.error);

  if (isLoading) return <Loader />;

  //   if (error) return <div>Error: {error.message}</div>;

  if (!data?.length) return <NoResult />;

  return (
    <div className="container mt-5">
      <h3>Search Results</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-3 mt-3">
        {data.map((item) => (
          <Card key={item.id} mov={item} />
        ))}
      </div>
    </div>
  );
}

export default Search;
