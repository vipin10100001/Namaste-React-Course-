import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockdata"



  
const Body = () => {
    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={ ()=>{
          alert("You clicked the button");
        }}>Top Rated Restaurants</button>

        </div>

        <div className="res-container">
          {resObj.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant.data} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;