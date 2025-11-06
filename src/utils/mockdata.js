const resObj = [
    {
      type: "restaurant",
      data: {
        resname: "Meghna Food",
        cuisine: "Biriyani, North Indian, Asian",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mbckv4x49jngl7czzxhl",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/ek2yapj6wkr3nbd9xyba",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/okgglzaixx8vkh1fxth3",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/wbqmu2r1dxdvxxsug8tq",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xvrrlqkooh3ds5awqh1p",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cfcyhxttgtrmyr7t6ubv",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/lsncoqhwrrf5wsn5t3tr",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/eqj7s8hxftfheqjztq9m",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/vxglhzvfnprsgf7ssbya",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/qldpfw5uhlhkb5sg2qgk",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/yvjqgbckd3iwhkg2nwyu",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/vibehy2a3ofjqgzvcmkr",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mwhlg9ex4qdbgsfjzy8g",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/tcfmvhq0mwrrn0rpq2l1",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/kcclu8bkm4aue3a6z4f4",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/vpqtqoybjyyts3jcb4tt",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/uxrxpgqulquklop3tpdl",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/bh7kw5yixrkvopxozmyx",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/qzq7fjl8yy5bhi8pnnkl",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/qc4luhjst1tm4gmgoy2m",
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
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/m6cbmwb7y7hy7c4nb3xa",
        rating: "4.4",
        deliveryTime: "35 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Mainland China",
        cuisine: "Chinese, Thai, Asian",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/x6mff0jlfirvdxlwbnxk",
        rating: "4.5",
        deliveryTime: "37 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Thomson Grill",
        cuisine: "Grill, Barbecue, Continental",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/izubjvbxgsefnfv7qymd",
        rating: "4.2",
        deliveryTime: "30 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Chai Point",
        cuisine: "Beverages, Snacks, Tea",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mczp7hnjgbbmvbw9oyxb",
        rating: "4.3",
        deliveryTime: "27 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "A2B Adyar Ananda Bhavan",
        cuisine: "South Indian, Pure Veg, Sweets",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/vxhyqvyq1v6dpwcmc5pv",
        rating: "4.5",
        deliveryTime: "28 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Frozen Treats",
        cuisine: "Ice Cream, Desserts",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/nmhm8w3dmnshdcin1zrl",
        rating: "4.4",
        deliveryTime: "25 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Gokul Oottupura",
        cuisine: "Kerala, Vegetarian Meals",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rgzk2csah7nrhvfltjyu",
        rating: "4.3",
        deliveryTime: "31 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Juice World",
        cuisine: "Juices, Shakes, Beverages",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/lrbq4tvpqbrscxk6bvcu",
        rating: "4.2",
        deliveryTime: "26 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Tandoor Flames",
        cuisine: "North Indian, Grill, Mughlai",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dyrfj2cjquzhxlnpceyy",
        rating: "4.4",
        deliveryTime: "33 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Bake My Day",
        cuisine: "Bakery, Pastry, Snacks",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/n2t1jvv8xlp1gve6dtbz",
        rating: "4.6",
        deliveryTime: "29 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Hakka House",
        cuisine: "Chinese, Stir Fry, Noodles",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/w6gxpxjqxmtm4kgk2e1y",
        rating: "4.3",
        deliveryTime: "32 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Spice Garden",
        cuisine: "Indian, Seafood, Curry",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/ftwzkrqyl4zvbxjpp3qi",
        rating: "4.2",
        deliveryTime: "34 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Green Leaf",
        cuisine: "Pure Veg, Thali, Gujarati",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dfll6fkkq1g5kmyb2bhk",
        rating: "4.5",
        deliveryTime: "35 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Juicy Burgers",
        cuisine: "Burgers, Wraps, Beverages",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/azt0vgubsh7ekywjwbmm",
        rating: "4.3",
        deliveryTime: "28 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Madras Mess",
        cuisine: "South Indian, Non-Veg, Curry",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/s3tz8ax8nhyqf3nkljmn",
        rating: "4.4",
        deliveryTime: "37 Minutes",
      },
    },
    {
      type: "restaurant",
      data: {
        resname: "Urban Cafe",
        cuisine: "Cafe, Continental, Breakfast",
        photo:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/tvnvkzzv8n0vxv7yzcjb",
        rating: "4.2",
        deliveryTime: "30 Minutes",
      },
    },
  ];
  
  export default resObj;
  