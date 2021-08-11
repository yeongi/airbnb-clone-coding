import LocalSearch from "../components/LocalSearch/LocalSearch";
import CategorySearch from "../components/CategorySearch/CategorySearch";
import HostRecruit from "../components/HostRecruit/HostRecruit";

const HomePage = (props) => {
  return (
    <>
      <LocalSearch />
      <CategorySearch />
      <HostRecruit onHostClick={props.hostModalClickHandler} />
    </>
  );
};

export default HomePage;
