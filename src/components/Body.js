import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata"



  
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resObj.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant.data} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;