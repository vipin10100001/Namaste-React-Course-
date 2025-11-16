const resObj = [
    {
      type: "restaurant",
      data: {
        resname: "Meghna Food",
        cuisine: "Biriyani, North Indian, Asian",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bangladeshi_Biryani.jpg/250px-Bangladeshi_Biryani.jpg",
        rating: "4.3",
        deliveryTime: "30 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Hotel Taj",
        cuisine: "Chicken Biriyani, North Indian, Asian",
        photo:
          "https://media.easemytrip.com/media/Blog/India/637006193676361092/637006193676361092aFt5NW.jpg",
        rating: "4.1",
        deliveryTime: "32 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Domino’s Pizza",
        cuisine: "Pizza, Italian, Fast Food",
        photo:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/14/43/muy-buena.jpg?w=900&h=500&s=1",
        rating: "4.5",
        deliveryTime: "28 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "KFC",
        cuisine: "Fried Chicken, Burgers, Fast Food",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/f01666ac73626461d7455d9c24005cd4",
        rating: "4.2",
        deliveryTime: "27 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "China Town",
        cuisine: "Chinese, Asian, Noodles, Dumplings",
        photo:
          "https://content.jdmagicbox.com/v2/comp/mumbai/c5/022p1228899921b1x5c5/catalogue/china-village-restaurant-goregaon-east-mumbai-thai-restaurants-0kmuxsqjlo.jpg",
        rating: "4.0",
        deliveryTime: "33 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Barbeque Nation",
        cuisine: "Grill, Buffet, North Indian",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VRd5W3bsjn4nnuVS8RIfucTjyvulxsBaTQ&s",
        rating: "4.4",
        deliveryTime: "36 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Subway",
        cuisine: "Healthy, Sandwich, Fast Food",
        photo:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
        rating: "4.1",
        deliveryTime: "25 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "The Pasta Bowl Company",
        cuisine: "Italian, Continental, Salads",
        photo:
          "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp",
        rating: "4.6",
        deliveryTime: "29 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Burger King",
        cuisine: "Burgers, Fries, Beverages",
        photo:
          "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg",
        rating: "4.3",
        deliveryTime: "31 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Sagar Ratna",
        cuisine: "South Indian, Vegetarian, Dosa",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P9-ECimzMDQMWGiu2XnSWErvEqRmz5rTaw&s",
        rating: "4.2",
        deliveryTime: "33 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Royal Bakers",
        cuisine: "Bakery, Snacks, Desserts",
        photo:
          "https://bizimages.withfloats.com/actual/8a9475a8d9aa4cb0ad217afe3ee38bee.jpg",
        rating: "4.5",
        deliveryTime: "26 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Café Coffee Day",
        cuisine: "Cafe, Beverages, Desserts",
        photo:
          "https://content.jdmagicbox.com/comp/def_content/coffee_shops/default-coffee-shops-7.jpg",
        rating: "4.1",
        deliveryTime: "34 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Thalassery Kitchen",
        cuisine: "Kerala, Malabar, Biriyani",
        photo:
          "https://farm5.staticflickr.com/4206/34630446624_ec6133ed16_o_d.jpg",
        rating: "4.4",
        deliveryTime: "35 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Punjabi Dhaba",
        cuisine: "North Indian, Tandoor, Roti",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkYFnrVYkLErtIaxF4-N0mDW-Ldguh5LlTg&s",
        rating: "4.3",
        deliveryTime: "30 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Pind Balluchi",
        cuisine: "Punjabi, Mughlai, Grill",
        photo:
          "https://static.toiimg.com/thumb/msid-61846577,width-1280,height-720,resizemode-4/61846577.jpg",
        rating: "4.5",
        deliveryTime: "28 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Little Italy",
        cuisine: "Italian, Pizza, Pasta",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/pqwupm5yug4p4zx1y1vl",
        rating: "4.6",
        deliveryTime: "29 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Arabian Dreams",
        cuisine: "Shawarma, Arabian, Grilled Meat",
        photo:
          "https://www.tasteofhome.com/wp-content/uploads/2024/05/Cacio-e-Pepe_EXPS_TOHcom23_273412_P2_MD_04_26_5b.jpg",
        rating: "4.2",
        deliveryTime: "27 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Veggie Delight",
        cuisine: "Vegan, Healthy, Salads",
        photo:
          "https://www.tasteofhome.com/wp-content/uploads/2025/02/Favorite-Mediterranean-Salad_EXPS_TOHcom25_41556_MD_P2_02_05_1b.jpg",
        rating: "4.3",
        deliveryTime: "30 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Ocean Pearl",
        cuisine: "Seafood, Kerala, Continental",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/py6hrnzbklzt5lwbucvs",
        rating: "4.5",
        deliveryTime: "33 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "The Chocolate Room",
        cuisine: "Desserts, Cafe, Waffles",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/fkjotbwe2t2rd3z3sd4m",
        rating: "4.4",
        deliveryTime: "32 Minutes",
      },
    },
    // ✅ New 20 additions below
    {
      type: "restaurant",
      data: {
        resname: "Paradise Biryani",
        cuisine: "Hyderabadi, North Indian, Kebab",
        photo:
          "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
        rating: "4.5",
        deliveryTime: "31 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Momo Magic Cafe",
        cuisine: "Chinese, Tibetan, Fast Food",
        photo:
          "https://images.deliveryhero.io/image/fd-pk/LH/m930-hero.jpg",
        rating: "4.2",
        deliveryTime: "25 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Pizza Hut",
        cuisine: "Pizza, Italian, Fast Food",
        photo:
          "https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg",
        rating: "4.3",
        deliveryTime: "29 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Chicking",
        cuisine: "Fried Chicken, Wraps, Beverages",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNY-42VcAOTJTWaem2rirev19rQXNwAb54A&s",
        rating: "4.1",
        deliveryTime: "26 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Aroma of South",
        cuisine: "Kerala, Dosa, Veg Meals",
        photo:
          "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg",
        rating: "4.4",
        deliveryTime: "35 Minutes",
      },
    },
    
   
   
  ];
  
  export default resObj;
  