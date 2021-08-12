import LocalSearch from "../LocalSearch/LocalSearch";
import CategorySearch from "../CategorySearch/CategorySearch";
import HostRecruit from "../HostRecruit/HostRecruit";

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
