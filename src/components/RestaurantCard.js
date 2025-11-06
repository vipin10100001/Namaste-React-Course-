const RestaurantCard = (props) => {
    const { resname, cuisine, photo, rating } = props;
    return (
      <div className="res-card">
        <h3>{resname}</h3>
        <img className="res-logo" src={photo} alt={resname} />
        <h3 style={{ backgroundColor: "red" }}>{cuisine}</h3>
        <h4>{rating} ⭐</h4>
        <p>30 Minutes</p>
      </div>
    );
  };

  export default RestaurantCard;