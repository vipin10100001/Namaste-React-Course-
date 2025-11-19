import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://namastedev.com/api/v1/listRestaurantMenu/${resid}`
        );
        const json = await response.json();

        const info =
          json?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card
            ?.info;

        setResInfo(info);

        const regularCards =
          json?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        let items = [];

        regularCards.forEach((cardObj) => {
          const card = cardObj.card?.card;
          if (card?.itemCards) {
            items.push(...card.itemCards.map((i) => i.card.info));
          }
          if (card?.categories) {
            card.categories.forEach((cat) => {
              if (cat.itemCards) {
                items.push(...cat.itemCards.map((i) => i.card.info));
              }
            });
          }
        });

        setMenuItems(items);
      } catch (error) {
        console.error("Menu fetch error:", error);
      }
    };

    fetchMenu();
  }, [resid]);

  if (!resInfo || menuItems.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.cuisines?.join(", ")}</h3>
      <h4>
        ⭐ {resInfo.avgRatingString} • {resInfo.costForTwoMessage}
      </h4>

      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> — ₹
            {(item.price || item.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
